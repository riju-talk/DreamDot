import { PrismaClient as UserClient } from "@/generated/user";
import { PrismaClient as SocialClient } from "@/generated/social";
import { PrismaClient as ItemClient } from "@/generated/item";
import { PrismaClient as CommunityClient } from "@/generated/community";
import { PrismaClient as AuditClient } from "@/generated/audit";

export const prismaUser = new UserClient();
export const prismaSocial = new SocialClient();
export const prismaItem = new ItemClient();
export const prismaCommunity = new CommunityClient();
export const prismaAudit = new AuditClient();
