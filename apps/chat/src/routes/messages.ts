import { Request, Response } from "express";
import { Conversation } from "../db/models/Conversation";
import { Message } from "../db/models/Message";
import { Membership } from "../db/models/Membership";

// POST /conversationsexport async function createConversation(req: Request, res: Response) {
  const { type, title, memberIds, adminIds, ownerId } = req.body;
  const convo = await Conversation.create({ type, title, members: memberIds, adminIds, ownerId });
  // create Membership docs
  await Promise.all(memberIds.map(userId => Membership.create({ conversationId: convo._id, userId, role: userId === ownerId ? 'owner' : 'member' })));
  res.status(201).json({ conversationId: convo._id });
}

// GET /messages?conversationId=xxx&cursor=&limit=
export async function getMessages(req: Request, res: Response) {
  const { conversationId, cursor, limit = 50 } = req.query;
  const query = { conversationId };
  if (cursor) query['createdAt'] = { $lt: new Date(cursor as string) };
  const items = await Message.find(query).sort({ createdAt: -1 }).limit(Number(limit));
  const nextCursor = items.length === Number(limit) ? items[items.length-1].createdAt : null;
  res.json({ items, nextCursor });
}

// POST /messages
export async function postMessage(req: Request, res: Response) {
  const { conversationId, senderId, ciphertext, nonce, keyId, attachments } = req.body;
  const msg = await Message.create({ conversationId, senderId, ciphertext, nonce, keyId, attachments });
  res.status(201).json({ messageId: msg._id });
}

