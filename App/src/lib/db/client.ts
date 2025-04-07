// src/lib/prismaClients.ts

import { PrismaClient as PrismaUser } from '../generated/client-users';
import { PrismaClient as PrismaSocial } from '../generated/client-social';
import { PrismaClient as PrismaItems } from '../generated/client-items';
import { PrismaClient as PrismaCommunity } from '../generated/client-community';
import { PrismaClient as PrismaAudit } from '../generated/client-audit';
import { PrismaClient as PrismaMessaging } from '../generated/client-messaging';
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
    var prismaMessaging: PrismaMessaging | undefined;
    var PrismaContent: PrismaContent | undefined;
}

// Instantiate each client if not already on the global object.
let prismaUser: PrismaUser;
let prismaSocial: PrismaSocial;
let prismaItems: PrismaItems;
let prismaCommunity: PrismaCommunity;
let prismaAudit: PrismaAudit;
let prismaMessaging: PrismaMessaging;
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
if (!global.prismaMessaging) {
    global.prismaMessaging = new PrismaMessaging();
}

// If PrismaContent is not already on the global object, instantiate it.
if (!global.PrismaContent) {
    global.PrismaContent = new PrismaContent();
}

// Now assign them to local variables.
prismaUser = global.prismaUser;
prismaSocial = global.prismaSocial;
prismaItems = global.prismaItems;
prismaCommunity = global.prismaCommunity;
prismaAudit = global.prismaAudit;
prismaMessaging = global.prismaMessaging;
prismaContent = global.PrismaContent;
// If running in production, create new instances of the clients


// Export them for use throughout your project
export {
    prismaUser,
    prismaSocial,
    prismaItems,
    prismaCommunity,
    prismaAudit,
    prismaMessaging,
    prismaContent,
};
