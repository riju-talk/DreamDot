import { Membership } from "../db/models/Membership";

export async function ensureMember(userId: string, conversationId: string) {
  const member = await Membership.findOne({ userId, conversationId });
  if (!member || member.role === "banned") throw new Error("Not authorized (not a member or banned)");
  return member;
}

export async function ensureRole(userId: string, conversationId: string, role: string) {
  const member = await Membership.findOne({ userId, conversationId });
  if (!member || member.role !== role) throw new Error("Insufficient role");
  return member;
}
