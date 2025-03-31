// src/lib/prismaClients.ts

import { PrismaClient as PrismaUser } from '../generated/client-users';
import { PrismaClient as PrismaSocial } from '../generated/client-social';
import { PrismaClient as PrismaItems } from '../generated/client-items';
import { PrismaClient as PrismaCommunity } from '../generated/client-community';
import { PrismaClient as PrismaAudit } from '../generated/client-audit';
import { PrismaClient as PrismaContent } from '../generated/client-content';


// In a serverless environment (like Next.js), re-initializing
// PrismaClient can create multiple connections. We avoid that
// by caching them on the global object.

declare global {
    var prismaUser: PrismaUser | undefined;
    // eslint-disable-next-line no-var
    var prismaSocial: PrismaSocial | undefined;
    // eslint-disable-next-line no-var
    var prismaItems: PrismaItems | undefined;
    // eslint-disable-next-line no-var
    var prismaCommunity: PrismaCommunity | undefined;
    // eslint-disable-next-line no-var
    var prismaAudit: PrismaAudit | undefined;
    // eslint-disable-next-line no-var
    var prismaContent: PrismaContent | undefined;
}

// Instantiate each client if not already on the global object.
let prismaUser: PrismaUser;
let prismaSocial: PrismaSocial;
let prismaItems: PrismaItems;
let prismaCommunity: PrismaCommunity;
let prismaAudit: PrismaAudit;
let prismaContent: PrismaContent;

if (!global.prismaUser) {
    global.prismaUser = new PrismaUser();
}
if (!global.prismaSocial) {
    global.prismaSocial = new PrismaSocial();
}
if (!global.prismaItems) {
    global.prismaItems = new PrismaItems();
}
if (!global.prismaCommunity) {
    global.prismaCommunity = new PrismaCommunity();
}
if (!global.prismaAudit) {
    global.prismaAudit = new PrismaAudit();
}
if (!global.prismaContent) {
    global.prismaContent = new PrismaContent();
}


// Now assign them to local variables.
prismaUser = global.prismaUser;
prismaSocial = global.prismaSocial;
prismaItems = global.prismaItems;
prismaCommunity = global.prismaCommunity;
prismaAudit = global.prismaAudit;
prismaContent = global.prismaContent;

// Export them for use throughout your project
export {
    prismaUser,
    prismaSocial,
    prismaItems,
    prismaCommunity,
    prismaAudit,
    prismaContent
};
