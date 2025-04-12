// src/lib/prismaClients.ts
import { PrismaClient as PrismaUser } from '../generated/client-users/index.js';
import { PrismaClient as PrismaSocial } from '../generated/client-social/index.js';
import { PrismaClient as PrismaItems } from '../generated/client-items/index.js';
import { PrismaClient as PrismaCommunity } from '../generated/client-community/index.js';
import { PrismaClient as PrismaAudit } from '../generated/client-audit/index.js';
import { PrismaClient as PrismaMessaging } from '../generated/client-messaging/index.js';
import { PrismaClient as PrismaContent } from '../generated/client-content/index.js';
// Instantiate each client if not already on the global object.
let prismaUser;
let prismaSocial;
let prismaItems;
let prismaCommunity;
let prismaAudit;
let prismaMessaging;
let prismaContent;
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
export { prismaUser, prismaSocial, prismaItems, prismaCommunity, prismaAudit, prismaMessaging, prismaContent, };
//# sourceMappingURL=client.js.map