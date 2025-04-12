Object.defineProperty(exports, "__esModule", { value: true });
const { Decimal, objectEnumValues, makeStrictEnum, Public, getRuntime, skip } = require('./runtime/index-browser.js');
const Prisma = {};
exports.Prisma = Prisma;
exports.$Enums = {};
/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
    client: "6.5.0",
    engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
};
Prisma.PrismaClientKnownRequestError = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;
/**
* Extensions
*/
Prisma.getExtensionContext = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = () => {
    const runtimeName = getRuntime().prettyName;
    throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;
Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull
};
/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Prisma.CommunitiesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Prisma.Community_membersScalarFieldEnum = {
    community_id: 'community_id',
    user_id: 'user_id',
    role: 'role',
    joined_at: 'joined_at'
};
exports.Prisma.Community_posts_metadataScalarFieldEnum = {
    id: 'id',
    community_id: 'community_id',
    user_id: 'user_id',
    title: 'title',
    summary: 'summary',
    post_type: 'post_type',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Prisma.Password_reset_tokensScalarFieldEnum = {
    token: 'token',
    user_id: 'user_id',
    expires_at: 'expires_at',
    created_at: 'created_at',
    used: 'used'
};
exports.Prisma.User_analyticsScalarFieldEnum = {
    user_id: 'user_id',
    posts_count: 'posts_count',
    likes_received: 'likes_received',
    followers_count: 'followers_count',
    following_count: 'following_count',
    last_login: 'last_login',
    activity_score: 'activity_score'
};
exports.Prisma.User_audit_logsScalarFieldEnum = {
    audit_id: 'audit_id',
    user_id: 'user_id',
    action_type: 'action_type',
    details: 'details',
    performed_by: 'performed_by',
    event_time: 'event_time'
};
exports.Prisma.User_blocklistScalarFieldEnum = {
    block_id: 'block_id',
    user_id: 'user_id',
    reason: 'reason',
    blocked_by: 'blocked_by',
    blocked_at: 'blocked_at'
};
exports.Prisma.User_certificatesScalarFieldEnum = {
    user_id: 'user_id',
    public_key: 'public_key',
    certificate: 'certificate',
    created_at: 'created_at'
};
exports.Prisma.User_profileScalarFieldEnum = {
    user_id: 'user_id',
    username: 'username',
    display_name: 'display_name',
    bio: 'bio',
    avatar_url: 'avatar_url',
    website: 'website',
    social_links: 'social_links',
    updated_at: 'updated_at'
};
exports.Prisma.User_securityScalarFieldEnum = {
    user_id: 'user_id',
    failed_attempts: 'failed_attempts',
    last_failed_login: 'last_failed_login',
    two_factor_enabled: 'two_factor_enabled',
    otp_code: 'otp_code',
    otp_expires_at: 'otp_expires_at',
    recovery_codes: 'recovery_codes',
    updated_at: 'updated_at'
};
exports.Prisma.User_sessionsScalarFieldEnum = {
    session_id: 'session_id',
    user_id: 'user_id',
    token: 'token',
    created_at: 'created_at',
    expires_at: 'expires_at',
    is_revoked: 'is_revoked'
};
exports.Prisma.UsersScalarFieldEnum = {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_verified: 'is_verified',
    is_active: 'is_active'
};
exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.Prisma.NullableJsonNullValueInput = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull
};
exports.Prisma.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.Prisma.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.Prisma.JsonNullValueFilter = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull,
    AnyNull: Prisma.AnyNull
};
exports.Prisma.ModelName = {
    communities: 'communities',
    community_members: 'community_members',
    community_posts_metadata: 'community_posts_metadata',
    password_reset_tokens: 'password_reset_tokens',
    user_analytics: 'user_analytics',
    user_audit_logs: 'user_audit_logs',
    user_blocklist: 'user_blocklist',
    user_certificates: 'user_certificates',
    user_profile: 'user_profile',
    user_security: 'user_security',
    user_sessions: 'user_sessions',
    users: 'users'
};
/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
    constructor() {
        return new Proxy(this, {
            get(target, prop) {
                let message;
                const runtime = getRuntime();
                if (runtime.isEdge) {
                    message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
                }
                else {
                    message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).';
                }
                message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;
                throw new Error(message);
            }
        });
    }
}
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
//# sourceMappingURL=index-browser.js.map