import { PrismaClient } from "@/generated/user";

const globalForPrismaUser = globalThis as unknown as { prismaUser: PrismaClient };

export const prismaUser = globalForPrismaUser.prismaUser || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrismaUser.prismaUser = prismaUser;
}
