
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/iiitd/Desktop/fcs02/DreamDot/App/src/lib/generated/client-community",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "windows"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [
      "multiSchema"
    ],
    "sourceFilePath": "/home/iiitd/Desktop/fcs02/DreamDot/App/src/lib/prisma/schema.community.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "postgresql://postgres:connectdbserver@localhost:5432/mydb?search_path=community"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/client-community\"\n  previewFeatures = [\"multiSchema\"]\n  binaryTargets   = [\"native\", \"windows\", \"debian-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://postgres:connectdbserver@localhost:5432/mydb?search_path=community\"\n  schemas  = [\"community\", \"user_d\"]\n}\n\nmodel communities {\n  id                       String                     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  name                     String                     @db.VarChar(100)\n  description              String?\n  created_at               DateTime                   @default(now()) @db.Timestamp(6)\n  updated_at               DateTime                   @default(now()) @db.Timestamp(6)\n  community_members        community_members[]\n  community_posts_metadata community_posts_metadata[]\n\n  @@schema(\"community\")\n}\n\nmodel community_members {\n  community_id String      @db.Uuid\n  user_id      String      @db.Uuid\n  role         String?     @default(\"member\") @db.VarChar(20)\n  joined_at    DateTime    @default(now()) @db.Timestamp(6)\n  communities  communities @relation(fields: [community_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@id([community_id, user_id])\n  @@schema(\"community\")\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel community_posts_metadata {\n  id           String      @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  community_id String      @db.Uuid\n  user_id      String      @db.Uuid\n  title        String?     @db.VarChar(255)\n  summary      String?\n  post_type    String?     @db.VarChar(20)\n  created_at   DateTime    @default(now()) @db.Timestamp(6)\n  updated_at   DateTime    @default(now()) @db.Timestamp(6)\n  communities  communities @relation(fields: [community_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"community\")\n}\n\nmodel password_reset_tokens {\n  token      String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  user_id    String   @db.Uuid\n  expires_at DateTime @db.Timestamp(6)\n  created_at DateTime @default(now()) @db.Timestamp(6)\n  used       Boolean? @default(false)\n  users      users    @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel user_analytics {\n  user_id         String    @id @db.Uuid\n  posts_count     Int?      @default(0)\n  likes_received  Int?      @default(0)\n  followers_count Int?      @default(0)\n  following_count Int?      @default(0)\n  last_login      DateTime? @db.Timestamp(6)\n  activity_score  Decimal?  @default(0.00) @db.Decimal(5, 2)\n  users           users     @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel user_audit_logs {\n  audit_id     String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  user_id      String?  @db.Uuid\n  action_type  String\n  details      Json?    @default(\"{}\")\n  performed_by String?  @db.Uuid\n  event_time   DateTime @default(now()) @db.Timestamp(6)\n  users        users?   @relation(fields: [user_id], references: [id], onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel user_blocklist {\n  block_id                               String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  user_id                                String?  @unique @db.Uuid\n  reason                                 String\n  blocked_by                             String?  @db.Uuid\n  blocked_at                             DateTime @default(now()) @db.Timestamp(6)\n  users_user_blocklist_blocked_byTousers users?   @relation(\"user_blocklist_blocked_byTousers\", fields: [blocked_by], references: [id], onUpdate: NoAction)\n  users_user_blocklist_user_idTousers    users?   @relation(\"user_blocklist_user_idTousers\", fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel user_certificates {\n  user_id     String   @id @db.Uuid\n  public_key  String\n  certificate String?\n  created_at  DateTime @default(now()) @db.Timestamp(6)\n  users       users    @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel user_profile {\n  user_id      String   @id @db.Uuid\n  username     String   @unique @db.VarChar(50)\n  display_name String?  @db.VarChar(100)\n  bio          String?\n  avatar_url   String?\n  website      String?\n  social_links Json?    @default(\"{}\")\n  updated_at   DateTime @default(now()) @db.Timestamp(6)\n  users        users    @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel user_security {\n  user_id            String    @id @db.Uuid\n  failed_attempts    Int?      @default(0)\n  last_failed_login  DateTime? @db.Timestamp(6)\n  two_factor_enabled Boolean?  @default(false)\n  otp_code           String?\n  otp_expires_at     DateTime? @db.Timestamp(6)\n  recovery_codes     String[]\n  updated_at         DateTime  @default(now()) @db.Timestamp(6)\n  users              users     @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel user_sessions {\n  session_id String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  user_id    String   @db.Uuid\n  token      String\n  created_at DateTime @default(now()) @db.Timestamp(6)\n  expires_at DateTime @db.Timestamp(6)\n  is_revoked Boolean? @default(false)\n  users      users    @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@schema(\"user_d\")\n}\n\nmodel users {\n  id                                              String                  @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  email                                           String                  @unique\n  phone                                           String?                 @unique\n  password_hash                                   String\n  role                                            String?                 @default(\"user\") @db.VarChar(20)\n  created_at                                      DateTime                @default(now()) @db.Timestamp(6)\n  updated_at                                      DateTime                @default(now()) @db.Timestamp(6)\n  is_verified                                     Boolean?                @default(false)\n  is_active                                       Boolean?                @default(true)\n  password_reset_tokens                           password_reset_tokens[]\n  user_analytics                                  user_analytics?\n  user_audit_logs                                 user_audit_logs[]\n  user_blocklist_user_blocklist_blocked_byTousers user_blocklist[]        @relation(\"user_blocklist_blocked_byTousers\")\n  user_blocklist_user_blocklist_user_idTousers    user_blocklist?         @relation(\"user_blocklist_user_idTousers\")\n  user_certificates                               user_certificates?\n  user_profile                                    user_profile?\n  user_security                                   user_security?\n  user_sessions                                   user_sessions[]\n\n  @@schema(\"user_d\")\n}\n",
  "inlineSchemaHash": "aaea82cc8c57de7d45d8023882a8cf49c01b58dfc043f35a97dc05cdc807c8ec",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"communities\":{\"dbName\":null,\"schema\":\"community\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"community_members\",\"nativeType\":null,\"relationName\":\"communitiesTocommunity_members\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_posts_metadata\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"community_posts_metadata\",\"nativeType\":null,\"relationName\":\"communitiesTocommunity_posts_metadata\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"community_members\":{\"dbName\":null,\"schema\":\"community\",\"fields\":[{\"name\":\"community_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"member\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joined_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"communities\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"communities\",\"nativeType\":null,\"relationName\":\"communitiesTocommunity_members\",\"relationFromFields\":[\"community_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"community_id\",\"user_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"community_posts_metadata\":{\"dbName\":null,\"schema\":\"community\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"communities\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"communities\",\"nativeType\":null,\"relationName\":\"communitiesTocommunity_posts_metadata\",\"relationFromFields\":[\"community_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"password_reset_tokens\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"used\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"password_reset_tokensTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_analytics\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes_received\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followers_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activity_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_analyticsTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_audit_logs\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"audit_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"nativeType\":null,\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"performed_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_audit_logsTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_blocklist\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"block_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blocked_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blocked_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users_user_blocklist_blocked_byTousers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_blocklist_blocked_byTousers\",\"relationFromFields\":[\"blocked_by\"],\"relationToFields\":[\"id\"],\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users_user_blocklist_user_idTousers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_blocklist_user_idTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_certificates\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"public_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"certificate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_certificatesTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_profile\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"social_links\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"nativeType\":null,\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_profileTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_security\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failed_attempts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_failed_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"two_factor_enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otp_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otp_expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recovery_codes\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_securityTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_sessions\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"session_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_revoked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_sessionsTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"schema\":\"user_d\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_reset_tokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"password_reset_tokens\",\"nativeType\":null,\"relationName\":\"password_reset_tokensTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_analytics\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_analytics\",\"nativeType\":null,\"relationName\":\"user_analyticsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_audit_logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_audit_logs\",\"nativeType\":null,\"relationName\":\"user_audit_logsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_blocklist_user_blocklist_blocked_byTousers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_blocklist\",\"nativeType\":null,\"relationName\":\"user_blocklist_blocked_byTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_blocklist_user_blocklist_user_idTousers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_blocklist\",\"nativeType\":null,\"relationName\":\"user_blocklist_user_idTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_certificates\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_certificates\",\"nativeType\":null,\"relationName\":\"user_certificatesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_profile\",\"nativeType\":null,\"relationName\":\"user_profileTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_security\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_security\",\"nativeType\":null,\"relationName\":\"user_securityTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_sessions\",\"nativeType\":null,\"relationName\":\"user_sessionsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

