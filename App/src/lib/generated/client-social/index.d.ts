
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model blocking
 * 
 */
export type blocking = $Result.DefaultSelection<Prisma.$blockingPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model following
 * 
 */
export type following = $Result.DefaultSelection<Prisma.$followingPayload>
/**
 * Model likes
 * 
 */
export type likes = $Result.DefaultSelection<Prisma.$likesPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model posts_analytics
 * 
 */
export type posts_analytics = $Result.DefaultSelection<Prisma.$posts_analyticsPayload>
/**
 * Model posts_metadata
 * 
 */
export type posts_metadata = $Result.DefaultSelection<Prisma.$posts_metadataPayload>
/**
 * Model reported_content
 * 
 */
export type reported_content = $Result.DefaultSelection<Prisma.$reported_contentPayload>
/**
 * Model social_users
 * 
 */
export type social_users = $Result.DefaultSelection<Prisma.$social_usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blockings
 * const blockings = await prisma.blocking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Blockings
   * const blockings = await prisma.blocking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.blocking`: Exposes CRUD operations for the **blocking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blockings
    * const blockings = await prisma.blocking.findMany()
    * ```
    */
  get blocking(): Prisma.blockingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.following`: Exposes CRUD operations for the **following** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followings
    * const followings = await prisma.following.findMany()
    * ```
    */
  get following(): Prisma.followingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts_analytics`: Exposes CRUD operations for the **posts_analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts_analytics
    * const posts_analytics = await prisma.posts_analytics.findMany()
    * ```
    */
  get posts_analytics(): Prisma.posts_analyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts_metadata`: Exposes CRUD operations for the **posts_metadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts_metadata
    * const posts_metadata = await prisma.posts_metadata.findMany()
    * ```
    */
  get posts_metadata(): Prisma.posts_metadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reported_content`: Exposes CRUD operations for the **reported_content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reported_contents
    * const reported_contents = await prisma.reported_content.findMany()
    * ```
    */
  get reported_content(): Prisma.reported_contentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.social_users`: Exposes CRUD operations for the **social_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Social_users
    * const social_users = await prisma.social_users.findMany()
    * ```
    */
  get social_users(): Prisma.social_usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    blocking: 'blocking',
    comments: 'comments',
    following: 'following',
    likes: 'likes',
    notifications: 'notifications',
    posts_analytics: 'posts_analytics',
    posts_metadata: 'posts_metadata',
    reported_content: 'reported_content',
    social_users: 'social_users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "blocking" | "comments" | "following" | "likes" | "notifications" | "posts_analytics" | "posts_metadata" | "reported_content" | "social_users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      blocking: {
        payload: Prisma.$blockingPayload<ExtArgs>
        fields: Prisma.blockingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blockingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blockingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>
          }
          findFirst: {
            args: Prisma.blockingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blockingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>
          }
          findMany: {
            args: Prisma.blockingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>[]
          }
          create: {
            args: Prisma.blockingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>
          }
          createMany: {
            args: Prisma.blockingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blockingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>[]
          }
          delete: {
            args: Prisma.blockingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>
          }
          update: {
            args: Prisma.blockingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>
          }
          deleteMany: {
            args: Prisma.blockingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blockingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blockingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>[]
          }
          upsert: {
            args: Prisma.blockingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockingPayload>
          }
          aggregate: {
            args: Prisma.BlockingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlocking>
          }
          groupBy: {
            args: Prisma.blockingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockingGroupByOutputType>[]
          }
          count: {
            args: Prisma.blockingCountArgs<ExtArgs>
            result: $Utils.Optional<BlockingCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      following: {
        payload: Prisma.$followingPayload<ExtArgs>
        fields: Prisma.followingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>
          }
          findFirst: {
            args: Prisma.followingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>
          }
          findMany: {
            args: Prisma.followingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>[]
          }
          create: {
            args: Prisma.followingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>
          }
          createMany: {
            args: Prisma.followingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.followingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>[]
          }
          delete: {
            args: Prisma.followingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>
          }
          update: {
            args: Prisma.followingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>
          }
          deleteMany: {
            args: Prisma.followingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.followingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.followingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>[]
          }
          upsert: {
            args: Prisma.followingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followingPayload>
          }
          aggregate: {
            args: Prisma.FollowingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowing>
          }
          groupBy: {
            args: Prisma.followingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowingGroupByOutputType>[]
          }
          count: {
            args: Prisma.followingCountArgs<ExtArgs>
            result: $Utils.Optional<FollowingCountAggregateOutputType> | number
          }
        }
      }
      likes: {
        payload: Prisma.$likesPayload<ExtArgs>
        fields: Prisma.likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findFirst: {
            args: Prisma.likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findMany: {
            args: Prisma.likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          create: {
            args: Prisma.likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          createMany: {
            args: Prisma.likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          delete: {
            args: Prisma.likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          update: {
            args: Prisma.likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          deleteMany: {
            args: Prisma.likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          upsert: {
            args: Prisma.likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.likesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      posts_analytics: {
        payload: Prisma.$posts_analyticsPayload<ExtArgs>
        fields: Prisma.posts_analyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posts_analyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posts_analyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>
          }
          findFirst: {
            args: Prisma.posts_analyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posts_analyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>
          }
          findMany: {
            args: Prisma.posts_analyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>[]
          }
          create: {
            args: Prisma.posts_analyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>
          }
          createMany: {
            args: Prisma.posts_analyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.posts_analyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>[]
          }
          delete: {
            args: Prisma.posts_analyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>
          }
          update: {
            args: Prisma.posts_analyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>
          }
          deleteMany: {
            args: Prisma.posts_analyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.posts_analyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.posts_analyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>[]
          }
          upsert: {
            args: Prisma.posts_analyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_analyticsPayload>
          }
          aggregate: {
            args: Prisma.Posts_analyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts_analytics>
          }
          groupBy: {
            args: Prisma.posts_analyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Posts_analyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.posts_analyticsCountArgs<ExtArgs>
            result: $Utils.Optional<Posts_analyticsCountAggregateOutputType> | number
          }
        }
      }
      posts_metadata: {
        payload: Prisma.$posts_metadataPayload<ExtArgs>
        fields: Prisma.posts_metadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posts_metadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posts_metadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>
          }
          findFirst: {
            args: Prisma.posts_metadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posts_metadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>
          }
          findMany: {
            args: Prisma.posts_metadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>[]
          }
          create: {
            args: Prisma.posts_metadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>
          }
          createMany: {
            args: Prisma.posts_metadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.posts_metadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>[]
          }
          delete: {
            args: Prisma.posts_metadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>
          }
          update: {
            args: Prisma.posts_metadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>
          }
          deleteMany: {
            args: Prisma.posts_metadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.posts_metadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.posts_metadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>[]
          }
          upsert: {
            args: Prisma.posts_metadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_metadataPayload>
          }
          aggregate: {
            args: Prisma.Posts_metadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts_metadata>
          }
          groupBy: {
            args: Prisma.posts_metadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Posts_metadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.posts_metadataCountArgs<ExtArgs>
            result: $Utils.Optional<Posts_metadataCountAggregateOutputType> | number
          }
        }
      }
      reported_content: {
        payload: Prisma.$reported_contentPayload<ExtArgs>
        fields: Prisma.reported_contentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reported_contentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reported_contentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>
          }
          findFirst: {
            args: Prisma.reported_contentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reported_contentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>
          }
          findMany: {
            args: Prisma.reported_contentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>[]
          }
          create: {
            args: Prisma.reported_contentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>
          }
          createMany: {
            args: Prisma.reported_contentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reported_contentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>[]
          }
          delete: {
            args: Prisma.reported_contentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>
          }
          update: {
            args: Prisma.reported_contentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>
          }
          deleteMany: {
            args: Prisma.reported_contentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reported_contentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reported_contentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>[]
          }
          upsert: {
            args: Prisma.reported_contentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reported_contentPayload>
          }
          aggregate: {
            args: Prisma.Reported_contentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReported_content>
          }
          groupBy: {
            args: Prisma.reported_contentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reported_contentGroupByOutputType>[]
          }
          count: {
            args: Prisma.reported_contentCountArgs<ExtArgs>
            result: $Utils.Optional<Reported_contentCountAggregateOutputType> | number
          }
        }
      }
      social_users: {
        payload: Prisma.$social_usersPayload<ExtArgs>
        fields: Prisma.social_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.social_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.social_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>
          }
          findFirst: {
            args: Prisma.social_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.social_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>
          }
          findMany: {
            args: Prisma.social_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>[]
          }
          create: {
            args: Prisma.social_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>
          }
          createMany: {
            args: Prisma.social_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.social_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>[]
          }
          delete: {
            args: Prisma.social_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>
          }
          update: {
            args: Prisma.social_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>
          }
          deleteMany: {
            args: Prisma.social_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.social_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.social_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>[]
          }
          upsert: {
            args: Prisma.social_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_usersPayload>
          }
          aggregate: {
            args: Prisma.Social_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial_users>
          }
          groupBy: {
            args: Prisma.social_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Social_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.social_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Social_usersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    blocking?: blockingOmit
    comments?: commentsOmit
    following?: followingOmit
    likes?: likesOmit
    notifications?: notificationsOmit
    posts_analytics?: posts_analyticsOmit
    posts_metadata?: posts_metadataOmit
    reported_content?: reported_contentOmit
    social_users?: social_usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    other_comments: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_comments?: boolean | CommentsCountOutputTypeCountOther_commentsArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountOther_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type Posts_metadataCountOutputType
   */

  export type Posts_metadataCountOutputType = {
    comments: number
    likes: number
    reported_content: number
  }

  export type Posts_metadataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Posts_metadataCountOutputTypeCountCommentsArgs
    likes?: boolean | Posts_metadataCountOutputTypeCountLikesArgs
    reported_content?: boolean | Posts_metadataCountOutputTypeCountReported_contentArgs
  }

  // Custom InputTypes
  /**
   * Posts_metadataCountOutputType without action
   */
  export type Posts_metadataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts_metadataCountOutputType
     */
    select?: Posts_metadataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Posts_metadataCountOutputType without action
   */
  export type Posts_metadataCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * Posts_metadataCountOutputType without action
   */
  export type Posts_metadataCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * Posts_metadataCountOutputType without action
   */
  export type Posts_metadataCountOutputTypeCountReported_contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_contentWhereInput
  }


  /**
   * Count Type Social_usersCountOutputType
   */

  export type Social_usersCountOutputType = {
    blocking_blocking_blocked_idTosocial_users: number
    blocking_blocking_blocker_idTosocial_users: number
    comments: number
    following_following_followee_idTosocial_users: number
    following_following_follower_idTosocial_users: number
    likes: number
    notifications: number
    posts_metadata: number
    reported_content_reported_content_reported_user_idTosocial_users: number
    reported_content_reported_content_reporter_idTosocial_users: number
  }

  export type Social_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocking_blocking_blocked_idTosocial_users?: boolean | Social_usersCountOutputTypeCountBlocking_blocking_blocked_idTosocial_usersArgs
    blocking_blocking_blocker_idTosocial_users?: boolean | Social_usersCountOutputTypeCountBlocking_blocking_blocker_idTosocial_usersArgs
    comments?: boolean | Social_usersCountOutputTypeCountCommentsArgs
    following_following_followee_idTosocial_users?: boolean | Social_usersCountOutputTypeCountFollowing_following_followee_idTosocial_usersArgs
    following_following_follower_idTosocial_users?: boolean | Social_usersCountOutputTypeCountFollowing_following_follower_idTosocial_usersArgs
    likes?: boolean | Social_usersCountOutputTypeCountLikesArgs
    notifications?: boolean | Social_usersCountOutputTypeCountNotificationsArgs
    posts_metadata?: boolean | Social_usersCountOutputTypeCountPosts_metadataArgs
    reported_content_reported_content_reported_user_idTosocial_users?: boolean | Social_usersCountOutputTypeCountReported_content_reported_content_reported_user_idTosocial_usersArgs
    reported_content_reported_content_reporter_idTosocial_users?: boolean | Social_usersCountOutputTypeCountReported_content_reported_content_reporter_idTosocial_usersArgs
  }

  // Custom InputTypes
  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social_usersCountOutputType
     */
    select?: Social_usersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountBlocking_blocking_blocked_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockingWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountBlocking_blocking_blocker_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockingWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountFollowing_following_followee_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followingWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountFollowing_following_follower_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followingWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountPosts_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posts_metadataWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountReported_content_reported_content_reported_user_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_contentWhereInput
  }

  /**
   * Social_usersCountOutputType without action
   */
  export type Social_usersCountOutputTypeCountReported_content_reported_content_reporter_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_contentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model blocking
   */

  export type AggregateBlocking = {
    _count: BlockingCountAggregateOutputType | null
    _min: BlockingMinAggregateOutputType | null
    _max: BlockingMaxAggregateOutputType | null
  }

  export type BlockingMinAggregateOutputType = {
    id: string | null
    blocker_id: string | null
    blocked_id: string | null
    created_at: Date | null
  }

  export type BlockingMaxAggregateOutputType = {
    id: string | null
    blocker_id: string | null
    blocked_id: string | null
    created_at: Date | null
  }

  export type BlockingCountAggregateOutputType = {
    id: number
    blocker_id: number
    blocked_id: number
    created_at: number
    _all: number
  }


  export type BlockingMinAggregateInputType = {
    id?: true
    blocker_id?: true
    blocked_id?: true
    created_at?: true
  }

  export type BlockingMaxAggregateInputType = {
    id?: true
    blocker_id?: true
    blocked_id?: true
    created_at?: true
  }

  export type BlockingCountAggregateInputType = {
    id?: true
    blocker_id?: true
    blocked_id?: true
    created_at?: true
    _all?: true
  }

  export type BlockingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blocking to aggregate.
     */
    where?: blockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockings to fetch.
     */
    orderBy?: blockingOrderByWithRelationInput | blockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blockings
    **/
    _count?: true | BlockingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockingMaxAggregateInputType
  }

  export type GetBlockingAggregateType<T extends BlockingAggregateArgs> = {
        [P in keyof T & keyof AggregateBlocking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlocking[P]>
      : GetScalarType<T[P], AggregateBlocking[P]>
  }




  export type blockingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockingWhereInput
    orderBy?: blockingOrderByWithAggregationInput | blockingOrderByWithAggregationInput[]
    by: BlockingScalarFieldEnum[] | BlockingScalarFieldEnum
    having?: blockingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockingCountAggregateInputType | true
    _min?: BlockingMinAggregateInputType
    _max?: BlockingMaxAggregateInputType
  }

  export type BlockingGroupByOutputType = {
    id: string
    blocker_id: string
    blocked_id: string
    created_at: Date
    _count: BlockingCountAggregateOutputType | null
    _min: BlockingMinAggregateOutputType | null
    _max: BlockingMaxAggregateOutputType | null
  }

  type GetBlockingGroupByPayload<T extends blockingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockingGroupByOutputType[P]>
            : GetScalarType<T[P], BlockingGroupByOutputType[P]>
        }
      >
    >


  export type blockingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blocker_id?: boolean
    blocked_id?: boolean
    created_at?: boolean
    social_users_blocking_blocked_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_blocking_blocker_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocking"]>

  export type blockingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blocker_id?: boolean
    blocked_id?: boolean
    created_at?: boolean
    social_users_blocking_blocked_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_blocking_blocker_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocking"]>

  export type blockingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blocker_id?: boolean
    blocked_id?: boolean
    created_at?: boolean
    social_users_blocking_blocked_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_blocking_blocker_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocking"]>

  export type blockingSelectScalar = {
    id?: boolean
    blocker_id?: boolean
    blocked_id?: boolean
    created_at?: boolean
  }

  export type blockingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blocker_id" | "blocked_id" | "created_at", ExtArgs["result"]["blocking"]>
  export type blockingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users_blocking_blocked_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_blocking_blocker_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type blockingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users_blocking_blocked_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_blocking_blocker_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type blockingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users_blocking_blocked_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_blocking_blocker_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }

  export type $blockingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blocking"
    objects: {
      social_users_blocking_blocked_idTosocial_users: Prisma.$social_usersPayload<ExtArgs>
      social_users_blocking_blocker_idTosocial_users: Prisma.$social_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blocker_id: string
      blocked_id: string
      created_at: Date
    }, ExtArgs["result"]["blocking"]>
    composites: {}
  }

  type blockingGetPayload<S extends boolean | null | undefined | blockingDefaultArgs> = $Result.GetResult<Prisma.$blockingPayload, S>

  type blockingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blockingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockingCountAggregateInputType | true
    }

  export interface blockingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blocking'], meta: { name: 'blocking' } }
    /**
     * Find zero or one Blocking that matches the filter.
     * @param {blockingFindUniqueArgs} args - Arguments to find a Blocking
     * @example
     * // Get one Blocking
     * const blocking = await prisma.blocking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blockingFindUniqueArgs>(args: SelectSubset<T, blockingFindUniqueArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blocking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blockingFindUniqueOrThrowArgs} args - Arguments to find a Blocking
     * @example
     * // Get one Blocking
     * const blocking = await prisma.blocking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blockingFindUniqueOrThrowArgs>(args: SelectSubset<T, blockingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockingFindFirstArgs} args - Arguments to find a Blocking
     * @example
     * // Get one Blocking
     * const blocking = await prisma.blocking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blockingFindFirstArgs>(args?: SelectSubset<T, blockingFindFirstArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockingFindFirstOrThrowArgs} args - Arguments to find a Blocking
     * @example
     * // Get one Blocking
     * const blocking = await prisma.blocking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blockingFindFirstOrThrowArgs>(args?: SelectSubset<T, blockingFindFirstOrThrowArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blockings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blockings
     * const blockings = await prisma.blocking.findMany()
     * 
     * // Get first 10 Blockings
     * const blockings = await prisma.blocking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockingWithIdOnly = await prisma.blocking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blockingFindManyArgs>(args?: SelectSubset<T, blockingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blocking.
     * @param {blockingCreateArgs} args - Arguments to create a Blocking.
     * @example
     * // Create one Blocking
     * const Blocking = await prisma.blocking.create({
     *   data: {
     *     // ... data to create a Blocking
     *   }
     * })
     * 
     */
    create<T extends blockingCreateArgs>(args: SelectSubset<T, blockingCreateArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blockings.
     * @param {blockingCreateManyArgs} args - Arguments to create many Blockings.
     * @example
     * // Create many Blockings
     * const blocking = await prisma.blocking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blockingCreateManyArgs>(args?: SelectSubset<T, blockingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blockings and returns the data saved in the database.
     * @param {blockingCreateManyAndReturnArgs} args - Arguments to create many Blockings.
     * @example
     * // Create many Blockings
     * const blocking = await prisma.blocking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blockings and only return the `id`
     * const blockingWithIdOnly = await prisma.blocking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blockingCreateManyAndReturnArgs>(args?: SelectSubset<T, blockingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blocking.
     * @param {blockingDeleteArgs} args - Arguments to delete one Blocking.
     * @example
     * // Delete one Blocking
     * const Blocking = await prisma.blocking.delete({
     *   where: {
     *     // ... filter to delete one Blocking
     *   }
     * })
     * 
     */
    delete<T extends blockingDeleteArgs>(args: SelectSubset<T, blockingDeleteArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blocking.
     * @param {blockingUpdateArgs} args - Arguments to update one Blocking.
     * @example
     * // Update one Blocking
     * const blocking = await prisma.blocking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blockingUpdateArgs>(args: SelectSubset<T, blockingUpdateArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blockings.
     * @param {blockingDeleteManyArgs} args - Arguments to filter Blockings to delete.
     * @example
     * // Delete a few Blockings
     * const { count } = await prisma.blocking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blockingDeleteManyArgs>(args?: SelectSubset<T, blockingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blockings
     * const blocking = await prisma.blocking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blockingUpdateManyArgs>(args: SelectSubset<T, blockingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blockings and returns the data updated in the database.
     * @param {blockingUpdateManyAndReturnArgs} args - Arguments to update many Blockings.
     * @example
     * // Update many Blockings
     * const blocking = await prisma.blocking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blockings and only return the `id`
     * const blockingWithIdOnly = await prisma.blocking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends blockingUpdateManyAndReturnArgs>(args: SelectSubset<T, blockingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blocking.
     * @param {blockingUpsertArgs} args - Arguments to update or create a Blocking.
     * @example
     * // Update or create a Blocking
     * const blocking = await prisma.blocking.upsert({
     *   create: {
     *     // ... data to create a Blocking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blocking we want to update
     *   }
     * })
     */
    upsert<T extends blockingUpsertArgs>(args: SelectSubset<T, blockingUpsertArgs<ExtArgs>>): Prisma__blockingClient<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockingCountArgs} args - Arguments to filter Blockings to count.
     * @example
     * // Count the number of Blockings
     * const count = await prisma.blocking.count({
     *   where: {
     *     // ... the filter for the Blockings we want to count
     *   }
     * })
    **/
    count<T extends blockingCountArgs>(
      args?: Subset<T, blockingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blocking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockingAggregateArgs>(args: Subset<T, BlockingAggregateArgs>): Prisma.PrismaPromise<GetBlockingAggregateType<T>>

    /**
     * Group by Blocking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blockingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blockingGroupByArgs['orderBy'] }
        : { orderBy?: blockingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blockingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blocking model
   */
  readonly fields: blockingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blocking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blockingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    social_users_blocking_blocked_idTosocial_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    social_users_blocking_blocker_idTosocial_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blocking model
   */ 
  interface blockingFieldRefs {
    readonly id: FieldRef<"blocking", 'String'>
    readonly blocker_id: FieldRef<"blocking", 'String'>
    readonly blocked_id: FieldRef<"blocking", 'String'>
    readonly created_at: FieldRef<"blocking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * blocking findUnique
   */
  export type blockingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * Filter, which blocking to fetch.
     */
    where: blockingWhereUniqueInput
  }

  /**
   * blocking findUniqueOrThrow
   */
  export type blockingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * Filter, which blocking to fetch.
     */
    where: blockingWhereUniqueInput
  }

  /**
   * blocking findFirst
   */
  export type blockingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * Filter, which blocking to fetch.
     */
    where?: blockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockings to fetch.
     */
    orderBy?: blockingOrderByWithRelationInput | blockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blockings.
     */
    cursor?: blockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blockings.
     */
    distinct?: BlockingScalarFieldEnum | BlockingScalarFieldEnum[]
  }

  /**
   * blocking findFirstOrThrow
   */
  export type blockingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * Filter, which blocking to fetch.
     */
    where?: blockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockings to fetch.
     */
    orderBy?: blockingOrderByWithRelationInput | blockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blockings.
     */
    cursor?: blockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blockings.
     */
    distinct?: BlockingScalarFieldEnum | BlockingScalarFieldEnum[]
  }

  /**
   * blocking findMany
   */
  export type blockingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * Filter, which blockings to fetch.
     */
    where?: blockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockings to fetch.
     */
    orderBy?: blockingOrderByWithRelationInput | blockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blockings.
     */
    cursor?: blockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockings.
     */
    skip?: number
    distinct?: BlockingScalarFieldEnum | BlockingScalarFieldEnum[]
  }

  /**
   * blocking create
   */
  export type blockingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * The data needed to create a blocking.
     */
    data: XOR<blockingCreateInput, blockingUncheckedCreateInput>
  }

  /**
   * blocking createMany
   */
  export type blockingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blockings.
     */
    data: blockingCreateManyInput | blockingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blocking createManyAndReturn
   */
  export type blockingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * The data used to create many blockings.
     */
    data: blockingCreateManyInput | blockingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * blocking update
   */
  export type blockingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * The data needed to update a blocking.
     */
    data: XOR<blockingUpdateInput, blockingUncheckedUpdateInput>
    /**
     * Choose, which blocking to update.
     */
    where: blockingWhereUniqueInput
  }

  /**
   * blocking updateMany
   */
  export type blockingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blockings.
     */
    data: XOR<blockingUpdateManyMutationInput, blockingUncheckedUpdateManyInput>
    /**
     * Filter which blockings to update
     */
    where?: blockingWhereInput
    /**
     * Limit how many blockings to update.
     */
    limit?: number
  }

  /**
   * blocking updateManyAndReturn
   */
  export type blockingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * The data used to update blockings.
     */
    data: XOR<blockingUpdateManyMutationInput, blockingUncheckedUpdateManyInput>
    /**
     * Filter which blockings to update
     */
    where?: blockingWhereInput
    /**
     * Limit how many blockings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * blocking upsert
   */
  export type blockingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * The filter to search for the blocking to update in case it exists.
     */
    where: blockingWhereUniqueInput
    /**
     * In case the blocking found by the `where` argument doesn't exist, create a new blocking with this data.
     */
    create: XOR<blockingCreateInput, blockingUncheckedCreateInput>
    /**
     * In case the blocking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blockingUpdateInput, blockingUncheckedUpdateInput>
  }

  /**
   * blocking delete
   */
  export type blockingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    /**
     * Filter which blocking to delete.
     */
    where: blockingWhereUniqueInput
  }

  /**
   * blocking deleteMany
   */
  export type blockingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blockings to delete
     */
    where?: blockingWhereInput
    /**
     * Limit how many blockings to delete.
     */
    limit?: number
  }

  /**
   * blocking without action
   */
  export type blockingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: string | null
    post_id: string | null
    user_id: string | null
    parent_comment_id: string | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: string | null
    post_id: string | null
    user_id: string | null
    parent_comment_id: string | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    post_id: number
    user_id: number
    parent_comment_id: number
    content: number
    created_at: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    parent_comment_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    parent_comment_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    parent_comment_id?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    comment_id: string
    post_id: string
    user_id: string
    parent_comment_id: string | null
    content: string
    created_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    parent_comment_id?: boolean
    content?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    parent_comment_id?: boolean
    content?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    parent_comment_id?: boolean
    content?: boolean
    created_at?: boolean
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    parent_comment_id?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "post_id" | "user_id" | "parent_comment_id" | "content" | "created_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    other_comments?: boolean | comments$other_commentsArgs<ExtArgs>
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | comments$commentsArgs<ExtArgs>
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs> | null
      other_comments: Prisma.$commentsPayload<ExtArgs>[]
      posts_metadata: Prisma.$posts_metadataPayload<ExtArgs>
      social_users: Prisma.$social_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: string
      post_id: string
      user_id: string
      parent_comment_id: string | null
      content: string
      created_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.createManyAndReturn({
     *   select: { comment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.updateManyAndReturn({
     *   select: { comment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends comments$commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$commentsArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_comments<T extends comments$other_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$other_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts_metadata<T extends posts_metadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, posts_metadataDefaultArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    social_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */ 
  interface commentsFieldRefs {
    readonly comment_id: FieldRef<"comments", 'String'>
    readonly post_id: FieldRef<"comments", 'String'>
    readonly user_id: FieldRef<"comments", 'String'>
    readonly parent_comment_id: FieldRef<"comments", 'String'>
    readonly content: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.comments
   */
  export type comments$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }

  /**
   * comments.other_comments
   */
  export type comments$other_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model following
   */

  export type AggregateFollowing = {
    _count: FollowingCountAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  export type FollowingMinAggregateOutputType = {
    id: string | null
    follower_id: string | null
    followee_id: string | null
    followed_at: Date | null
  }

  export type FollowingMaxAggregateOutputType = {
    id: string | null
    follower_id: string | null
    followee_id: string | null
    followed_at: Date | null
  }

  export type FollowingCountAggregateOutputType = {
    id: number
    follower_id: number
    followee_id: number
    followed_at: number
    _all: number
  }


  export type FollowingMinAggregateInputType = {
    id?: true
    follower_id?: true
    followee_id?: true
    followed_at?: true
  }

  export type FollowingMaxAggregateInputType = {
    id?: true
    follower_id?: true
    followee_id?: true
    followed_at?: true
  }

  export type FollowingCountAggregateInputType = {
    id?: true
    follower_id?: true
    followee_id?: true
    followed_at?: true
    _all?: true
  }

  export type FollowingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which following to aggregate.
     */
    where?: followingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followings to fetch.
     */
    orderBy?: followingOrderByWithRelationInput | followingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned followings
    **/
    _count?: true | FollowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowingMaxAggregateInputType
  }

  export type GetFollowingAggregateType<T extends FollowingAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowing[P]>
      : GetScalarType<T[P], AggregateFollowing[P]>
  }




  export type followingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followingWhereInput
    orderBy?: followingOrderByWithAggregationInput | followingOrderByWithAggregationInput[]
    by: FollowingScalarFieldEnum[] | FollowingScalarFieldEnum
    having?: followingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowingCountAggregateInputType | true
    _min?: FollowingMinAggregateInputType
    _max?: FollowingMaxAggregateInputType
  }

  export type FollowingGroupByOutputType = {
    id: string
    follower_id: string
    followee_id: string
    followed_at: Date | null
    _count: FollowingCountAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  type GetFollowingGroupByPayload<T extends followingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowingGroupByOutputType[P]>
            : GetScalarType<T[P], FollowingGroupByOutputType[P]>
        }
      >
    >


  export type followingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    followee_id?: boolean
    followed_at?: boolean
    social_users_following_followee_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_following_follower_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type followingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    followee_id?: boolean
    followed_at?: boolean
    social_users_following_followee_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_following_follower_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type followingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    followee_id?: boolean
    followed_at?: boolean
    social_users_following_followee_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_following_follower_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type followingSelectScalar = {
    id?: boolean
    follower_id?: boolean
    followee_id?: boolean
    followed_at?: boolean
  }

  export type followingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "follower_id" | "followee_id" | "followed_at", ExtArgs["result"]["following"]>
  export type followingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users_following_followee_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_following_follower_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type followingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users_following_followee_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_following_follower_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type followingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users_following_followee_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
    social_users_following_follower_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }

  export type $followingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "following"
    objects: {
      social_users_following_followee_idTosocial_users: Prisma.$social_usersPayload<ExtArgs>
      social_users_following_follower_idTosocial_users: Prisma.$social_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      follower_id: string
      followee_id: string
      followed_at: Date | null
    }, ExtArgs["result"]["following"]>
    composites: {}
  }

  type followingGetPayload<S extends boolean | null | undefined | followingDefaultArgs> = $Result.GetResult<Prisma.$followingPayload, S>

  type followingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<followingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowingCountAggregateInputType | true
    }

  export interface followingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['following'], meta: { name: 'following' } }
    /**
     * Find zero or one Following that matches the filter.
     * @param {followingFindUniqueArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends followingFindUniqueArgs>(args: SelectSubset<T, followingFindUniqueArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Following that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {followingFindUniqueOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends followingFindUniqueOrThrowArgs>(args: SelectSubset<T, followingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Following that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followingFindFirstArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends followingFindFirstArgs>(args?: SelectSubset<T, followingFindFirstArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Following that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followingFindFirstOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends followingFindFirstOrThrowArgs>(args?: SelectSubset<T, followingFindFirstOrThrowArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Followings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followings
     * const followings = await prisma.following.findMany()
     * 
     * // Get first 10 Followings
     * const followings = await prisma.following.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followingWithIdOnly = await prisma.following.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends followingFindManyArgs>(args?: SelectSubset<T, followingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Following.
     * @param {followingCreateArgs} args - Arguments to create a Following.
     * @example
     * // Create one Following
     * const Following = await prisma.following.create({
     *   data: {
     *     // ... data to create a Following
     *   }
     * })
     * 
     */
    create<T extends followingCreateArgs>(args: SelectSubset<T, followingCreateArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Followings.
     * @param {followingCreateManyArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends followingCreateManyArgs>(args?: SelectSubset<T, followingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Followings and returns the data saved in the database.
     * @param {followingCreateManyAndReturnArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends followingCreateManyAndReturnArgs>(args?: SelectSubset<T, followingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Following.
     * @param {followingDeleteArgs} args - Arguments to delete one Following.
     * @example
     * // Delete one Following
     * const Following = await prisma.following.delete({
     *   where: {
     *     // ... filter to delete one Following
     *   }
     * })
     * 
     */
    delete<T extends followingDeleteArgs>(args: SelectSubset<T, followingDeleteArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Following.
     * @param {followingUpdateArgs} args - Arguments to update one Following.
     * @example
     * // Update one Following
     * const following = await prisma.following.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends followingUpdateArgs>(args: SelectSubset<T, followingUpdateArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Followings.
     * @param {followingDeleteManyArgs} args - Arguments to filter Followings to delete.
     * @example
     * // Delete a few Followings
     * const { count } = await prisma.following.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends followingDeleteManyArgs>(args?: SelectSubset<T, followingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends followingUpdateManyArgs>(args: SelectSubset<T, followingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings and returns the data updated in the database.
     * @param {followingUpdateManyAndReturnArgs} args - Arguments to update many Followings.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends followingUpdateManyAndReturnArgs>(args: SelectSubset<T, followingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Following.
     * @param {followingUpsertArgs} args - Arguments to update or create a Following.
     * @example
     * // Update or create a Following
     * const following = await prisma.following.upsert({
     *   create: {
     *     // ... data to create a Following
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Following we want to update
     *   }
     * })
     */
    upsert<T extends followingUpsertArgs>(args: SelectSubset<T, followingUpsertArgs<ExtArgs>>): Prisma__followingClient<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followingCountArgs} args - Arguments to filter Followings to count.
     * @example
     * // Count the number of Followings
     * const count = await prisma.following.count({
     *   where: {
     *     // ... the filter for the Followings we want to count
     *   }
     * })
    **/
    count<T extends followingCountArgs>(
      args?: Subset<T, followingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowingAggregateArgs>(args: Subset<T, FollowingAggregateArgs>): Prisma.PrismaPromise<GetFollowingAggregateType<T>>

    /**
     * Group by Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends followingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followingGroupByArgs['orderBy'] }
        : { orderBy?: followingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, followingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the following model
   */
  readonly fields: followingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for following.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    social_users_following_followee_idTosocial_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    social_users_following_follower_idTosocial_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the following model
   */ 
  interface followingFieldRefs {
    readonly id: FieldRef<"following", 'String'>
    readonly follower_id: FieldRef<"following", 'String'>
    readonly followee_id: FieldRef<"following", 'String'>
    readonly followed_at: FieldRef<"following", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * following findUnique
   */
  export type followingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * Filter, which following to fetch.
     */
    where: followingWhereUniqueInput
  }

  /**
   * following findUniqueOrThrow
   */
  export type followingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * Filter, which following to fetch.
     */
    where: followingWhereUniqueInput
  }

  /**
   * following findFirst
   */
  export type followingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * Filter, which following to fetch.
     */
    where?: followingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followings to fetch.
     */
    orderBy?: followingOrderByWithRelationInput | followingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followings.
     */
    cursor?: followingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * following findFirstOrThrow
   */
  export type followingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * Filter, which following to fetch.
     */
    where?: followingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followings to fetch.
     */
    orderBy?: followingOrderByWithRelationInput | followingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for followings.
     */
    cursor?: followingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * following findMany
   */
  export type followingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * Filter, which followings to fetch.
     */
    where?: followingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of followings to fetch.
     */
    orderBy?: followingOrderByWithRelationInput | followingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing followings.
     */
    cursor?: followingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` followings.
     */
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * following create
   */
  export type followingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * The data needed to create a following.
     */
    data: XOR<followingCreateInput, followingUncheckedCreateInput>
  }

  /**
   * following createMany
   */
  export type followingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many followings.
     */
    data: followingCreateManyInput | followingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * following createManyAndReturn
   */
  export type followingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * The data used to create many followings.
     */
    data: followingCreateManyInput | followingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * following update
   */
  export type followingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * The data needed to update a following.
     */
    data: XOR<followingUpdateInput, followingUncheckedUpdateInput>
    /**
     * Choose, which following to update.
     */
    where: followingWhereUniqueInput
  }

  /**
   * following updateMany
   */
  export type followingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update followings.
     */
    data: XOR<followingUpdateManyMutationInput, followingUncheckedUpdateManyInput>
    /**
     * Filter which followings to update
     */
    where?: followingWhereInput
    /**
     * Limit how many followings to update.
     */
    limit?: number
  }

  /**
   * following updateManyAndReturn
   */
  export type followingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * The data used to update followings.
     */
    data: XOR<followingUpdateManyMutationInput, followingUncheckedUpdateManyInput>
    /**
     * Filter which followings to update
     */
    where?: followingWhereInput
    /**
     * Limit how many followings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * following upsert
   */
  export type followingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * The filter to search for the following to update in case it exists.
     */
    where: followingWhereUniqueInput
    /**
     * In case the following found by the `where` argument doesn't exist, create a new following with this data.
     */
    create: XOR<followingCreateInput, followingUncheckedCreateInput>
    /**
     * In case the following was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followingUpdateInput, followingUncheckedUpdateInput>
  }

  /**
   * following delete
   */
  export type followingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    /**
     * Filter which following to delete.
     */
    where: followingWhereUniqueInput
  }

  /**
   * following deleteMany
   */
  export type followingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which followings to delete
     */
    where?: followingWhereInput
    /**
     * Limit how many followings to delete.
     */
    limit?: number
  }

  /**
   * following without action
   */
  export type followingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
  }


  /**
   * Model likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    user_id: string | null
    post_id: string | null
    liked_at: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    user_id: string | null
    post_id: string | null
    liked_at: Date | null
  }

  export type LikesCountAggregateOutputType = {
    user_id: number
    post_id: number
    liked_at: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    user_id?: true
    post_id?: true
    liked_at?: true
  }

  export type LikesMaxAggregateInputType = {
    user_id?: true
    post_id?: true
    liked_at?: true
  }

  export type LikesCountAggregateInputType = {
    user_id?: true
    post_id?: true
    liked_at?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to aggregate.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
    orderBy?: likesOrderByWithAggregationInput | likesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    user_id: string
    post_id: string
    liked_at: Date | null
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    post_id?: boolean
    liked_at?: boolean
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    post_id?: boolean
    liked_at?: boolean
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    post_id?: boolean
    liked_at?: boolean
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectScalar = {
    user_id?: boolean
    post_id?: boolean
    liked_at?: boolean
  }

  export type likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "post_id" | "liked_at", ExtArgs["result"]["likes"]>
  export type likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }

  export type $likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likes"
    objects: {
      posts_metadata: Prisma.$posts_metadataPayload<ExtArgs>
      social_users: Prisma.$social_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      post_id: string
      liked_at: Date | null
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type likesGetPayload<S extends boolean | null | undefined | likesDefaultArgs> = $Result.GetResult<Prisma.$likesPayload, S>

  type likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likes'], meta: { name: 'likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {likesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likesFindUniqueArgs>(args: SelectSubset<T, likesFindUniqueArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likesFindUniqueOrThrowArgs>(args: SelectSubset<T, likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likesFindFirstArgs>(args?: SelectSubset<T, likesFindFirstArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likesFindFirstOrThrowArgs>(args?: SelectSubset<T, likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const likesWithUser_idOnly = await prisma.likes.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends likesFindManyArgs>(args?: SelectSubset<T, likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {likesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends likesCreateArgs>(args: SelectSubset<T, likesCreateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likesCreateManyArgs>(args?: SelectSubset<T, likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {likesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `user_id`
     * const likesWithUser_idOnly = await prisma.likes.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends likesCreateManyAndReturnArgs>(args?: SelectSubset<T, likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {likesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends likesDeleteArgs>(args: SelectSubset<T, likesDeleteArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {likesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likesUpdateArgs>(args: SelectSubset<T, likesUpdateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likesDeleteManyArgs>(args?: SelectSubset<T, likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likesUpdateManyArgs>(args: SelectSubset<T, likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {likesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `user_id`
     * const likesWithUser_idOnly = await prisma.likes.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends likesUpdateManyAndReturnArgs>(args: SelectSubset<T, likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {likesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends likesUpsertArgs>(args: SelectSubset<T, likesUpsertArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likesCountArgs>(
      args?: Subset<T, likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likesGroupByArgs['orderBy'] }
        : { orderBy?: likesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likes model
   */
  readonly fields: likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts_metadata<T extends posts_metadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, posts_metadataDefaultArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    social_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the likes model
   */ 
  interface likesFieldRefs {
    readonly user_id: FieldRef<"likes", 'String'>
    readonly post_id: FieldRef<"likes", 'String'>
    readonly liked_at: FieldRef<"likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * likes findUnique
   */
  export type likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findUniqueOrThrow
   */
  export type likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findFirst
   */
  export type likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findFirstOrThrow
   */
  export type likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findMany
   */
  export type likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes create
   */
  export type likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to create a likes.
     */
    data: XOR<likesCreateInput, likesUncheckedCreateInput>
  }

  /**
   * likes createMany
   */
  export type likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * likes createManyAndReturn
   */
  export type likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes update
   */
  export type likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to update a likes.
     */
    data: XOR<likesUpdateInput, likesUncheckedUpdateInput>
    /**
     * Choose, which likes to update.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes updateMany
   */
  export type likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * likes updateManyAndReturn
   */
  export type likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes upsert
   */
  export type likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The filter to search for the likes to update in case it exists.
     */
    where: likesWhereUniqueInput
    /**
     * In case the likes found by the `where` argument doesn't exist, create a new likes with this data.
     */
    create: XOR<likesCreateInput, likesUncheckedCreateInput>
    /**
     * In case the likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likesUpdateInput, likesUncheckedUpdateInput>
  }

  /**
   * likes delete
   */
  export type likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter which likes to delete.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes deleteMany
   */
  export type likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * likes without action
   */
  export type likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    notification_id: string | null
    user_id: string | null
    notification_type: string | null
    notification_content: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    notification_id: string | null
    user_id: string | null
    notification_type: string | null
    notification_content: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    notification_id: number
    user_id: number
    notification_type: number
    notification_content: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    notification_id?: true
    user_id?: true
    notification_type?: true
    notification_content?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    notification_id?: true
    user_id?: true
    notification_type?: true
    notification_content?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    notification_id?: true
    user_id?: true
    notification_type?: true
    notification_content?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    notification_id: string
    user_id: string
    notification_type: string | null
    notification_content: string | null
    is_read: boolean | null
    created_at: Date
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    notification_type?: boolean
    notification_content?: boolean
    is_read?: boolean
    created_at?: boolean
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    notification_type?: boolean
    notification_content?: boolean
    is_read?: boolean
    created_at?: boolean
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    notification_type?: boolean
    notification_content?: boolean
    is_read?: boolean
    created_at?: boolean
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    notification_id?: boolean
    user_id?: boolean
    notification_type?: boolean
    notification_content?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "user_id" | "notification_type" | "notification_content" | "is_read" | "created_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      social_users: Prisma.$social_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: string
      user_id: string
      notification_type: string | null
      notification_content: string | null
      is_read: boolean | null
      created_at: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const notificationsWithNotification_idOnly = await prisma.notifications.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `notification_id`
     * const notificationsWithNotification_idOnly = await prisma.notifications.createManyAndReturn({
     *   select: { notification_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `notification_id`
     * const notificationsWithNotification_idOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { notification_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    social_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */ 
  interface notificationsFieldRefs {
    readonly notification_id: FieldRef<"notifications", 'String'>
    readonly user_id: FieldRef<"notifications", 'String'>
    readonly notification_type: FieldRef<"notifications", 'String'>
    readonly notification_content: FieldRef<"notifications", 'String'>
    readonly is_read: FieldRef<"notifications", 'Boolean'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model posts_analytics
   */

  export type AggregatePosts_analytics = {
    _count: Posts_analyticsCountAggregateOutputType | null
    _avg: Posts_analyticsAvgAggregateOutputType | null
    _sum: Posts_analyticsSumAggregateOutputType | null
    _min: Posts_analyticsMinAggregateOutputType | null
    _max: Posts_analyticsMaxAggregateOutputType | null
  }

  export type Posts_analyticsAvgAggregateOutputType = {
    views_count: number | null
    likes_count: number | null
    shares_count: number | null
    comments_count: number | null
  }

  export type Posts_analyticsSumAggregateOutputType = {
    views_count: number | null
    likes_count: number | null
    shares_count: number | null
    comments_count: number | null
  }

  export type Posts_analyticsMinAggregateOutputType = {
    post_id: string | null
    views_count: number | null
    likes_count: number | null
    shares_count: number | null
    comments_count: number | null
    updated_at: Date | null
  }

  export type Posts_analyticsMaxAggregateOutputType = {
    post_id: string | null
    views_count: number | null
    likes_count: number | null
    shares_count: number | null
    comments_count: number | null
    updated_at: Date | null
  }

  export type Posts_analyticsCountAggregateOutputType = {
    post_id: number
    views_count: number
    likes_count: number
    shares_count: number
    comments_count: number
    updated_at: number
    _all: number
  }


  export type Posts_analyticsAvgAggregateInputType = {
    views_count?: true
    likes_count?: true
    shares_count?: true
    comments_count?: true
  }

  export type Posts_analyticsSumAggregateInputType = {
    views_count?: true
    likes_count?: true
    shares_count?: true
    comments_count?: true
  }

  export type Posts_analyticsMinAggregateInputType = {
    post_id?: true
    views_count?: true
    likes_count?: true
    shares_count?: true
    comments_count?: true
    updated_at?: true
  }

  export type Posts_analyticsMaxAggregateInputType = {
    post_id?: true
    views_count?: true
    likes_count?: true
    shares_count?: true
    comments_count?: true
    updated_at?: true
  }

  export type Posts_analyticsCountAggregateInputType = {
    post_id?: true
    views_count?: true
    likes_count?: true
    shares_count?: true
    comments_count?: true
    updated_at?: true
    _all?: true
  }

  export type Posts_analyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts_analytics to aggregate.
     */
    where?: posts_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_analytics to fetch.
     */
    orderBy?: posts_analyticsOrderByWithRelationInput | posts_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posts_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts_analytics
    **/
    _count?: true | Posts_analyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Posts_analyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Posts_analyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Posts_analyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Posts_analyticsMaxAggregateInputType
  }

  export type GetPosts_analyticsAggregateType<T extends Posts_analyticsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts_analytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts_analytics[P]>
      : GetScalarType<T[P], AggregatePosts_analytics[P]>
  }




  export type posts_analyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posts_analyticsWhereInput
    orderBy?: posts_analyticsOrderByWithAggregationInput | posts_analyticsOrderByWithAggregationInput[]
    by: Posts_analyticsScalarFieldEnum[] | Posts_analyticsScalarFieldEnum
    having?: posts_analyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Posts_analyticsCountAggregateInputType | true
    _avg?: Posts_analyticsAvgAggregateInputType
    _sum?: Posts_analyticsSumAggregateInputType
    _min?: Posts_analyticsMinAggregateInputType
    _max?: Posts_analyticsMaxAggregateInputType
  }

  export type Posts_analyticsGroupByOutputType = {
    post_id: string
    views_count: number | null
    likes_count: number | null
    shares_count: number | null
    comments_count: number | null
    updated_at: Date
    _count: Posts_analyticsCountAggregateOutputType | null
    _avg: Posts_analyticsAvgAggregateOutputType | null
    _sum: Posts_analyticsSumAggregateOutputType | null
    _min: Posts_analyticsMinAggregateOutputType | null
    _max: Posts_analyticsMaxAggregateOutputType | null
  }

  type GetPosts_analyticsGroupByPayload<T extends posts_analyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Posts_analyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Posts_analyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Posts_analyticsGroupByOutputType[P]>
            : GetScalarType<T[P], Posts_analyticsGroupByOutputType[P]>
        }
      >
    >


  export type posts_analyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    views_count?: boolean
    likes_count?: boolean
    shares_count?: boolean
    comments_count?: boolean
    updated_at?: boolean
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_analytics"]>

  export type posts_analyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    views_count?: boolean
    likes_count?: boolean
    shares_count?: boolean
    comments_count?: boolean
    updated_at?: boolean
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_analytics"]>

  export type posts_analyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    views_count?: boolean
    likes_count?: boolean
    shares_count?: boolean
    comments_count?: boolean
    updated_at?: boolean
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_analytics"]>

  export type posts_analyticsSelectScalar = {
    post_id?: boolean
    views_count?: boolean
    likes_count?: boolean
    shares_count?: boolean
    comments_count?: boolean
    updated_at?: boolean
  }

  export type posts_analyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "views_count" | "likes_count" | "shares_count" | "comments_count" | "updated_at", ExtArgs["result"]["posts_analytics"]>
  export type posts_analyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
  }
  export type posts_analyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
  }
  export type posts_analyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | posts_metadataDefaultArgs<ExtArgs>
  }

  export type $posts_analyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts_analytics"
    objects: {
      posts_metadata: Prisma.$posts_metadataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      views_count: number | null
      likes_count: number | null
      shares_count: number | null
      comments_count: number | null
      updated_at: Date
    }, ExtArgs["result"]["posts_analytics"]>
    composites: {}
  }

  type posts_analyticsGetPayload<S extends boolean | null | undefined | posts_analyticsDefaultArgs> = $Result.GetResult<Prisma.$posts_analyticsPayload, S>

  type posts_analyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<posts_analyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Posts_analyticsCountAggregateInputType | true
    }

  export interface posts_analyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts_analytics'], meta: { name: 'posts_analytics' } }
    /**
     * Find zero or one Posts_analytics that matches the filter.
     * @param {posts_analyticsFindUniqueArgs} args - Arguments to find a Posts_analytics
     * @example
     * // Get one Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends posts_analyticsFindUniqueArgs>(args: SelectSubset<T, posts_analyticsFindUniqueArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts_analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {posts_analyticsFindUniqueOrThrowArgs} args - Arguments to find a Posts_analytics
     * @example
     * // Get one Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends posts_analyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, posts_analyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts_analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_analyticsFindFirstArgs} args - Arguments to find a Posts_analytics
     * @example
     * // Get one Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends posts_analyticsFindFirstArgs>(args?: SelectSubset<T, posts_analyticsFindFirstArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts_analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_analyticsFindFirstOrThrowArgs} args - Arguments to find a Posts_analytics
     * @example
     * // Get one Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends posts_analyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, posts_analyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts_analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_analyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.findMany()
     * 
     * // Get first 10 Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const posts_analyticsWithPost_idOnly = await prisma.posts_analytics.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends posts_analyticsFindManyArgs>(args?: SelectSubset<T, posts_analyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts_analytics.
     * @param {posts_analyticsCreateArgs} args - Arguments to create a Posts_analytics.
     * @example
     * // Create one Posts_analytics
     * const Posts_analytics = await prisma.posts_analytics.create({
     *   data: {
     *     // ... data to create a Posts_analytics
     *   }
     * })
     * 
     */
    create<T extends posts_analyticsCreateArgs>(args: SelectSubset<T, posts_analyticsCreateArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts_analytics.
     * @param {posts_analyticsCreateManyArgs} args - Arguments to create many Posts_analytics.
     * @example
     * // Create many Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends posts_analyticsCreateManyArgs>(args?: SelectSubset<T, posts_analyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts_analytics and returns the data saved in the database.
     * @param {posts_analyticsCreateManyAndReturnArgs} args - Arguments to create many Posts_analytics.
     * @example
     * // Create many Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts_analytics and only return the `post_id`
     * const posts_analyticsWithPost_idOnly = await prisma.posts_analytics.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends posts_analyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, posts_analyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts_analytics.
     * @param {posts_analyticsDeleteArgs} args - Arguments to delete one Posts_analytics.
     * @example
     * // Delete one Posts_analytics
     * const Posts_analytics = await prisma.posts_analytics.delete({
     *   where: {
     *     // ... filter to delete one Posts_analytics
     *   }
     * })
     * 
     */
    delete<T extends posts_analyticsDeleteArgs>(args: SelectSubset<T, posts_analyticsDeleteArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts_analytics.
     * @param {posts_analyticsUpdateArgs} args - Arguments to update one Posts_analytics.
     * @example
     * // Update one Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends posts_analyticsUpdateArgs>(args: SelectSubset<T, posts_analyticsUpdateArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts_analytics.
     * @param {posts_analyticsDeleteManyArgs} args - Arguments to filter Posts_analytics to delete.
     * @example
     * // Delete a few Posts_analytics
     * const { count } = await prisma.posts_analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends posts_analyticsDeleteManyArgs>(args?: SelectSubset<T, posts_analyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_analyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends posts_analyticsUpdateManyArgs>(args: SelectSubset<T, posts_analyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts_analytics and returns the data updated in the database.
     * @param {posts_analyticsUpdateManyAndReturnArgs} args - Arguments to update many Posts_analytics.
     * @example
     * // Update many Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts_analytics and only return the `post_id`
     * const posts_analyticsWithPost_idOnly = await prisma.posts_analytics.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends posts_analyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, posts_analyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts_analytics.
     * @param {posts_analyticsUpsertArgs} args - Arguments to update or create a Posts_analytics.
     * @example
     * // Update or create a Posts_analytics
     * const posts_analytics = await prisma.posts_analytics.upsert({
     *   create: {
     *     // ... data to create a Posts_analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts_analytics we want to update
     *   }
     * })
     */
    upsert<T extends posts_analyticsUpsertArgs>(args: SelectSubset<T, posts_analyticsUpsertArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_analyticsCountArgs} args - Arguments to filter Posts_analytics to count.
     * @example
     * // Count the number of Posts_analytics
     * const count = await prisma.posts_analytics.count({
     *   where: {
     *     // ... the filter for the Posts_analytics we want to count
     *   }
     * })
    **/
    count<T extends posts_analyticsCountArgs>(
      args?: Subset<T, posts_analyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Posts_analyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Posts_analyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Posts_analyticsAggregateArgs>(args: Subset<T, Posts_analyticsAggregateArgs>): Prisma.PrismaPromise<GetPosts_analyticsAggregateType<T>>

    /**
     * Group by Posts_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_analyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends posts_analyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posts_analyticsGroupByArgs['orderBy'] }
        : { orderBy?: posts_analyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, posts_analyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosts_analyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts_analytics model
   */
  readonly fields: posts_analyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts_analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posts_analyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts_metadata<T extends posts_metadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, posts_metadataDefaultArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts_analytics model
   */ 
  interface posts_analyticsFieldRefs {
    readonly post_id: FieldRef<"posts_analytics", 'String'>
    readonly views_count: FieldRef<"posts_analytics", 'Int'>
    readonly likes_count: FieldRef<"posts_analytics", 'Int'>
    readonly shares_count: FieldRef<"posts_analytics", 'Int'>
    readonly comments_count: FieldRef<"posts_analytics", 'Int'>
    readonly updated_at: FieldRef<"posts_analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * posts_analytics findUnique
   */
  export type posts_analyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which posts_analytics to fetch.
     */
    where: posts_analyticsWhereUniqueInput
  }

  /**
   * posts_analytics findUniqueOrThrow
   */
  export type posts_analyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which posts_analytics to fetch.
     */
    where: posts_analyticsWhereUniqueInput
  }

  /**
   * posts_analytics findFirst
   */
  export type posts_analyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which posts_analytics to fetch.
     */
    where?: posts_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_analytics to fetch.
     */
    orderBy?: posts_analyticsOrderByWithRelationInput | posts_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts_analytics.
     */
    cursor?: posts_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts_analytics.
     */
    distinct?: Posts_analyticsScalarFieldEnum | Posts_analyticsScalarFieldEnum[]
  }

  /**
   * posts_analytics findFirstOrThrow
   */
  export type posts_analyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which posts_analytics to fetch.
     */
    where?: posts_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_analytics to fetch.
     */
    orderBy?: posts_analyticsOrderByWithRelationInput | posts_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts_analytics.
     */
    cursor?: posts_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts_analytics.
     */
    distinct?: Posts_analyticsScalarFieldEnum | Posts_analyticsScalarFieldEnum[]
  }

  /**
   * posts_analytics findMany
   */
  export type posts_analyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which posts_analytics to fetch.
     */
    where?: posts_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_analytics to fetch.
     */
    orderBy?: posts_analyticsOrderByWithRelationInput | posts_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts_analytics.
     */
    cursor?: posts_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_analytics.
     */
    skip?: number
    distinct?: Posts_analyticsScalarFieldEnum | Posts_analyticsScalarFieldEnum[]
  }

  /**
   * posts_analytics create
   */
  export type posts_analyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts_analytics.
     */
    data: XOR<posts_analyticsCreateInput, posts_analyticsUncheckedCreateInput>
  }

  /**
   * posts_analytics createMany
   */
  export type posts_analyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts_analytics.
     */
    data: posts_analyticsCreateManyInput | posts_analyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts_analytics createManyAndReturn
   */
  export type posts_analyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * The data used to create many posts_analytics.
     */
    data: posts_analyticsCreateManyInput | posts_analyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts_analytics update
   */
  export type posts_analyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts_analytics.
     */
    data: XOR<posts_analyticsUpdateInput, posts_analyticsUncheckedUpdateInput>
    /**
     * Choose, which posts_analytics to update.
     */
    where: posts_analyticsWhereUniqueInput
  }

  /**
   * posts_analytics updateMany
   */
  export type posts_analyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts_analytics.
     */
    data: XOR<posts_analyticsUpdateManyMutationInput, posts_analyticsUncheckedUpdateManyInput>
    /**
     * Filter which posts_analytics to update
     */
    where?: posts_analyticsWhereInput
    /**
     * Limit how many posts_analytics to update.
     */
    limit?: number
  }

  /**
   * posts_analytics updateManyAndReturn
   */
  export type posts_analyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * The data used to update posts_analytics.
     */
    data: XOR<posts_analyticsUpdateManyMutationInput, posts_analyticsUncheckedUpdateManyInput>
    /**
     * Filter which posts_analytics to update
     */
    where?: posts_analyticsWhereInput
    /**
     * Limit how many posts_analytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts_analytics upsert
   */
  export type posts_analyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts_analytics to update in case it exists.
     */
    where: posts_analyticsWhereUniqueInput
    /**
     * In case the posts_analytics found by the `where` argument doesn't exist, create a new posts_analytics with this data.
     */
    create: XOR<posts_analyticsCreateInput, posts_analyticsUncheckedCreateInput>
    /**
     * In case the posts_analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posts_analyticsUpdateInput, posts_analyticsUncheckedUpdateInput>
  }

  /**
   * posts_analytics delete
   */
  export type posts_analyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    /**
     * Filter which posts_analytics to delete.
     */
    where: posts_analyticsWhereUniqueInput
  }

  /**
   * posts_analytics deleteMany
   */
  export type posts_analyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts_analytics to delete
     */
    where?: posts_analyticsWhereInput
    /**
     * Limit how many posts_analytics to delete.
     */
    limit?: number
  }

  /**
   * posts_analytics without action
   */
  export type posts_analyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
  }


  /**
   * Model posts_metadata
   */

  export type AggregatePosts_metadata = {
    _count: Posts_metadataCountAggregateOutputType | null
    _avg: Posts_metadataAvgAggregateOutputType | null
    _sum: Posts_metadataSumAggregateOutputType | null
    _min: Posts_metadataMinAggregateOutputType | null
    _max: Posts_metadataMaxAggregateOutputType | null
  }

  export type Posts_metadataAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type Posts_metadataSumAggregateOutputType = {
    price: Decimal | null
  }

  export type Posts_metadataMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    summary: string | null
    post_type: string | null
    visibility: string | null
    price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Posts_metadataMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    summary: string | null
    post_type: string | null
    visibility: string | null
    price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Posts_metadataCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    summary: number
    post_type: number
    visibility: number
    price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Posts_metadataAvgAggregateInputType = {
    price?: true
  }

  export type Posts_metadataSumAggregateInputType = {
    price?: true
  }

  export type Posts_metadataMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    summary?: true
    post_type?: true
    visibility?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type Posts_metadataMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    summary?: true
    post_type?: true
    visibility?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type Posts_metadataCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    summary?: true
    post_type?: true
    visibility?: true
    price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Posts_metadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts_metadata to aggregate.
     */
    where?: posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_metadata to fetch.
     */
    orderBy?: posts_metadataOrderByWithRelationInput | posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts_metadata
    **/
    _count?: true | Posts_metadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Posts_metadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Posts_metadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Posts_metadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Posts_metadataMaxAggregateInputType
  }

  export type GetPosts_metadataAggregateType<T extends Posts_metadataAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts_metadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts_metadata[P]>
      : GetScalarType<T[P], AggregatePosts_metadata[P]>
  }




  export type posts_metadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posts_metadataWhereInput
    orderBy?: posts_metadataOrderByWithAggregationInput | posts_metadataOrderByWithAggregationInput[]
    by: Posts_metadataScalarFieldEnum[] | Posts_metadataScalarFieldEnum
    having?: posts_metadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Posts_metadataCountAggregateInputType | true
    _avg?: Posts_metadataAvgAggregateInputType
    _sum?: Posts_metadataSumAggregateInputType
    _min?: Posts_metadataMinAggregateInputType
    _max?: Posts_metadataMaxAggregateInputType
  }

  export type Posts_metadataGroupByOutputType = {
    id: string
    user_id: string
    title: string | null
    summary: string | null
    post_type: string | null
    visibility: string | null
    price: Decimal | null
    created_at: Date
    updated_at: Date
    _count: Posts_metadataCountAggregateOutputType | null
    _avg: Posts_metadataAvgAggregateOutputType | null
    _sum: Posts_metadataSumAggregateOutputType | null
    _min: Posts_metadataMinAggregateOutputType | null
    _max: Posts_metadataMaxAggregateOutputType | null
  }

  type GetPosts_metadataGroupByPayload<T extends posts_metadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Posts_metadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Posts_metadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Posts_metadataGroupByOutputType[P]>
            : GetScalarType<T[P], Posts_metadataGroupByOutputType[P]>
        }
      >
    >


  export type posts_metadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    visibility?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    comments?: boolean | posts_metadata$commentsArgs<ExtArgs>
    likes?: boolean | posts_metadata$likesArgs<ExtArgs>
    posts_analytics?: boolean | posts_metadata$posts_analyticsArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
    reported_content?: boolean | posts_metadata$reported_contentArgs<ExtArgs>
    _count?: boolean | Posts_metadataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_metadata"]>

  export type posts_metadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    visibility?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_metadata"]>

  export type posts_metadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    visibility?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_metadata"]>

  export type posts_metadataSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    visibility?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type posts_metadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "summary" | "post_type" | "visibility" | "price" | "created_at" | "updated_at", ExtArgs["result"]["posts_metadata"]>
  export type posts_metadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | posts_metadata$commentsArgs<ExtArgs>
    likes?: boolean | posts_metadata$likesArgs<ExtArgs>
    posts_analytics?: boolean | posts_metadata$posts_analyticsArgs<ExtArgs>
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
    reported_content?: boolean | posts_metadata$reported_contentArgs<ExtArgs>
    _count?: boolean | Posts_metadataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type posts_metadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type posts_metadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }

  export type $posts_metadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts_metadata"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      posts_analytics: Prisma.$posts_analyticsPayload<ExtArgs> | null
      social_users: Prisma.$social_usersPayload<ExtArgs>
      reported_content: Prisma.$reported_contentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string | null
      summary: string | null
      post_type: string | null
      visibility: string | null
      price: Prisma.Decimal | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["posts_metadata"]>
    composites: {}
  }

  type posts_metadataGetPayload<S extends boolean | null | undefined | posts_metadataDefaultArgs> = $Result.GetResult<Prisma.$posts_metadataPayload, S>

  type posts_metadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<posts_metadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Posts_metadataCountAggregateInputType | true
    }

  export interface posts_metadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts_metadata'], meta: { name: 'posts_metadata' } }
    /**
     * Find zero or one Posts_metadata that matches the filter.
     * @param {posts_metadataFindUniqueArgs} args - Arguments to find a Posts_metadata
     * @example
     * // Get one Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends posts_metadataFindUniqueArgs>(args: SelectSubset<T, posts_metadataFindUniqueArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts_metadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {posts_metadataFindUniqueOrThrowArgs} args - Arguments to find a Posts_metadata
     * @example
     * // Get one Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends posts_metadataFindUniqueOrThrowArgs>(args: SelectSubset<T, posts_metadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_metadataFindFirstArgs} args - Arguments to find a Posts_metadata
     * @example
     * // Get one Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends posts_metadataFindFirstArgs>(args?: SelectSubset<T, posts_metadataFindFirstArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts_metadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_metadataFindFirstOrThrowArgs} args - Arguments to find a Posts_metadata
     * @example
     * // Get one Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends posts_metadataFindFirstOrThrowArgs>(args?: SelectSubset<T, posts_metadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_metadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.findMany()
     * 
     * // Get first 10 Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posts_metadataWithIdOnly = await prisma.posts_metadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends posts_metadataFindManyArgs>(args?: SelectSubset<T, posts_metadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts_metadata.
     * @param {posts_metadataCreateArgs} args - Arguments to create a Posts_metadata.
     * @example
     * // Create one Posts_metadata
     * const Posts_metadata = await prisma.posts_metadata.create({
     *   data: {
     *     // ... data to create a Posts_metadata
     *   }
     * })
     * 
     */
    create<T extends posts_metadataCreateArgs>(args: SelectSubset<T, posts_metadataCreateArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts_metadata.
     * @param {posts_metadataCreateManyArgs} args - Arguments to create many Posts_metadata.
     * @example
     * // Create many Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends posts_metadataCreateManyArgs>(args?: SelectSubset<T, posts_metadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts_metadata and returns the data saved in the database.
     * @param {posts_metadataCreateManyAndReturnArgs} args - Arguments to create many Posts_metadata.
     * @example
     * // Create many Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts_metadata and only return the `id`
     * const posts_metadataWithIdOnly = await prisma.posts_metadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends posts_metadataCreateManyAndReturnArgs>(args?: SelectSubset<T, posts_metadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts_metadata.
     * @param {posts_metadataDeleteArgs} args - Arguments to delete one Posts_metadata.
     * @example
     * // Delete one Posts_metadata
     * const Posts_metadata = await prisma.posts_metadata.delete({
     *   where: {
     *     // ... filter to delete one Posts_metadata
     *   }
     * })
     * 
     */
    delete<T extends posts_metadataDeleteArgs>(args: SelectSubset<T, posts_metadataDeleteArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts_metadata.
     * @param {posts_metadataUpdateArgs} args - Arguments to update one Posts_metadata.
     * @example
     * // Update one Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends posts_metadataUpdateArgs>(args: SelectSubset<T, posts_metadataUpdateArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts_metadata.
     * @param {posts_metadataDeleteManyArgs} args - Arguments to filter Posts_metadata to delete.
     * @example
     * // Delete a few Posts_metadata
     * const { count } = await prisma.posts_metadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends posts_metadataDeleteManyArgs>(args?: SelectSubset<T, posts_metadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_metadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends posts_metadataUpdateManyArgs>(args: SelectSubset<T, posts_metadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts_metadata and returns the data updated in the database.
     * @param {posts_metadataUpdateManyAndReturnArgs} args - Arguments to update many Posts_metadata.
     * @example
     * // Update many Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts_metadata and only return the `id`
     * const posts_metadataWithIdOnly = await prisma.posts_metadata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends posts_metadataUpdateManyAndReturnArgs>(args: SelectSubset<T, posts_metadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts_metadata.
     * @param {posts_metadataUpsertArgs} args - Arguments to update or create a Posts_metadata.
     * @example
     * // Update or create a Posts_metadata
     * const posts_metadata = await prisma.posts_metadata.upsert({
     *   create: {
     *     // ... data to create a Posts_metadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts_metadata we want to update
     *   }
     * })
     */
    upsert<T extends posts_metadataUpsertArgs>(args: SelectSubset<T, posts_metadataUpsertArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_metadataCountArgs} args - Arguments to filter Posts_metadata to count.
     * @example
     * // Count the number of Posts_metadata
     * const count = await prisma.posts_metadata.count({
     *   where: {
     *     // ... the filter for the Posts_metadata we want to count
     *   }
     * })
    **/
    count<T extends posts_metadataCountArgs>(
      args?: Subset<T, posts_metadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Posts_metadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Posts_metadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Posts_metadataAggregateArgs>(args: Subset<T, Posts_metadataAggregateArgs>): Prisma.PrismaPromise<GetPosts_metadataAggregateType<T>>

    /**
     * Group by Posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_metadataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends posts_metadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posts_metadataGroupByArgs['orderBy'] }
        : { orderBy?: posts_metadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, posts_metadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosts_metadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts_metadata model
   */
  readonly fields: posts_metadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts_metadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posts_metadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends posts_metadata$commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts_metadata$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends posts_metadata$likesArgs<ExtArgs> = {}>(args?: Subset<T, posts_metadata$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts_analytics<T extends posts_metadata$posts_analyticsArgs<ExtArgs> = {}>(args?: Subset<T, posts_metadata$posts_analyticsArgs<ExtArgs>>): Prisma__posts_analyticsClient<$Result.GetResult<Prisma.$posts_analyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    social_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reported_content<T extends posts_metadata$reported_contentArgs<ExtArgs> = {}>(args?: Subset<T, posts_metadata$reported_contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts_metadata model
   */ 
  interface posts_metadataFieldRefs {
    readonly id: FieldRef<"posts_metadata", 'String'>
    readonly user_id: FieldRef<"posts_metadata", 'String'>
    readonly title: FieldRef<"posts_metadata", 'String'>
    readonly summary: FieldRef<"posts_metadata", 'String'>
    readonly post_type: FieldRef<"posts_metadata", 'String'>
    readonly visibility: FieldRef<"posts_metadata", 'String'>
    readonly price: FieldRef<"posts_metadata", 'Decimal'>
    readonly created_at: FieldRef<"posts_metadata", 'DateTime'>
    readonly updated_at: FieldRef<"posts_metadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * posts_metadata findUnique
   */
  export type posts_metadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which posts_metadata to fetch.
     */
    where: posts_metadataWhereUniqueInput
  }

  /**
   * posts_metadata findUniqueOrThrow
   */
  export type posts_metadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which posts_metadata to fetch.
     */
    where: posts_metadataWhereUniqueInput
  }

  /**
   * posts_metadata findFirst
   */
  export type posts_metadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which posts_metadata to fetch.
     */
    where?: posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_metadata to fetch.
     */
    orderBy?: posts_metadataOrderByWithRelationInput | posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts_metadata.
     */
    cursor?: posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts_metadata.
     */
    distinct?: Posts_metadataScalarFieldEnum | Posts_metadataScalarFieldEnum[]
  }

  /**
   * posts_metadata findFirstOrThrow
   */
  export type posts_metadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which posts_metadata to fetch.
     */
    where?: posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_metadata to fetch.
     */
    orderBy?: posts_metadataOrderByWithRelationInput | posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts_metadata.
     */
    cursor?: posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts_metadata.
     */
    distinct?: Posts_metadataScalarFieldEnum | Posts_metadataScalarFieldEnum[]
  }

  /**
   * posts_metadata findMany
   */
  export type posts_metadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which posts_metadata to fetch.
     */
    where?: posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_metadata to fetch.
     */
    orderBy?: posts_metadataOrderByWithRelationInput | posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts_metadata.
     */
    cursor?: posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_metadata.
     */
    skip?: number
    distinct?: Posts_metadataScalarFieldEnum | Posts_metadataScalarFieldEnum[]
  }

  /**
   * posts_metadata create
   */
  export type posts_metadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * The data needed to create a posts_metadata.
     */
    data: XOR<posts_metadataCreateInput, posts_metadataUncheckedCreateInput>
  }

  /**
   * posts_metadata createMany
   */
  export type posts_metadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts_metadata.
     */
    data: posts_metadataCreateManyInput | posts_metadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts_metadata createManyAndReturn
   */
  export type posts_metadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * The data used to create many posts_metadata.
     */
    data: posts_metadataCreateManyInput | posts_metadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts_metadata update
   */
  export type posts_metadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * The data needed to update a posts_metadata.
     */
    data: XOR<posts_metadataUpdateInput, posts_metadataUncheckedUpdateInput>
    /**
     * Choose, which posts_metadata to update.
     */
    where: posts_metadataWhereUniqueInput
  }

  /**
   * posts_metadata updateMany
   */
  export type posts_metadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts_metadata.
     */
    data: XOR<posts_metadataUpdateManyMutationInput, posts_metadataUncheckedUpdateManyInput>
    /**
     * Filter which posts_metadata to update
     */
    where?: posts_metadataWhereInput
    /**
     * Limit how many posts_metadata to update.
     */
    limit?: number
  }

  /**
   * posts_metadata updateManyAndReturn
   */
  export type posts_metadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * The data used to update posts_metadata.
     */
    data: XOR<posts_metadataUpdateManyMutationInput, posts_metadataUncheckedUpdateManyInput>
    /**
     * Filter which posts_metadata to update
     */
    where?: posts_metadataWhereInput
    /**
     * Limit how many posts_metadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts_metadata upsert
   */
  export type posts_metadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * The filter to search for the posts_metadata to update in case it exists.
     */
    where: posts_metadataWhereUniqueInput
    /**
     * In case the posts_metadata found by the `where` argument doesn't exist, create a new posts_metadata with this data.
     */
    create: XOR<posts_metadataCreateInput, posts_metadataUncheckedCreateInput>
    /**
     * In case the posts_metadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posts_metadataUpdateInput, posts_metadataUncheckedUpdateInput>
  }

  /**
   * posts_metadata delete
   */
  export type posts_metadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    /**
     * Filter which posts_metadata to delete.
     */
    where: posts_metadataWhereUniqueInput
  }

  /**
   * posts_metadata deleteMany
   */
  export type posts_metadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts_metadata to delete
     */
    where?: posts_metadataWhereInput
    /**
     * Limit how many posts_metadata to delete.
     */
    limit?: number
  }

  /**
   * posts_metadata.comments
   */
  export type posts_metadata$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * posts_metadata.likes
   */
  export type posts_metadata$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * posts_metadata.posts_analytics
   */
  export type posts_metadata$posts_analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_analytics
     */
    select?: posts_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_analytics
     */
    omit?: posts_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_analyticsInclude<ExtArgs> | null
    where?: posts_analyticsWhereInput
  }

  /**
   * posts_metadata.reported_content
   */
  export type posts_metadata$reported_contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    where?: reported_contentWhereInput
    orderBy?: reported_contentOrderByWithRelationInput | reported_contentOrderByWithRelationInput[]
    cursor?: reported_contentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_contentScalarFieldEnum | Reported_contentScalarFieldEnum[]
  }

  /**
   * posts_metadata without action
   */
  export type posts_metadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
  }


  /**
   * Model reported_content
   */

  export type AggregateReported_content = {
    _count: Reported_contentCountAggregateOutputType | null
    _min: Reported_contentMinAggregateOutputType | null
    _max: Reported_contentMaxAggregateOutputType | null
  }

  export type Reported_contentMinAggregateOutputType = {
    id: string | null
    reporter_id: string | null
    reported_user_id: string | null
    post_id: string | null
    reason: string | null
    status: string | null
    created_at: Date | null
  }

  export type Reported_contentMaxAggregateOutputType = {
    id: string | null
    reporter_id: string | null
    reported_user_id: string | null
    post_id: string | null
    reason: string | null
    status: string | null
    created_at: Date | null
  }

  export type Reported_contentCountAggregateOutputType = {
    id: number
    reporter_id: number
    reported_user_id: number
    post_id: number
    reason: number
    status: number
    created_at: number
    _all: number
  }


  export type Reported_contentMinAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_user_id?: true
    post_id?: true
    reason?: true
    status?: true
    created_at?: true
  }

  export type Reported_contentMaxAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_user_id?: true
    post_id?: true
    reason?: true
    status?: true
    created_at?: true
  }

  export type Reported_contentCountAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_user_id?: true
    post_id?: true
    reason?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type Reported_contentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reported_content to aggregate.
     */
    where?: reported_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_contents to fetch.
     */
    orderBy?: reported_contentOrderByWithRelationInput | reported_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reported_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reported_contents
    **/
    _count?: true | Reported_contentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reported_contentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reported_contentMaxAggregateInputType
  }

  export type GetReported_contentAggregateType<T extends Reported_contentAggregateArgs> = {
        [P in keyof T & keyof AggregateReported_content]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReported_content[P]>
      : GetScalarType<T[P], AggregateReported_content[P]>
  }




  export type reported_contentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reported_contentWhereInput
    orderBy?: reported_contentOrderByWithAggregationInput | reported_contentOrderByWithAggregationInput[]
    by: Reported_contentScalarFieldEnum[] | Reported_contentScalarFieldEnum
    having?: reported_contentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reported_contentCountAggregateInputType | true
    _min?: Reported_contentMinAggregateInputType
    _max?: Reported_contentMaxAggregateInputType
  }

  export type Reported_contentGroupByOutputType = {
    id: string
    reporter_id: string
    reported_user_id: string | null
    post_id: string | null
    reason: string
    status: string | null
    created_at: Date
    _count: Reported_contentCountAggregateOutputType | null
    _min: Reported_contentMinAggregateOutputType | null
    _max: Reported_contentMaxAggregateOutputType | null
  }

  type GetReported_contentGroupByPayload<T extends reported_contentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reported_contentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reported_contentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reported_contentGroupByOutputType[P]>
            : GetScalarType<T[P], Reported_contentGroupByOutputType[P]>
        }
      >
    >


  export type reported_contentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporter_id?: boolean
    reported_user_id?: boolean
    post_id?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
    posts_metadata?: boolean | reported_content$posts_metadataArgs<ExtArgs>
    social_users_reported_content_reported_user_idTosocial_users?: boolean | reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    social_users_reported_content_reporter_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reported_content"]>

  export type reported_contentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporter_id?: boolean
    reported_user_id?: boolean
    post_id?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
    posts_metadata?: boolean | reported_content$posts_metadataArgs<ExtArgs>
    social_users_reported_content_reported_user_idTosocial_users?: boolean | reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    social_users_reported_content_reporter_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reported_content"]>

  export type reported_contentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporter_id?: boolean
    reported_user_id?: boolean
    post_id?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
    posts_metadata?: boolean | reported_content$posts_metadataArgs<ExtArgs>
    social_users_reported_content_reported_user_idTosocial_users?: boolean | reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    social_users_reported_content_reporter_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reported_content"]>

  export type reported_contentSelectScalar = {
    id?: boolean
    reporter_id?: boolean
    reported_user_id?: boolean
    post_id?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type reported_contentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporter_id" | "reported_user_id" | "post_id" | "reason" | "status" | "created_at", ExtArgs["result"]["reported_content"]>
  export type reported_contentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | reported_content$posts_metadataArgs<ExtArgs>
    social_users_reported_content_reported_user_idTosocial_users?: boolean | reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    social_users_reported_content_reporter_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type reported_contentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | reported_content$posts_metadataArgs<ExtArgs>
    social_users_reported_content_reported_user_idTosocial_users?: boolean | reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    social_users_reported_content_reporter_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }
  export type reported_contentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_metadata?: boolean | reported_content$posts_metadataArgs<ExtArgs>
    social_users_reported_content_reported_user_idTosocial_users?: boolean | reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    social_users_reported_content_reporter_idTosocial_users?: boolean | social_usersDefaultArgs<ExtArgs>
  }

  export type $reported_contentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reported_content"
    objects: {
      posts_metadata: Prisma.$posts_metadataPayload<ExtArgs> | null
      social_users_reported_content_reported_user_idTosocial_users: Prisma.$social_usersPayload<ExtArgs> | null
      social_users_reported_content_reporter_idTosocial_users: Prisma.$social_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reporter_id: string
      reported_user_id: string | null
      post_id: string | null
      reason: string
      status: string | null
      created_at: Date
    }, ExtArgs["result"]["reported_content"]>
    composites: {}
  }

  type reported_contentGetPayload<S extends boolean | null | undefined | reported_contentDefaultArgs> = $Result.GetResult<Prisma.$reported_contentPayload, S>

  type reported_contentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reported_contentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reported_contentCountAggregateInputType | true
    }

  export interface reported_contentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reported_content'], meta: { name: 'reported_content' } }
    /**
     * Find zero or one Reported_content that matches the filter.
     * @param {reported_contentFindUniqueArgs} args - Arguments to find a Reported_content
     * @example
     * // Get one Reported_content
     * const reported_content = await prisma.reported_content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reported_contentFindUniqueArgs>(args: SelectSubset<T, reported_contentFindUniqueArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reported_content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reported_contentFindUniqueOrThrowArgs} args - Arguments to find a Reported_content
     * @example
     * // Get one Reported_content
     * const reported_content = await prisma.reported_content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reported_contentFindUniqueOrThrowArgs>(args: SelectSubset<T, reported_contentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reported_content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_contentFindFirstArgs} args - Arguments to find a Reported_content
     * @example
     * // Get one Reported_content
     * const reported_content = await prisma.reported_content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reported_contentFindFirstArgs>(args?: SelectSubset<T, reported_contentFindFirstArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reported_content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_contentFindFirstOrThrowArgs} args - Arguments to find a Reported_content
     * @example
     * // Get one Reported_content
     * const reported_content = await prisma.reported_content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reported_contentFindFirstOrThrowArgs>(args?: SelectSubset<T, reported_contentFindFirstOrThrowArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reported_contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_contentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reported_contents
     * const reported_contents = await prisma.reported_content.findMany()
     * 
     * // Get first 10 Reported_contents
     * const reported_contents = await prisma.reported_content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reported_contentWithIdOnly = await prisma.reported_content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reported_contentFindManyArgs>(args?: SelectSubset<T, reported_contentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reported_content.
     * @param {reported_contentCreateArgs} args - Arguments to create a Reported_content.
     * @example
     * // Create one Reported_content
     * const Reported_content = await prisma.reported_content.create({
     *   data: {
     *     // ... data to create a Reported_content
     *   }
     * })
     * 
     */
    create<T extends reported_contentCreateArgs>(args: SelectSubset<T, reported_contentCreateArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reported_contents.
     * @param {reported_contentCreateManyArgs} args - Arguments to create many Reported_contents.
     * @example
     * // Create many Reported_contents
     * const reported_content = await prisma.reported_content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reported_contentCreateManyArgs>(args?: SelectSubset<T, reported_contentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reported_contents and returns the data saved in the database.
     * @param {reported_contentCreateManyAndReturnArgs} args - Arguments to create many Reported_contents.
     * @example
     * // Create many Reported_contents
     * const reported_content = await prisma.reported_content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reported_contents and only return the `id`
     * const reported_contentWithIdOnly = await prisma.reported_content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reported_contentCreateManyAndReturnArgs>(args?: SelectSubset<T, reported_contentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reported_content.
     * @param {reported_contentDeleteArgs} args - Arguments to delete one Reported_content.
     * @example
     * // Delete one Reported_content
     * const Reported_content = await prisma.reported_content.delete({
     *   where: {
     *     // ... filter to delete one Reported_content
     *   }
     * })
     * 
     */
    delete<T extends reported_contentDeleteArgs>(args: SelectSubset<T, reported_contentDeleteArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reported_content.
     * @param {reported_contentUpdateArgs} args - Arguments to update one Reported_content.
     * @example
     * // Update one Reported_content
     * const reported_content = await prisma.reported_content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reported_contentUpdateArgs>(args: SelectSubset<T, reported_contentUpdateArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reported_contents.
     * @param {reported_contentDeleteManyArgs} args - Arguments to filter Reported_contents to delete.
     * @example
     * // Delete a few Reported_contents
     * const { count } = await prisma.reported_content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reported_contentDeleteManyArgs>(args?: SelectSubset<T, reported_contentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reported_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_contentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reported_contents
     * const reported_content = await prisma.reported_content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reported_contentUpdateManyArgs>(args: SelectSubset<T, reported_contentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reported_contents and returns the data updated in the database.
     * @param {reported_contentUpdateManyAndReturnArgs} args - Arguments to update many Reported_contents.
     * @example
     * // Update many Reported_contents
     * const reported_content = await prisma.reported_content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reported_contents and only return the `id`
     * const reported_contentWithIdOnly = await prisma.reported_content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reported_contentUpdateManyAndReturnArgs>(args: SelectSubset<T, reported_contentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reported_content.
     * @param {reported_contentUpsertArgs} args - Arguments to update or create a Reported_content.
     * @example
     * // Update or create a Reported_content
     * const reported_content = await prisma.reported_content.upsert({
     *   create: {
     *     // ... data to create a Reported_content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reported_content we want to update
     *   }
     * })
     */
    upsert<T extends reported_contentUpsertArgs>(args: SelectSubset<T, reported_contentUpsertArgs<ExtArgs>>): Prisma__reported_contentClient<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reported_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_contentCountArgs} args - Arguments to filter Reported_contents to count.
     * @example
     * // Count the number of Reported_contents
     * const count = await prisma.reported_content.count({
     *   where: {
     *     // ... the filter for the Reported_contents we want to count
     *   }
     * })
    **/
    count<T extends reported_contentCountArgs>(
      args?: Subset<T, reported_contentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reported_contentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reported_content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reported_contentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reported_contentAggregateArgs>(args: Subset<T, Reported_contentAggregateArgs>): Prisma.PrismaPromise<GetReported_contentAggregateType<T>>

    /**
     * Group by Reported_content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reported_contentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reported_contentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reported_contentGroupByArgs['orderBy'] }
        : { orderBy?: reported_contentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reported_contentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReported_contentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reported_content model
   */
  readonly fields: reported_contentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reported_content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reported_contentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts_metadata<T extends reported_content$posts_metadataArgs<ExtArgs> = {}>(args?: Subset<T, reported_content$posts_metadataArgs<ExtArgs>>): Prisma__posts_metadataClient<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    social_users_reported_content_reported_user_idTosocial_users<T extends reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs> = {}>(args?: Subset<T, reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    social_users_reported_content_reporter_idTosocial_users<T extends social_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, social_usersDefaultArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reported_content model
   */ 
  interface reported_contentFieldRefs {
    readonly id: FieldRef<"reported_content", 'String'>
    readonly reporter_id: FieldRef<"reported_content", 'String'>
    readonly reported_user_id: FieldRef<"reported_content", 'String'>
    readonly post_id: FieldRef<"reported_content", 'String'>
    readonly reason: FieldRef<"reported_content", 'String'>
    readonly status: FieldRef<"reported_content", 'String'>
    readonly created_at: FieldRef<"reported_content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reported_content findUnique
   */
  export type reported_contentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * Filter, which reported_content to fetch.
     */
    where: reported_contentWhereUniqueInput
  }

  /**
   * reported_content findUniqueOrThrow
   */
  export type reported_contentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * Filter, which reported_content to fetch.
     */
    where: reported_contentWhereUniqueInput
  }

  /**
   * reported_content findFirst
   */
  export type reported_contentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * Filter, which reported_content to fetch.
     */
    where?: reported_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_contents to fetch.
     */
    orderBy?: reported_contentOrderByWithRelationInput | reported_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reported_contents.
     */
    cursor?: reported_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reported_contents.
     */
    distinct?: Reported_contentScalarFieldEnum | Reported_contentScalarFieldEnum[]
  }

  /**
   * reported_content findFirstOrThrow
   */
  export type reported_contentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * Filter, which reported_content to fetch.
     */
    where?: reported_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_contents to fetch.
     */
    orderBy?: reported_contentOrderByWithRelationInput | reported_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reported_contents.
     */
    cursor?: reported_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reported_contents.
     */
    distinct?: Reported_contentScalarFieldEnum | Reported_contentScalarFieldEnum[]
  }

  /**
   * reported_content findMany
   */
  export type reported_contentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * Filter, which reported_contents to fetch.
     */
    where?: reported_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reported_contents to fetch.
     */
    orderBy?: reported_contentOrderByWithRelationInput | reported_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reported_contents.
     */
    cursor?: reported_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reported_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reported_contents.
     */
    skip?: number
    distinct?: Reported_contentScalarFieldEnum | Reported_contentScalarFieldEnum[]
  }

  /**
   * reported_content create
   */
  export type reported_contentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * The data needed to create a reported_content.
     */
    data: XOR<reported_contentCreateInput, reported_contentUncheckedCreateInput>
  }

  /**
   * reported_content createMany
   */
  export type reported_contentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reported_contents.
     */
    data: reported_contentCreateManyInput | reported_contentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reported_content createManyAndReturn
   */
  export type reported_contentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * The data used to create many reported_contents.
     */
    data: reported_contentCreateManyInput | reported_contentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reported_content update
   */
  export type reported_contentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * The data needed to update a reported_content.
     */
    data: XOR<reported_contentUpdateInput, reported_contentUncheckedUpdateInput>
    /**
     * Choose, which reported_content to update.
     */
    where: reported_contentWhereUniqueInput
  }

  /**
   * reported_content updateMany
   */
  export type reported_contentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reported_contents.
     */
    data: XOR<reported_contentUpdateManyMutationInput, reported_contentUncheckedUpdateManyInput>
    /**
     * Filter which reported_contents to update
     */
    where?: reported_contentWhereInput
    /**
     * Limit how many reported_contents to update.
     */
    limit?: number
  }

  /**
   * reported_content updateManyAndReturn
   */
  export type reported_contentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * The data used to update reported_contents.
     */
    data: XOR<reported_contentUpdateManyMutationInput, reported_contentUncheckedUpdateManyInput>
    /**
     * Filter which reported_contents to update
     */
    where?: reported_contentWhereInput
    /**
     * Limit how many reported_contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reported_content upsert
   */
  export type reported_contentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * The filter to search for the reported_content to update in case it exists.
     */
    where: reported_contentWhereUniqueInput
    /**
     * In case the reported_content found by the `where` argument doesn't exist, create a new reported_content with this data.
     */
    create: XOR<reported_contentCreateInput, reported_contentUncheckedCreateInput>
    /**
     * In case the reported_content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reported_contentUpdateInput, reported_contentUncheckedUpdateInput>
  }

  /**
   * reported_content delete
   */
  export type reported_contentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    /**
     * Filter which reported_content to delete.
     */
    where: reported_contentWhereUniqueInput
  }

  /**
   * reported_content deleteMany
   */
  export type reported_contentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reported_contents to delete
     */
    where?: reported_contentWhereInput
    /**
     * Limit how many reported_contents to delete.
     */
    limit?: number
  }

  /**
   * reported_content.posts_metadata
   */
  export type reported_content$posts_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    where?: posts_metadataWhereInput
  }

  /**
   * reported_content.social_users_reported_content_reported_user_idTosocial_users
   */
  export type reported_content$social_users_reported_content_reported_user_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    where?: social_usersWhereInput
  }

  /**
   * reported_content without action
   */
  export type reported_contentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
  }


  /**
   * Model social_users
   */

  export type AggregateSocial_users = {
    _count: Social_usersCountAggregateOutputType | null
    _min: Social_usersMinAggregateOutputType | null
    _max: Social_usersMaxAggregateOutputType | null
  }

  export type Social_usersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    profile_picture: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Social_usersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    profile_picture: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Social_usersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    profile_picture: number
    bio: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Social_usersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    profile_picture?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type Social_usersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    profile_picture?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type Social_usersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    profile_picture?: true
    bio?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Social_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which social_users to aggregate.
     */
    where?: social_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_users to fetch.
     */
    orderBy?: social_usersOrderByWithRelationInput | social_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: social_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned social_users
    **/
    _count?: true | Social_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Social_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Social_usersMaxAggregateInputType
  }

  export type GetSocial_usersAggregateType<T extends Social_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial_users[P]>
      : GetScalarType<T[P], AggregateSocial_users[P]>
  }




  export type social_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: social_usersWhereInput
    orderBy?: social_usersOrderByWithAggregationInput | social_usersOrderByWithAggregationInput[]
    by: Social_usersScalarFieldEnum[] | Social_usersScalarFieldEnum
    having?: social_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Social_usersCountAggregateInputType | true
    _min?: Social_usersMinAggregateInputType
    _max?: Social_usersMaxAggregateInputType
  }

  export type Social_usersGroupByOutputType = {
    id: string
    username: string
    email: string
    profile_picture: string | null
    bio: string | null
    created_at: Date
    updated_at: Date
    _count: Social_usersCountAggregateOutputType | null
    _min: Social_usersMinAggregateOutputType | null
    _max: Social_usersMaxAggregateOutputType | null
  }

  type GetSocial_usersGroupByPayload<T extends social_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Social_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Social_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Social_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Social_usersGroupByOutputType[P]>
        }
      >
    >


  export type social_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    profile_picture?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
    blocking_blocking_blocked_idTosocial_users?: boolean | social_users$blocking_blocking_blocked_idTosocial_usersArgs<ExtArgs>
    blocking_blocking_blocker_idTosocial_users?: boolean | social_users$blocking_blocking_blocker_idTosocial_usersArgs<ExtArgs>
    comments?: boolean | social_users$commentsArgs<ExtArgs>
    following_following_followee_idTosocial_users?: boolean | social_users$following_following_followee_idTosocial_usersArgs<ExtArgs>
    following_following_follower_idTosocial_users?: boolean | social_users$following_following_follower_idTosocial_usersArgs<ExtArgs>
    likes?: boolean | social_users$likesArgs<ExtArgs>
    notifications?: boolean | social_users$notificationsArgs<ExtArgs>
    posts_metadata?: boolean | social_users$posts_metadataArgs<ExtArgs>
    reported_content_reported_content_reported_user_idTosocial_users?: boolean | social_users$reported_content_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    reported_content_reported_content_reporter_idTosocial_users?: boolean | social_users$reported_content_reported_content_reporter_idTosocial_usersArgs<ExtArgs>
    _count?: boolean | Social_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social_users"]>

  export type social_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    profile_picture?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["social_users"]>

  export type social_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    profile_picture?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["social_users"]>

  export type social_usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    profile_picture?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type social_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "profile_picture" | "bio" | "created_at" | "updated_at", ExtArgs["result"]["social_users"]>
  export type social_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocking_blocking_blocked_idTosocial_users?: boolean | social_users$blocking_blocking_blocked_idTosocial_usersArgs<ExtArgs>
    blocking_blocking_blocker_idTosocial_users?: boolean | social_users$blocking_blocking_blocker_idTosocial_usersArgs<ExtArgs>
    comments?: boolean | social_users$commentsArgs<ExtArgs>
    following_following_followee_idTosocial_users?: boolean | social_users$following_following_followee_idTosocial_usersArgs<ExtArgs>
    following_following_follower_idTosocial_users?: boolean | social_users$following_following_follower_idTosocial_usersArgs<ExtArgs>
    likes?: boolean | social_users$likesArgs<ExtArgs>
    notifications?: boolean | social_users$notificationsArgs<ExtArgs>
    posts_metadata?: boolean | social_users$posts_metadataArgs<ExtArgs>
    reported_content_reported_content_reported_user_idTosocial_users?: boolean | social_users$reported_content_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>
    reported_content_reported_content_reporter_idTosocial_users?: boolean | social_users$reported_content_reported_content_reporter_idTosocial_usersArgs<ExtArgs>
    _count?: boolean | Social_usersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type social_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type social_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $social_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "social_users"
    objects: {
      blocking_blocking_blocked_idTosocial_users: Prisma.$blockingPayload<ExtArgs>[]
      blocking_blocking_blocker_idTosocial_users: Prisma.$blockingPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      following_following_followee_idTosocial_users: Prisma.$followingPayload<ExtArgs>[]
      following_following_follower_idTosocial_users: Prisma.$followingPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      posts_metadata: Prisma.$posts_metadataPayload<ExtArgs>[]
      reported_content_reported_content_reported_user_idTosocial_users: Prisma.$reported_contentPayload<ExtArgs>[]
      reported_content_reported_content_reporter_idTosocial_users: Prisma.$reported_contentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      profile_picture: string | null
      bio: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["social_users"]>
    composites: {}
  }

  type social_usersGetPayload<S extends boolean | null | undefined | social_usersDefaultArgs> = $Result.GetResult<Prisma.$social_usersPayload, S>

  type social_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<social_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Social_usersCountAggregateInputType | true
    }

  export interface social_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['social_users'], meta: { name: 'social_users' } }
    /**
     * Find zero or one Social_users that matches the filter.
     * @param {social_usersFindUniqueArgs} args - Arguments to find a Social_users
     * @example
     * // Get one Social_users
     * const social_users = await prisma.social_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends social_usersFindUniqueArgs>(args: SelectSubset<T, social_usersFindUniqueArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Social_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {social_usersFindUniqueOrThrowArgs} args - Arguments to find a Social_users
     * @example
     * // Get one Social_users
     * const social_users = await prisma.social_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends social_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, social_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_usersFindFirstArgs} args - Arguments to find a Social_users
     * @example
     * // Get one Social_users
     * const social_users = await prisma.social_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends social_usersFindFirstArgs>(args?: SelectSubset<T, social_usersFindFirstArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_usersFindFirstOrThrowArgs} args - Arguments to find a Social_users
     * @example
     * // Get one Social_users
     * const social_users = await prisma.social_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends social_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, social_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Social_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Social_users
     * const social_users = await prisma.social_users.findMany()
     * 
     * // Get first 10 Social_users
     * const social_users = await prisma.social_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const social_usersWithIdOnly = await prisma.social_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends social_usersFindManyArgs>(args?: SelectSubset<T, social_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Social_users.
     * @param {social_usersCreateArgs} args - Arguments to create a Social_users.
     * @example
     * // Create one Social_users
     * const Social_users = await prisma.social_users.create({
     *   data: {
     *     // ... data to create a Social_users
     *   }
     * })
     * 
     */
    create<T extends social_usersCreateArgs>(args: SelectSubset<T, social_usersCreateArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Social_users.
     * @param {social_usersCreateManyArgs} args - Arguments to create many Social_users.
     * @example
     * // Create many Social_users
     * const social_users = await prisma.social_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends social_usersCreateManyArgs>(args?: SelectSubset<T, social_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Social_users and returns the data saved in the database.
     * @param {social_usersCreateManyAndReturnArgs} args - Arguments to create many Social_users.
     * @example
     * // Create many Social_users
     * const social_users = await prisma.social_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Social_users and only return the `id`
     * const social_usersWithIdOnly = await prisma.social_users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends social_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, social_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Social_users.
     * @param {social_usersDeleteArgs} args - Arguments to delete one Social_users.
     * @example
     * // Delete one Social_users
     * const Social_users = await prisma.social_users.delete({
     *   where: {
     *     // ... filter to delete one Social_users
     *   }
     * })
     * 
     */
    delete<T extends social_usersDeleteArgs>(args: SelectSubset<T, social_usersDeleteArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Social_users.
     * @param {social_usersUpdateArgs} args - Arguments to update one Social_users.
     * @example
     * // Update one Social_users
     * const social_users = await prisma.social_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends social_usersUpdateArgs>(args: SelectSubset<T, social_usersUpdateArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Social_users.
     * @param {social_usersDeleteManyArgs} args - Arguments to filter Social_users to delete.
     * @example
     * // Delete a few Social_users
     * const { count } = await prisma.social_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends social_usersDeleteManyArgs>(args?: SelectSubset<T, social_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Social_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Social_users
     * const social_users = await prisma.social_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends social_usersUpdateManyArgs>(args: SelectSubset<T, social_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Social_users and returns the data updated in the database.
     * @param {social_usersUpdateManyAndReturnArgs} args - Arguments to update many Social_users.
     * @example
     * // Update many Social_users
     * const social_users = await prisma.social_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Social_users and only return the `id`
     * const social_usersWithIdOnly = await prisma.social_users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends social_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, social_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Social_users.
     * @param {social_usersUpsertArgs} args - Arguments to update or create a Social_users.
     * @example
     * // Update or create a Social_users
     * const social_users = await prisma.social_users.upsert({
     *   create: {
     *     // ... data to create a Social_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social_users we want to update
     *   }
     * })
     */
    upsert<T extends social_usersUpsertArgs>(args: SelectSubset<T, social_usersUpsertArgs<ExtArgs>>): Prisma__social_usersClient<$Result.GetResult<Prisma.$social_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Social_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_usersCountArgs} args - Arguments to filter Social_users to count.
     * @example
     * // Count the number of Social_users
     * const count = await prisma.social_users.count({
     *   where: {
     *     // ... the filter for the Social_users we want to count
     *   }
     * })
    **/
    count<T extends social_usersCountArgs>(
      args?: Subset<T, social_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Social_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Social_usersAggregateArgs>(args: Subset<T, Social_usersAggregateArgs>): Prisma.PrismaPromise<GetSocial_usersAggregateType<T>>

    /**
     * Group by Social_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends social_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: social_usersGroupByArgs['orderBy'] }
        : { orderBy?: social_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, social_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocial_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the social_users model
   */
  readonly fields: social_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for social_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__social_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocking_blocking_blocked_idTosocial_users<T extends social_users$blocking_blocking_blocked_idTosocial_usersArgs<ExtArgs> = {}>(args?: Subset<T, social_users$blocking_blocking_blocked_idTosocial_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocking_blocking_blocker_idTosocial_users<T extends social_users$blocking_blocking_blocker_idTosocial_usersArgs<ExtArgs> = {}>(args?: Subset<T, social_users$blocking_blocking_blocker_idTosocial_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends social_users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, social_users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following_following_followee_idTosocial_users<T extends social_users$following_following_followee_idTosocial_usersArgs<ExtArgs> = {}>(args?: Subset<T, social_users$following_following_followee_idTosocial_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following_following_follower_idTosocial_users<T extends social_users$following_following_follower_idTosocial_usersArgs<ExtArgs> = {}>(args?: Subset<T, social_users$following_following_follower_idTosocial_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends social_users$likesArgs<ExtArgs> = {}>(args?: Subset<T, social_users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends social_users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, social_users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts_metadata<T extends social_users$posts_metadataArgs<ExtArgs> = {}>(args?: Subset<T, social_users$posts_metadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_metadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reported_content_reported_content_reported_user_idTosocial_users<T extends social_users$reported_content_reported_content_reported_user_idTosocial_usersArgs<ExtArgs> = {}>(args?: Subset<T, social_users$reported_content_reported_content_reported_user_idTosocial_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reported_content_reported_content_reporter_idTosocial_users<T extends social_users$reported_content_reported_content_reporter_idTosocial_usersArgs<ExtArgs> = {}>(args?: Subset<T, social_users$reported_content_reported_content_reporter_idTosocial_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reported_contentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the social_users model
   */ 
  interface social_usersFieldRefs {
    readonly id: FieldRef<"social_users", 'String'>
    readonly username: FieldRef<"social_users", 'String'>
    readonly email: FieldRef<"social_users", 'String'>
    readonly profile_picture: FieldRef<"social_users", 'String'>
    readonly bio: FieldRef<"social_users", 'String'>
    readonly created_at: FieldRef<"social_users", 'DateTime'>
    readonly updated_at: FieldRef<"social_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * social_users findUnique
   */
  export type social_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * Filter, which social_users to fetch.
     */
    where: social_usersWhereUniqueInput
  }

  /**
   * social_users findUniqueOrThrow
   */
  export type social_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * Filter, which social_users to fetch.
     */
    where: social_usersWhereUniqueInput
  }

  /**
   * social_users findFirst
   */
  export type social_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * Filter, which social_users to fetch.
     */
    where?: social_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_users to fetch.
     */
    orderBy?: social_usersOrderByWithRelationInput | social_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for social_users.
     */
    cursor?: social_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of social_users.
     */
    distinct?: Social_usersScalarFieldEnum | Social_usersScalarFieldEnum[]
  }

  /**
   * social_users findFirstOrThrow
   */
  export type social_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * Filter, which social_users to fetch.
     */
    where?: social_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_users to fetch.
     */
    orderBy?: social_usersOrderByWithRelationInput | social_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for social_users.
     */
    cursor?: social_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of social_users.
     */
    distinct?: Social_usersScalarFieldEnum | Social_usersScalarFieldEnum[]
  }

  /**
   * social_users findMany
   */
  export type social_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * Filter, which social_users to fetch.
     */
    where?: social_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_users to fetch.
     */
    orderBy?: social_usersOrderByWithRelationInput | social_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing social_users.
     */
    cursor?: social_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_users.
     */
    skip?: number
    distinct?: Social_usersScalarFieldEnum | Social_usersScalarFieldEnum[]
  }

  /**
   * social_users create
   */
  export type social_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a social_users.
     */
    data: XOR<social_usersCreateInput, social_usersUncheckedCreateInput>
  }

  /**
   * social_users createMany
   */
  export type social_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many social_users.
     */
    data: social_usersCreateManyInput | social_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * social_users createManyAndReturn
   */
  export type social_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * The data used to create many social_users.
     */
    data: social_usersCreateManyInput | social_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * social_users update
   */
  export type social_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a social_users.
     */
    data: XOR<social_usersUpdateInput, social_usersUncheckedUpdateInput>
    /**
     * Choose, which social_users to update.
     */
    where: social_usersWhereUniqueInput
  }

  /**
   * social_users updateMany
   */
  export type social_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update social_users.
     */
    data: XOR<social_usersUpdateManyMutationInput, social_usersUncheckedUpdateManyInput>
    /**
     * Filter which social_users to update
     */
    where?: social_usersWhereInput
    /**
     * Limit how many social_users to update.
     */
    limit?: number
  }

  /**
   * social_users updateManyAndReturn
   */
  export type social_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * The data used to update social_users.
     */
    data: XOR<social_usersUpdateManyMutationInput, social_usersUncheckedUpdateManyInput>
    /**
     * Filter which social_users to update
     */
    where?: social_usersWhereInput
    /**
     * Limit how many social_users to update.
     */
    limit?: number
  }

  /**
   * social_users upsert
   */
  export type social_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the social_users to update in case it exists.
     */
    where: social_usersWhereUniqueInput
    /**
     * In case the social_users found by the `where` argument doesn't exist, create a new social_users with this data.
     */
    create: XOR<social_usersCreateInput, social_usersUncheckedCreateInput>
    /**
     * In case the social_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<social_usersUpdateInput, social_usersUncheckedUpdateInput>
  }

  /**
   * social_users delete
   */
  export type social_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
    /**
     * Filter which social_users to delete.
     */
    where: social_usersWhereUniqueInput
  }

  /**
   * social_users deleteMany
   */
  export type social_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which social_users to delete
     */
    where?: social_usersWhereInput
    /**
     * Limit how many social_users to delete.
     */
    limit?: number
  }

  /**
   * social_users.blocking_blocking_blocked_idTosocial_users
   */
  export type social_users$blocking_blocking_blocked_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    where?: blockingWhereInput
    orderBy?: blockingOrderByWithRelationInput | blockingOrderByWithRelationInput[]
    cursor?: blockingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockingScalarFieldEnum | BlockingScalarFieldEnum[]
  }

  /**
   * social_users.blocking_blocking_blocker_idTosocial_users
   */
  export type social_users$blocking_blocking_blocker_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blocking
     */
    select?: blockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blocking
     */
    omit?: blockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockingInclude<ExtArgs> | null
    where?: blockingWhereInput
    orderBy?: blockingOrderByWithRelationInput | blockingOrderByWithRelationInput[]
    cursor?: blockingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockingScalarFieldEnum | BlockingScalarFieldEnum[]
  }

  /**
   * social_users.comments
   */
  export type social_users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * social_users.following_following_followee_idTosocial_users
   */
  export type social_users$following_following_followee_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    where?: followingWhereInput
    orderBy?: followingOrderByWithRelationInput | followingOrderByWithRelationInput[]
    cursor?: followingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * social_users.following_following_follower_idTosocial_users
   */
  export type social_users$following_following_follower_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the following
     */
    select?: followingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the following
     */
    omit?: followingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followingInclude<ExtArgs> | null
    where?: followingWhereInput
    orderBy?: followingOrderByWithRelationInput | followingOrderByWithRelationInput[]
    cursor?: followingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * social_users.likes
   */
  export type social_users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * social_users.notifications
   */
  export type social_users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * social_users.posts_metadata
   */
  export type social_users$posts_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_metadata
     */
    select?: posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_metadata
     */
    omit?: posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_metadataInclude<ExtArgs> | null
    where?: posts_metadataWhereInput
    orderBy?: posts_metadataOrderByWithRelationInput | posts_metadataOrderByWithRelationInput[]
    cursor?: posts_metadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Posts_metadataScalarFieldEnum | Posts_metadataScalarFieldEnum[]
  }

  /**
   * social_users.reported_content_reported_content_reported_user_idTosocial_users
   */
  export type social_users$reported_content_reported_content_reported_user_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    where?: reported_contentWhereInput
    orderBy?: reported_contentOrderByWithRelationInput | reported_contentOrderByWithRelationInput[]
    cursor?: reported_contentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_contentScalarFieldEnum | Reported_contentScalarFieldEnum[]
  }

  /**
   * social_users.reported_content_reported_content_reporter_idTosocial_users
   */
  export type social_users$reported_content_reported_content_reporter_idTosocial_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reported_content
     */
    select?: reported_contentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reported_content
     */
    omit?: reported_contentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reported_contentInclude<ExtArgs> | null
    where?: reported_contentWhereInput
    orderBy?: reported_contentOrderByWithRelationInput | reported_contentOrderByWithRelationInput[]
    cursor?: reported_contentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reported_contentScalarFieldEnum | Reported_contentScalarFieldEnum[]
  }

  /**
   * social_users without action
   */
  export type social_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_users
     */
    select?: social_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_users
     */
    omit?: social_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BlockingScalarFieldEnum: {
    id: 'id',
    blocker_id: 'blocker_id',
    blocked_id: 'blocked_id',
    created_at: 'created_at'
  };

  export type BlockingScalarFieldEnum = (typeof BlockingScalarFieldEnum)[keyof typeof BlockingScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    post_id: 'post_id',
    user_id: 'user_id',
    parent_comment_id: 'parent_comment_id',
    content: 'content',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const FollowingScalarFieldEnum: {
    id: 'id',
    follower_id: 'follower_id',
    followee_id: 'followee_id',
    followed_at: 'followed_at'
  };

  export type FollowingScalarFieldEnum = (typeof FollowingScalarFieldEnum)[keyof typeof FollowingScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    user_id: 'user_id',
    post_id: 'post_id',
    liked_at: 'liked_at'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    notification_id: 'notification_id',
    user_id: 'user_id',
    notification_type: 'notification_type',
    notification_content: 'notification_content',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Posts_analyticsScalarFieldEnum: {
    post_id: 'post_id',
    views_count: 'views_count',
    likes_count: 'likes_count',
    shares_count: 'shares_count',
    comments_count: 'comments_count',
    updated_at: 'updated_at'
  };

  export type Posts_analyticsScalarFieldEnum = (typeof Posts_analyticsScalarFieldEnum)[keyof typeof Posts_analyticsScalarFieldEnum]


  export const Posts_metadataScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    summary: 'summary',
    post_type: 'post_type',
    visibility: 'visibility',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Posts_metadataScalarFieldEnum = (typeof Posts_metadataScalarFieldEnum)[keyof typeof Posts_metadataScalarFieldEnum]


  export const Reported_contentScalarFieldEnum: {
    id: 'id',
    reporter_id: 'reporter_id',
    reported_user_id: 'reported_user_id',
    post_id: 'post_id',
    reason: 'reason',
    status: 'status',
    created_at: 'created_at'
  };

  export type Reported_contentScalarFieldEnum = (typeof Reported_contentScalarFieldEnum)[keyof typeof Reported_contentScalarFieldEnum]


  export const Social_usersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    profile_picture: 'profile_picture',
    bio: 'bio',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Social_usersScalarFieldEnum = (typeof Social_usersScalarFieldEnum)[keyof typeof Social_usersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type blockingWhereInput = {
    AND?: blockingWhereInput | blockingWhereInput[]
    OR?: blockingWhereInput[]
    NOT?: blockingWhereInput | blockingWhereInput[]
    id?: UuidFilter<"blocking"> | string
    blocker_id?: UuidFilter<"blocking"> | string
    blocked_id?: UuidFilter<"blocking"> | string
    created_at?: DateTimeFilter<"blocking"> | Date | string
    social_users_blocking_blocked_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
    social_users_blocking_blocker_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }

  export type blockingOrderByWithRelationInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
    social_users_blocking_blocked_idTosocial_users?: social_usersOrderByWithRelationInput
    social_users_blocking_blocker_idTosocial_users?: social_usersOrderByWithRelationInput
  }

  export type blockingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blocker_id_blocked_id?: blockingBlocker_idBlocked_idCompoundUniqueInput
    AND?: blockingWhereInput | blockingWhereInput[]
    OR?: blockingWhereInput[]
    NOT?: blockingWhereInput | blockingWhereInput[]
    blocker_id?: UuidFilter<"blocking"> | string
    blocked_id?: UuidFilter<"blocking"> | string
    created_at?: DateTimeFilter<"blocking"> | Date | string
    social_users_blocking_blocked_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
    social_users_blocking_blocker_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }, "id" | "blocker_id_blocked_id">

  export type blockingOrderByWithAggregationInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
    _count?: blockingCountOrderByAggregateInput
    _max?: blockingMaxOrderByAggregateInput
    _min?: blockingMinOrderByAggregateInput
  }

  export type blockingScalarWhereWithAggregatesInput = {
    AND?: blockingScalarWhereWithAggregatesInput | blockingScalarWhereWithAggregatesInput[]
    OR?: blockingScalarWhereWithAggregatesInput[]
    NOT?: blockingScalarWhereWithAggregatesInput | blockingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"blocking"> | string
    blocker_id?: UuidWithAggregatesFilter<"blocking"> | string
    blocked_id?: UuidWithAggregatesFilter<"blocking"> | string
    created_at?: DateTimeWithAggregatesFilter<"blocking"> | Date | string
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    comment_id?: UuidFilter<"comments"> | string
    post_id?: UuidFilter<"comments"> | string
    user_id?: UuidFilter<"comments"> | string
    parent_comment_id?: UuidNullableFilter<"comments"> | string | null
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    posts_metadata?: XOR<Posts_metadataScalarRelationFilter, posts_metadataWhereInput>
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }

  export type commentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    comments?: commentsOrderByWithRelationInput
    other_comments?: commentsOrderByRelationAggregateInput
    posts_metadata?: posts_metadataOrderByWithRelationInput
    social_users?: social_usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: string
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    post_id?: UuidFilter<"comments"> | string
    user_id?: UuidFilter<"comments"> | string
    parent_comment_id?: UuidNullableFilter<"comments"> | string | null
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    comments?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    other_comments?: CommentsListRelationFilter
    posts_metadata?: XOR<Posts_metadataScalarRelationFilter, posts_metadataWhereInput>
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }, "comment_id">

  export type commentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    comment_id?: UuidWithAggregatesFilter<"comments"> | string
    post_id?: UuidWithAggregatesFilter<"comments"> | string
    user_id?: UuidWithAggregatesFilter<"comments"> | string
    parent_comment_id?: UuidNullableWithAggregatesFilter<"comments"> | string | null
    content?: StringWithAggregatesFilter<"comments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type followingWhereInput = {
    AND?: followingWhereInput | followingWhereInput[]
    OR?: followingWhereInput[]
    NOT?: followingWhereInput | followingWhereInput[]
    id?: UuidFilter<"following"> | string
    follower_id?: UuidFilter<"following"> | string
    followee_id?: UuidFilter<"following"> | string
    followed_at?: DateTimeNullableFilter<"following"> | Date | string | null
    social_users_following_followee_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
    social_users_following_follower_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }

  export type followingOrderByWithRelationInput = {
    id?: SortOrder
    follower_id?: SortOrder
    followee_id?: SortOrder
    followed_at?: SortOrderInput | SortOrder
    social_users_following_followee_idTosocial_users?: social_usersOrderByWithRelationInput
    social_users_following_follower_idTosocial_users?: social_usersOrderByWithRelationInput
  }

  export type followingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    follower_id_followee_id?: followingFollower_idFollowee_idCompoundUniqueInput
    AND?: followingWhereInput | followingWhereInput[]
    OR?: followingWhereInput[]
    NOT?: followingWhereInput | followingWhereInput[]
    follower_id?: UuidFilter<"following"> | string
    followee_id?: UuidFilter<"following"> | string
    followed_at?: DateTimeNullableFilter<"following"> | Date | string | null
    social_users_following_followee_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
    social_users_following_follower_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }, "id" | "follower_id_followee_id">

  export type followingOrderByWithAggregationInput = {
    id?: SortOrder
    follower_id?: SortOrder
    followee_id?: SortOrder
    followed_at?: SortOrderInput | SortOrder
    _count?: followingCountOrderByAggregateInput
    _max?: followingMaxOrderByAggregateInput
    _min?: followingMinOrderByAggregateInput
  }

  export type followingScalarWhereWithAggregatesInput = {
    AND?: followingScalarWhereWithAggregatesInput | followingScalarWhereWithAggregatesInput[]
    OR?: followingScalarWhereWithAggregatesInput[]
    NOT?: followingScalarWhereWithAggregatesInput | followingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"following"> | string
    follower_id?: UuidWithAggregatesFilter<"following"> | string
    followee_id?: UuidWithAggregatesFilter<"following"> | string
    followed_at?: DateTimeNullableWithAggregatesFilter<"following"> | Date | string | null
  }

  export type likesWhereInput = {
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    user_id?: UuidFilter<"likes"> | string
    post_id?: UuidFilter<"likes"> | string
    liked_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    posts_metadata?: XOR<Posts_metadataScalarRelationFilter, posts_metadataWhereInput>
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }

  export type likesOrderByWithRelationInput = {
    user_id?: SortOrder
    post_id?: SortOrder
    liked_at?: SortOrderInput | SortOrder
    posts_metadata?: posts_metadataOrderByWithRelationInput
    social_users?: social_usersOrderByWithRelationInput
  }

  export type likesWhereUniqueInput = Prisma.AtLeast<{
    user_id_post_id?: likesUser_idPost_idCompoundUniqueInput
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    user_id?: UuidFilter<"likes"> | string
    post_id?: UuidFilter<"likes"> | string
    liked_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    posts_metadata?: XOR<Posts_metadataScalarRelationFilter, posts_metadataWhereInput>
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }, "user_id_post_id">

  export type likesOrderByWithAggregationInput = {
    user_id?: SortOrder
    post_id?: SortOrder
    liked_at?: SortOrderInput | SortOrder
    _count?: likesCountOrderByAggregateInput
    _max?: likesMaxOrderByAggregateInput
    _min?: likesMinOrderByAggregateInput
  }

  export type likesScalarWhereWithAggregatesInput = {
    AND?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    OR?: likesScalarWhereWithAggregatesInput[]
    NOT?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"likes"> | string
    post_id?: UuidWithAggregatesFilter<"likes"> | string
    liked_at?: DateTimeNullableWithAggregatesFilter<"likes"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    notification_id?: UuidFilter<"notifications"> | string
    user_id?: UuidFilter<"notifications"> | string
    notification_type?: StringNullableFilter<"notifications"> | string | null
    notification_content?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeFilter<"notifications"> | Date | string
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    notification_type?: SortOrderInput | SortOrder
    notification_content?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrder
    social_users?: social_usersOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: string
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: UuidFilter<"notifications"> | string
    notification_type?: StringNullableFilter<"notifications"> | string | null
    notification_content?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeFilter<"notifications"> | Date | string
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }, "notification_id">

  export type notificationsOrderByWithAggregationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    notification_type?: SortOrderInput | SortOrder
    notification_content?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    notification_id?: UuidWithAggregatesFilter<"notifications"> | string
    user_id?: UuidWithAggregatesFilter<"notifications"> | string
    notification_type?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    notification_content?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    is_read?: BoolNullableWithAggregatesFilter<"notifications"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
  }

  export type posts_analyticsWhereInput = {
    AND?: posts_analyticsWhereInput | posts_analyticsWhereInput[]
    OR?: posts_analyticsWhereInput[]
    NOT?: posts_analyticsWhereInput | posts_analyticsWhereInput[]
    post_id?: UuidFilter<"posts_analytics"> | string
    views_count?: IntNullableFilter<"posts_analytics"> | number | null
    likes_count?: IntNullableFilter<"posts_analytics"> | number | null
    shares_count?: IntNullableFilter<"posts_analytics"> | number | null
    comments_count?: IntNullableFilter<"posts_analytics"> | number | null
    updated_at?: DateTimeFilter<"posts_analytics"> | Date | string
    posts_metadata?: XOR<Posts_metadataScalarRelationFilter, posts_metadataWhereInput>
  }

  export type posts_analyticsOrderByWithRelationInput = {
    post_id?: SortOrder
    views_count?: SortOrderInput | SortOrder
    likes_count?: SortOrderInput | SortOrder
    shares_count?: SortOrderInput | SortOrder
    comments_count?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    posts_metadata?: posts_metadataOrderByWithRelationInput
  }

  export type posts_analyticsWhereUniqueInput = Prisma.AtLeast<{
    post_id?: string
    AND?: posts_analyticsWhereInput | posts_analyticsWhereInput[]
    OR?: posts_analyticsWhereInput[]
    NOT?: posts_analyticsWhereInput | posts_analyticsWhereInput[]
    views_count?: IntNullableFilter<"posts_analytics"> | number | null
    likes_count?: IntNullableFilter<"posts_analytics"> | number | null
    shares_count?: IntNullableFilter<"posts_analytics"> | number | null
    comments_count?: IntNullableFilter<"posts_analytics"> | number | null
    updated_at?: DateTimeFilter<"posts_analytics"> | Date | string
    posts_metadata?: XOR<Posts_metadataScalarRelationFilter, posts_metadataWhereInput>
  }, "post_id">

  export type posts_analyticsOrderByWithAggregationInput = {
    post_id?: SortOrder
    views_count?: SortOrderInput | SortOrder
    likes_count?: SortOrderInput | SortOrder
    shares_count?: SortOrderInput | SortOrder
    comments_count?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: posts_analyticsCountOrderByAggregateInput
    _avg?: posts_analyticsAvgOrderByAggregateInput
    _max?: posts_analyticsMaxOrderByAggregateInput
    _min?: posts_analyticsMinOrderByAggregateInput
    _sum?: posts_analyticsSumOrderByAggregateInput
  }

  export type posts_analyticsScalarWhereWithAggregatesInput = {
    AND?: posts_analyticsScalarWhereWithAggregatesInput | posts_analyticsScalarWhereWithAggregatesInput[]
    OR?: posts_analyticsScalarWhereWithAggregatesInput[]
    NOT?: posts_analyticsScalarWhereWithAggregatesInput | posts_analyticsScalarWhereWithAggregatesInput[]
    post_id?: UuidWithAggregatesFilter<"posts_analytics"> | string
    views_count?: IntNullableWithAggregatesFilter<"posts_analytics"> | number | null
    likes_count?: IntNullableWithAggregatesFilter<"posts_analytics"> | number | null
    shares_count?: IntNullableWithAggregatesFilter<"posts_analytics"> | number | null
    comments_count?: IntNullableWithAggregatesFilter<"posts_analytics"> | number | null
    updated_at?: DateTimeWithAggregatesFilter<"posts_analytics"> | Date | string
  }

  export type posts_metadataWhereInput = {
    AND?: posts_metadataWhereInput | posts_metadataWhereInput[]
    OR?: posts_metadataWhereInput[]
    NOT?: posts_metadataWhereInput | posts_metadataWhereInput[]
    id?: UuidFilter<"posts_metadata"> | string
    user_id?: UuidFilter<"posts_metadata"> | string
    title?: StringNullableFilter<"posts_metadata"> | string | null
    summary?: StringNullableFilter<"posts_metadata"> | string | null
    post_type?: StringNullableFilter<"posts_metadata"> | string | null
    visibility?: StringNullableFilter<"posts_metadata"> | string | null
    price?: DecimalNullableFilter<"posts_metadata"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"posts_metadata"> | Date | string
    updated_at?: DateTimeFilter<"posts_metadata"> | Date | string
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    posts_analytics?: XOR<Posts_analyticsNullableScalarRelationFilter, posts_analyticsWhereInput> | null
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
    reported_content?: Reported_contentListRelationFilter
  }

  export type posts_metadataOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    post_type?: SortOrderInput | SortOrder
    visibility?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    posts_analytics?: posts_analyticsOrderByWithRelationInput
    social_users?: social_usersOrderByWithRelationInput
    reported_content?: reported_contentOrderByRelationAggregateInput
  }

  export type posts_metadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: posts_metadataWhereInput | posts_metadataWhereInput[]
    OR?: posts_metadataWhereInput[]
    NOT?: posts_metadataWhereInput | posts_metadataWhereInput[]
    user_id?: UuidFilter<"posts_metadata"> | string
    title?: StringNullableFilter<"posts_metadata"> | string | null
    summary?: StringNullableFilter<"posts_metadata"> | string | null
    post_type?: StringNullableFilter<"posts_metadata"> | string | null
    visibility?: StringNullableFilter<"posts_metadata"> | string | null
    price?: DecimalNullableFilter<"posts_metadata"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"posts_metadata"> | Date | string
    updated_at?: DateTimeFilter<"posts_metadata"> | Date | string
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    posts_analytics?: XOR<Posts_analyticsNullableScalarRelationFilter, posts_analyticsWhereInput> | null
    social_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
    reported_content?: Reported_contentListRelationFilter
  }, "id">

  export type posts_metadataOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    post_type?: SortOrderInput | SortOrder
    visibility?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: posts_metadataCountOrderByAggregateInput
    _avg?: posts_metadataAvgOrderByAggregateInput
    _max?: posts_metadataMaxOrderByAggregateInput
    _min?: posts_metadataMinOrderByAggregateInput
    _sum?: posts_metadataSumOrderByAggregateInput
  }

  export type posts_metadataScalarWhereWithAggregatesInput = {
    AND?: posts_metadataScalarWhereWithAggregatesInput | posts_metadataScalarWhereWithAggregatesInput[]
    OR?: posts_metadataScalarWhereWithAggregatesInput[]
    NOT?: posts_metadataScalarWhereWithAggregatesInput | posts_metadataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"posts_metadata"> | string
    user_id?: UuidWithAggregatesFilter<"posts_metadata"> | string
    title?: StringNullableWithAggregatesFilter<"posts_metadata"> | string | null
    summary?: StringNullableWithAggregatesFilter<"posts_metadata"> | string | null
    post_type?: StringNullableWithAggregatesFilter<"posts_metadata"> | string | null
    visibility?: StringNullableWithAggregatesFilter<"posts_metadata"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"posts_metadata"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"posts_metadata"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"posts_metadata"> | Date | string
  }

  export type reported_contentWhereInput = {
    AND?: reported_contentWhereInput | reported_contentWhereInput[]
    OR?: reported_contentWhereInput[]
    NOT?: reported_contentWhereInput | reported_contentWhereInput[]
    id?: UuidFilter<"reported_content"> | string
    reporter_id?: UuidFilter<"reported_content"> | string
    reported_user_id?: UuidNullableFilter<"reported_content"> | string | null
    post_id?: UuidNullableFilter<"reported_content"> | string | null
    reason?: StringFilter<"reported_content"> | string
    status?: StringNullableFilter<"reported_content"> | string | null
    created_at?: DateTimeFilter<"reported_content"> | Date | string
    posts_metadata?: XOR<Posts_metadataNullableScalarRelationFilter, posts_metadataWhereInput> | null
    social_users_reported_content_reported_user_idTosocial_users?: XOR<Social_usersNullableScalarRelationFilter, social_usersWhereInput> | null
    social_users_reported_content_reporter_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }

  export type reported_contentOrderByWithRelationInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_user_id?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    reason?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    posts_metadata?: posts_metadataOrderByWithRelationInput
    social_users_reported_content_reported_user_idTosocial_users?: social_usersOrderByWithRelationInput
    social_users_reported_content_reporter_idTosocial_users?: social_usersOrderByWithRelationInput
  }

  export type reported_contentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reported_contentWhereInput | reported_contentWhereInput[]
    OR?: reported_contentWhereInput[]
    NOT?: reported_contentWhereInput | reported_contentWhereInput[]
    reporter_id?: UuidFilter<"reported_content"> | string
    reported_user_id?: UuidNullableFilter<"reported_content"> | string | null
    post_id?: UuidNullableFilter<"reported_content"> | string | null
    reason?: StringFilter<"reported_content"> | string
    status?: StringNullableFilter<"reported_content"> | string | null
    created_at?: DateTimeFilter<"reported_content"> | Date | string
    posts_metadata?: XOR<Posts_metadataNullableScalarRelationFilter, posts_metadataWhereInput> | null
    social_users_reported_content_reported_user_idTosocial_users?: XOR<Social_usersNullableScalarRelationFilter, social_usersWhereInput> | null
    social_users_reported_content_reporter_idTosocial_users?: XOR<Social_usersScalarRelationFilter, social_usersWhereInput>
  }, "id">

  export type reported_contentOrderByWithAggregationInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_user_id?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    reason?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: reported_contentCountOrderByAggregateInput
    _max?: reported_contentMaxOrderByAggregateInput
    _min?: reported_contentMinOrderByAggregateInput
  }

  export type reported_contentScalarWhereWithAggregatesInput = {
    AND?: reported_contentScalarWhereWithAggregatesInput | reported_contentScalarWhereWithAggregatesInput[]
    OR?: reported_contentScalarWhereWithAggregatesInput[]
    NOT?: reported_contentScalarWhereWithAggregatesInput | reported_contentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"reported_content"> | string
    reporter_id?: UuidWithAggregatesFilter<"reported_content"> | string
    reported_user_id?: UuidNullableWithAggregatesFilter<"reported_content"> | string | null
    post_id?: UuidNullableWithAggregatesFilter<"reported_content"> | string | null
    reason?: StringWithAggregatesFilter<"reported_content"> | string
    status?: StringNullableWithAggregatesFilter<"reported_content"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"reported_content"> | Date | string
  }

  export type social_usersWhereInput = {
    AND?: social_usersWhereInput | social_usersWhereInput[]
    OR?: social_usersWhereInput[]
    NOT?: social_usersWhereInput | social_usersWhereInput[]
    id?: UuidFilter<"social_users"> | string
    username?: StringFilter<"social_users"> | string
    email?: StringFilter<"social_users"> | string
    profile_picture?: StringNullableFilter<"social_users"> | string | null
    bio?: StringNullableFilter<"social_users"> | string | null
    created_at?: DateTimeFilter<"social_users"> | Date | string
    updated_at?: DateTimeFilter<"social_users"> | Date | string
    blocking_blocking_blocked_idTosocial_users?: BlockingListRelationFilter
    blocking_blocking_blocker_idTosocial_users?: BlockingListRelationFilter
    comments?: CommentsListRelationFilter
    following_following_followee_idTosocial_users?: FollowingListRelationFilter
    following_following_follower_idTosocial_users?: FollowingListRelationFilter
    likes?: LikesListRelationFilter
    notifications?: NotificationsListRelationFilter
    posts_metadata?: Posts_metadataListRelationFilter
    reported_content_reported_content_reported_user_idTosocial_users?: Reported_contentListRelationFilter
    reported_content_reported_content_reporter_idTosocial_users?: Reported_contentListRelationFilter
  }

  export type social_usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    blocking_blocking_blocked_idTosocial_users?: blockingOrderByRelationAggregateInput
    blocking_blocking_blocker_idTosocial_users?: blockingOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    following_following_followee_idTosocial_users?: followingOrderByRelationAggregateInput
    following_following_follower_idTosocial_users?: followingOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    posts_metadata?: posts_metadataOrderByRelationAggregateInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentOrderByRelationAggregateInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentOrderByRelationAggregateInput
  }

  export type social_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: social_usersWhereInput | social_usersWhereInput[]
    OR?: social_usersWhereInput[]
    NOT?: social_usersWhereInput | social_usersWhereInput[]
    profile_picture?: StringNullableFilter<"social_users"> | string | null
    bio?: StringNullableFilter<"social_users"> | string | null
    created_at?: DateTimeFilter<"social_users"> | Date | string
    updated_at?: DateTimeFilter<"social_users"> | Date | string
    blocking_blocking_blocked_idTosocial_users?: BlockingListRelationFilter
    blocking_blocking_blocker_idTosocial_users?: BlockingListRelationFilter
    comments?: CommentsListRelationFilter
    following_following_followee_idTosocial_users?: FollowingListRelationFilter
    following_following_follower_idTosocial_users?: FollowingListRelationFilter
    likes?: LikesListRelationFilter
    notifications?: NotificationsListRelationFilter
    posts_metadata?: Posts_metadataListRelationFilter
    reported_content_reported_content_reported_user_idTosocial_users?: Reported_contentListRelationFilter
    reported_content_reported_content_reporter_idTosocial_users?: Reported_contentListRelationFilter
  }, "id" | "username" | "email">

  export type social_usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: social_usersCountOrderByAggregateInput
    _max?: social_usersMaxOrderByAggregateInput
    _min?: social_usersMinOrderByAggregateInput
  }

  export type social_usersScalarWhereWithAggregatesInput = {
    AND?: social_usersScalarWhereWithAggregatesInput | social_usersScalarWhereWithAggregatesInput[]
    OR?: social_usersScalarWhereWithAggregatesInput[]
    NOT?: social_usersScalarWhereWithAggregatesInput | social_usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"social_users"> | string
    username?: StringWithAggregatesFilter<"social_users"> | string
    email?: StringWithAggregatesFilter<"social_users"> | string
    profile_picture?: StringNullableWithAggregatesFilter<"social_users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"social_users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"social_users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"social_users"> | Date | string
  }

  export type blockingCreateInput = {
    id?: string
    created_at?: Date | string
    social_users_blocking_blocked_idTosocial_users: social_usersCreateNestedOneWithoutBlocking_blocking_blocked_idTosocial_usersInput
    social_users_blocking_blocker_idTosocial_users: social_usersCreateNestedOneWithoutBlocking_blocking_blocker_idTosocial_usersInput
  }

  export type blockingUncheckedCreateInput = {
    id?: string
    blocker_id: string
    blocked_id: string
    created_at?: Date | string
  }

  export type blockingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_users_blocking_blocked_idTosocial_users?: social_usersUpdateOneRequiredWithoutBlocking_blocking_blocked_idTosocial_usersNestedInput
    social_users_blocking_blocker_idTosocial_users?: social_usersUpdateOneRequiredWithoutBlocking_blocking_blocker_idTosocial_usersNestedInput
  }

  export type blockingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockingCreateManyInput = {
    id?: string
    blocker_id: string
    blocked_id: string
    created_at?: Date | string
  }

  export type blockingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateInput = {
    comment_id?: string
    content: string
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    posts_metadata: posts_metadataCreateNestedOneWithoutCommentsInput
    social_users: social_usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    comment_id?: string
    post_id: string
    user_id: string
    parent_comment_id?: string | null
    content: string
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    posts_metadata?: posts_metadataUpdateOneRequiredWithoutCommentsNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsCreateManyInput = {
    comment_id?: string
    post_id: string
    user_id: string
    parent_comment_id?: string | null
    content: string
    created_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followingCreateInput = {
    id?: string
    followed_at?: Date | string | null
    social_users_following_followee_idTosocial_users: social_usersCreateNestedOneWithoutFollowing_following_followee_idTosocial_usersInput
    social_users_following_follower_idTosocial_users: social_usersCreateNestedOneWithoutFollowing_following_follower_idTosocial_usersInput
  }

  export type followingUncheckedCreateInput = {
    id?: string
    follower_id: string
    followee_id: string
    followed_at?: Date | string | null
  }

  export type followingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_users_following_followee_idTosocial_users?: social_usersUpdateOneRequiredWithoutFollowing_following_followee_idTosocial_usersNestedInput
    social_users_following_follower_idTosocial_users?: social_usersUpdateOneRequiredWithoutFollowing_following_follower_idTosocial_usersNestedInput
  }

  export type followingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    followee_id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followingCreateManyInput = {
    id?: string
    follower_id: string
    followee_id: string
    followed_at?: Date | string | null
  }

  export type followingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    followee_id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesCreateInput = {
    liked_at?: Date | string | null
    posts_metadata: posts_metadataCreateNestedOneWithoutLikesInput
    social_users: social_usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateInput = {
    user_id: string
    post_id: string
    liked_at?: Date | string | null
  }

  export type likesUpdateInput = {
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts_metadata?: posts_metadataUpdateOneRequiredWithoutLikesNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesCreateManyInput = {
    user_id: string
    post_id: string
    liked_at?: Date | string | null
  }

  export type likesUpdateManyMutationInput = {
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    notification_id?: string
    notification_type?: string | null
    notification_content?: string | null
    is_read?: boolean | null
    created_at?: Date | string
    social_users: social_usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    notification_id?: string
    user_id: string
    notification_type?: string | null
    notification_content?: string | null
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type notificationsUpdateInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    notification_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_users?: social_usersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    notification_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateManyInput = {
    notification_id?: string
    user_id: string
    notification_type?: string | null
    notification_content?: string | null
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type notificationsUpdateManyMutationInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    notification_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    notification_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posts_analyticsCreateInput = {
    views_count?: number | null
    likes_count?: number | null
    shares_count?: number | null
    comments_count?: number | null
    updated_at?: Date | string
    posts_metadata: posts_metadataCreateNestedOneWithoutPosts_analyticsInput
  }

  export type posts_analyticsUncheckedCreateInput = {
    post_id: string
    views_count?: number | null
    likes_count?: number | null
    shares_count?: number | null
    comments_count?: number | null
    updated_at?: Date | string
  }

  export type posts_analyticsUpdateInput = {
    views_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    shares_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    posts_metadata?: posts_metadataUpdateOneRequiredWithoutPosts_analyticsNestedInput
  }

  export type posts_analyticsUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    views_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    shares_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posts_analyticsCreateManyInput = {
    post_id: string
    views_count?: number | null
    likes_count?: number | null
    shares_count?: number | null
    comments_count?: number | null
    updated_at?: Date | string
  }

  export type posts_analyticsUpdateManyMutationInput = {
    views_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    shares_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posts_analyticsUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    views_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    shares_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posts_metadataCreateInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutPosts_metadataInput
    likes?: likesCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsCreateNestedOneWithoutPosts_metadataInput
    social_users: social_usersCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataUncheckedCreateInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPosts_metadataInput
    likes?: likesUncheckedCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsUncheckedCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentUncheckedCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUpdateOneWithoutPosts_metadataNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUpdateManyWithoutPosts_metadataNestedInput
  }

  export type posts_metadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUncheckedUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUncheckedUpdateOneWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUncheckedUpdateManyWithoutPosts_metadataNestedInput
  }

  export type posts_metadataCreateManyInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type posts_metadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posts_metadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentCreateInput = {
    id?: string
    reason: string
    status?: string | null
    created_at?: Date | string
    posts_metadata?: posts_metadataCreateNestedOneWithoutReported_contentInput
    social_users_reported_content_reported_user_idTosocial_users?: social_usersCreateNestedOneWithoutReported_content_reported_content_reported_user_idTosocial_usersInput
    social_users_reported_content_reporter_idTosocial_users: social_usersCreateNestedOneWithoutReported_content_reported_content_reporter_idTosocial_usersInput
  }

  export type reported_contentUncheckedCreateInput = {
    id?: string
    reporter_id: string
    reported_user_id?: string | null
    post_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type reported_contentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    posts_metadata?: posts_metadataUpdateOneWithoutReported_contentNestedInput
    social_users_reported_content_reported_user_idTosocial_users?: social_usersUpdateOneWithoutReported_content_reported_content_reported_user_idTosocial_usersNestedInput
    social_users_reported_content_reporter_idTosocial_users?: social_usersUpdateOneRequiredWithoutReported_content_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type reported_contentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporter_id?: StringFieldUpdateOperationsInput | string
    reported_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentCreateManyInput = {
    id?: string
    reporter_id: string
    reported_user_id?: string | null
    post_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type reported_contentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporter_id?: StringFieldUpdateOperationsInput | string
    reported_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_usersCreateInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersCreateManyInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type social_usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Social_usersScalarRelationFilter = {
    is?: social_usersWhereInput
    isNot?: social_usersWhereInput
  }

  export type blockingBlocker_idBlocked_idCompoundUniqueInput = {
    blocker_id: string
    blocked_id: string
  }

  export type blockingCountOrderByAggregateInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
  }

  export type blockingMaxOrderByAggregateInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
  }

  export type blockingMinOrderByAggregateInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: commentsWhereInput | null
    isNot?: commentsWhereInput | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type Posts_metadataScalarRelationFilter = {
    is?: posts_metadataWhereInput
    isNot?: posts_metadataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    parent_comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    parent_comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    parent_comment_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type followingFollower_idFollowee_idCompoundUniqueInput = {
    follower_id: string
    followee_id: string
  }

  export type followingCountOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    followee_id?: SortOrder
    followed_at?: SortOrder
  }

  export type followingMaxOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    followee_id?: SortOrder
    followed_at?: SortOrder
  }

  export type followingMinOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    followee_id?: SortOrder
    followed_at?: SortOrder
  }

  export type likesUser_idPost_idCompoundUniqueInput = {
    user_id: string
    post_id: string
  }

  export type likesCountOrderByAggregateInput = {
    user_id?: SortOrder
    post_id?: SortOrder
    liked_at?: SortOrder
  }

  export type likesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    post_id?: SortOrder
    liked_at?: SortOrder
  }

  export type likesMinOrderByAggregateInput = {
    user_id?: SortOrder
    post_id?: SortOrder
    liked_at?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type notificationsCountOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    notification_type?: SortOrder
    notification_content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    notification_type?: SortOrder
    notification_content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    notification_type?: SortOrder
    notification_content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type posts_analyticsCountOrderByAggregateInput = {
    post_id?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    shares_count?: SortOrder
    comments_count?: SortOrder
    updated_at?: SortOrder
  }

  export type posts_analyticsAvgOrderByAggregateInput = {
    views_count?: SortOrder
    likes_count?: SortOrder
    shares_count?: SortOrder
    comments_count?: SortOrder
  }

  export type posts_analyticsMaxOrderByAggregateInput = {
    post_id?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    shares_count?: SortOrder
    comments_count?: SortOrder
    updated_at?: SortOrder
  }

  export type posts_analyticsMinOrderByAggregateInput = {
    post_id?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    shares_count?: SortOrder
    comments_count?: SortOrder
    updated_at?: SortOrder
  }

  export type posts_analyticsSumOrderByAggregateInput = {
    views_count?: SortOrder
    likes_count?: SortOrder
    shares_count?: SortOrder
    comments_count?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type LikesListRelationFilter = {
    every?: likesWhereInput
    some?: likesWhereInput
    none?: likesWhereInput
  }

  export type Posts_analyticsNullableScalarRelationFilter = {
    is?: posts_analyticsWhereInput | null
    isNot?: posts_analyticsWhereInput | null
  }

  export type Reported_contentListRelationFilter = {
    every?: reported_contentWhereInput
    some?: reported_contentWhereInput
    none?: reported_contentWhereInput
  }

  export type likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reported_contentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type posts_metadataCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    post_type?: SortOrder
    visibility?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type posts_metadataAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type posts_metadataMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    post_type?: SortOrder
    visibility?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type posts_metadataMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    post_type?: SortOrder
    visibility?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type posts_metadataSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Posts_metadataNullableScalarRelationFilter = {
    is?: posts_metadataWhereInput | null
    isNot?: posts_metadataWhereInput | null
  }

  export type Social_usersNullableScalarRelationFilter = {
    is?: social_usersWhereInput | null
    isNot?: social_usersWhereInput | null
  }

  export type reported_contentCountOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_user_id?: SortOrder
    post_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reported_contentMaxOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_user_id?: SortOrder
    post_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reported_contentMinOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_user_id?: SortOrder
    post_id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type BlockingListRelationFilter = {
    every?: blockingWhereInput
    some?: blockingWhereInput
    none?: blockingWhereInput
  }

  export type FollowingListRelationFilter = {
    every?: followingWhereInput
    some?: followingWhereInput
    none?: followingWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type Posts_metadataListRelationFilter = {
    every?: posts_metadataWhereInput
    some?: posts_metadataWhereInput
    none?: posts_metadataWhereInput
  }

  export type blockingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type followingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type posts_metadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type social_usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile_picture?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type social_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile_picture?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type social_usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    profile_picture?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type social_usersCreateNestedOneWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    create?: XOR<social_usersCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutBlocking_blocking_blocked_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
  }

  export type social_usersCreateNestedOneWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    create?: XOR<social_usersCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutBlocking_blocking_blocker_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type social_usersUpdateOneRequiredWithoutBlocking_blocking_blocked_idTosocial_usersNestedInput = {
    create?: XOR<social_usersCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutBlocking_blocking_blocked_idTosocial_usersInput
    upsert?: social_usersUpsertWithoutBlocking_blocking_blocked_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutBlocking_blocking_blocked_idTosocial_usersInput, social_usersUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput>, social_usersUncheckedUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput>
  }

  export type social_usersUpdateOneRequiredWithoutBlocking_blocking_blocker_idTosocial_usersNestedInput = {
    create?: XOR<social_usersCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutBlocking_blocking_blocker_idTosocial_usersInput
    upsert?: social_usersUpsertWithoutBlocking_blocking_blocker_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutBlocking_blocking_blocker_idTosocial_usersInput, social_usersUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput>, social_usersUncheckedUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput>
  }

  export type commentsCreateNestedOneWithoutOther_commentsInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type posts_metadataCreateNestedOneWithoutCommentsInput = {
    create?: XOR<posts_metadataCreateWithoutCommentsInput, posts_metadataUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutCommentsInput
    connect?: posts_metadataWhereUniqueInput
  }

  export type social_usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<social_usersCreateWithoutCommentsInput, social_usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutCommentsInput
    connect?: social_usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type commentsUpdateOneWithoutOther_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutOther_commentsInput
    upsert?: commentsUpsertWithoutOther_commentsInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutOther_commentsInput, commentsUpdateWithoutOther_commentsInput>, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type posts_metadataUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<posts_metadataCreateWithoutCommentsInput, posts_metadataUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutCommentsInput
    upsert?: posts_metadataUpsertWithoutCommentsInput
    connect?: posts_metadataWhereUniqueInput
    update?: XOR<XOR<posts_metadataUpdateToOneWithWhereWithoutCommentsInput, posts_metadataUpdateWithoutCommentsInput>, posts_metadataUncheckedUpdateWithoutCommentsInput>
  }

  export type social_usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<social_usersCreateWithoutCommentsInput, social_usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutCommentsInput
    upsert?: social_usersUpsertWithoutCommentsInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutCommentsInput, social_usersUpdateWithoutCommentsInput>, social_usersUncheckedUpdateWithoutCommentsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type commentsUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput> | commentsCreateWithoutCommentsInput[] | commentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentsInput | commentsCreateOrConnectWithoutCommentsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentsInput | commentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: commentsCreateManyCommentsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentsInput | commentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentsInput | commentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type social_usersCreateNestedOneWithoutFollowing_following_followee_idTosocial_usersInput = {
    create?: XOR<social_usersCreateWithoutFollowing_following_followee_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_followee_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutFollowing_following_followee_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
  }

  export type social_usersCreateNestedOneWithoutFollowing_following_follower_idTosocial_usersInput = {
    create?: XOR<social_usersCreateWithoutFollowing_following_follower_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_follower_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutFollowing_following_follower_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
  }

  export type social_usersUpdateOneRequiredWithoutFollowing_following_followee_idTosocial_usersNestedInput = {
    create?: XOR<social_usersCreateWithoutFollowing_following_followee_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_followee_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutFollowing_following_followee_idTosocial_usersInput
    upsert?: social_usersUpsertWithoutFollowing_following_followee_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutFollowing_following_followee_idTosocial_usersInput, social_usersUpdateWithoutFollowing_following_followee_idTosocial_usersInput>, social_usersUncheckedUpdateWithoutFollowing_following_followee_idTosocial_usersInput>
  }

  export type social_usersUpdateOneRequiredWithoutFollowing_following_follower_idTosocial_usersNestedInput = {
    create?: XOR<social_usersCreateWithoutFollowing_following_follower_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_follower_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutFollowing_following_follower_idTosocial_usersInput
    upsert?: social_usersUpsertWithoutFollowing_following_follower_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutFollowing_following_follower_idTosocial_usersInput, social_usersUpdateWithoutFollowing_following_follower_idTosocial_usersInput>, social_usersUncheckedUpdateWithoutFollowing_following_follower_idTosocial_usersInput>
  }

  export type posts_metadataCreateNestedOneWithoutLikesInput = {
    create?: XOR<posts_metadataCreateWithoutLikesInput, posts_metadataUncheckedCreateWithoutLikesInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutLikesInput
    connect?: posts_metadataWhereUniqueInput
  }

  export type social_usersCreateNestedOneWithoutLikesInput = {
    create?: XOR<social_usersCreateWithoutLikesInput, social_usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutLikesInput
    connect?: social_usersWhereUniqueInput
  }

  export type posts_metadataUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<posts_metadataCreateWithoutLikesInput, posts_metadataUncheckedCreateWithoutLikesInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutLikesInput
    upsert?: posts_metadataUpsertWithoutLikesInput
    connect?: posts_metadataWhereUniqueInput
    update?: XOR<XOR<posts_metadataUpdateToOneWithWhereWithoutLikesInput, posts_metadataUpdateWithoutLikesInput>, posts_metadataUncheckedUpdateWithoutLikesInput>
  }

  export type social_usersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<social_usersCreateWithoutLikesInput, social_usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutLikesInput
    upsert?: social_usersUpsertWithoutLikesInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutLikesInput, social_usersUpdateWithoutLikesInput>, social_usersUncheckedUpdateWithoutLikesInput>
  }

  export type social_usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<social_usersCreateWithoutNotificationsInput, social_usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutNotificationsInput
    connect?: social_usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type social_usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<social_usersCreateWithoutNotificationsInput, social_usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutNotificationsInput
    upsert?: social_usersUpsertWithoutNotificationsInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutNotificationsInput, social_usersUpdateWithoutNotificationsInput>, social_usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type posts_metadataCreateNestedOneWithoutPosts_analyticsInput = {
    create?: XOR<posts_metadataCreateWithoutPosts_analyticsInput, posts_metadataUncheckedCreateWithoutPosts_analyticsInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutPosts_analyticsInput
    connect?: posts_metadataWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type posts_metadataUpdateOneRequiredWithoutPosts_analyticsNestedInput = {
    create?: XOR<posts_metadataCreateWithoutPosts_analyticsInput, posts_metadataUncheckedCreateWithoutPosts_analyticsInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutPosts_analyticsInput
    upsert?: posts_metadataUpsertWithoutPosts_analyticsInput
    connect?: posts_metadataWhereUniqueInput
    update?: XOR<XOR<posts_metadataUpdateToOneWithWhereWithoutPosts_analyticsInput, posts_metadataUpdateWithoutPosts_analyticsInput>, posts_metadataUncheckedUpdateWithoutPosts_analyticsInput>
  }

  export type commentsCreateNestedManyWithoutPosts_metadataInput = {
    create?: XOR<commentsCreateWithoutPosts_metadataInput, commentsUncheckedCreateWithoutPosts_metadataInput> | commentsCreateWithoutPosts_metadataInput[] | commentsUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPosts_metadataInput | commentsCreateOrConnectWithoutPosts_metadataInput[]
    createMany?: commentsCreateManyPosts_metadataInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutPosts_metadataInput = {
    create?: XOR<likesCreateWithoutPosts_metadataInput, likesUncheckedCreateWithoutPosts_metadataInput> | likesCreateWithoutPosts_metadataInput[] | likesUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPosts_metadataInput | likesCreateOrConnectWithoutPosts_metadataInput[]
    createMany?: likesCreateManyPosts_metadataInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type posts_analyticsCreateNestedOneWithoutPosts_metadataInput = {
    create?: XOR<posts_analyticsCreateWithoutPosts_metadataInput, posts_analyticsUncheckedCreateWithoutPosts_metadataInput>
    connectOrCreate?: posts_analyticsCreateOrConnectWithoutPosts_metadataInput
    connect?: posts_analyticsWhereUniqueInput
  }

  export type social_usersCreateNestedOneWithoutPosts_metadataInput = {
    create?: XOR<social_usersCreateWithoutPosts_metadataInput, social_usersUncheckedCreateWithoutPosts_metadataInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutPosts_metadataInput
    connect?: social_usersWhereUniqueInput
  }

  export type reported_contentCreateNestedManyWithoutPosts_metadataInput = {
    create?: XOR<reported_contentCreateWithoutPosts_metadataInput, reported_contentUncheckedCreateWithoutPosts_metadataInput> | reported_contentCreateWithoutPosts_metadataInput[] | reported_contentUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutPosts_metadataInput | reported_contentCreateOrConnectWithoutPosts_metadataInput[]
    createMany?: reported_contentCreateManyPosts_metadataInputEnvelope
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutPosts_metadataInput = {
    create?: XOR<commentsCreateWithoutPosts_metadataInput, commentsUncheckedCreateWithoutPosts_metadataInput> | commentsCreateWithoutPosts_metadataInput[] | commentsUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPosts_metadataInput | commentsCreateOrConnectWithoutPosts_metadataInput[]
    createMany?: commentsCreateManyPosts_metadataInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutPosts_metadataInput = {
    create?: XOR<likesCreateWithoutPosts_metadataInput, likesUncheckedCreateWithoutPosts_metadataInput> | likesCreateWithoutPosts_metadataInput[] | likesUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPosts_metadataInput | likesCreateOrConnectWithoutPosts_metadataInput[]
    createMany?: likesCreateManyPosts_metadataInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type posts_analyticsUncheckedCreateNestedOneWithoutPosts_metadataInput = {
    create?: XOR<posts_analyticsCreateWithoutPosts_metadataInput, posts_analyticsUncheckedCreateWithoutPosts_metadataInput>
    connectOrCreate?: posts_analyticsCreateOrConnectWithoutPosts_metadataInput
    connect?: posts_analyticsWhereUniqueInput
  }

  export type reported_contentUncheckedCreateNestedManyWithoutPosts_metadataInput = {
    create?: XOR<reported_contentCreateWithoutPosts_metadataInput, reported_contentUncheckedCreateWithoutPosts_metadataInput> | reported_contentCreateWithoutPosts_metadataInput[] | reported_contentUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutPosts_metadataInput | reported_contentCreateOrConnectWithoutPosts_metadataInput[]
    createMany?: reported_contentCreateManyPosts_metadataInputEnvelope
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type commentsUpdateManyWithoutPosts_metadataNestedInput = {
    create?: XOR<commentsCreateWithoutPosts_metadataInput, commentsUncheckedCreateWithoutPosts_metadataInput> | commentsCreateWithoutPosts_metadataInput[] | commentsUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPosts_metadataInput | commentsCreateOrConnectWithoutPosts_metadataInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPosts_metadataInput | commentsUpsertWithWhereUniqueWithoutPosts_metadataInput[]
    createMany?: commentsCreateManyPosts_metadataInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPosts_metadataInput | commentsUpdateWithWhereUniqueWithoutPosts_metadataInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPosts_metadataInput | commentsUpdateManyWithWhereWithoutPosts_metadataInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type likesUpdateManyWithoutPosts_metadataNestedInput = {
    create?: XOR<likesCreateWithoutPosts_metadataInput, likesUncheckedCreateWithoutPosts_metadataInput> | likesCreateWithoutPosts_metadataInput[] | likesUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPosts_metadataInput | likesCreateOrConnectWithoutPosts_metadataInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPosts_metadataInput | likesUpsertWithWhereUniqueWithoutPosts_metadataInput[]
    createMany?: likesCreateManyPosts_metadataInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPosts_metadataInput | likesUpdateWithWhereUniqueWithoutPosts_metadataInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPosts_metadataInput | likesUpdateManyWithWhereWithoutPosts_metadataInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type posts_analyticsUpdateOneWithoutPosts_metadataNestedInput = {
    create?: XOR<posts_analyticsCreateWithoutPosts_metadataInput, posts_analyticsUncheckedCreateWithoutPosts_metadataInput>
    connectOrCreate?: posts_analyticsCreateOrConnectWithoutPosts_metadataInput
    upsert?: posts_analyticsUpsertWithoutPosts_metadataInput
    disconnect?: posts_analyticsWhereInput | boolean
    delete?: posts_analyticsWhereInput | boolean
    connect?: posts_analyticsWhereUniqueInput
    update?: XOR<XOR<posts_analyticsUpdateToOneWithWhereWithoutPosts_metadataInput, posts_analyticsUpdateWithoutPosts_metadataInput>, posts_analyticsUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type social_usersUpdateOneRequiredWithoutPosts_metadataNestedInput = {
    create?: XOR<social_usersCreateWithoutPosts_metadataInput, social_usersUncheckedCreateWithoutPosts_metadataInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutPosts_metadataInput
    upsert?: social_usersUpsertWithoutPosts_metadataInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutPosts_metadataInput, social_usersUpdateWithoutPosts_metadataInput>, social_usersUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type reported_contentUpdateManyWithoutPosts_metadataNestedInput = {
    create?: XOR<reported_contentCreateWithoutPosts_metadataInput, reported_contentUncheckedCreateWithoutPosts_metadataInput> | reported_contentCreateWithoutPosts_metadataInput[] | reported_contentUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutPosts_metadataInput | reported_contentCreateOrConnectWithoutPosts_metadataInput[]
    upsert?: reported_contentUpsertWithWhereUniqueWithoutPosts_metadataInput | reported_contentUpsertWithWhereUniqueWithoutPosts_metadataInput[]
    createMany?: reported_contentCreateManyPosts_metadataInputEnvelope
    set?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    disconnect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    delete?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    update?: reported_contentUpdateWithWhereUniqueWithoutPosts_metadataInput | reported_contentUpdateWithWhereUniqueWithoutPosts_metadataInput[]
    updateMany?: reported_contentUpdateManyWithWhereWithoutPosts_metadataInput | reported_contentUpdateManyWithWhereWithoutPosts_metadataInput[]
    deleteMany?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutPosts_metadataNestedInput = {
    create?: XOR<commentsCreateWithoutPosts_metadataInput, commentsUncheckedCreateWithoutPosts_metadataInput> | commentsCreateWithoutPosts_metadataInput[] | commentsUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPosts_metadataInput | commentsCreateOrConnectWithoutPosts_metadataInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPosts_metadataInput | commentsUpsertWithWhereUniqueWithoutPosts_metadataInput[]
    createMany?: commentsCreateManyPosts_metadataInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPosts_metadataInput | commentsUpdateWithWhereUniqueWithoutPosts_metadataInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPosts_metadataInput | commentsUpdateManyWithWhereWithoutPosts_metadataInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutPosts_metadataNestedInput = {
    create?: XOR<likesCreateWithoutPosts_metadataInput, likesUncheckedCreateWithoutPosts_metadataInput> | likesCreateWithoutPosts_metadataInput[] | likesUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPosts_metadataInput | likesCreateOrConnectWithoutPosts_metadataInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPosts_metadataInput | likesUpsertWithWhereUniqueWithoutPosts_metadataInput[]
    createMany?: likesCreateManyPosts_metadataInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPosts_metadataInput | likesUpdateWithWhereUniqueWithoutPosts_metadataInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPosts_metadataInput | likesUpdateManyWithWhereWithoutPosts_metadataInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type posts_analyticsUncheckedUpdateOneWithoutPosts_metadataNestedInput = {
    create?: XOR<posts_analyticsCreateWithoutPosts_metadataInput, posts_analyticsUncheckedCreateWithoutPosts_metadataInput>
    connectOrCreate?: posts_analyticsCreateOrConnectWithoutPosts_metadataInput
    upsert?: posts_analyticsUpsertWithoutPosts_metadataInput
    disconnect?: posts_analyticsWhereInput | boolean
    delete?: posts_analyticsWhereInput | boolean
    connect?: posts_analyticsWhereUniqueInput
    update?: XOR<XOR<posts_analyticsUpdateToOneWithWhereWithoutPosts_metadataInput, posts_analyticsUpdateWithoutPosts_metadataInput>, posts_analyticsUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type reported_contentUncheckedUpdateManyWithoutPosts_metadataNestedInput = {
    create?: XOR<reported_contentCreateWithoutPosts_metadataInput, reported_contentUncheckedCreateWithoutPosts_metadataInput> | reported_contentCreateWithoutPosts_metadataInput[] | reported_contentUncheckedCreateWithoutPosts_metadataInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutPosts_metadataInput | reported_contentCreateOrConnectWithoutPosts_metadataInput[]
    upsert?: reported_contentUpsertWithWhereUniqueWithoutPosts_metadataInput | reported_contentUpsertWithWhereUniqueWithoutPosts_metadataInput[]
    createMany?: reported_contentCreateManyPosts_metadataInputEnvelope
    set?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    disconnect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    delete?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    update?: reported_contentUpdateWithWhereUniqueWithoutPosts_metadataInput | reported_contentUpdateWithWhereUniqueWithoutPosts_metadataInput[]
    updateMany?: reported_contentUpdateManyWithWhereWithoutPosts_metadataInput | reported_contentUpdateManyWithWhereWithoutPosts_metadataInput[]
    deleteMany?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
  }

  export type posts_metadataCreateNestedOneWithoutReported_contentInput = {
    create?: XOR<posts_metadataCreateWithoutReported_contentInput, posts_metadataUncheckedCreateWithoutReported_contentInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutReported_contentInput
    connect?: posts_metadataWhereUniqueInput
  }

  export type social_usersCreateNestedOneWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    create?: XOR<social_usersCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutReported_content_reported_content_reported_user_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
  }

  export type social_usersCreateNestedOneWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    create?: XOR<social_usersCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutReported_content_reported_content_reporter_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
  }

  export type posts_metadataUpdateOneWithoutReported_contentNestedInput = {
    create?: XOR<posts_metadataCreateWithoutReported_contentInput, posts_metadataUncheckedCreateWithoutReported_contentInput>
    connectOrCreate?: posts_metadataCreateOrConnectWithoutReported_contentInput
    upsert?: posts_metadataUpsertWithoutReported_contentInput
    disconnect?: posts_metadataWhereInput | boolean
    delete?: posts_metadataWhereInput | boolean
    connect?: posts_metadataWhereUniqueInput
    update?: XOR<XOR<posts_metadataUpdateToOneWithWhereWithoutReported_contentInput, posts_metadataUpdateWithoutReported_contentInput>, posts_metadataUncheckedUpdateWithoutReported_contentInput>
  }

  export type social_usersUpdateOneWithoutReported_content_reported_content_reported_user_idTosocial_usersNestedInput = {
    create?: XOR<social_usersCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutReported_content_reported_content_reported_user_idTosocial_usersInput
    upsert?: social_usersUpsertWithoutReported_content_reported_content_reported_user_idTosocial_usersInput
    disconnect?: social_usersWhereInput | boolean
    delete?: social_usersWhereInput | boolean
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutReported_content_reported_content_reported_user_idTosocial_usersInput, social_usersUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>, social_usersUncheckedUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>
  }

  export type social_usersUpdateOneRequiredWithoutReported_content_reported_content_reporter_idTosocial_usersNestedInput = {
    create?: XOR<social_usersCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>
    connectOrCreate?: social_usersCreateOrConnectWithoutReported_content_reported_content_reporter_idTosocial_usersInput
    upsert?: social_usersUpsertWithoutReported_content_reported_content_reporter_idTosocial_usersInput
    connect?: social_usersWhereUniqueInput
    update?: XOR<XOR<social_usersUpdateToOneWithWhereWithoutReported_content_reported_content_reporter_idTosocial_usersInput, social_usersUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>, social_usersUncheckedUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>
  }

  export type blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInputEnvelope
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
  }

  export type blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInputEnvelope
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<commentsCreateWithoutSocial_usersInput, commentsUncheckedCreateWithoutSocial_usersInput> | commentsCreateWithoutSocial_usersInput[] | commentsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSocial_usersInput | commentsCreateOrConnectWithoutSocial_usersInput[]
    createMany?: commentsCreateManySocial_usersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_followee_idTosocial_usersInputEnvelope
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
  }

  export type followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_follower_idTosocial_usersInputEnvelope
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<likesCreateWithoutSocial_usersInput, likesUncheckedCreateWithoutSocial_usersInput> | likesCreateWithoutSocial_usersInput[] | likesUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutSocial_usersInput | likesCreateOrConnectWithoutSocial_usersInput[]
    createMany?: likesCreateManySocial_usersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<notificationsCreateWithoutSocial_usersInput, notificationsUncheckedCreateWithoutSocial_usersInput> | notificationsCreateWithoutSocial_usersInput[] | notificationsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutSocial_usersInput | notificationsCreateOrConnectWithoutSocial_usersInput[]
    createMany?: notificationsCreateManySocial_usersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type posts_metadataCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<posts_metadataCreateWithoutSocial_usersInput, posts_metadataUncheckedCreateWithoutSocial_usersInput> | posts_metadataCreateWithoutSocial_usersInput[] | posts_metadataUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: posts_metadataCreateOrConnectWithoutSocial_usersInput | posts_metadataCreateOrConnectWithoutSocial_usersInput[]
    createMany?: posts_metadataCreateManySocial_usersInputEnvelope
    connect?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
  }

  export type reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInputEnvelope
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
  }

  export type reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInputEnvelope
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
  }

  export type blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInputEnvelope
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
  }

  export type blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInputEnvelope
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<commentsCreateWithoutSocial_usersInput, commentsUncheckedCreateWithoutSocial_usersInput> | commentsCreateWithoutSocial_usersInput[] | commentsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSocial_usersInput | commentsCreateOrConnectWithoutSocial_usersInput[]
    createMany?: commentsCreateManySocial_usersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_followee_idTosocial_usersInputEnvelope
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
  }

  export type followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_follower_idTosocial_usersInputEnvelope
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<likesCreateWithoutSocial_usersInput, likesUncheckedCreateWithoutSocial_usersInput> | likesCreateWithoutSocial_usersInput[] | likesUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutSocial_usersInput | likesCreateOrConnectWithoutSocial_usersInput[]
    createMany?: likesCreateManySocial_usersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<notificationsCreateWithoutSocial_usersInput, notificationsUncheckedCreateWithoutSocial_usersInput> | notificationsCreateWithoutSocial_usersInput[] | notificationsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutSocial_usersInput | notificationsCreateOrConnectWithoutSocial_usersInput[]
    createMany?: notificationsCreateManySocial_usersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput = {
    create?: XOR<posts_metadataCreateWithoutSocial_usersInput, posts_metadataUncheckedCreateWithoutSocial_usersInput> | posts_metadataCreateWithoutSocial_usersInput[] | posts_metadataUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: posts_metadataCreateOrConnectWithoutSocial_usersInput | posts_metadataCreateOrConnectWithoutSocial_usersInput[]
    createMany?: posts_metadataCreateManySocial_usersInputEnvelope
    connect?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
  }

  export type reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInputEnvelope
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
  }

  export type reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInputEnvelope
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
  }

  export type blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    upsert?: blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInputEnvelope
    set?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    disconnect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    delete?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    update?: blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    updateMany?: blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    deleteMany?: blockingScalarWhereInput | blockingScalarWhereInput[]
  }

  export type blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    upsert?: blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInputEnvelope
    set?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    disconnect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    delete?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    update?: blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    updateMany?: blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    deleteMany?: blockingScalarWhereInput | blockingScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<commentsCreateWithoutSocial_usersInput, commentsUncheckedCreateWithoutSocial_usersInput> | commentsCreateWithoutSocial_usersInput[] | commentsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSocial_usersInput | commentsCreateOrConnectWithoutSocial_usersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutSocial_usersInput | commentsUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: commentsCreateManySocial_usersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutSocial_usersInput | commentsUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutSocial_usersInput | commentsUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput[]
    upsert?: followingUpsertWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput | followingUpsertWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_followee_idTosocial_usersInputEnvelope
    set?: followingWhereUniqueInput | followingWhereUniqueInput[]
    disconnect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    delete?: followingWhereUniqueInput | followingWhereUniqueInput[]
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    update?: followingUpdateWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput | followingUpdateWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput[]
    updateMany?: followingUpdateManyWithWhereWithoutSocial_users_following_followee_idTosocial_usersInput | followingUpdateManyWithWhereWithoutSocial_users_following_followee_idTosocial_usersInput[]
    deleteMany?: followingScalarWhereInput | followingScalarWhereInput[]
  }

  export type followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput[]
    upsert?: followingUpsertWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput | followingUpsertWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_follower_idTosocial_usersInputEnvelope
    set?: followingWhereUniqueInput | followingWhereUniqueInput[]
    disconnect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    delete?: followingWhereUniqueInput | followingWhereUniqueInput[]
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    update?: followingUpdateWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput | followingUpdateWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput[]
    updateMany?: followingUpdateManyWithWhereWithoutSocial_users_following_follower_idTosocial_usersInput | followingUpdateManyWithWhereWithoutSocial_users_following_follower_idTosocial_usersInput[]
    deleteMany?: followingScalarWhereInput | followingScalarWhereInput[]
  }

  export type likesUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<likesCreateWithoutSocial_usersInput, likesUncheckedCreateWithoutSocial_usersInput> | likesCreateWithoutSocial_usersInput[] | likesUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutSocial_usersInput | likesCreateOrConnectWithoutSocial_usersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutSocial_usersInput | likesUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: likesCreateManySocial_usersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutSocial_usersInput | likesUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutSocial_usersInput | likesUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<notificationsCreateWithoutSocial_usersInput, notificationsUncheckedCreateWithoutSocial_usersInput> | notificationsCreateWithoutSocial_usersInput[] | notificationsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutSocial_usersInput | notificationsCreateOrConnectWithoutSocial_usersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutSocial_usersInput | notificationsUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: notificationsCreateManySocial_usersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutSocial_usersInput | notificationsUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutSocial_usersInput | notificationsUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type posts_metadataUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<posts_metadataCreateWithoutSocial_usersInput, posts_metadataUncheckedCreateWithoutSocial_usersInput> | posts_metadataCreateWithoutSocial_usersInput[] | posts_metadataUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: posts_metadataCreateOrConnectWithoutSocial_usersInput | posts_metadataCreateOrConnectWithoutSocial_usersInput[]
    upsert?: posts_metadataUpsertWithWhereUniqueWithoutSocial_usersInput | posts_metadataUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: posts_metadataCreateManySocial_usersInputEnvelope
    set?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    disconnect?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    delete?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    connect?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    update?: posts_metadataUpdateWithWhereUniqueWithoutSocial_usersInput | posts_metadataUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: posts_metadataUpdateManyWithWhereWithoutSocial_usersInput | posts_metadataUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: posts_metadataScalarWhereInput | posts_metadataScalarWhereInput[]
  }

  export type reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    upsert?: reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInputEnvelope
    set?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    disconnect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    delete?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    update?: reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    updateMany?: reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    deleteMany?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
  }

  export type reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    upsert?: reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInputEnvelope
    set?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    disconnect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    delete?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    update?: reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    updateMany?: reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    deleteMany?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
  }

  export type blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    upsert?: blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInputEnvelope
    set?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    disconnect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    delete?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    update?: blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    updateMany?: blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocked_idTosocial_usersInput | blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocked_idTosocial_usersInput[]
    deleteMany?: blockingScalarWhereInput | blockingScalarWhereInput[]
  }

  export type blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput = {
    create?: XOR<blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput> | blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[] | blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    connectOrCreate?: blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    upsert?: blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    createMany?: blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInputEnvelope
    set?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    disconnect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    delete?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    connect?: blockingWhereUniqueInput | blockingWhereUniqueInput[]
    update?: blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    updateMany?: blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocker_idTosocial_usersInput | blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocker_idTosocial_usersInput[]
    deleteMany?: blockingScalarWhereInput | blockingScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<commentsCreateWithoutSocial_usersInput, commentsUncheckedCreateWithoutSocial_usersInput> | commentsCreateWithoutSocial_usersInput[] | commentsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutSocial_usersInput | commentsCreateOrConnectWithoutSocial_usersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutSocial_usersInput | commentsUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: commentsCreateManySocial_usersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutSocial_usersInput | commentsUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutSocial_usersInput | commentsUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput[]
    upsert?: followingUpsertWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput | followingUpsertWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_followee_idTosocial_usersInputEnvelope
    set?: followingWhereUniqueInput | followingWhereUniqueInput[]
    disconnect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    delete?: followingWhereUniqueInput | followingWhereUniqueInput[]
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    update?: followingUpdateWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput | followingUpdateWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput[]
    updateMany?: followingUpdateManyWithWhereWithoutSocial_users_following_followee_idTosocial_usersInput | followingUpdateManyWithWhereWithoutSocial_users_following_followee_idTosocial_usersInput[]
    deleteMany?: followingScalarWhereInput | followingScalarWhereInput[]
  }

  export type followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput = {
    create?: XOR<followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput> | followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput[] | followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput[]
    connectOrCreate?: followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput | followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput[]
    upsert?: followingUpsertWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput | followingUpsertWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput[]
    createMany?: followingCreateManySocial_users_following_follower_idTosocial_usersInputEnvelope
    set?: followingWhereUniqueInput | followingWhereUniqueInput[]
    disconnect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    delete?: followingWhereUniqueInput | followingWhereUniqueInput[]
    connect?: followingWhereUniqueInput | followingWhereUniqueInput[]
    update?: followingUpdateWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput | followingUpdateWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput[]
    updateMany?: followingUpdateManyWithWhereWithoutSocial_users_following_follower_idTosocial_usersInput | followingUpdateManyWithWhereWithoutSocial_users_following_follower_idTosocial_usersInput[]
    deleteMany?: followingScalarWhereInput | followingScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<likesCreateWithoutSocial_usersInput, likesUncheckedCreateWithoutSocial_usersInput> | likesCreateWithoutSocial_usersInput[] | likesUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutSocial_usersInput | likesCreateOrConnectWithoutSocial_usersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutSocial_usersInput | likesUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: likesCreateManySocial_usersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutSocial_usersInput | likesUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutSocial_usersInput | likesUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<notificationsCreateWithoutSocial_usersInput, notificationsUncheckedCreateWithoutSocial_usersInput> | notificationsCreateWithoutSocial_usersInput[] | notificationsUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutSocial_usersInput | notificationsCreateOrConnectWithoutSocial_usersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutSocial_usersInput | notificationsUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: notificationsCreateManySocial_usersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutSocial_usersInput | notificationsUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutSocial_usersInput | notificationsUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput = {
    create?: XOR<posts_metadataCreateWithoutSocial_usersInput, posts_metadataUncheckedCreateWithoutSocial_usersInput> | posts_metadataCreateWithoutSocial_usersInput[] | posts_metadataUncheckedCreateWithoutSocial_usersInput[]
    connectOrCreate?: posts_metadataCreateOrConnectWithoutSocial_usersInput | posts_metadataCreateOrConnectWithoutSocial_usersInput[]
    upsert?: posts_metadataUpsertWithWhereUniqueWithoutSocial_usersInput | posts_metadataUpsertWithWhereUniqueWithoutSocial_usersInput[]
    createMany?: posts_metadataCreateManySocial_usersInputEnvelope
    set?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    disconnect?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    delete?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    connect?: posts_metadataWhereUniqueInput | posts_metadataWhereUniqueInput[]
    update?: posts_metadataUpdateWithWhereUniqueWithoutSocial_usersInput | posts_metadataUpdateWithWhereUniqueWithoutSocial_usersInput[]
    updateMany?: posts_metadataUpdateManyWithWhereWithoutSocial_usersInput | posts_metadataUpdateManyWithWhereWithoutSocial_usersInput[]
    deleteMany?: posts_metadataScalarWhereInput | posts_metadataScalarWhereInput[]
  }

  export type reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    upsert?: reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInputEnvelope
    set?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    disconnect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    delete?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    update?: reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    updateMany?: reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput[]
    deleteMany?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
  }

  export type reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput = {
    create?: XOR<reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput> | reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[] | reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    connectOrCreate?: reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    upsert?: reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    createMany?: reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInputEnvelope
    set?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    disconnect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    delete?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    connect?: reported_contentWhereUniqueInput | reported_contentWhereUniqueInput[]
    update?: reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    updateMany?: reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reporter_idTosocial_usersInput[]
    deleteMany?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type social_usersCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput>
  }

  export type social_usersCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput>
  }

  export type social_usersUpsertWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    update: XOR<social_usersUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput, social_usersUncheckedUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput>
    create: XOR<social_usersCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocked_idTosocial_usersInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput, social_usersUncheckedUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput>
  }

  export type social_usersUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutBlocking_blocking_blocked_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUpsertWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    update: XOR<social_usersUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput, social_usersUncheckedUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput>
    create: XOR<social_usersCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput, social_usersUncheckedCreateWithoutBlocking_blocking_blocker_idTosocial_usersInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput, social_usersUncheckedUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput>
  }

  export type social_usersUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutBlocking_blocking_blocker_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type commentsCreateWithoutOther_commentsInput = {
    comment_id?: string
    content: string
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    posts_metadata: posts_metadataCreateNestedOneWithoutCommentsInput
    social_users: social_usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutOther_commentsInput = {
    comment_id?: string
    post_id: string
    user_id: string
    parent_comment_id?: string | null
    content: string
    created_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutOther_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
  }

  export type commentsCreateWithoutCommentsInput = {
    comment_id?: string
    content: string
    created_at?: Date | string | null
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    posts_metadata: posts_metadataCreateNestedOneWithoutCommentsInput
    social_users: social_usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutCommentsInput = {
    comment_id?: string
    post_id: string
    user_id: string
    content: string
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsCreateManyCommentsInputEnvelope = {
    data: commentsCreateManyCommentsInput | commentsCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type posts_metadataCreateWithoutCommentsInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    likes?: likesCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsCreateNestedOneWithoutPosts_metadataInput
    social_users: social_usersCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataUncheckedCreateWithoutCommentsInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    likes?: likesUncheckedCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsUncheckedCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentUncheckedCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataCreateOrConnectWithoutCommentsInput = {
    where: posts_metadataWhereUniqueInput
    create: XOR<posts_metadataCreateWithoutCommentsInput, posts_metadataUncheckedCreateWithoutCommentsInput>
  }

  export type social_usersCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutCommentsInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutCommentsInput, social_usersUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpsertWithoutOther_commentsInput = {
    update: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
    create: XOR<commentsCreateWithoutOther_commentsInput, commentsUncheckedCreateWithoutOther_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutOther_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutOther_commentsInput, commentsUncheckedUpdateWithoutOther_commentsInput>
  }

  export type commentsUpdateWithoutOther_commentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    posts_metadata?: posts_metadataUpdateOneRequiredWithoutCommentsNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutOther_commentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUpsertWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<commentsCreateWithoutCommentsInput, commentsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCommentsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCommentsInput, commentsUncheckedUpdateWithoutCommentsInput>
  }

  export type commentsUpdateManyWithWhereWithoutCommentsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    comment_id?: UuidFilter<"comments"> | string
    post_id?: UuidFilter<"comments"> | string
    user_id?: UuidFilter<"comments"> | string
    parent_comment_id?: UuidNullableFilter<"comments"> | string | null
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type posts_metadataUpsertWithoutCommentsInput = {
    update: XOR<posts_metadataUpdateWithoutCommentsInput, posts_metadataUncheckedUpdateWithoutCommentsInput>
    create: XOR<posts_metadataCreateWithoutCommentsInput, posts_metadataUncheckedCreateWithoutCommentsInput>
    where?: posts_metadataWhereInput
  }

  export type posts_metadataUpdateToOneWithWhereWithoutCommentsInput = {
    where?: posts_metadataWhereInput
    data: XOR<posts_metadataUpdateWithoutCommentsInput, posts_metadataUncheckedUpdateWithoutCommentsInput>
  }

  export type posts_metadataUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: likesUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUpdateOneWithoutPosts_metadataNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUpdateManyWithoutPosts_metadataNestedInput
  }

  export type posts_metadataUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: likesUncheckedUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUncheckedUpdateOneWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUncheckedUpdateManyWithoutPosts_metadataNestedInput
  }

  export type social_usersUpsertWithoutCommentsInput = {
    update: XOR<social_usersUpdateWithoutCommentsInput, social_usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<social_usersCreateWithoutCommentsInput, social_usersUncheckedCreateWithoutCommentsInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutCommentsInput, social_usersUncheckedUpdateWithoutCommentsInput>
  }

  export type social_usersUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersCreateWithoutFollowing_following_followee_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutFollowing_following_followee_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutFollowing_following_followee_idTosocial_usersInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutFollowing_following_followee_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_followee_idTosocial_usersInput>
  }

  export type social_usersCreateWithoutFollowing_following_follower_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutFollowing_following_follower_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutFollowing_following_follower_idTosocial_usersInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutFollowing_following_follower_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_follower_idTosocial_usersInput>
  }

  export type social_usersUpsertWithoutFollowing_following_followee_idTosocial_usersInput = {
    update: XOR<social_usersUpdateWithoutFollowing_following_followee_idTosocial_usersInput, social_usersUncheckedUpdateWithoutFollowing_following_followee_idTosocial_usersInput>
    create: XOR<social_usersCreateWithoutFollowing_following_followee_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_followee_idTosocial_usersInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutFollowing_following_followee_idTosocial_usersInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutFollowing_following_followee_idTosocial_usersInput, social_usersUncheckedUpdateWithoutFollowing_following_followee_idTosocial_usersInput>
  }

  export type social_usersUpdateWithoutFollowing_following_followee_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutFollowing_following_followee_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUpsertWithoutFollowing_following_follower_idTosocial_usersInput = {
    update: XOR<social_usersUpdateWithoutFollowing_following_follower_idTosocial_usersInput, social_usersUncheckedUpdateWithoutFollowing_following_follower_idTosocial_usersInput>
    create: XOR<social_usersCreateWithoutFollowing_following_follower_idTosocial_usersInput, social_usersUncheckedCreateWithoutFollowing_following_follower_idTosocial_usersInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutFollowing_following_follower_idTosocial_usersInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutFollowing_following_follower_idTosocial_usersInput, social_usersUncheckedUpdateWithoutFollowing_following_follower_idTosocial_usersInput>
  }

  export type social_usersUpdateWithoutFollowing_following_follower_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutFollowing_following_follower_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type posts_metadataCreateWithoutLikesInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsCreateNestedOneWithoutPosts_metadataInput
    social_users: social_usersCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataUncheckedCreateWithoutLikesInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsUncheckedCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentUncheckedCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataCreateOrConnectWithoutLikesInput = {
    where: posts_metadataWhereUniqueInput
    create: XOR<posts_metadataCreateWithoutLikesInput, posts_metadataUncheckedCreateWithoutLikesInput>
  }

  export type social_usersCreateWithoutLikesInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutLikesInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutLikesInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutLikesInput, social_usersUncheckedCreateWithoutLikesInput>
  }

  export type posts_metadataUpsertWithoutLikesInput = {
    update: XOR<posts_metadataUpdateWithoutLikesInput, posts_metadataUncheckedUpdateWithoutLikesInput>
    create: XOR<posts_metadataCreateWithoutLikesInput, posts_metadataUncheckedCreateWithoutLikesInput>
    where?: posts_metadataWhereInput
  }

  export type posts_metadataUpdateToOneWithWhereWithoutLikesInput = {
    where?: posts_metadataWhereInput
    data: XOR<posts_metadataUpdateWithoutLikesInput, posts_metadataUncheckedUpdateWithoutLikesInput>
  }

  export type posts_metadataUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUpdateOneWithoutPosts_metadataNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUpdateManyWithoutPosts_metadataNestedInput
  }

  export type posts_metadataUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUncheckedUpdateOneWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUncheckedUpdateManyWithoutPosts_metadataNestedInput
  }

  export type social_usersUpsertWithoutLikesInput = {
    update: XOR<social_usersUpdateWithoutLikesInput, social_usersUncheckedUpdateWithoutLikesInput>
    create: XOR<social_usersCreateWithoutLikesInput, social_usersUncheckedCreateWithoutLikesInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutLikesInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutLikesInput, social_usersUncheckedUpdateWithoutLikesInput>
  }

  export type social_usersUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutNotificationsInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutNotificationsInput, social_usersUncheckedCreateWithoutNotificationsInput>
  }

  export type social_usersUpsertWithoutNotificationsInput = {
    update: XOR<social_usersUpdateWithoutNotificationsInput, social_usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<social_usersCreateWithoutNotificationsInput, social_usersUncheckedCreateWithoutNotificationsInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutNotificationsInput, social_usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type social_usersUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type posts_metadataCreateWithoutPosts_analyticsInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutPosts_metadataInput
    likes?: likesCreateNestedManyWithoutPosts_metadataInput
    social_users: social_usersCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataUncheckedCreateWithoutPosts_analyticsInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPosts_metadataInput
    likes?: likesUncheckedCreateNestedManyWithoutPosts_metadataInput
    reported_content?: reported_contentUncheckedCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataCreateOrConnectWithoutPosts_analyticsInput = {
    where: posts_metadataWhereUniqueInput
    create: XOR<posts_metadataCreateWithoutPosts_analyticsInput, posts_metadataUncheckedCreateWithoutPosts_analyticsInput>
  }

  export type posts_metadataUpsertWithoutPosts_analyticsInput = {
    update: XOR<posts_metadataUpdateWithoutPosts_analyticsInput, posts_metadataUncheckedUpdateWithoutPosts_analyticsInput>
    create: XOR<posts_metadataCreateWithoutPosts_analyticsInput, posts_metadataUncheckedCreateWithoutPosts_analyticsInput>
    where?: posts_metadataWhereInput
  }

  export type posts_metadataUpdateToOneWithWhereWithoutPosts_analyticsInput = {
    where?: posts_metadataWhereInput
    data: XOR<posts_metadataUpdateWithoutPosts_analyticsInput, posts_metadataUncheckedUpdateWithoutPosts_analyticsInput>
  }

  export type posts_metadataUpdateWithoutPosts_analyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUpdateManyWithoutPosts_metadataNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUpdateManyWithoutPosts_metadataNestedInput
  }

  export type posts_metadataUncheckedUpdateWithoutPosts_analyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUncheckedUpdateManyWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUncheckedUpdateManyWithoutPosts_metadataNestedInput
  }

  export type commentsCreateWithoutPosts_metadataInput = {
    comment_id?: string
    content: string
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    social_users: social_usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutPosts_metadataInput = {
    comment_id?: string
    user_id: string
    parent_comment_id?: string | null
    content: string
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutPosts_metadataInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutPosts_metadataInput, commentsUncheckedCreateWithoutPosts_metadataInput>
  }

  export type commentsCreateManyPosts_metadataInputEnvelope = {
    data: commentsCreateManyPosts_metadataInput | commentsCreateManyPosts_metadataInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutPosts_metadataInput = {
    liked_at?: Date | string | null
    social_users: social_usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutPosts_metadataInput = {
    user_id: string
    liked_at?: Date | string | null
  }

  export type likesCreateOrConnectWithoutPosts_metadataInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutPosts_metadataInput, likesUncheckedCreateWithoutPosts_metadataInput>
  }

  export type likesCreateManyPosts_metadataInputEnvelope = {
    data: likesCreateManyPosts_metadataInput | likesCreateManyPosts_metadataInput[]
    skipDuplicates?: boolean
  }

  export type posts_analyticsCreateWithoutPosts_metadataInput = {
    views_count?: number | null
    likes_count?: number | null
    shares_count?: number | null
    comments_count?: number | null
    updated_at?: Date | string
  }

  export type posts_analyticsUncheckedCreateWithoutPosts_metadataInput = {
    views_count?: number | null
    likes_count?: number | null
    shares_count?: number | null
    comments_count?: number | null
    updated_at?: Date | string
  }

  export type posts_analyticsCreateOrConnectWithoutPosts_metadataInput = {
    where: posts_analyticsWhereUniqueInput
    create: XOR<posts_analyticsCreateWithoutPosts_metadataInput, posts_analyticsUncheckedCreateWithoutPosts_metadataInput>
  }

  export type social_usersCreateWithoutPosts_metadataInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutPosts_metadataInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutPosts_metadataInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutPosts_metadataInput, social_usersUncheckedCreateWithoutPosts_metadataInput>
  }

  export type reported_contentCreateWithoutPosts_metadataInput = {
    id?: string
    reason: string
    status?: string | null
    created_at?: Date | string
    social_users_reported_content_reported_user_idTosocial_users?: social_usersCreateNestedOneWithoutReported_content_reported_content_reported_user_idTosocial_usersInput
    social_users_reported_content_reporter_idTosocial_users: social_usersCreateNestedOneWithoutReported_content_reported_content_reporter_idTosocial_usersInput
  }

  export type reported_contentUncheckedCreateWithoutPosts_metadataInput = {
    id?: string
    reporter_id: string
    reported_user_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type reported_contentCreateOrConnectWithoutPosts_metadataInput = {
    where: reported_contentWhereUniqueInput
    create: XOR<reported_contentCreateWithoutPosts_metadataInput, reported_contentUncheckedCreateWithoutPosts_metadataInput>
  }

  export type reported_contentCreateManyPosts_metadataInputEnvelope = {
    data: reported_contentCreateManyPosts_metadataInput | reported_contentCreateManyPosts_metadataInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutPosts_metadataInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutPosts_metadataInput, commentsUncheckedUpdateWithoutPosts_metadataInput>
    create: XOR<commentsCreateWithoutPosts_metadataInput, commentsUncheckedCreateWithoutPosts_metadataInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutPosts_metadataInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutPosts_metadataInput, commentsUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type commentsUpdateManyWithWhereWithoutPosts_metadataInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutPosts_metadataInput>
  }

  export type likesUpsertWithWhereUniqueWithoutPosts_metadataInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutPosts_metadataInput, likesUncheckedUpdateWithoutPosts_metadataInput>
    create: XOR<likesCreateWithoutPosts_metadataInput, likesUncheckedCreateWithoutPosts_metadataInput>
  }

  export type likesUpdateWithWhereUniqueWithoutPosts_metadataInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutPosts_metadataInput, likesUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type likesUpdateManyWithWhereWithoutPosts_metadataInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutPosts_metadataInput>
  }

  export type likesScalarWhereInput = {
    AND?: likesScalarWhereInput | likesScalarWhereInput[]
    OR?: likesScalarWhereInput[]
    NOT?: likesScalarWhereInput | likesScalarWhereInput[]
    user_id?: UuidFilter<"likes"> | string
    post_id?: UuidFilter<"likes"> | string
    liked_at?: DateTimeNullableFilter<"likes"> | Date | string | null
  }

  export type posts_analyticsUpsertWithoutPosts_metadataInput = {
    update: XOR<posts_analyticsUpdateWithoutPosts_metadataInput, posts_analyticsUncheckedUpdateWithoutPosts_metadataInput>
    create: XOR<posts_analyticsCreateWithoutPosts_metadataInput, posts_analyticsUncheckedCreateWithoutPosts_metadataInput>
    where?: posts_analyticsWhereInput
  }

  export type posts_analyticsUpdateToOneWithWhereWithoutPosts_metadataInput = {
    where?: posts_analyticsWhereInput
    data: XOR<posts_analyticsUpdateWithoutPosts_metadataInput, posts_analyticsUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type posts_analyticsUpdateWithoutPosts_metadataInput = {
    views_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    shares_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posts_analyticsUncheckedUpdateWithoutPosts_metadataInput = {
    views_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    shares_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_usersUpsertWithoutPosts_metadataInput = {
    update: XOR<social_usersUpdateWithoutPosts_metadataInput, social_usersUncheckedUpdateWithoutPosts_metadataInput>
    create: XOR<social_usersCreateWithoutPosts_metadataInput, social_usersUncheckedCreateWithoutPosts_metadataInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutPosts_metadataInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutPosts_metadataInput, social_usersUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type social_usersUpdateWithoutPosts_metadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutPosts_metadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type reported_contentUpsertWithWhereUniqueWithoutPosts_metadataInput = {
    where: reported_contentWhereUniqueInput
    update: XOR<reported_contentUpdateWithoutPosts_metadataInput, reported_contentUncheckedUpdateWithoutPosts_metadataInput>
    create: XOR<reported_contentCreateWithoutPosts_metadataInput, reported_contentUncheckedCreateWithoutPosts_metadataInput>
  }

  export type reported_contentUpdateWithWhereUniqueWithoutPosts_metadataInput = {
    where: reported_contentWhereUniqueInput
    data: XOR<reported_contentUpdateWithoutPosts_metadataInput, reported_contentUncheckedUpdateWithoutPosts_metadataInput>
  }

  export type reported_contentUpdateManyWithWhereWithoutPosts_metadataInput = {
    where: reported_contentScalarWhereInput
    data: XOR<reported_contentUpdateManyMutationInput, reported_contentUncheckedUpdateManyWithoutPosts_metadataInput>
  }

  export type reported_contentScalarWhereInput = {
    AND?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
    OR?: reported_contentScalarWhereInput[]
    NOT?: reported_contentScalarWhereInput | reported_contentScalarWhereInput[]
    id?: UuidFilter<"reported_content"> | string
    reporter_id?: UuidFilter<"reported_content"> | string
    reported_user_id?: UuidNullableFilter<"reported_content"> | string | null
    post_id?: UuidNullableFilter<"reported_content"> | string | null
    reason?: StringFilter<"reported_content"> | string
    status?: StringNullableFilter<"reported_content"> | string | null
    created_at?: DateTimeFilter<"reported_content"> | Date | string
  }

  export type posts_metadataCreateWithoutReported_contentInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutPosts_metadataInput
    likes?: likesCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsCreateNestedOneWithoutPosts_metadataInput
    social_users: social_usersCreateNestedOneWithoutPosts_metadataInput
  }

  export type posts_metadataUncheckedCreateWithoutReported_contentInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPosts_metadataInput
    likes?: likesUncheckedCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsUncheckedCreateNestedOneWithoutPosts_metadataInput
  }

  export type posts_metadataCreateOrConnectWithoutReported_contentInput = {
    where: posts_metadataWhereUniqueInput
    create: XOR<posts_metadataCreateWithoutReported_contentInput, posts_metadataUncheckedCreateWithoutReported_contentInput>
  }

  export type social_usersCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>
  }

  export type social_usersCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
  }

  export type social_usersUncheckedCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    id?: string
    username: string
    email: string
    profile_picture?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedCreateNestedManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput
    comments?: commentsUncheckedCreateNestedManyWithoutSocial_usersInput
    following_following_followee_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_followee_idTosocial_usersInput
    following_following_follower_idTosocial_users?: followingUncheckedCreateNestedManyWithoutSocial_users_following_follower_idTosocial_usersInput
    likes?: likesUncheckedCreateNestedManyWithoutSocial_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutSocial_usersInput
    posts_metadata?: posts_metadataUncheckedCreateNestedManyWithoutSocial_usersInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedCreateNestedManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput
  }

  export type social_usersCreateOrConnectWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    where: social_usersWhereUniqueInput
    create: XOR<social_usersCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>
  }

  export type posts_metadataUpsertWithoutReported_contentInput = {
    update: XOR<posts_metadataUpdateWithoutReported_contentInput, posts_metadataUncheckedUpdateWithoutReported_contentInput>
    create: XOR<posts_metadataCreateWithoutReported_contentInput, posts_metadataUncheckedCreateWithoutReported_contentInput>
    where?: posts_metadataWhereInput
  }

  export type posts_metadataUpdateToOneWithWhereWithoutReported_contentInput = {
    where?: posts_metadataWhereInput
    data: XOR<posts_metadataUpdateWithoutReported_contentInput, posts_metadataUncheckedUpdateWithoutReported_contentInput>
  }

  export type posts_metadataUpdateWithoutReported_contentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUpdateOneWithoutPosts_metadataNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutPosts_metadataNestedInput
  }

  export type posts_metadataUncheckedUpdateWithoutReported_contentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUncheckedUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUncheckedUpdateOneWithoutPosts_metadataNestedInput
  }

  export type social_usersUpsertWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    update: XOR<social_usersUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput, social_usersUncheckedUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>
    create: XOR<social_usersCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput, social_usersUncheckedUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput>
  }

  export type social_usersUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutReported_content_reported_content_reported_user_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reporter_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type social_usersUpsertWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    update: XOR<social_usersUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput, social_usersUncheckedUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>
    create: XOR<social_usersCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput, social_usersUncheckedCreateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>
    where?: social_usersWhereInput
  }

  export type social_usersUpdateToOneWithWhereWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    where?: social_usersWhereInput
    data: XOR<social_usersUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput, social_usersUncheckedUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput>
  }

  export type social_usersUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
  }

  export type social_usersUncheckedUpdateWithoutReported_content_reported_content_reporter_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking_blocking_blocked_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersNestedInput
    blocking_blocking_blocker_idTosocial_users?: blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutSocial_usersNestedInput
    following_following_followee_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersNestedInput
    following_following_follower_idTosocial_users?: followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersNestedInput
    likes?: likesUncheckedUpdateManyWithoutSocial_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutSocial_usersNestedInput
    posts_metadata?: posts_metadataUncheckedUpdateManyWithoutSocial_usersNestedInput
    reported_content_reported_content_reported_user_idTosocial_users?: reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersNestedInput
  }

  export type blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    id?: string
    created_at?: Date | string
    social_users_blocking_blocker_idTosocial_users: social_usersCreateNestedOneWithoutBlocking_blocking_blocker_idTosocial_usersInput
  }

  export type blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    id?: string
    blocker_id: string
    created_at?: Date | string
  }

  export type blockingCreateOrConnectWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    where: blockingWhereUniqueInput
    create: XOR<blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput>
  }

  export type blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInputEnvelope = {
    data: blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInput | blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    id?: string
    created_at?: Date | string
    social_users_blocking_blocked_idTosocial_users: social_usersCreateNestedOneWithoutBlocking_blocking_blocked_idTosocial_usersInput
  }

  export type blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    id?: string
    blocked_id: string
    created_at?: Date | string
  }

  export type blockingCreateOrConnectWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    where: blockingWhereUniqueInput
    create: XOR<blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput>
  }

  export type blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInputEnvelope = {
    data: blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInput | blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutSocial_usersInput = {
    comment_id?: string
    content: string
    created_at?: Date | string | null
    comments?: commentsCreateNestedOneWithoutOther_commentsInput
    other_comments?: commentsCreateNestedManyWithoutCommentsInput
    posts_metadata: posts_metadataCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutSocial_usersInput = {
    comment_id?: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    created_at?: Date | string | null
    other_comments?: commentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type commentsCreateOrConnectWithoutSocial_usersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutSocial_usersInput, commentsUncheckedCreateWithoutSocial_usersInput>
  }

  export type commentsCreateManySocial_usersInputEnvelope = {
    data: commentsCreateManySocial_usersInput | commentsCreateManySocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput = {
    id?: string
    followed_at?: Date | string | null
    social_users_following_follower_idTosocial_users: social_usersCreateNestedOneWithoutFollowing_following_follower_idTosocial_usersInput
  }

  export type followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput = {
    id?: string
    follower_id: string
    followed_at?: Date | string | null
  }

  export type followingCreateOrConnectWithoutSocial_users_following_followee_idTosocial_usersInput = {
    where: followingWhereUniqueInput
    create: XOR<followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput>
  }

  export type followingCreateManySocial_users_following_followee_idTosocial_usersInputEnvelope = {
    data: followingCreateManySocial_users_following_followee_idTosocial_usersInput | followingCreateManySocial_users_following_followee_idTosocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput = {
    id?: string
    followed_at?: Date | string | null
    social_users_following_followee_idTosocial_users: social_usersCreateNestedOneWithoutFollowing_following_followee_idTosocial_usersInput
  }

  export type followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput = {
    id?: string
    followee_id: string
    followed_at?: Date | string | null
  }

  export type followingCreateOrConnectWithoutSocial_users_following_follower_idTosocial_usersInput = {
    where: followingWhereUniqueInput
    create: XOR<followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput>
  }

  export type followingCreateManySocial_users_following_follower_idTosocial_usersInputEnvelope = {
    data: followingCreateManySocial_users_following_follower_idTosocial_usersInput | followingCreateManySocial_users_following_follower_idTosocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutSocial_usersInput = {
    liked_at?: Date | string | null
    posts_metadata: posts_metadataCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutSocial_usersInput = {
    post_id: string
    liked_at?: Date | string | null
  }

  export type likesCreateOrConnectWithoutSocial_usersInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutSocial_usersInput, likesUncheckedCreateWithoutSocial_usersInput>
  }

  export type likesCreateManySocial_usersInputEnvelope = {
    data: likesCreateManySocial_usersInput | likesCreateManySocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutSocial_usersInput = {
    notification_id?: string
    notification_type?: string | null
    notification_content?: string | null
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type notificationsUncheckedCreateWithoutSocial_usersInput = {
    notification_id?: string
    notification_type?: string | null
    notification_content?: string | null
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type notificationsCreateOrConnectWithoutSocial_usersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutSocial_usersInput, notificationsUncheckedCreateWithoutSocial_usersInput>
  }

  export type notificationsCreateManySocial_usersInputEnvelope = {
    data: notificationsCreateManySocial_usersInput | notificationsCreateManySocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type posts_metadataCreateWithoutSocial_usersInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsCreateNestedManyWithoutPosts_metadataInput
    likes?: likesCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataUncheckedCreateWithoutSocial_usersInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutPosts_metadataInput
    likes?: likesUncheckedCreateNestedManyWithoutPosts_metadataInput
    posts_analytics?: posts_analyticsUncheckedCreateNestedOneWithoutPosts_metadataInput
    reported_content?: reported_contentUncheckedCreateNestedManyWithoutPosts_metadataInput
  }

  export type posts_metadataCreateOrConnectWithoutSocial_usersInput = {
    where: posts_metadataWhereUniqueInput
    create: XOR<posts_metadataCreateWithoutSocial_usersInput, posts_metadataUncheckedCreateWithoutSocial_usersInput>
  }

  export type posts_metadataCreateManySocial_usersInputEnvelope = {
    data: posts_metadataCreateManySocial_usersInput | posts_metadataCreateManySocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    id?: string
    reason: string
    status?: string | null
    created_at?: Date | string
    posts_metadata?: posts_metadataCreateNestedOneWithoutReported_contentInput
    social_users_reported_content_reporter_idTosocial_users: social_usersCreateNestedOneWithoutReported_content_reported_content_reporter_idTosocial_usersInput
  }

  export type reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    id?: string
    reporter_id: string
    post_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type reported_contentCreateOrConnectWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    where: reported_contentWhereUniqueInput
    create: XOR<reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput>
  }

  export type reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInputEnvelope = {
    data: reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInput | reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    id?: string
    reason: string
    status?: string | null
    created_at?: Date | string
    posts_metadata?: posts_metadataCreateNestedOneWithoutReported_contentInput
    social_users_reported_content_reported_user_idTosocial_users?: social_usersCreateNestedOneWithoutReported_content_reported_content_reported_user_idTosocial_usersInput
  }

  export type reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    id?: string
    reported_user_id?: string | null
    post_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type reported_contentCreateOrConnectWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    where: reported_contentWhereUniqueInput
    create: XOR<reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput>
  }

  export type reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInputEnvelope = {
    data: reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInput | reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInput[]
    skipDuplicates?: boolean
  }

  export type blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    where: blockingWhereUniqueInput
    update: XOR<blockingUpdateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedUpdateWithoutSocial_users_blocking_blocked_idTosocial_usersInput>
    create: XOR<blockingCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocked_idTosocial_usersInput>
  }

  export type blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    where: blockingWhereUniqueInput
    data: XOR<blockingUpdateWithoutSocial_users_blocking_blocked_idTosocial_usersInput, blockingUncheckedUpdateWithoutSocial_users_blocking_blocked_idTosocial_usersInput>
  }

  export type blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    where: blockingScalarWhereInput
    data: XOR<blockingUpdateManyMutationInput, blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput>
  }

  export type blockingScalarWhereInput = {
    AND?: blockingScalarWhereInput | blockingScalarWhereInput[]
    OR?: blockingScalarWhereInput[]
    NOT?: blockingScalarWhereInput | blockingScalarWhereInput[]
    id?: UuidFilter<"blocking"> | string
    blocker_id?: UuidFilter<"blocking"> | string
    blocked_id?: UuidFilter<"blocking"> | string
    created_at?: DateTimeFilter<"blocking"> | Date | string
  }

  export type blockingUpsertWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    where: blockingWhereUniqueInput
    update: XOR<blockingUpdateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedUpdateWithoutSocial_users_blocking_blocker_idTosocial_usersInput>
    create: XOR<blockingCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedCreateWithoutSocial_users_blocking_blocker_idTosocial_usersInput>
  }

  export type blockingUpdateWithWhereUniqueWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    where: blockingWhereUniqueInput
    data: XOR<blockingUpdateWithoutSocial_users_blocking_blocker_idTosocial_usersInput, blockingUncheckedUpdateWithoutSocial_users_blocking_blocker_idTosocial_usersInput>
  }

  export type blockingUpdateManyWithWhereWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    where: blockingScalarWhereInput
    data: XOR<blockingUpdateManyMutationInput, blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutSocial_usersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutSocial_usersInput, commentsUncheckedUpdateWithoutSocial_usersInput>
    create: XOR<commentsCreateWithoutSocial_usersInput, commentsUncheckedCreateWithoutSocial_usersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutSocial_usersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutSocial_usersInput, commentsUncheckedUpdateWithoutSocial_usersInput>
  }

  export type commentsUpdateManyWithWhereWithoutSocial_usersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutSocial_usersInput>
  }

  export type followingUpsertWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput = {
    where: followingWhereUniqueInput
    update: XOR<followingUpdateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedUpdateWithoutSocial_users_following_followee_idTosocial_usersInput>
    create: XOR<followingCreateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_followee_idTosocial_usersInput>
  }

  export type followingUpdateWithWhereUniqueWithoutSocial_users_following_followee_idTosocial_usersInput = {
    where: followingWhereUniqueInput
    data: XOR<followingUpdateWithoutSocial_users_following_followee_idTosocial_usersInput, followingUncheckedUpdateWithoutSocial_users_following_followee_idTosocial_usersInput>
  }

  export type followingUpdateManyWithWhereWithoutSocial_users_following_followee_idTosocial_usersInput = {
    where: followingScalarWhereInput
    data: XOR<followingUpdateManyMutationInput, followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersInput>
  }

  export type followingScalarWhereInput = {
    AND?: followingScalarWhereInput | followingScalarWhereInput[]
    OR?: followingScalarWhereInput[]
    NOT?: followingScalarWhereInput | followingScalarWhereInput[]
    id?: UuidFilter<"following"> | string
    follower_id?: UuidFilter<"following"> | string
    followee_id?: UuidFilter<"following"> | string
    followed_at?: DateTimeNullableFilter<"following"> | Date | string | null
  }

  export type followingUpsertWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput = {
    where: followingWhereUniqueInput
    update: XOR<followingUpdateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedUpdateWithoutSocial_users_following_follower_idTosocial_usersInput>
    create: XOR<followingCreateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedCreateWithoutSocial_users_following_follower_idTosocial_usersInput>
  }

  export type followingUpdateWithWhereUniqueWithoutSocial_users_following_follower_idTosocial_usersInput = {
    where: followingWhereUniqueInput
    data: XOR<followingUpdateWithoutSocial_users_following_follower_idTosocial_usersInput, followingUncheckedUpdateWithoutSocial_users_following_follower_idTosocial_usersInput>
  }

  export type followingUpdateManyWithWhereWithoutSocial_users_following_follower_idTosocial_usersInput = {
    where: followingScalarWhereInput
    data: XOR<followingUpdateManyMutationInput, followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersInput>
  }

  export type likesUpsertWithWhereUniqueWithoutSocial_usersInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutSocial_usersInput, likesUncheckedUpdateWithoutSocial_usersInput>
    create: XOR<likesCreateWithoutSocial_usersInput, likesUncheckedCreateWithoutSocial_usersInput>
  }

  export type likesUpdateWithWhereUniqueWithoutSocial_usersInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutSocial_usersInput, likesUncheckedUpdateWithoutSocial_usersInput>
  }

  export type likesUpdateManyWithWhereWithoutSocial_usersInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutSocial_usersInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutSocial_usersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutSocial_usersInput, notificationsUncheckedUpdateWithoutSocial_usersInput>
    create: XOR<notificationsCreateWithoutSocial_usersInput, notificationsUncheckedCreateWithoutSocial_usersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutSocial_usersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutSocial_usersInput, notificationsUncheckedUpdateWithoutSocial_usersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutSocial_usersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutSocial_usersInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    notification_id?: UuidFilter<"notifications"> | string
    user_id?: UuidFilter<"notifications"> | string
    notification_type?: StringNullableFilter<"notifications"> | string | null
    notification_content?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeFilter<"notifications"> | Date | string
  }

  export type posts_metadataUpsertWithWhereUniqueWithoutSocial_usersInput = {
    where: posts_metadataWhereUniqueInput
    update: XOR<posts_metadataUpdateWithoutSocial_usersInput, posts_metadataUncheckedUpdateWithoutSocial_usersInput>
    create: XOR<posts_metadataCreateWithoutSocial_usersInput, posts_metadataUncheckedCreateWithoutSocial_usersInput>
  }

  export type posts_metadataUpdateWithWhereUniqueWithoutSocial_usersInput = {
    where: posts_metadataWhereUniqueInput
    data: XOR<posts_metadataUpdateWithoutSocial_usersInput, posts_metadataUncheckedUpdateWithoutSocial_usersInput>
  }

  export type posts_metadataUpdateManyWithWhereWithoutSocial_usersInput = {
    where: posts_metadataScalarWhereInput
    data: XOR<posts_metadataUpdateManyMutationInput, posts_metadataUncheckedUpdateManyWithoutSocial_usersInput>
  }

  export type posts_metadataScalarWhereInput = {
    AND?: posts_metadataScalarWhereInput | posts_metadataScalarWhereInput[]
    OR?: posts_metadataScalarWhereInput[]
    NOT?: posts_metadataScalarWhereInput | posts_metadataScalarWhereInput[]
    id?: UuidFilter<"posts_metadata"> | string
    user_id?: UuidFilter<"posts_metadata"> | string
    title?: StringNullableFilter<"posts_metadata"> | string | null
    summary?: StringNullableFilter<"posts_metadata"> | string | null
    post_type?: StringNullableFilter<"posts_metadata"> | string | null
    visibility?: StringNullableFilter<"posts_metadata"> | string | null
    price?: DecimalNullableFilter<"posts_metadata"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"posts_metadata"> | Date | string
    updated_at?: DateTimeFilter<"posts_metadata"> | Date | string
  }

  export type reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    where: reported_contentWhereUniqueInput
    update: XOR<reported_contentUpdateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedUpdateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput>
    create: XOR<reported_contentCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput>
  }

  export type reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    where: reported_contentWhereUniqueInput
    data: XOR<reported_contentUpdateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput, reported_contentUncheckedUpdateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput>
  }

  export type reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    where: reported_contentScalarWhereInput
    data: XOR<reported_contentUpdateManyMutationInput, reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput>
  }

  export type reported_contentUpsertWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    where: reported_contentWhereUniqueInput
    update: XOR<reported_contentUpdateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedUpdateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput>
    create: XOR<reported_contentCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedCreateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput>
  }

  export type reported_contentUpdateWithWhereUniqueWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    where: reported_contentWhereUniqueInput
    data: XOR<reported_contentUpdateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput, reported_contentUncheckedUpdateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput>
  }

  export type reported_contentUpdateManyWithWhereWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    where: reported_contentScalarWhereInput
    data: XOR<reported_contentUpdateManyMutationInput, reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput>
  }

  export type commentsCreateManyCommentsInput = {
    comment_id?: string
    post_id: string
    user_id: string
    content: string
    created_at?: Date | string | null
  }

  export type commentsUpdateWithoutCommentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    posts_metadata?: posts_metadataUpdateOneRequiredWithoutCommentsNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutCommentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutCommentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyPosts_metadataInput = {
    comment_id?: string
    user_id: string
    parent_comment_id?: string | null
    content: string
    created_at?: Date | string | null
  }

  export type likesCreateManyPosts_metadataInput = {
    user_id: string
    liked_at?: Date | string | null
  }

  export type reported_contentCreateManyPosts_metadataInput = {
    id?: string
    reporter_id: string
    reported_user_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type commentsUpdateWithoutPosts_metadataInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    social_users?: social_usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutPosts_metadataInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutPosts_metadataInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUpdateWithoutPosts_metadataInput = {
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_users?: social_usersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutPosts_metadataInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyWithoutPosts_metadataInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reported_contentUpdateWithoutPosts_metadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_users_reported_content_reported_user_idTosocial_users?: social_usersUpdateOneWithoutReported_content_reported_content_reported_user_idTosocial_usersNestedInput
    social_users_reported_content_reporter_idTosocial_users?: social_usersUpdateOneRequiredWithoutReported_content_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type reported_contentUncheckedUpdateWithoutPosts_metadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporter_id?: StringFieldUpdateOperationsInput | string
    reported_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentUncheckedUpdateManyWithoutPosts_metadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporter_id?: StringFieldUpdateOperationsInput | string
    reported_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockingCreateManySocial_users_blocking_blocked_idTosocial_usersInput = {
    id?: string
    blocker_id: string
    created_at?: Date | string
  }

  export type blockingCreateManySocial_users_blocking_blocker_idTosocial_usersInput = {
    id?: string
    blocked_id: string
    created_at?: Date | string
  }

  export type commentsCreateManySocial_usersInput = {
    comment_id?: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    created_at?: Date | string | null
  }

  export type followingCreateManySocial_users_following_followee_idTosocial_usersInput = {
    id?: string
    follower_id: string
    followed_at?: Date | string | null
  }

  export type followingCreateManySocial_users_following_follower_idTosocial_usersInput = {
    id?: string
    followee_id: string
    followed_at?: Date | string | null
  }

  export type likesCreateManySocial_usersInput = {
    post_id: string
    liked_at?: Date | string | null
  }

  export type notificationsCreateManySocial_usersInput = {
    notification_id?: string
    notification_type?: string | null
    notification_content?: string | null
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type posts_metadataCreateManySocial_usersInput = {
    id?: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    visibility?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reported_contentCreateManySocial_users_reported_content_reported_user_idTosocial_usersInput = {
    id?: string
    reporter_id: string
    post_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type reported_contentCreateManySocial_users_reported_content_reporter_idTosocial_usersInput = {
    id?: string
    reported_user_id?: string | null
    post_id?: string | null
    reason: string
    status?: string | null
    created_at?: Date | string
  }

  export type blockingUpdateWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_users_blocking_blocker_idTosocial_users?: social_usersUpdateOneRequiredWithoutBlocking_blocking_blocker_idTosocial_usersNestedInput
  }

  export type blockingUncheckedUpdateWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocked_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockingUpdateWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    social_users_blocking_blocked_idTosocial_users?: social_usersUpdateOneRequiredWithoutBlocking_blocking_blocked_idTosocial_usersNestedInput
  }

  export type blockingUncheckedUpdateWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockingUncheckedUpdateManyWithoutSocial_users_blocking_blocker_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUpdateWithoutSocial_usersInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateOneWithoutOther_commentsNestedInput
    other_comments?: commentsUpdateManyWithoutCommentsNestedInput
    posts_metadata?: posts_metadataUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutSocial_usersInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_comments?: commentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutSocial_usersInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followingUpdateWithoutSocial_users_following_followee_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_users_following_follower_idTosocial_users?: social_usersUpdateOneRequiredWithoutFollowing_following_follower_idTosocial_usersNestedInput
  }

  export type followingUncheckedUpdateWithoutSocial_users_following_followee_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followingUncheckedUpdateManyWithoutSocial_users_following_followee_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followingUpdateWithoutSocial_users_following_follower_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_users_following_followee_idTosocial_users?: social_usersUpdateOneRequiredWithoutFollowing_following_followee_idTosocial_usersNestedInput
  }

  export type followingUncheckedUpdateWithoutSocial_users_following_follower_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    followee_id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followingUncheckedUpdateManyWithoutSocial_users_following_follower_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    followee_id?: StringFieldUpdateOperationsInput | string
    followed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUpdateWithoutSocial_usersInput = {
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts_metadata?: posts_metadataUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutSocial_usersInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyWithoutSocial_usersInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    liked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutSocial_usersInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    notification_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateWithoutSocial_usersInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    notification_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyWithoutSocial_usersInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    notification_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posts_metadataUpdateWithoutSocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUpdateOneWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUpdateManyWithoutPosts_metadataNestedInput
  }

  export type posts_metadataUncheckedUpdateWithoutSocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutPosts_metadataNestedInput
    likes?: likesUncheckedUpdateManyWithoutPosts_metadataNestedInput
    posts_analytics?: posts_analyticsUncheckedUpdateOneWithoutPosts_metadataNestedInput
    reported_content?: reported_contentUncheckedUpdateManyWithoutPosts_metadataNestedInput
  }

  export type posts_metadataUncheckedUpdateManyWithoutSocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentUpdateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    posts_metadata?: posts_metadataUpdateOneWithoutReported_contentNestedInput
    social_users_reported_content_reporter_idTosocial_users?: social_usersUpdateOneRequiredWithoutReported_content_reported_content_reporter_idTosocial_usersNestedInput
  }

  export type reported_contentUncheckedUpdateWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporter_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reported_user_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporter_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentUpdateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    posts_metadata?: posts_metadataUpdateOneWithoutReported_contentNestedInput
    social_users_reported_content_reported_user_idTosocial_users?: social_usersUpdateOneWithoutReported_content_reported_content_reported_user_idTosocial_usersNestedInput
  }

  export type reported_contentUncheckedUpdateWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reported_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reported_contentUncheckedUpdateManyWithoutSocial_users_reported_content_reporter_idTosocial_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    reported_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}