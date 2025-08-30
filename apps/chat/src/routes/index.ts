import { Router, type Express } from "express";
import { createConversation, getMessages, postMessage } from "./messages";
import { uploadAttachment, streamAttachment } from "./attachments";
import { authJwt } from "../utils/authz";

export function registerApi(app: Express) {
  const r = Router();
  app.use('/api/chat', r);
  r.post('/conversations', authJwt, createConversation);
  r.get('/messages', authJwt, getMessages);
  r.post('/messages', authJwt, postMessage);
  r.post('/attachments', authJwt, uploadAttachment);
  r.get('/attachments/:id', authJwt, streamAttachment);
}

