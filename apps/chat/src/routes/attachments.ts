import { Request, Response } from "express";
import mongoose from "mongoose";
import { Attachment } from "../db/models/Attachment";
import busboy from "busboy";
import { ensureMember } from "../utils/authz";

// POST /attachments : file upload with cipher metaexport async function uploadAttachment(req: Request, res: Response) {
  const bb = busboy({ headers: req.headers, limits: { fileSize: 25 * 1024 * 1024 } });
  let fileId: mongoose.Types.ObjectId | null = null;
  let meta: any = {};
  let fileReceived = false;

  bb.on('file', (fieldname, file, info) => {
    const { filename, mimeType } = info;
    if (!/^image\//.test(mimeType) && !/^audio\//.test(mimeType) && !/^video\//.test(mimeType)) return res.status(400).end();
    const attachment = new Attachment({
      uploaderId: req.user.sub,
      conversationId: req.body.conversationId,
      filename,
      size: 0, // update later
      mimeType,
      cipherMeta: JSON.parse(req.body.cipherMeta),
    });
    fileId = attachment._id;
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'attachments' });
    const uploadStream = bucket.openUploadStreamWithId(fileId, filename, { contentType: mimeType });
    file.on('data', (chunk) => { attachment.size += chunk.length; });
    file.pipe(uploadStream);
    fileReceived = true;
    uploadStream.on('finish', async () => {
      await attachment.save();
      res.status(201).json({ attachmentId: fileId });
    });
  });
  req.pipe(bb);
}

// GET /attachments/:id : stream ciphertextexport async function streamAttachment(req: Request, res: Response) {
  await ensureMember(req.user.sub, req.query.conversationId || '');
  const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'attachments' });
  const id = new mongoose.Types.ObjectId(req.params.id);
  bucket.openDownloadStream(id).pipe(res);
}

