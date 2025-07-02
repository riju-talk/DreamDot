
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
 * Model user_about
 * 
 */
export type user_about = $Result.DefaultSelection<Prisma.$user_aboutPayload>
/**
 * Model user_analytics
 * 
 */
export type user_analytics = $Result.DefaultSelection<Prisma.$user_analyticsPayload>
/**
 * Model user_audit_logs
 * 
 */
export type user_audit_logs = $Result.DefaultSelection<Prisma.$user_audit_logsPayload>
/**
 * Model user_blocklist
 * 
 */
export type user_blocklist = $Result.DefaultSelection<Prisma.$user_blocklistPayload>
/**
 * Model user_certificates
 * 
 */
export type user_certificates = $Result.DefaultSelection<Prisma.$user_certificatesPayload>
/**
 * Model user_profile
 * 
 */
export type user_profile = $Result.DefaultSelection<Prisma.$user_profilePayload>
/**
 * Model user_security
 * 
 */
export type user_security = $Result.DefaultSelection<Prisma.$user_securityPayload>
/**
 * Model user_sessions
 * 
 */
export type user_sessions = $Result.DefaultSelection<Prisma.$user_sessionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_abouts
 * const user_abouts = await prisma.user_about.findMany()
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
   * // Fetch zero or more User_abouts
   * const user_abouts = await prisma.user_about.findMany()
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
   * `prisma.user_about`: Exposes CRUD operations for the **user_about** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_abouts
    * const user_abouts = await prisma.user_about.findMany()
    * ```
    */
  get user_about(): Prisma.user_aboutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_analytics`: Exposes CRUD operations for the **user_analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_analytics
    * const user_analytics = await prisma.user_analytics.findMany()
    * ```
    */
  get user_analytics(): Prisma.user_analyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_audit_logs`: Exposes CRUD operations for the **user_audit_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_audit_logs
    * const user_audit_logs = await prisma.user_audit_logs.findMany()
    * ```
    */
  get user_audit_logs(): Prisma.user_audit_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_blocklist`: Exposes CRUD operations for the **user_blocklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_blocklists
    * const user_blocklists = await prisma.user_blocklist.findMany()
    * ```
    */
  get user_blocklist(): Prisma.user_blocklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_certificates`: Exposes CRUD operations for the **user_certificates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_certificates
    * const user_certificates = await prisma.user_certificates.findMany()
    * ```
    */
  get user_certificates(): Prisma.user_certificatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_profile`: Exposes CRUD operations for the **user_profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_profiles
    * const user_profiles = await prisma.user_profile.findMany()
    * ```
    */
  get user_profile(): Prisma.user_profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_security`: Exposes CRUD operations for the **user_security** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_securities
    * const user_securities = await prisma.user_security.findMany()
    * ```
    */
  get user_security(): Prisma.user_securityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_sessions`: Exposes CRUD operations for the **user_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_sessions
    * const user_sessions = await prisma.user_sessions.findMany()
    * ```
    */
  get user_sessions(): Prisma.user_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    user_about: 'user_about',
    user_analytics: 'user_analytics',
    user_audit_logs: 'user_audit_logs',
    user_blocklist: 'user_blocklist',
    user_certificates: 'user_certificates',
    user_profile: 'user_profile',
    user_security: 'user_security',
    user_sessions: 'user_sessions',
    users: 'users'
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
      modelProps: "user_about" | "user_analytics" | "user_audit_logs" | "user_blocklist" | "user_certificates" | "user_profile" | "user_security" | "user_sessions" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_about: {
        payload: Prisma.$user_aboutPayload<ExtArgs>
        fields: Prisma.user_aboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_aboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_aboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>
          }
          findFirst: {
            args: Prisma.user_aboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_aboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>
          }
          findMany: {
            args: Prisma.user_aboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>[]
          }
          create: {
            args: Prisma.user_aboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>
          }
          createMany: {
            args: Prisma.user_aboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_aboutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>[]
          }
          delete: {
            args: Prisma.user_aboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>
          }
          update: {
            args: Prisma.user_aboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>
          }
          deleteMany: {
            args: Prisma.user_aboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_aboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_aboutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>[]
          }
          upsert: {
            args: Prisma.user_aboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_aboutPayload>
          }
          aggregate: {
            args: Prisma.User_aboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_about>
          }
          groupBy: {
            args: Prisma.user_aboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_aboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_aboutCountArgs<ExtArgs>
            result: $Utils.Optional<User_aboutCountAggregateOutputType> | number
          }
        }
      }
      user_analytics: {
        payload: Prisma.$user_analyticsPayload<ExtArgs>
        fields: Prisma.user_analyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_analyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_analyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>
          }
          findFirst: {
            args: Prisma.user_analyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_analyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>
          }
          findMany: {
            args: Prisma.user_analyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>[]
          }
          create: {
            args: Prisma.user_analyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>
          }
          createMany: {
            args: Prisma.user_analyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_analyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>[]
          }
          delete: {
            args: Prisma.user_analyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>
          }
          update: {
            args: Prisma.user_analyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>
          }
          deleteMany: {
            args: Prisma.user_analyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_analyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_analyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>[]
          }
          upsert: {
            args: Prisma.user_analyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_analyticsPayload>
          }
          aggregate: {
            args: Prisma.User_analyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_analytics>
          }
          groupBy: {
            args: Prisma.user_analyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_analyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_analyticsCountArgs<ExtArgs>
            result: $Utils.Optional<User_analyticsCountAggregateOutputType> | number
          }
        }
      }
      user_audit_logs: {
        payload: Prisma.$user_audit_logsPayload<ExtArgs>
        fields: Prisma.user_audit_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_audit_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_audit_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>
          }
          findFirst: {
            args: Prisma.user_audit_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_audit_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>
          }
          findMany: {
            args: Prisma.user_audit_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>[]
          }
          create: {
            args: Prisma.user_audit_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>
          }
          createMany: {
            args: Prisma.user_audit_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_audit_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>[]
          }
          delete: {
            args: Prisma.user_audit_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>
          }
          update: {
            args: Prisma.user_audit_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>
          }
          deleteMany: {
            args: Prisma.user_audit_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_audit_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_audit_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>[]
          }
          upsert: {
            args: Prisma.user_audit_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_audit_logsPayload>
          }
          aggregate: {
            args: Prisma.User_audit_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_audit_logs>
          }
          groupBy: {
            args: Prisma.user_audit_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_audit_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_audit_logsCountArgs<ExtArgs>
            result: $Utils.Optional<User_audit_logsCountAggregateOutputType> | number
          }
        }
      }
      user_blocklist: {
        payload: Prisma.$user_blocklistPayload<ExtArgs>
        fields: Prisma.user_blocklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_blocklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_blocklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>
          }
          findFirst: {
            args: Prisma.user_blocklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_blocklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>
          }
          findMany: {
            args: Prisma.user_blocklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>[]
          }
          create: {
            args: Prisma.user_blocklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>
          }
          createMany: {
            args: Prisma.user_blocklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_blocklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>[]
          }
          delete: {
            args: Prisma.user_blocklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>
          }
          update: {
            args: Prisma.user_blocklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>
          }
          deleteMany: {
            args: Prisma.user_blocklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_blocklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_blocklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>[]
          }
          upsert: {
            args: Prisma.user_blocklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_blocklistPayload>
          }
          aggregate: {
            args: Prisma.User_blocklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_blocklist>
          }
          groupBy: {
            args: Prisma.user_blocklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_blocklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_blocklistCountArgs<ExtArgs>
            result: $Utils.Optional<User_blocklistCountAggregateOutputType> | number
          }
        }
      }
      user_certificates: {
        payload: Prisma.$user_certificatesPayload<ExtArgs>
        fields: Prisma.user_certificatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_certificatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_certificatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>
          }
          findFirst: {
            args: Prisma.user_certificatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_certificatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>
          }
          findMany: {
            args: Prisma.user_certificatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>[]
          }
          create: {
            args: Prisma.user_certificatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>
          }
          createMany: {
            args: Prisma.user_certificatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_certificatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>[]
          }
          delete: {
            args: Prisma.user_certificatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>
          }
          update: {
            args: Prisma.user_certificatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>
          }
          deleteMany: {
            args: Prisma.user_certificatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_certificatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_certificatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>[]
          }
          upsert: {
            args: Prisma.user_certificatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_certificatesPayload>
          }
          aggregate: {
            args: Prisma.User_certificatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_certificates>
          }
          groupBy: {
            args: Prisma.user_certificatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_certificatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_certificatesCountArgs<ExtArgs>
            result: $Utils.Optional<User_certificatesCountAggregateOutputType> | number
          }
        }
      }
      user_profile: {
        payload: Prisma.$user_profilePayload<ExtArgs>
        fields: Prisma.user_profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>
          }
          findFirst: {
            args: Prisma.user_profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>
          }
          findMany: {
            args: Prisma.user_profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>[]
          }
          create: {
            args: Prisma.user_profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>
          }
          createMany: {
            args: Prisma.user_profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_profileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>[]
          }
          delete: {
            args: Prisma.user_profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>
          }
          update: {
            args: Prisma.user_profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>
          }
          deleteMany: {
            args: Prisma.user_profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_profileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>[]
          }
          upsert: {
            args: Prisma.user_profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilePayload>
          }
          aggregate: {
            args: Prisma.User_profileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_profile>
          }
          groupBy: {
            args: Prisma.user_profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_profileGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_profileCountArgs<ExtArgs>
            result: $Utils.Optional<User_profileCountAggregateOutputType> | number
          }
        }
      }
      user_security: {
        payload: Prisma.$user_securityPayload<ExtArgs>
        fields: Prisma.user_securityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_securityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_securityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>
          }
          findFirst: {
            args: Prisma.user_securityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_securityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>
          }
          findMany: {
            args: Prisma.user_securityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>[]
          }
          create: {
            args: Prisma.user_securityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>
          }
          createMany: {
            args: Prisma.user_securityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_securityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>[]
          }
          delete: {
            args: Prisma.user_securityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>
          }
          update: {
            args: Prisma.user_securityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>
          }
          deleteMany: {
            args: Prisma.user_securityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_securityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_securityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>[]
          }
          upsert: {
            args: Prisma.user_securityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_securityPayload>
          }
          aggregate: {
            args: Prisma.User_securityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_security>
          }
          groupBy: {
            args: Prisma.user_securityGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_securityGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_securityCountArgs<ExtArgs>
            result: $Utils.Optional<User_securityCountAggregateOutputType> | number
          }
        }
      }
      user_sessions: {
        payload: Prisma.$user_sessionsPayload<ExtArgs>
        fields: Prisma.user_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          findFirst: {
            args: Prisma.user_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          findMany: {
            args: Prisma.user_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>[]
          }
          create: {
            args: Prisma.user_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          createMany: {
            args: Prisma.user_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>[]
          }
          delete: {
            args: Prisma.user_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          update: {
            args: Prisma.user_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.user_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>[]
          }
          upsert: {
            args: Prisma.user_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          aggregate: {
            args: Prisma.User_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_sessions>
          }
          groupBy: {
            args: Prisma.user_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    user_about?: user_aboutOmit
    user_analytics?: user_analyticsOmit
    user_audit_logs?: user_audit_logsOmit
    user_blocklist?: user_blocklistOmit
    user_certificates?: user_certificatesOmit
    user_profile?: user_profileOmit
    user_security?: user_securityOmit
    user_sessions?: user_sessionsOmit
    users?: usersOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_audit_logs: number
    user_sessions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_audit_logs?: boolean | UsersCountOutputTypeCountUser_audit_logsArgs
    user_sessions?: boolean | UsersCountOutputTypeCountUser_sessionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_audit_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_sessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_about
   */

  export type AggregateUser_about = {
    _count: User_aboutCountAggregateOutputType | null
    _min: User_aboutMinAggregateOutputType | null
    _max: User_aboutMaxAggregateOutputType | null
  }

  export type User_aboutMinAggregateOutputType = {
    about_id: string | null
    user_id: string | null
    about: string | null
    goals: string | null
  }

  export type User_aboutMaxAggregateOutputType = {
    about_id: string | null
    user_id: string | null
    about: string | null
    goals: string | null
  }

  export type User_aboutCountAggregateOutputType = {
    about_id: number
    user_id: number
    about: number
    goals: number
    skills: number
    _all: number
  }


  export type User_aboutMinAggregateInputType = {
    about_id?: true
    user_id?: true
    about?: true
    goals?: true
  }

  export type User_aboutMaxAggregateInputType = {
    about_id?: true
    user_id?: true
    about?: true
    goals?: true
  }

  export type User_aboutCountAggregateInputType = {
    about_id?: true
    user_id?: true
    about?: true
    goals?: true
    skills?: true
    _all?: true
  }

  export type User_aboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_about to aggregate.
     */
    where?: user_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_abouts to fetch.
     */
    orderBy?: user_aboutOrderByWithRelationInput | user_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_abouts
    **/
    _count?: true | User_aboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_aboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_aboutMaxAggregateInputType
  }

  export type GetUser_aboutAggregateType<T extends User_aboutAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_about]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_about[P]>
      : GetScalarType<T[P], AggregateUser_about[P]>
  }




  export type user_aboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_aboutWhereInput
    orderBy?: user_aboutOrderByWithAggregationInput | user_aboutOrderByWithAggregationInput[]
    by: User_aboutScalarFieldEnum[] | User_aboutScalarFieldEnum
    having?: user_aboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_aboutCountAggregateInputType | true
    _min?: User_aboutMinAggregateInputType
    _max?: User_aboutMaxAggregateInputType
  }

  export type User_aboutGroupByOutputType = {
    about_id: string
    user_id: string
    about: string | null
    goals: string | null
    skills: string[]
    _count: User_aboutCountAggregateOutputType | null
    _min: User_aboutMinAggregateOutputType | null
    _max: User_aboutMaxAggregateOutputType | null
  }

  type GetUser_aboutGroupByPayload<T extends user_aboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_aboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_aboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_aboutGroupByOutputType[P]>
            : GetScalarType<T[P], User_aboutGroupByOutputType[P]>
        }
      >
    >


  export type user_aboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    about_id?: boolean
    user_id?: boolean
    about?: boolean
    goals?: boolean
    skills?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_about"]>

  export type user_aboutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    about_id?: boolean
    user_id?: boolean
    about?: boolean
    goals?: boolean
    skills?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_about"]>

  export type user_aboutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    about_id?: boolean
    user_id?: boolean
    about?: boolean
    goals?: boolean
    skills?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_about"]>

  export type user_aboutSelectScalar = {
    about_id?: boolean
    user_id?: boolean
    about?: boolean
    goals?: boolean
    skills?: boolean
  }

  export type user_aboutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"about_id" | "user_id" | "about" | "goals" | "skills", ExtArgs["result"]["user_about"]>
  export type user_aboutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_aboutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_aboutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_aboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_about"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      about_id: string
      user_id: string
      about: string | null
      goals: string | null
      skills: string[]
    }, ExtArgs["result"]["user_about"]>
    composites: {}
  }

  type user_aboutGetPayload<S extends boolean | null | undefined | user_aboutDefaultArgs> = $Result.GetResult<Prisma.$user_aboutPayload, S>

  type user_aboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_aboutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_aboutCountAggregateInputType | true
    }

  export interface user_aboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_about'], meta: { name: 'user_about' } }
    /**
     * Find zero or one User_about that matches the filter.
     * @param {user_aboutFindUniqueArgs} args - Arguments to find a User_about
     * @example
     * // Get one User_about
     * const user_about = await prisma.user_about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_aboutFindUniqueArgs>(args: SelectSubset<T, user_aboutFindUniqueArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_about that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_aboutFindUniqueOrThrowArgs} args - Arguments to find a User_about
     * @example
     * // Get one User_about
     * const user_about = await prisma.user_about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_aboutFindUniqueOrThrowArgs>(args: SelectSubset<T, user_aboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_about that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_aboutFindFirstArgs} args - Arguments to find a User_about
     * @example
     * // Get one User_about
     * const user_about = await prisma.user_about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_aboutFindFirstArgs>(args?: SelectSubset<T, user_aboutFindFirstArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_about that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_aboutFindFirstOrThrowArgs} args - Arguments to find a User_about
     * @example
     * // Get one User_about
     * const user_about = await prisma.user_about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_aboutFindFirstOrThrowArgs>(args?: SelectSubset<T, user_aboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_aboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_abouts
     * const user_abouts = await prisma.user_about.findMany()
     * 
     * // Get first 10 User_abouts
     * const user_abouts = await prisma.user_about.findMany({ take: 10 })
     * 
     * // Only select the `about_id`
     * const user_aboutWithAbout_idOnly = await prisma.user_about.findMany({ select: { about_id: true } })
     * 
     */
    findMany<T extends user_aboutFindManyArgs>(args?: SelectSubset<T, user_aboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_about.
     * @param {user_aboutCreateArgs} args - Arguments to create a User_about.
     * @example
     * // Create one User_about
     * const User_about = await prisma.user_about.create({
     *   data: {
     *     // ... data to create a User_about
     *   }
     * })
     * 
     */
    create<T extends user_aboutCreateArgs>(args: SelectSubset<T, user_aboutCreateArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_abouts.
     * @param {user_aboutCreateManyArgs} args - Arguments to create many User_abouts.
     * @example
     * // Create many User_abouts
     * const user_about = await prisma.user_about.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_aboutCreateManyArgs>(args?: SelectSubset<T, user_aboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_abouts and returns the data saved in the database.
     * @param {user_aboutCreateManyAndReturnArgs} args - Arguments to create many User_abouts.
     * @example
     * // Create many User_abouts
     * const user_about = await prisma.user_about.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_abouts and only return the `about_id`
     * const user_aboutWithAbout_idOnly = await prisma.user_about.createManyAndReturn({
     *   select: { about_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_aboutCreateManyAndReturnArgs>(args?: SelectSubset<T, user_aboutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_about.
     * @param {user_aboutDeleteArgs} args - Arguments to delete one User_about.
     * @example
     * // Delete one User_about
     * const User_about = await prisma.user_about.delete({
     *   where: {
     *     // ... filter to delete one User_about
     *   }
     * })
     * 
     */
    delete<T extends user_aboutDeleteArgs>(args: SelectSubset<T, user_aboutDeleteArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_about.
     * @param {user_aboutUpdateArgs} args - Arguments to update one User_about.
     * @example
     * // Update one User_about
     * const user_about = await prisma.user_about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_aboutUpdateArgs>(args: SelectSubset<T, user_aboutUpdateArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_abouts.
     * @param {user_aboutDeleteManyArgs} args - Arguments to filter User_abouts to delete.
     * @example
     * // Delete a few User_abouts
     * const { count } = await prisma.user_about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_aboutDeleteManyArgs>(args?: SelectSubset<T, user_aboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_aboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_abouts
     * const user_about = await prisma.user_about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_aboutUpdateManyArgs>(args: SelectSubset<T, user_aboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_abouts and returns the data updated in the database.
     * @param {user_aboutUpdateManyAndReturnArgs} args - Arguments to update many User_abouts.
     * @example
     * // Update many User_abouts
     * const user_about = await prisma.user_about.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_abouts and only return the `about_id`
     * const user_aboutWithAbout_idOnly = await prisma.user_about.updateManyAndReturn({
     *   select: { about_id: true },
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
    updateManyAndReturn<T extends user_aboutUpdateManyAndReturnArgs>(args: SelectSubset<T, user_aboutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_about.
     * @param {user_aboutUpsertArgs} args - Arguments to update or create a User_about.
     * @example
     * // Update or create a User_about
     * const user_about = await prisma.user_about.upsert({
     *   create: {
     *     // ... data to create a User_about
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_about we want to update
     *   }
     * })
     */
    upsert<T extends user_aboutUpsertArgs>(args: SelectSubset<T, user_aboutUpsertArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_aboutCountArgs} args - Arguments to filter User_abouts to count.
     * @example
     * // Count the number of User_abouts
     * const count = await prisma.user_about.count({
     *   where: {
     *     // ... the filter for the User_abouts we want to count
     *   }
     * })
    **/
    count<T extends user_aboutCountArgs>(
      args?: Subset<T, user_aboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_aboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_about.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_aboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_aboutAggregateArgs>(args: Subset<T, User_aboutAggregateArgs>): Prisma.PrismaPromise<GetUser_aboutAggregateType<T>>

    /**
     * Group by User_about.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_aboutGroupByArgs} args - Group by arguments.
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
      T extends user_aboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_aboutGroupByArgs['orderBy'] }
        : { orderBy?: user_aboutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_aboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_aboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_about model
   */
  readonly fields: user_aboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_about.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_aboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_about model
   */
  interface user_aboutFieldRefs {
    readonly about_id: FieldRef<"user_about", 'String'>
    readonly user_id: FieldRef<"user_about", 'String'>
    readonly about: FieldRef<"user_about", 'String'>
    readonly goals: FieldRef<"user_about", 'String'>
    readonly skills: FieldRef<"user_about", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * user_about findUnique
   */
  export type user_aboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * Filter, which user_about to fetch.
     */
    where: user_aboutWhereUniqueInput
  }

  /**
   * user_about findUniqueOrThrow
   */
  export type user_aboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * Filter, which user_about to fetch.
     */
    where: user_aboutWhereUniqueInput
  }

  /**
   * user_about findFirst
   */
  export type user_aboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * Filter, which user_about to fetch.
     */
    where?: user_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_abouts to fetch.
     */
    orderBy?: user_aboutOrderByWithRelationInput | user_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_abouts.
     */
    cursor?: user_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_abouts.
     */
    distinct?: User_aboutScalarFieldEnum | User_aboutScalarFieldEnum[]
  }

  /**
   * user_about findFirstOrThrow
   */
  export type user_aboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * Filter, which user_about to fetch.
     */
    where?: user_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_abouts to fetch.
     */
    orderBy?: user_aboutOrderByWithRelationInput | user_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_abouts.
     */
    cursor?: user_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_abouts.
     */
    distinct?: User_aboutScalarFieldEnum | User_aboutScalarFieldEnum[]
  }

  /**
   * user_about findMany
   */
  export type user_aboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * Filter, which user_abouts to fetch.
     */
    where?: user_aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_abouts to fetch.
     */
    orderBy?: user_aboutOrderByWithRelationInput | user_aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_abouts.
     */
    cursor?: user_aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_abouts.
     */
    skip?: number
    distinct?: User_aboutScalarFieldEnum | User_aboutScalarFieldEnum[]
  }

  /**
   * user_about create
   */
  export type user_aboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * The data needed to create a user_about.
     */
    data: XOR<user_aboutCreateInput, user_aboutUncheckedCreateInput>
  }

  /**
   * user_about createMany
   */
  export type user_aboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_abouts.
     */
    data: user_aboutCreateManyInput | user_aboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_about createManyAndReturn
   */
  export type user_aboutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * The data used to create many user_abouts.
     */
    data: user_aboutCreateManyInput | user_aboutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_about update
   */
  export type user_aboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * The data needed to update a user_about.
     */
    data: XOR<user_aboutUpdateInput, user_aboutUncheckedUpdateInput>
    /**
     * Choose, which user_about to update.
     */
    where: user_aboutWhereUniqueInput
  }

  /**
   * user_about updateMany
   */
  export type user_aboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_abouts.
     */
    data: XOR<user_aboutUpdateManyMutationInput, user_aboutUncheckedUpdateManyInput>
    /**
     * Filter which user_abouts to update
     */
    where?: user_aboutWhereInput
    /**
     * Limit how many user_abouts to update.
     */
    limit?: number
  }

  /**
   * user_about updateManyAndReturn
   */
  export type user_aboutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * The data used to update user_abouts.
     */
    data: XOR<user_aboutUpdateManyMutationInput, user_aboutUncheckedUpdateManyInput>
    /**
     * Filter which user_abouts to update
     */
    where?: user_aboutWhereInput
    /**
     * Limit how many user_abouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_about upsert
   */
  export type user_aboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * The filter to search for the user_about to update in case it exists.
     */
    where: user_aboutWhereUniqueInput
    /**
     * In case the user_about found by the `where` argument doesn't exist, create a new user_about with this data.
     */
    create: XOR<user_aboutCreateInput, user_aboutUncheckedCreateInput>
    /**
     * In case the user_about was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_aboutUpdateInput, user_aboutUncheckedUpdateInput>
  }

  /**
   * user_about delete
   */
  export type user_aboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    /**
     * Filter which user_about to delete.
     */
    where: user_aboutWhereUniqueInput
  }

  /**
   * user_about deleteMany
   */
  export type user_aboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_abouts to delete
     */
    where?: user_aboutWhereInput
    /**
     * Limit how many user_abouts to delete.
     */
    limit?: number
  }

  /**
   * user_about without action
   */
  export type user_aboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
  }


  /**
   * Model user_analytics
   */

  export type AggregateUser_analytics = {
    _count: User_analyticsCountAggregateOutputType | null
    _avg: User_analyticsAvgAggregateOutputType | null
    _sum: User_analyticsSumAggregateOutputType | null
    _min: User_analyticsMinAggregateOutputType | null
    _max: User_analyticsMaxAggregateOutputType | null
  }

  export type User_analyticsAvgAggregateOutputType = {
    posts_count: number | null
    likes_received: number | null
    followers_count: number | null
    following_count: number | null
    activity_score: Decimal | null
  }

  export type User_analyticsSumAggregateOutputType = {
    posts_count: number | null
    likes_received: number | null
    followers_count: number | null
    following_count: number | null
    activity_score: Decimal | null
  }

  export type User_analyticsMinAggregateOutputType = {
    user_id: string | null
    posts_count: number | null
    likes_received: number | null
    followers_count: number | null
    following_count: number | null
    last_login: Date | null
    activity_score: Decimal | null
  }

  export type User_analyticsMaxAggregateOutputType = {
    user_id: string | null
    posts_count: number | null
    likes_received: number | null
    followers_count: number | null
    following_count: number | null
    last_login: Date | null
    activity_score: Decimal | null
  }

  export type User_analyticsCountAggregateOutputType = {
    user_id: number
    posts_count: number
    likes_received: number
    followers_count: number
    following_count: number
    last_login: number
    activity_score: number
    _all: number
  }


  export type User_analyticsAvgAggregateInputType = {
    posts_count?: true
    likes_received?: true
    followers_count?: true
    following_count?: true
    activity_score?: true
  }

  export type User_analyticsSumAggregateInputType = {
    posts_count?: true
    likes_received?: true
    followers_count?: true
    following_count?: true
    activity_score?: true
  }

  export type User_analyticsMinAggregateInputType = {
    user_id?: true
    posts_count?: true
    likes_received?: true
    followers_count?: true
    following_count?: true
    last_login?: true
    activity_score?: true
  }

  export type User_analyticsMaxAggregateInputType = {
    user_id?: true
    posts_count?: true
    likes_received?: true
    followers_count?: true
    following_count?: true
    last_login?: true
    activity_score?: true
  }

  export type User_analyticsCountAggregateInputType = {
    user_id?: true
    posts_count?: true
    likes_received?: true
    followers_count?: true
    following_count?: true
    last_login?: true
    activity_score?: true
    _all?: true
  }

  export type User_analyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_analytics to aggregate.
     */
    where?: user_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_analytics to fetch.
     */
    orderBy?: user_analyticsOrderByWithRelationInput | user_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_analytics
    **/
    _count?: true | User_analyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_analyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_analyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_analyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_analyticsMaxAggregateInputType
  }

  export type GetUser_analyticsAggregateType<T extends User_analyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_analytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_analytics[P]>
      : GetScalarType<T[P], AggregateUser_analytics[P]>
  }




  export type user_analyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_analyticsWhereInput
    orderBy?: user_analyticsOrderByWithAggregationInput | user_analyticsOrderByWithAggregationInput[]
    by: User_analyticsScalarFieldEnum[] | User_analyticsScalarFieldEnum
    having?: user_analyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_analyticsCountAggregateInputType | true
    _avg?: User_analyticsAvgAggregateInputType
    _sum?: User_analyticsSumAggregateInputType
    _min?: User_analyticsMinAggregateInputType
    _max?: User_analyticsMaxAggregateInputType
  }

  export type User_analyticsGroupByOutputType = {
    user_id: string
    posts_count: number | null
    likes_received: number | null
    followers_count: number | null
    following_count: number | null
    last_login: Date | null
    activity_score: Decimal | null
    _count: User_analyticsCountAggregateOutputType | null
    _avg: User_analyticsAvgAggregateOutputType | null
    _sum: User_analyticsSumAggregateOutputType | null
    _min: User_analyticsMinAggregateOutputType | null
    _max: User_analyticsMaxAggregateOutputType | null
  }

  type GetUser_analyticsGroupByPayload<T extends user_analyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_analyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_analyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_analyticsGroupByOutputType[P]>
            : GetScalarType<T[P], User_analyticsGroupByOutputType[P]>
        }
      >
    >


  export type user_analyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    posts_count?: boolean
    likes_received?: boolean
    followers_count?: boolean
    following_count?: boolean
    last_login?: boolean
    activity_score?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_analytics"]>

  export type user_analyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    posts_count?: boolean
    likes_received?: boolean
    followers_count?: boolean
    following_count?: boolean
    last_login?: boolean
    activity_score?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_analytics"]>

  export type user_analyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    posts_count?: boolean
    likes_received?: boolean
    followers_count?: boolean
    following_count?: boolean
    last_login?: boolean
    activity_score?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_analytics"]>

  export type user_analyticsSelectScalar = {
    user_id?: boolean
    posts_count?: boolean
    likes_received?: boolean
    followers_count?: boolean
    following_count?: boolean
    last_login?: boolean
    activity_score?: boolean
  }

  export type user_analyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "posts_count" | "likes_received" | "followers_count" | "following_count" | "last_login" | "activity_score", ExtArgs["result"]["user_analytics"]>
  export type user_analyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_analyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_analyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_analyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_analytics"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      posts_count: number | null
      likes_received: number | null
      followers_count: number | null
      following_count: number | null
      last_login: Date | null
      activity_score: Prisma.Decimal | null
    }, ExtArgs["result"]["user_analytics"]>
    composites: {}
  }

  type user_analyticsGetPayload<S extends boolean | null | undefined | user_analyticsDefaultArgs> = $Result.GetResult<Prisma.$user_analyticsPayload, S>

  type user_analyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_analyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_analyticsCountAggregateInputType | true
    }

  export interface user_analyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_analytics'], meta: { name: 'user_analytics' } }
    /**
     * Find zero or one User_analytics that matches the filter.
     * @param {user_analyticsFindUniqueArgs} args - Arguments to find a User_analytics
     * @example
     * // Get one User_analytics
     * const user_analytics = await prisma.user_analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_analyticsFindUniqueArgs>(args: SelectSubset<T, user_analyticsFindUniqueArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_analyticsFindUniqueOrThrowArgs} args - Arguments to find a User_analytics
     * @example
     * // Get one User_analytics
     * const user_analytics = await prisma.user_analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_analyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_analyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_analyticsFindFirstArgs} args - Arguments to find a User_analytics
     * @example
     * // Get one User_analytics
     * const user_analytics = await prisma.user_analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_analyticsFindFirstArgs>(args?: SelectSubset<T, user_analyticsFindFirstArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_analyticsFindFirstOrThrowArgs} args - Arguments to find a User_analytics
     * @example
     * // Get one User_analytics
     * const user_analytics = await prisma.user_analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_analyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_analyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_analyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_analytics
     * const user_analytics = await prisma.user_analytics.findMany()
     * 
     * // Get first 10 User_analytics
     * const user_analytics = await prisma.user_analytics.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_analyticsWithUser_idOnly = await prisma.user_analytics.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_analyticsFindManyArgs>(args?: SelectSubset<T, user_analyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_analytics.
     * @param {user_analyticsCreateArgs} args - Arguments to create a User_analytics.
     * @example
     * // Create one User_analytics
     * const User_analytics = await prisma.user_analytics.create({
     *   data: {
     *     // ... data to create a User_analytics
     *   }
     * })
     * 
     */
    create<T extends user_analyticsCreateArgs>(args: SelectSubset<T, user_analyticsCreateArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_analytics.
     * @param {user_analyticsCreateManyArgs} args - Arguments to create many User_analytics.
     * @example
     * // Create many User_analytics
     * const user_analytics = await prisma.user_analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_analyticsCreateManyArgs>(args?: SelectSubset<T, user_analyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_analytics and returns the data saved in the database.
     * @param {user_analyticsCreateManyAndReturnArgs} args - Arguments to create many User_analytics.
     * @example
     * // Create many User_analytics
     * const user_analytics = await prisma.user_analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_analytics and only return the `user_id`
     * const user_analyticsWithUser_idOnly = await prisma.user_analytics.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_analyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_analyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_analytics.
     * @param {user_analyticsDeleteArgs} args - Arguments to delete one User_analytics.
     * @example
     * // Delete one User_analytics
     * const User_analytics = await prisma.user_analytics.delete({
     *   where: {
     *     // ... filter to delete one User_analytics
     *   }
     * })
     * 
     */
    delete<T extends user_analyticsDeleteArgs>(args: SelectSubset<T, user_analyticsDeleteArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_analytics.
     * @param {user_analyticsUpdateArgs} args - Arguments to update one User_analytics.
     * @example
     * // Update one User_analytics
     * const user_analytics = await prisma.user_analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_analyticsUpdateArgs>(args: SelectSubset<T, user_analyticsUpdateArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_analytics.
     * @param {user_analyticsDeleteManyArgs} args - Arguments to filter User_analytics to delete.
     * @example
     * // Delete a few User_analytics
     * const { count } = await prisma.user_analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_analyticsDeleteManyArgs>(args?: SelectSubset<T, user_analyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_analyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_analytics
     * const user_analytics = await prisma.user_analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_analyticsUpdateManyArgs>(args: SelectSubset<T, user_analyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_analytics and returns the data updated in the database.
     * @param {user_analyticsUpdateManyAndReturnArgs} args - Arguments to update many User_analytics.
     * @example
     * // Update many User_analytics
     * const user_analytics = await prisma.user_analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_analytics and only return the `user_id`
     * const user_analyticsWithUser_idOnly = await prisma.user_analytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_analyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_analyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_analytics.
     * @param {user_analyticsUpsertArgs} args - Arguments to update or create a User_analytics.
     * @example
     * // Update or create a User_analytics
     * const user_analytics = await prisma.user_analytics.upsert({
     *   create: {
     *     // ... data to create a User_analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_analytics we want to update
     *   }
     * })
     */
    upsert<T extends user_analyticsUpsertArgs>(args: SelectSubset<T, user_analyticsUpsertArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_analyticsCountArgs} args - Arguments to filter User_analytics to count.
     * @example
     * // Count the number of User_analytics
     * const count = await prisma.user_analytics.count({
     *   where: {
     *     // ... the filter for the User_analytics we want to count
     *   }
     * })
    **/
    count<T extends user_analyticsCountArgs>(
      args?: Subset<T, user_analyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_analyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_analyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_analyticsAggregateArgs>(args: Subset<T, User_analyticsAggregateArgs>): Prisma.PrismaPromise<GetUser_analyticsAggregateType<T>>

    /**
     * Group by User_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_analyticsGroupByArgs} args - Group by arguments.
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
      T extends user_analyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_analyticsGroupByArgs['orderBy'] }
        : { orderBy?: user_analyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_analyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_analyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_analytics model
   */
  readonly fields: user_analyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_analyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_analytics model
   */
  interface user_analyticsFieldRefs {
    readonly user_id: FieldRef<"user_analytics", 'String'>
    readonly posts_count: FieldRef<"user_analytics", 'Int'>
    readonly likes_received: FieldRef<"user_analytics", 'Int'>
    readonly followers_count: FieldRef<"user_analytics", 'Int'>
    readonly following_count: FieldRef<"user_analytics", 'Int'>
    readonly last_login: FieldRef<"user_analytics", 'DateTime'>
    readonly activity_score: FieldRef<"user_analytics", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * user_analytics findUnique
   */
  export type user_analyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which user_analytics to fetch.
     */
    where: user_analyticsWhereUniqueInput
  }

  /**
   * user_analytics findUniqueOrThrow
   */
  export type user_analyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which user_analytics to fetch.
     */
    where: user_analyticsWhereUniqueInput
  }

  /**
   * user_analytics findFirst
   */
  export type user_analyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which user_analytics to fetch.
     */
    where?: user_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_analytics to fetch.
     */
    orderBy?: user_analyticsOrderByWithRelationInput | user_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_analytics.
     */
    cursor?: user_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_analytics.
     */
    distinct?: User_analyticsScalarFieldEnum | User_analyticsScalarFieldEnum[]
  }

  /**
   * user_analytics findFirstOrThrow
   */
  export type user_analyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which user_analytics to fetch.
     */
    where?: user_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_analytics to fetch.
     */
    orderBy?: user_analyticsOrderByWithRelationInput | user_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_analytics.
     */
    cursor?: user_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_analytics.
     */
    distinct?: User_analyticsScalarFieldEnum | User_analyticsScalarFieldEnum[]
  }

  /**
   * user_analytics findMany
   */
  export type user_analyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * Filter, which user_analytics to fetch.
     */
    where?: user_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_analytics to fetch.
     */
    orderBy?: user_analyticsOrderByWithRelationInput | user_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_analytics.
     */
    cursor?: user_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_analytics.
     */
    skip?: number
    distinct?: User_analyticsScalarFieldEnum | User_analyticsScalarFieldEnum[]
  }

  /**
   * user_analytics create
   */
  export type user_analyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_analytics.
     */
    data: XOR<user_analyticsCreateInput, user_analyticsUncheckedCreateInput>
  }

  /**
   * user_analytics createMany
   */
  export type user_analyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_analytics.
     */
    data: user_analyticsCreateManyInput | user_analyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_analytics createManyAndReturn
   */
  export type user_analyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * The data used to create many user_analytics.
     */
    data: user_analyticsCreateManyInput | user_analyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_analytics update
   */
  export type user_analyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_analytics.
     */
    data: XOR<user_analyticsUpdateInput, user_analyticsUncheckedUpdateInput>
    /**
     * Choose, which user_analytics to update.
     */
    where: user_analyticsWhereUniqueInput
  }

  /**
   * user_analytics updateMany
   */
  export type user_analyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_analytics.
     */
    data: XOR<user_analyticsUpdateManyMutationInput, user_analyticsUncheckedUpdateManyInput>
    /**
     * Filter which user_analytics to update
     */
    where?: user_analyticsWhereInput
    /**
     * Limit how many user_analytics to update.
     */
    limit?: number
  }

  /**
   * user_analytics updateManyAndReturn
   */
  export type user_analyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * The data used to update user_analytics.
     */
    data: XOR<user_analyticsUpdateManyMutationInput, user_analyticsUncheckedUpdateManyInput>
    /**
     * Filter which user_analytics to update
     */
    where?: user_analyticsWhereInput
    /**
     * Limit how many user_analytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_analytics upsert
   */
  export type user_analyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_analytics to update in case it exists.
     */
    where: user_analyticsWhereUniqueInput
    /**
     * In case the user_analytics found by the `where` argument doesn't exist, create a new user_analytics with this data.
     */
    create: XOR<user_analyticsCreateInput, user_analyticsUncheckedCreateInput>
    /**
     * In case the user_analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_analyticsUpdateInput, user_analyticsUncheckedUpdateInput>
  }

  /**
   * user_analytics delete
   */
  export type user_analyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    /**
     * Filter which user_analytics to delete.
     */
    where: user_analyticsWhereUniqueInput
  }

  /**
   * user_analytics deleteMany
   */
  export type user_analyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_analytics to delete
     */
    where?: user_analyticsWhereInput
    /**
     * Limit how many user_analytics to delete.
     */
    limit?: number
  }

  /**
   * user_analytics without action
   */
  export type user_analyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
  }


  /**
   * Model user_audit_logs
   */

  export type AggregateUser_audit_logs = {
    _count: User_audit_logsCountAggregateOutputType | null
    _min: User_audit_logsMinAggregateOutputType | null
    _max: User_audit_logsMaxAggregateOutputType | null
  }

  export type User_audit_logsMinAggregateOutputType = {
    audit_id: string | null
    user_id: string | null
    action_type: string | null
    performed_by: string | null
    event_time: Date | null
  }

  export type User_audit_logsMaxAggregateOutputType = {
    audit_id: string | null
    user_id: string | null
    action_type: string | null
    performed_by: string | null
    event_time: Date | null
  }

  export type User_audit_logsCountAggregateOutputType = {
    audit_id: number
    user_id: number
    action_type: number
    details: number
    performed_by: number
    event_time: number
    _all: number
  }


  export type User_audit_logsMinAggregateInputType = {
    audit_id?: true
    user_id?: true
    action_type?: true
    performed_by?: true
    event_time?: true
  }

  export type User_audit_logsMaxAggregateInputType = {
    audit_id?: true
    user_id?: true
    action_type?: true
    performed_by?: true
    event_time?: true
  }

  export type User_audit_logsCountAggregateInputType = {
    audit_id?: true
    user_id?: true
    action_type?: true
    details?: true
    performed_by?: true
    event_time?: true
    _all?: true
  }

  export type User_audit_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_audit_logs to aggregate.
     */
    where?: user_audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_audit_logs to fetch.
     */
    orderBy?: user_audit_logsOrderByWithRelationInput | user_audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_audit_logs
    **/
    _count?: true | User_audit_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_audit_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_audit_logsMaxAggregateInputType
  }

  export type GetUser_audit_logsAggregateType<T extends User_audit_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_audit_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_audit_logs[P]>
      : GetScalarType<T[P], AggregateUser_audit_logs[P]>
  }




  export type user_audit_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_audit_logsWhereInput
    orderBy?: user_audit_logsOrderByWithAggregationInput | user_audit_logsOrderByWithAggregationInput[]
    by: User_audit_logsScalarFieldEnum[] | User_audit_logsScalarFieldEnum
    having?: user_audit_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_audit_logsCountAggregateInputType | true
    _min?: User_audit_logsMinAggregateInputType
    _max?: User_audit_logsMaxAggregateInputType
  }

  export type User_audit_logsGroupByOutputType = {
    audit_id: string
    user_id: string | null
    action_type: string
    details: JsonValue | null
    performed_by: string | null
    event_time: Date
    _count: User_audit_logsCountAggregateOutputType | null
    _min: User_audit_logsMinAggregateOutputType | null
    _max: User_audit_logsMaxAggregateOutputType | null
  }

  type GetUser_audit_logsGroupByPayload<T extends user_audit_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_audit_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_audit_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_audit_logsGroupByOutputType[P]>
            : GetScalarType<T[P], User_audit_logsGroupByOutputType[P]>
        }
      >
    >


  export type user_audit_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    user_id?: boolean
    action_type?: boolean
    details?: boolean
    performed_by?: boolean
    event_time?: boolean
    users?: boolean | user_audit_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_audit_logs"]>

  export type user_audit_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    user_id?: boolean
    action_type?: boolean
    details?: boolean
    performed_by?: boolean
    event_time?: boolean
    users?: boolean | user_audit_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_audit_logs"]>

  export type user_audit_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    user_id?: boolean
    action_type?: boolean
    details?: boolean
    performed_by?: boolean
    event_time?: boolean
    users?: boolean | user_audit_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_audit_logs"]>

  export type user_audit_logsSelectScalar = {
    audit_id?: boolean
    user_id?: boolean
    action_type?: boolean
    details?: boolean
    performed_by?: boolean
    event_time?: boolean
  }

  export type user_audit_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"audit_id" | "user_id" | "action_type" | "details" | "performed_by" | "event_time", ExtArgs["result"]["user_audit_logs"]>
  export type user_audit_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_audit_logs$usersArgs<ExtArgs>
  }
  export type user_audit_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_audit_logs$usersArgs<ExtArgs>
  }
  export type user_audit_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_audit_logs$usersArgs<ExtArgs>
  }

  export type $user_audit_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_audit_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      audit_id: string
      user_id: string | null
      action_type: string
      details: Prisma.JsonValue | null
      performed_by: string | null
      event_time: Date
    }, ExtArgs["result"]["user_audit_logs"]>
    composites: {}
  }

  type user_audit_logsGetPayload<S extends boolean | null | undefined | user_audit_logsDefaultArgs> = $Result.GetResult<Prisma.$user_audit_logsPayload, S>

  type user_audit_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_audit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_audit_logsCountAggregateInputType | true
    }

  export interface user_audit_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_audit_logs'], meta: { name: 'user_audit_logs' } }
    /**
     * Find zero or one User_audit_logs that matches the filter.
     * @param {user_audit_logsFindUniqueArgs} args - Arguments to find a User_audit_logs
     * @example
     * // Get one User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_audit_logsFindUniqueArgs>(args: SelectSubset<T, user_audit_logsFindUniqueArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_audit_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_audit_logsFindUniqueOrThrowArgs} args - Arguments to find a User_audit_logs
     * @example
     * // Get one User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_audit_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_audit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_audit_logsFindFirstArgs} args - Arguments to find a User_audit_logs
     * @example
     * // Get one User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_audit_logsFindFirstArgs>(args?: SelectSubset<T, user_audit_logsFindFirstArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_audit_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_audit_logsFindFirstOrThrowArgs} args - Arguments to find a User_audit_logs
     * @example
     * // Get one User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_audit_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_audit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_audit_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.findMany()
     * 
     * // Get first 10 User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.findMany({ take: 10 })
     * 
     * // Only select the `audit_id`
     * const user_audit_logsWithAudit_idOnly = await prisma.user_audit_logs.findMany({ select: { audit_id: true } })
     * 
     */
    findMany<T extends user_audit_logsFindManyArgs>(args?: SelectSubset<T, user_audit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_audit_logs.
     * @param {user_audit_logsCreateArgs} args - Arguments to create a User_audit_logs.
     * @example
     * // Create one User_audit_logs
     * const User_audit_logs = await prisma.user_audit_logs.create({
     *   data: {
     *     // ... data to create a User_audit_logs
     *   }
     * })
     * 
     */
    create<T extends user_audit_logsCreateArgs>(args: SelectSubset<T, user_audit_logsCreateArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_audit_logs.
     * @param {user_audit_logsCreateManyArgs} args - Arguments to create many User_audit_logs.
     * @example
     * // Create many User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_audit_logsCreateManyArgs>(args?: SelectSubset<T, user_audit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_audit_logs and returns the data saved in the database.
     * @param {user_audit_logsCreateManyAndReturnArgs} args - Arguments to create many User_audit_logs.
     * @example
     * // Create many User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_audit_logs and only return the `audit_id`
     * const user_audit_logsWithAudit_idOnly = await prisma.user_audit_logs.createManyAndReturn({
     *   select: { audit_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_audit_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_audit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_audit_logs.
     * @param {user_audit_logsDeleteArgs} args - Arguments to delete one User_audit_logs.
     * @example
     * // Delete one User_audit_logs
     * const User_audit_logs = await prisma.user_audit_logs.delete({
     *   where: {
     *     // ... filter to delete one User_audit_logs
     *   }
     * })
     * 
     */
    delete<T extends user_audit_logsDeleteArgs>(args: SelectSubset<T, user_audit_logsDeleteArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_audit_logs.
     * @param {user_audit_logsUpdateArgs} args - Arguments to update one User_audit_logs.
     * @example
     * // Update one User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_audit_logsUpdateArgs>(args: SelectSubset<T, user_audit_logsUpdateArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_audit_logs.
     * @param {user_audit_logsDeleteManyArgs} args - Arguments to filter User_audit_logs to delete.
     * @example
     * // Delete a few User_audit_logs
     * const { count } = await prisma.user_audit_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_audit_logsDeleteManyArgs>(args?: SelectSubset<T, user_audit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_audit_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_audit_logsUpdateManyArgs>(args: SelectSubset<T, user_audit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_audit_logs and returns the data updated in the database.
     * @param {user_audit_logsUpdateManyAndReturnArgs} args - Arguments to update many User_audit_logs.
     * @example
     * // Update many User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_audit_logs and only return the `audit_id`
     * const user_audit_logsWithAudit_idOnly = await prisma.user_audit_logs.updateManyAndReturn({
     *   select: { audit_id: true },
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
    updateManyAndReturn<T extends user_audit_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_audit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_audit_logs.
     * @param {user_audit_logsUpsertArgs} args - Arguments to update or create a User_audit_logs.
     * @example
     * // Update or create a User_audit_logs
     * const user_audit_logs = await prisma.user_audit_logs.upsert({
     *   create: {
     *     // ... data to create a User_audit_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_audit_logs we want to update
     *   }
     * })
     */
    upsert<T extends user_audit_logsUpsertArgs>(args: SelectSubset<T, user_audit_logsUpsertArgs<ExtArgs>>): Prisma__user_audit_logsClient<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_audit_logsCountArgs} args - Arguments to filter User_audit_logs to count.
     * @example
     * // Count the number of User_audit_logs
     * const count = await prisma.user_audit_logs.count({
     *   where: {
     *     // ... the filter for the User_audit_logs we want to count
     *   }
     * })
    **/
    count<T extends user_audit_logsCountArgs>(
      args?: Subset<T, user_audit_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_audit_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_audit_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_audit_logsAggregateArgs>(args: Subset<T, User_audit_logsAggregateArgs>): Prisma.PrismaPromise<GetUser_audit_logsAggregateType<T>>

    /**
     * Group by User_audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_audit_logsGroupByArgs} args - Group by arguments.
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
      T extends user_audit_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_audit_logsGroupByArgs['orderBy'] }
        : { orderBy?: user_audit_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_audit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_audit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_audit_logs model
   */
  readonly fields: user_audit_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_audit_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_audit_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends user_audit_logs$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_audit_logs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_audit_logs model
   */
  interface user_audit_logsFieldRefs {
    readonly audit_id: FieldRef<"user_audit_logs", 'String'>
    readonly user_id: FieldRef<"user_audit_logs", 'String'>
    readonly action_type: FieldRef<"user_audit_logs", 'String'>
    readonly details: FieldRef<"user_audit_logs", 'Json'>
    readonly performed_by: FieldRef<"user_audit_logs", 'String'>
    readonly event_time: FieldRef<"user_audit_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_audit_logs findUnique
   */
  export type user_audit_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_audit_logs to fetch.
     */
    where: user_audit_logsWhereUniqueInput
  }

  /**
   * user_audit_logs findUniqueOrThrow
   */
  export type user_audit_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_audit_logs to fetch.
     */
    where: user_audit_logsWhereUniqueInput
  }

  /**
   * user_audit_logs findFirst
   */
  export type user_audit_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_audit_logs to fetch.
     */
    where?: user_audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_audit_logs to fetch.
     */
    orderBy?: user_audit_logsOrderByWithRelationInput | user_audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_audit_logs.
     */
    cursor?: user_audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_audit_logs.
     */
    distinct?: User_audit_logsScalarFieldEnum | User_audit_logsScalarFieldEnum[]
  }

  /**
   * user_audit_logs findFirstOrThrow
   */
  export type user_audit_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_audit_logs to fetch.
     */
    where?: user_audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_audit_logs to fetch.
     */
    orderBy?: user_audit_logsOrderByWithRelationInput | user_audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_audit_logs.
     */
    cursor?: user_audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_audit_logs.
     */
    distinct?: User_audit_logsScalarFieldEnum | User_audit_logsScalarFieldEnum[]
  }

  /**
   * user_audit_logs findMany
   */
  export type user_audit_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_audit_logs to fetch.
     */
    where?: user_audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_audit_logs to fetch.
     */
    orderBy?: user_audit_logsOrderByWithRelationInput | user_audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_audit_logs.
     */
    cursor?: user_audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_audit_logs.
     */
    skip?: number
    distinct?: User_audit_logsScalarFieldEnum | User_audit_logsScalarFieldEnum[]
  }

  /**
   * user_audit_logs create
   */
  export type user_audit_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_audit_logs.
     */
    data: XOR<user_audit_logsCreateInput, user_audit_logsUncheckedCreateInput>
  }

  /**
   * user_audit_logs createMany
   */
  export type user_audit_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_audit_logs.
     */
    data: user_audit_logsCreateManyInput | user_audit_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_audit_logs createManyAndReturn
   */
  export type user_audit_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * The data used to create many user_audit_logs.
     */
    data: user_audit_logsCreateManyInput | user_audit_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_audit_logs update
   */
  export type user_audit_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_audit_logs.
     */
    data: XOR<user_audit_logsUpdateInput, user_audit_logsUncheckedUpdateInput>
    /**
     * Choose, which user_audit_logs to update.
     */
    where: user_audit_logsWhereUniqueInput
  }

  /**
   * user_audit_logs updateMany
   */
  export type user_audit_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_audit_logs.
     */
    data: XOR<user_audit_logsUpdateManyMutationInput, user_audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which user_audit_logs to update
     */
    where?: user_audit_logsWhereInput
    /**
     * Limit how many user_audit_logs to update.
     */
    limit?: number
  }

  /**
   * user_audit_logs updateManyAndReturn
   */
  export type user_audit_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * The data used to update user_audit_logs.
     */
    data: XOR<user_audit_logsUpdateManyMutationInput, user_audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which user_audit_logs to update
     */
    where?: user_audit_logsWhereInput
    /**
     * Limit how many user_audit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_audit_logs upsert
   */
  export type user_audit_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_audit_logs to update in case it exists.
     */
    where: user_audit_logsWhereUniqueInput
    /**
     * In case the user_audit_logs found by the `where` argument doesn't exist, create a new user_audit_logs with this data.
     */
    create: XOR<user_audit_logsCreateInput, user_audit_logsUncheckedCreateInput>
    /**
     * In case the user_audit_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_audit_logsUpdateInput, user_audit_logsUncheckedUpdateInput>
  }

  /**
   * user_audit_logs delete
   */
  export type user_audit_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    /**
     * Filter which user_audit_logs to delete.
     */
    where: user_audit_logsWhereUniqueInput
  }

  /**
   * user_audit_logs deleteMany
   */
  export type user_audit_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_audit_logs to delete
     */
    where?: user_audit_logsWhereInput
    /**
     * Limit how many user_audit_logs to delete.
     */
    limit?: number
  }

  /**
   * user_audit_logs.users
   */
  export type user_audit_logs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_audit_logs without action
   */
  export type user_audit_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
  }


  /**
   * Model user_blocklist
   */

  export type AggregateUser_blocklist = {
    _count: User_blocklistCountAggregateOutputType | null
    _min: User_blocklistMinAggregateOutputType | null
    _max: User_blocklistMaxAggregateOutputType | null
  }

  export type User_blocklistMinAggregateOutputType = {
    block_id: string | null
    user_id: string | null
    reason: string | null
    blocked_at: Date | null
  }

  export type User_blocklistMaxAggregateOutputType = {
    block_id: string | null
    user_id: string | null
    reason: string | null
    blocked_at: Date | null
  }

  export type User_blocklistCountAggregateOutputType = {
    block_id: number
    user_id: number
    reason: number
    blocked_at: number
    _all: number
  }


  export type User_blocklistMinAggregateInputType = {
    block_id?: true
    user_id?: true
    reason?: true
    blocked_at?: true
  }

  export type User_blocklistMaxAggregateInputType = {
    block_id?: true
    user_id?: true
    reason?: true
    blocked_at?: true
  }

  export type User_blocklistCountAggregateInputType = {
    block_id?: true
    user_id?: true
    reason?: true
    blocked_at?: true
    _all?: true
  }

  export type User_blocklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_blocklist to aggregate.
     */
    where?: user_blocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_blocklists to fetch.
     */
    orderBy?: user_blocklistOrderByWithRelationInput | user_blocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_blocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_blocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_blocklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_blocklists
    **/
    _count?: true | User_blocklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_blocklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_blocklistMaxAggregateInputType
  }

  export type GetUser_blocklistAggregateType<T extends User_blocklistAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_blocklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_blocklist[P]>
      : GetScalarType<T[P], AggregateUser_blocklist[P]>
  }




  export type user_blocklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_blocklistWhereInput
    orderBy?: user_blocklistOrderByWithAggregationInput | user_blocklistOrderByWithAggregationInput[]
    by: User_blocklistScalarFieldEnum[] | User_blocklistScalarFieldEnum
    having?: user_blocklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_blocklistCountAggregateInputType | true
    _min?: User_blocklistMinAggregateInputType
    _max?: User_blocklistMaxAggregateInputType
  }

  export type User_blocklistGroupByOutputType = {
    block_id: string
    user_id: string | null
    reason: string
    blocked_at: Date
    _count: User_blocklistCountAggregateOutputType | null
    _min: User_blocklistMinAggregateOutputType | null
    _max: User_blocklistMaxAggregateOutputType | null
  }

  type GetUser_blocklistGroupByPayload<T extends user_blocklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_blocklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_blocklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_blocklistGroupByOutputType[P]>
            : GetScalarType<T[P], User_blocklistGroupByOutputType[P]>
        }
      >
    >


  export type user_blocklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    block_id?: boolean
    user_id?: boolean
    reason?: boolean
    blocked_at?: boolean
    users?: boolean | user_blocklist$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_blocklist"]>

  export type user_blocklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    block_id?: boolean
    user_id?: boolean
    reason?: boolean
    blocked_at?: boolean
    users?: boolean | user_blocklist$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_blocklist"]>

  export type user_blocklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    block_id?: boolean
    user_id?: boolean
    reason?: boolean
    blocked_at?: boolean
    users?: boolean | user_blocklist$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_blocklist"]>

  export type user_blocklistSelectScalar = {
    block_id?: boolean
    user_id?: boolean
    reason?: boolean
    blocked_at?: boolean
  }

  export type user_blocklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"block_id" | "user_id" | "reason" | "blocked_at", ExtArgs["result"]["user_blocklist"]>
  export type user_blocklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_blocklist$usersArgs<ExtArgs>
  }
  export type user_blocklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_blocklist$usersArgs<ExtArgs>
  }
  export type user_blocklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_blocklist$usersArgs<ExtArgs>
  }

  export type $user_blocklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_blocklist"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      block_id: string
      user_id: string | null
      reason: string
      blocked_at: Date
    }, ExtArgs["result"]["user_blocklist"]>
    composites: {}
  }

  type user_blocklistGetPayload<S extends boolean | null | undefined | user_blocklistDefaultArgs> = $Result.GetResult<Prisma.$user_blocklistPayload, S>

  type user_blocklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_blocklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_blocklistCountAggregateInputType | true
    }

  export interface user_blocklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_blocklist'], meta: { name: 'user_blocklist' } }
    /**
     * Find zero or one User_blocklist that matches the filter.
     * @param {user_blocklistFindUniqueArgs} args - Arguments to find a User_blocklist
     * @example
     * // Get one User_blocklist
     * const user_blocklist = await prisma.user_blocklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_blocklistFindUniqueArgs>(args: SelectSubset<T, user_blocklistFindUniqueArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_blocklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_blocklistFindUniqueOrThrowArgs} args - Arguments to find a User_blocklist
     * @example
     * // Get one User_blocklist
     * const user_blocklist = await prisma.user_blocklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_blocklistFindUniqueOrThrowArgs>(args: SelectSubset<T, user_blocklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_blocklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_blocklistFindFirstArgs} args - Arguments to find a User_blocklist
     * @example
     * // Get one User_blocklist
     * const user_blocklist = await prisma.user_blocklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_blocklistFindFirstArgs>(args?: SelectSubset<T, user_blocklistFindFirstArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_blocklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_blocklistFindFirstOrThrowArgs} args - Arguments to find a User_blocklist
     * @example
     * // Get one User_blocklist
     * const user_blocklist = await prisma.user_blocklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_blocklistFindFirstOrThrowArgs>(args?: SelectSubset<T, user_blocklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_blocklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_blocklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_blocklists
     * const user_blocklists = await prisma.user_blocklist.findMany()
     * 
     * // Get first 10 User_blocklists
     * const user_blocklists = await prisma.user_blocklist.findMany({ take: 10 })
     * 
     * // Only select the `block_id`
     * const user_blocklistWithBlock_idOnly = await prisma.user_blocklist.findMany({ select: { block_id: true } })
     * 
     */
    findMany<T extends user_blocklistFindManyArgs>(args?: SelectSubset<T, user_blocklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_blocklist.
     * @param {user_blocklistCreateArgs} args - Arguments to create a User_blocklist.
     * @example
     * // Create one User_blocklist
     * const User_blocklist = await prisma.user_blocklist.create({
     *   data: {
     *     // ... data to create a User_blocklist
     *   }
     * })
     * 
     */
    create<T extends user_blocklistCreateArgs>(args: SelectSubset<T, user_blocklistCreateArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_blocklists.
     * @param {user_blocklistCreateManyArgs} args - Arguments to create many User_blocklists.
     * @example
     * // Create many User_blocklists
     * const user_blocklist = await prisma.user_blocklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_blocklistCreateManyArgs>(args?: SelectSubset<T, user_blocklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_blocklists and returns the data saved in the database.
     * @param {user_blocklistCreateManyAndReturnArgs} args - Arguments to create many User_blocklists.
     * @example
     * // Create many User_blocklists
     * const user_blocklist = await prisma.user_blocklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_blocklists and only return the `block_id`
     * const user_blocklistWithBlock_idOnly = await prisma.user_blocklist.createManyAndReturn({
     *   select: { block_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_blocklistCreateManyAndReturnArgs>(args?: SelectSubset<T, user_blocklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_blocklist.
     * @param {user_blocklistDeleteArgs} args - Arguments to delete one User_blocklist.
     * @example
     * // Delete one User_blocklist
     * const User_blocklist = await prisma.user_blocklist.delete({
     *   where: {
     *     // ... filter to delete one User_blocklist
     *   }
     * })
     * 
     */
    delete<T extends user_blocklistDeleteArgs>(args: SelectSubset<T, user_blocklistDeleteArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_blocklist.
     * @param {user_blocklistUpdateArgs} args - Arguments to update one User_blocklist.
     * @example
     * // Update one User_blocklist
     * const user_blocklist = await prisma.user_blocklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_blocklistUpdateArgs>(args: SelectSubset<T, user_blocklistUpdateArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_blocklists.
     * @param {user_blocklistDeleteManyArgs} args - Arguments to filter User_blocklists to delete.
     * @example
     * // Delete a few User_blocklists
     * const { count } = await prisma.user_blocklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_blocklistDeleteManyArgs>(args?: SelectSubset<T, user_blocklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_blocklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_blocklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_blocklists
     * const user_blocklist = await prisma.user_blocklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_blocklistUpdateManyArgs>(args: SelectSubset<T, user_blocklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_blocklists and returns the data updated in the database.
     * @param {user_blocklistUpdateManyAndReturnArgs} args - Arguments to update many User_blocklists.
     * @example
     * // Update many User_blocklists
     * const user_blocklist = await prisma.user_blocklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_blocklists and only return the `block_id`
     * const user_blocklistWithBlock_idOnly = await prisma.user_blocklist.updateManyAndReturn({
     *   select: { block_id: true },
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
    updateManyAndReturn<T extends user_blocklistUpdateManyAndReturnArgs>(args: SelectSubset<T, user_blocklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_blocklist.
     * @param {user_blocklistUpsertArgs} args - Arguments to update or create a User_blocklist.
     * @example
     * // Update or create a User_blocklist
     * const user_blocklist = await prisma.user_blocklist.upsert({
     *   create: {
     *     // ... data to create a User_blocklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_blocklist we want to update
     *   }
     * })
     */
    upsert<T extends user_blocklistUpsertArgs>(args: SelectSubset<T, user_blocklistUpsertArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_blocklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_blocklistCountArgs} args - Arguments to filter User_blocklists to count.
     * @example
     * // Count the number of User_blocklists
     * const count = await prisma.user_blocklist.count({
     *   where: {
     *     // ... the filter for the User_blocklists we want to count
     *   }
     * })
    **/
    count<T extends user_blocklistCountArgs>(
      args?: Subset<T, user_blocklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_blocklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_blocklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_blocklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_blocklistAggregateArgs>(args: Subset<T, User_blocklistAggregateArgs>): Prisma.PrismaPromise<GetUser_blocklistAggregateType<T>>

    /**
     * Group by User_blocklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_blocklistGroupByArgs} args - Group by arguments.
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
      T extends user_blocklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_blocklistGroupByArgs['orderBy'] }
        : { orderBy?: user_blocklistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_blocklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_blocklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_blocklist model
   */
  readonly fields: user_blocklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_blocklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_blocklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends user_blocklist$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_blocklist$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_blocklist model
   */
  interface user_blocklistFieldRefs {
    readonly block_id: FieldRef<"user_blocklist", 'String'>
    readonly user_id: FieldRef<"user_blocklist", 'String'>
    readonly reason: FieldRef<"user_blocklist", 'String'>
    readonly blocked_at: FieldRef<"user_blocklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_blocklist findUnique
   */
  export type user_blocklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * Filter, which user_blocklist to fetch.
     */
    where: user_blocklistWhereUniqueInput
  }

  /**
   * user_blocklist findUniqueOrThrow
   */
  export type user_blocklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * Filter, which user_blocklist to fetch.
     */
    where: user_blocklistWhereUniqueInput
  }

  /**
   * user_blocklist findFirst
   */
  export type user_blocklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * Filter, which user_blocklist to fetch.
     */
    where?: user_blocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_blocklists to fetch.
     */
    orderBy?: user_blocklistOrderByWithRelationInput | user_blocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_blocklists.
     */
    cursor?: user_blocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_blocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_blocklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_blocklists.
     */
    distinct?: User_blocklistScalarFieldEnum | User_blocklistScalarFieldEnum[]
  }

  /**
   * user_blocklist findFirstOrThrow
   */
  export type user_blocklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * Filter, which user_blocklist to fetch.
     */
    where?: user_blocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_blocklists to fetch.
     */
    orderBy?: user_blocklistOrderByWithRelationInput | user_blocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_blocklists.
     */
    cursor?: user_blocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_blocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_blocklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_blocklists.
     */
    distinct?: User_blocklistScalarFieldEnum | User_blocklistScalarFieldEnum[]
  }

  /**
   * user_blocklist findMany
   */
  export type user_blocklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * Filter, which user_blocklists to fetch.
     */
    where?: user_blocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_blocklists to fetch.
     */
    orderBy?: user_blocklistOrderByWithRelationInput | user_blocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_blocklists.
     */
    cursor?: user_blocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_blocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_blocklists.
     */
    skip?: number
    distinct?: User_blocklistScalarFieldEnum | User_blocklistScalarFieldEnum[]
  }

  /**
   * user_blocklist create
   */
  export type user_blocklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * The data needed to create a user_blocklist.
     */
    data: XOR<user_blocklistCreateInput, user_blocklistUncheckedCreateInput>
  }

  /**
   * user_blocklist createMany
   */
  export type user_blocklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_blocklists.
     */
    data: user_blocklistCreateManyInput | user_blocklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_blocklist createManyAndReturn
   */
  export type user_blocklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * The data used to create many user_blocklists.
     */
    data: user_blocklistCreateManyInput | user_blocklistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_blocklist update
   */
  export type user_blocklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * The data needed to update a user_blocklist.
     */
    data: XOR<user_blocklistUpdateInput, user_blocklistUncheckedUpdateInput>
    /**
     * Choose, which user_blocklist to update.
     */
    where: user_blocklistWhereUniqueInput
  }

  /**
   * user_blocklist updateMany
   */
  export type user_blocklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_blocklists.
     */
    data: XOR<user_blocklistUpdateManyMutationInput, user_blocklistUncheckedUpdateManyInput>
    /**
     * Filter which user_blocklists to update
     */
    where?: user_blocklistWhereInput
    /**
     * Limit how many user_blocklists to update.
     */
    limit?: number
  }

  /**
   * user_blocklist updateManyAndReturn
   */
  export type user_blocklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * The data used to update user_blocklists.
     */
    data: XOR<user_blocklistUpdateManyMutationInput, user_blocklistUncheckedUpdateManyInput>
    /**
     * Filter which user_blocklists to update
     */
    where?: user_blocklistWhereInput
    /**
     * Limit how many user_blocklists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_blocklist upsert
   */
  export type user_blocklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * The filter to search for the user_blocklist to update in case it exists.
     */
    where: user_blocklistWhereUniqueInput
    /**
     * In case the user_blocklist found by the `where` argument doesn't exist, create a new user_blocklist with this data.
     */
    create: XOR<user_blocklistCreateInput, user_blocklistUncheckedCreateInput>
    /**
     * In case the user_blocklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_blocklistUpdateInput, user_blocklistUncheckedUpdateInput>
  }

  /**
   * user_blocklist delete
   */
  export type user_blocklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    /**
     * Filter which user_blocklist to delete.
     */
    where: user_blocklistWhereUniqueInput
  }

  /**
   * user_blocklist deleteMany
   */
  export type user_blocklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_blocklists to delete
     */
    where?: user_blocklistWhereInput
    /**
     * Limit how many user_blocklists to delete.
     */
    limit?: number
  }

  /**
   * user_blocklist.users
   */
  export type user_blocklist$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_blocklist without action
   */
  export type user_blocklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
  }


  /**
   * Model user_certificates
   */

  export type AggregateUser_certificates = {
    _count: User_certificatesCountAggregateOutputType | null
    _min: User_certificatesMinAggregateOutputType | null
    _max: User_certificatesMaxAggregateOutputType | null
  }

  export type User_certificatesMinAggregateOutputType = {
    user_id: string | null
    public_key: string | null
    certificate: string | null
    created_at: Date | null
  }

  export type User_certificatesMaxAggregateOutputType = {
    user_id: string | null
    public_key: string | null
    certificate: string | null
    created_at: Date | null
  }

  export type User_certificatesCountAggregateOutputType = {
    user_id: number
    public_key: number
    certificate: number
    created_at: number
    _all: number
  }


  export type User_certificatesMinAggregateInputType = {
    user_id?: true
    public_key?: true
    certificate?: true
    created_at?: true
  }

  export type User_certificatesMaxAggregateInputType = {
    user_id?: true
    public_key?: true
    certificate?: true
    created_at?: true
  }

  export type User_certificatesCountAggregateInputType = {
    user_id?: true
    public_key?: true
    certificate?: true
    created_at?: true
    _all?: true
  }

  export type User_certificatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_certificates to aggregate.
     */
    where?: user_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_certificates to fetch.
     */
    orderBy?: user_certificatesOrderByWithRelationInput | user_certificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_certificates
    **/
    _count?: true | User_certificatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_certificatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_certificatesMaxAggregateInputType
  }

  export type GetUser_certificatesAggregateType<T extends User_certificatesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_certificates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_certificates[P]>
      : GetScalarType<T[P], AggregateUser_certificates[P]>
  }




  export type user_certificatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_certificatesWhereInput
    orderBy?: user_certificatesOrderByWithAggregationInput | user_certificatesOrderByWithAggregationInput[]
    by: User_certificatesScalarFieldEnum[] | User_certificatesScalarFieldEnum
    having?: user_certificatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_certificatesCountAggregateInputType | true
    _min?: User_certificatesMinAggregateInputType
    _max?: User_certificatesMaxAggregateInputType
  }

  export type User_certificatesGroupByOutputType = {
    user_id: string
    public_key: string
    certificate: string | null
    created_at: Date
    _count: User_certificatesCountAggregateOutputType | null
    _min: User_certificatesMinAggregateOutputType | null
    _max: User_certificatesMaxAggregateOutputType | null
  }

  type GetUser_certificatesGroupByPayload<T extends user_certificatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_certificatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_certificatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_certificatesGroupByOutputType[P]>
            : GetScalarType<T[P], User_certificatesGroupByOutputType[P]>
        }
      >
    >


  export type user_certificatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    public_key?: boolean
    certificate?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_certificates"]>

  export type user_certificatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    public_key?: boolean
    certificate?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_certificates"]>

  export type user_certificatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    public_key?: boolean
    certificate?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_certificates"]>

  export type user_certificatesSelectScalar = {
    user_id?: boolean
    public_key?: boolean
    certificate?: boolean
    created_at?: boolean
  }

  export type user_certificatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "public_key" | "certificate" | "created_at", ExtArgs["result"]["user_certificates"]>
  export type user_certificatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_certificatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_certificatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_certificatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_certificates"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      public_key: string
      certificate: string | null
      created_at: Date
    }, ExtArgs["result"]["user_certificates"]>
    composites: {}
  }

  type user_certificatesGetPayload<S extends boolean | null | undefined | user_certificatesDefaultArgs> = $Result.GetResult<Prisma.$user_certificatesPayload, S>

  type user_certificatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_certificatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_certificatesCountAggregateInputType | true
    }

  export interface user_certificatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_certificates'], meta: { name: 'user_certificates' } }
    /**
     * Find zero or one User_certificates that matches the filter.
     * @param {user_certificatesFindUniqueArgs} args - Arguments to find a User_certificates
     * @example
     * // Get one User_certificates
     * const user_certificates = await prisma.user_certificates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_certificatesFindUniqueArgs>(args: SelectSubset<T, user_certificatesFindUniqueArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_certificates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_certificatesFindUniqueOrThrowArgs} args - Arguments to find a User_certificates
     * @example
     * // Get one User_certificates
     * const user_certificates = await prisma.user_certificates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_certificatesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_certificatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_certificatesFindFirstArgs} args - Arguments to find a User_certificates
     * @example
     * // Get one User_certificates
     * const user_certificates = await prisma.user_certificates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_certificatesFindFirstArgs>(args?: SelectSubset<T, user_certificatesFindFirstArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_certificates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_certificatesFindFirstOrThrowArgs} args - Arguments to find a User_certificates
     * @example
     * // Get one User_certificates
     * const user_certificates = await prisma.user_certificates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_certificatesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_certificatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_certificatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_certificates
     * const user_certificates = await prisma.user_certificates.findMany()
     * 
     * // Get first 10 User_certificates
     * const user_certificates = await prisma.user_certificates.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_certificatesWithUser_idOnly = await prisma.user_certificates.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_certificatesFindManyArgs>(args?: SelectSubset<T, user_certificatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_certificates.
     * @param {user_certificatesCreateArgs} args - Arguments to create a User_certificates.
     * @example
     * // Create one User_certificates
     * const User_certificates = await prisma.user_certificates.create({
     *   data: {
     *     // ... data to create a User_certificates
     *   }
     * })
     * 
     */
    create<T extends user_certificatesCreateArgs>(args: SelectSubset<T, user_certificatesCreateArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_certificates.
     * @param {user_certificatesCreateManyArgs} args - Arguments to create many User_certificates.
     * @example
     * // Create many User_certificates
     * const user_certificates = await prisma.user_certificates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_certificatesCreateManyArgs>(args?: SelectSubset<T, user_certificatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_certificates and returns the data saved in the database.
     * @param {user_certificatesCreateManyAndReturnArgs} args - Arguments to create many User_certificates.
     * @example
     * // Create many User_certificates
     * const user_certificates = await prisma.user_certificates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_certificates and only return the `user_id`
     * const user_certificatesWithUser_idOnly = await prisma.user_certificates.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_certificatesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_certificatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_certificates.
     * @param {user_certificatesDeleteArgs} args - Arguments to delete one User_certificates.
     * @example
     * // Delete one User_certificates
     * const User_certificates = await prisma.user_certificates.delete({
     *   where: {
     *     // ... filter to delete one User_certificates
     *   }
     * })
     * 
     */
    delete<T extends user_certificatesDeleteArgs>(args: SelectSubset<T, user_certificatesDeleteArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_certificates.
     * @param {user_certificatesUpdateArgs} args - Arguments to update one User_certificates.
     * @example
     * // Update one User_certificates
     * const user_certificates = await prisma.user_certificates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_certificatesUpdateArgs>(args: SelectSubset<T, user_certificatesUpdateArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_certificates.
     * @param {user_certificatesDeleteManyArgs} args - Arguments to filter User_certificates to delete.
     * @example
     * // Delete a few User_certificates
     * const { count } = await prisma.user_certificates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_certificatesDeleteManyArgs>(args?: SelectSubset<T, user_certificatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_certificatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_certificates
     * const user_certificates = await prisma.user_certificates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_certificatesUpdateManyArgs>(args: SelectSubset<T, user_certificatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_certificates and returns the data updated in the database.
     * @param {user_certificatesUpdateManyAndReturnArgs} args - Arguments to update many User_certificates.
     * @example
     * // Update many User_certificates
     * const user_certificates = await prisma.user_certificates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_certificates and only return the `user_id`
     * const user_certificatesWithUser_idOnly = await prisma.user_certificates.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_certificatesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_certificatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_certificates.
     * @param {user_certificatesUpsertArgs} args - Arguments to update or create a User_certificates.
     * @example
     * // Update or create a User_certificates
     * const user_certificates = await prisma.user_certificates.upsert({
     *   create: {
     *     // ... data to create a User_certificates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_certificates we want to update
     *   }
     * })
     */
    upsert<T extends user_certificatesUpsertArgs>(args: SelectSubset<T, user_certificatesUpsertArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_certificatesCountArgs} args - Arguments to filter User_certificates to count.
     * @example
     * // Count the number of User_certificates
     * const count = await prisma.user_certificates.count({
     *   where: {
     *     // ... the filter for the User_certificates we want to count
     *   }
     * })
    **/
    count<T extends user_certificatesCountArgs>(
      args?: Subset<T, user_certificatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_certificatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_certificatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_certificatesAggregateArgs>(args: Subset<T, User_certificatesAggregateArgs>): Prisma.PrismaPromise<GetUser_certificatesAggregateType<T>>

    /**
     * Group by User_certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_certificatesGroupByArgs} args - Group by arguments.
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
      T extends user_certificatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_certificatesGroupByArgs['orderBy'] }
        : { orderBy?: user_certificatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_certificatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_certificatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_certificates model
   */
  readonly fields: user_certificatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_certificates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_certificatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_certificates model
   */
  interface user_certificatesFieldRefs {
    readonly user_id: FieldRef<"user_certificates", 'String'>
    readonly public_key: FieldRef<"user_certificates", 'String'>
    readonly certificate: FieldRef<"user_certificates", 'String'>
    readonly created_at: FieldRef<"user_certificates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_certificates findUnique
   */
  export type user_certificatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * Filter, which user_certificates to fetch.
     */
    where: user_certificatesWhereUniqueInput
  }

  /**
   * user_certificates findUniqueOrThrow
   */
  export type user_certificatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * Filter, which user_certificates to fetch.
     */
    where: user_certificatesWhereUniqueInput
  }

  /**
   * user_certificates findFirst
   */
  export type user_certificatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * Filter, which user_certificates to fetch.
     */
    where?: user_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_certificates to fetch.
     */
    orderBy?: user_certificatesOrderByWithRelationInput | user_certificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_certificates.
     */
    cursor?: user_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_certificates.
     */
    distinct?: User_certificatesScalarFieldEnum | User_certificatesScalarFieldEnum[]
  }

  /**
   * user_certificates findFirstOrThrow
   */
  export type user_certificatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * Filter, which user_certificates to fetch.
     */
    where?: user_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_certificates to fetch.
     */
    orderBy?: user_certificatesOrderByWithRelationInput | user_certificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_certificates.
     */
    cursor?: user_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_certificates.
     */
    distinct?: User_certificatesScalarFieldEnum | User_certificatesScalarFieldEnum[]
  }

  /**
   * user_certificates findMany
   */
  export type user_certificatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * Filter, which user_certificates to fetch.
     */
    where?: user_certificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_certificates to fetch.
     */
    orderBy?: user_certificatesOrderByWithRelationInput | user_certificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_certificates.
     */
    cursor?: user_certificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_certificates.
     */
    skip?: number
    distinct?: User_certificatesScalarFieldEnum | User_certificatesScalarFieldEnum[]
  }

  /**
   * user_certificates create
   */
  export type user_certificatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_certificates.
     */
    data: XOR<user_certificatesCreateInput, user_certificatesUncheckedCreateInput>
  }

  /**
   * user_certificates createMany
   */
  export type user_certificatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_certificates.
     */
    data: user_certificatesCreateManyInput | user_certificatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_certificates createManyAndReturn
   */
  export type user_certificatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * The data used to create many user_certificates.
     */
    data: user_certificatesCreateManyInput | user_certificatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_certificates update
   */
  export type user_certificatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_certificates.
     */
    data: XOR<user_certificatesUpdateInput, user_certificatesUncheckedUpdateInput>
    /**
     * Choose, which user_certificates to update.
     */
    where: user_certificatesWhereUniqueInput
  }

  /**
   * user_certificates updateMany
   */
  export type user_certificatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_certificates.
     */
    data: XOR<user_certificatesUpdateManyMutationInput, user_certificatesUncheckedUpdateManyInput>
    /**
     * Filter which user_certificates to update
     */
    where?: user_certificatesWhereInput
    /**
     * Limit how many user_certificates to update.
     */
    limit?: number
  }

  /**
   * user_certificates updateManyAndReturn
   */
  export type user_certificatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * The data used to update user_certificates.
     */
    data: XOR<user_certificatesUpdateManyMutationInput, user_certificatesUncheckedUpdateManyInput>
    /**
     * Filter which user_certificates to update
     */
    where?: user_certificatesWhereInput
    /**
     * Limit how many user_certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_certificates upsert
   */
  export type user_certificatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_certificates to update in case it exists.
     */
    where: user_certificatesWhereUniqueInput
    /**
     * In case the user_certificates found by the `where` argument doesn't exist, create a new user_certificates with this data.
     */
    create: XOR<user_certificatesCreateInput, user_certificatesUncheckedCreateInput>
    /**
     * In case the user_certificates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_certificatesUpdateInput, user_certificatesUncheckedUpdateInput>
  }

  /**
   * user_certificates delete
   */
  export type user_certificatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    /**
     * Filter which user_certificates to delete.
     */
    where: user_certificatesWhereUniqueInput
  }

  /**
   * user_certificates deleteMany
   */
  export type user_certificatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_certificates to delete
     */
    where?: user_certificatesWhereInput
    /**
     * Limit how many user_certificates to delete.
     */
    limit?: number
  }

  /**
   * user_certificates without action
   */
  export type user_certificatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
  }


  /**
   * Model user_profile
   */

  export type AggregateUser_profile = {
    _count: User_profileCountAggregateOutputType | null
    _min: User_profileMinAggregateOutputType | null
    _max: User_profileMaxAggregateOutputType | null
  }

  export type User_profileMinAggregateOutputType = {
    user_id: string | null
    username: string | null
    display_name: string | null
    bio: string | null
    avatar_url: string | null
    website: string | null
    updated_at: Date | null
    dob: Date | null
    country: string | null
    banner_url: string | null
  }

  export type User_profileMaxAggregateOutputType = {
    user_id: string | null
    username: string | null
    display_name: string | null
    bio: string | null
    avatar_url: string | null
    website: string | null
    updated_at: Date | null
    dob: Date | null
    country: string | null
    banner_url: string | null
  }

  export type User_profileCountAggregateOutputType = {
    user_id: number
    username: number
    display_name: number
    bio: number
    avatar_url: number
    website: number
    social_links: number
    updated_at: number
    dob: number
    country: number
    banner_url: number
    _all: number
  }


  export type User_profileMinAggregateInputType = {
    user_id?: true
    username?: true
    display_name?: true
    bio?: true
    avatar_url?: true
    website?: true
    updated_at?: true
    dob?: true
    country?: true
    banner_url?: true
  }

  export type User_profileMaxAggregateInputType = {
    user_id?: true
    username?: true
    display_name?: true
    bio?: true
    avatar_url?: true
    website?: true
    updated_at?: true
    dob?: true
    country?: true
    banner_url?: true
  }

  export type User_profileCountAggregateInputType = {
    user_id?: true
    username?: true
    display_name?: true
    bio?: true
    avatar_url?: true
    website?: true
    social_links?: true
    updated_at?: true
    dob?: true
    country?: true
    banner_url?: true
    _all?: true
  }

  export type User_profileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profile to aggregate.
     */
    where?: user_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profileOrderByWithRelationInput | user_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_profiles
    **/
    _count?: true | User_profileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_profileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_profileMaxAggregateInputType
  }

  export type GetUser_profileAggregateType<T extends User_profileAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_profile[P]>
      : GetScalarType<T[P], AggregateUser_profile[P]>
  }




  export type user_profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profileWhereInput
    orderBy?: user_profileOrderByWithAggregationInput | user_profileOrderByWithAggregationInput[]
    by: User_profileScalarFieldEnum[] | User_profileScalarFieldEnum
    having?: user_profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_profileCountAggregateInputType | true
    _min?: User_profileMinAggregateInputType
    _max?: User_profileMaxAggregateInputType
  }

  export type User_profileGroupByOutputType = {
    user_id: string
    username: string
    display_name: string | null
    bio: string | null
    avatar_url: string | null
    website: string | null
    social_links: JsonValue | null
    updated_at: Date
    dob: Date | null
    country: string | null
    banner_url: string | null
    _count: User_profileCountAggregateOutputType | null
    _min: User_profileMinAggregateOutputType | null
    _max: User_profileMaxAggregateOutputType | null
  }

  type GetUser_profileGroupByPayload<T extends user_profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_profileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_profileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_profileGroupByOutputType[P]>
            : GetScalarType<T[P], User_profileGroupByOutputType[P]>
        }
      >
    >


  export type user_profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    website?: boolean
    social_links?: boolean
    updated_at?: boolean
    dob?: boolean
    country?: boolean
    banner_url?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profile"]>

  export type user_profileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    website?: boolean
    social_links?: boolean
    updated_at?: boolean
    dob?: boolean
    country?: boolean
    banner_url?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profile"]>

  export type user_profileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    website?: boolean
    social_links?: boolean
    updated_at?: boolean
    dob?: boolean
    country?: boolean
    banner_url?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profile"]>

  export type user_profileSelectScalar = {
    user_id?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    avatar_url?: boolean
    website?: boolean
    social_links?: boolean
    updated_at?: boolean
    dob?: boolean
    country?: boolean
    banner_url?: boolean
  }

  export type user_profileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "display_name" | "bio" | "avatar_url" | "website" | "social_links" | "updated_at" | "dob" | "country" | "banner_url", ExtArgs["result"]["user_profile"]>
  export type user_profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_profileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_profileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_profile"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
      display_name: string | null
      bio: string | null
      avatar_url: string | null
      website: string | null
      social_links: Prisma.JsonValue | null
      updated_at: Date
      dob: Date | null
      country: string | null
      banner_url: string | null
    }, ExtArgs["result"]["user_profile"]>
    composites: {}
  }

  type user_profileGetPayload<S extends boolean | null | undefined | user_profileDefaultArgs> = $Result.GetResult<Prisma.$user_profilePayload, S>

  type user_profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_profileCountAggregateInputType | true
    }

  export interface user_profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_profile'], meta: { name: 'user_profile' } }
    /**
     * Find zero or one User_profile that matches the filter.
     * @param {user_profileFindUniqueArgs} args - Arguments to find a User_profile
     * @example
     * // Get one User_profile
     * const user_profile = await prisma.user_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_profileFindUniqueArgs>(args: SelectSubset<T, user_profileFindUniqueArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_profileFindUniqueOrThrowArgs} args - Arguments to find a User_profile
     * @example
     * // Get one User_profile
     * const user_profile = await prisma.user_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_profileFindUniqueOrThrowArgs>(args: SelectSubset<T, user_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profileFindFirstArgs} args - Arguments to find a User_profile
     * @example
     * // Get one User_profile
     * const user_profile = await prisma.user_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_profileFindFirstArgs>(args?: SelectSubset<T, user_profileFindFirstArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profileFindFirstOrThrowArgs} args - Arguments to find a User_profile
     * @example
     * // Get one User_profile
     * const user_profile = await prisma.user_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_profileFindFirstOrThrowArgs>(args?: SelectSubset<T, user_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_profiles
     * const user_profiles = await prisma.user_profile.findMany()
     * 
     * // Get first 10 User_profiles
     * const user_profiles = await prisma.user_profile.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_profileWithUser_idOnly = await prisma.user_profile.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_profileFindManyArgs>(args?: SelectSubset<T, user_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_profile.
     * @param {user_profileCreateArgs} args - Arguments to create a User_profile.
     * @example
     * // Create one User_profile
     * const User_profile = await prisma.user_profile.create({
     *   data: {
     *     // ... data to create a User_profile
     *   }
     * })
     * 
     */
    create<T extends user_profileCreateArgs>(args: SelectSubset<T, user_profileCreateArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_profiles.
     * @param {user_profileCreateManyArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profile = await prisma.user_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_profileCreateManyArgs>(args?: SelectSubset<T, user_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_profiles and returns the data saved in the database.
     * @param {user_profileCreateManyAndReturnArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profile = await prisma.user_profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_profiles and only return the `user_id`
     * const user_profileWithUser_idOnly = await prisma.user_profile.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_profileCreateManyAndReturnArgs>(args?: SelectSubset<T, user_profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_profile.
     * @param {user_profileDeleteArgs} args - Arguments to delete one User_profile.
     * @example
     * // Delete one User_profile
     * const User_profile = await prisma.user_profile.delete({
     *   where: {
     *     // ... filter to delete one User_profile
     *   }
     * })
     * 
     */
    delete<T extends user_profileDeleteArgs>(args: SelectSubset<T, user_profileDeleteArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_profile.
     * @param {user_profileUpdateArgs} args - Arguments to update one User_profile.
     * @example
     * // Update one User_profile
     * const user_profile = await prisma.user_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_profileUpdateArgs>(args: SelectSubset<T, user_profileUpdateArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_profiles.
     * @param {user_profileDeleteManyArgs} args - Arguments to filter User_profiles to delete.
     * @example
     * // Delete a few User_profiles
     * const { count } = await prisma.user_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_profileDeleteManyArgs>(args?: SelectSubset<T, user_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_profiles
     * const user_profile = await prisma.user_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_profileUpdateManyArgs>(args: SelectSubset<T, user_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles and returns the data updated in the database.
     * @param {user_profileUpdateManyAndReturnArgs} args - Arguments to update many User_profiles.
     * @example
     * // Update many User_profiles
     * const user_profile = await prisma.user_profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_profiles and only return the `user_id`
     * const user_profileWithUser_idOnly = await prisma.user_profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_profileUpdateManyAndReturnArgs>(args: SelectSubset<T, user_profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_profile.
     * @param {user_profileUpsertArgs} args - Arguments to update or create a User_profile.
     * @example
     * // Update or create a User_profile
     * const user_profile = await prisma.user_profile.upsert({
     *   create: {
     *     // ... data to create a User_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_profile we want to update
     *   }
     * })
     */
    upsert<T extends user_profileUpsertArgs>(args: SelectSubset<T, user_profileUpsertArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profileCountArgs} args - Arguments to filter User_profiles to count.
     * @example
     * // Count the number of User_profiles
     * const count = await prisma.user_profile.count({
     *   where: {
     *     // ... the filter for the User_profiles we want to count
     *   }
     * })
    **/
    count<T extends user_profileCountArgs>(
      args?: Subset<T, user_profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_profileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_profileAggregateArgs>(args: Subset<T, User_profileAggregateArgs>): Prisma.PrismaPromise<GetUser_profileAggregateType<T>>

    /**
     * Group by User_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profileGroupByArgs} args - Group by arguments.
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
      T extends user_profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_profileGroupByArgs['orderBy'] }
        : { orderBy?: user_profileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_profile model
   */
  readonly fields: user_profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_profile model
   */
  interface user_profileFieldRefs {
    readonly user_id: FieldRef<"user_profile", 'String'>
    readonly username: FieldRef<"user_profile", 'String'>
    readonly display_name: FieldRef<"user_profile", 'String'>
    readonly bio: FieldRef<"user_profile", 'String'>
    readonly avatar_url: FieldRef<"user_profile", 'String'>
    readonly website: FieldRef<"user_profile", 'String'>
    readonly social_links: FieldRef<"user_profile", 'Json'>
    readonly updated_at: FieldRef<"user_profile", 'DateTime'>
    readonly dob: FieldRef<"user_profile", 'DateTime'>
    readonly country: FieldRef<"user_profile", 'String'>
    readonly banner_url: FieldRef<"user_profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_profile findUnique
   */
  export type user_profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * Filter, which user_profile to fetch.
     */
    where: user_profileWhereUniqueInput
  }

  /**
   * user_profile findUniqueOrThrow
   */
  export type user_profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * Filter, which user_profile to fetch.
     */
    where: user_profileWhereUniqueInput
  }

  /**
   * user_profile findFirst
   */
  export type user_profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * Filter, which user_profile to fetch.
     */
    where?: user_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profileOrderByWithRelationInput | user_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profileScalarFieldEnum | User_profileScalarFieldEnum[]
  }

  /**
   * user_profile findFirstOrThrow
   */
  export type user_profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * Filter, which user_profile to fetch.
     */
    where?: user_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profileOrderByWithRelationInput | user_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profileScalarFieldEnum | User_profileScalarFieldEnum[]
  }

  /**
   * user_profile findMany
   */
  export type user_profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profileOrderByWithRelationInput | user_profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_profiles.
     */
    cursor?: user_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    distinct?: User_profileScalarFieldEnum | User_profileScalarFieldEnum[]
  }

  /**
   * user_profile create
   */
  export type user_profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * The data needed to create a user_profile.
     */
    data: XOR<user_profileCreateInput, user_profileUncheckedCreateInput>
  }

  /**
   * user_profile createMany
   */
  export type user_profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_profiles.
     */
    data: user_profileCreateManyInput | user_profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_profile createManyAndReturn
   */
  export type user_profileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * The data used to create many user_profiles.
     */
    data: user_profileCreateManyInput | user_profileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_profile update
   */
  export type user_profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * The data needed to update a user_profile.
     */
    data: XOR<user_profileUpdateInput, user_profileUncheckedUpdateInput>
    /**
     * Choose, which user_profile to update.
     */
    where: user_profileWhereUniqueInput
  }

  /**
   * user_profile updateMany
   */
  export type user_profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profileUpdateManyMutationInput, user_profileUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profileWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
  }

  /**
   * user_profile updateManyAndReturn
   */
  export type user_profileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profileUpdateManyMutationInput, user_profileUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profileWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_profile upsert
   */
  export type user_profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * The filter to search for the user_profile to update in case it exists.
     */
    where: user_profileWhereUniqueInput
    /**
     * In case the user_profile found by the `where` argument doesn't exist, create a new user_profile with this data.
     */
    create: XOR<user_profileCreateInput, user_profileUncheckedCreateInput>
    /**
     * In case the user_profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_profileUpdateInput, user_profileUncheckedUpdateInput>
  }

  /**
   * user_profile delete
   */
  export type user_profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    /**
     * Filter which user_profile to delete.
     */
    where: user_profileWhereUniqueInput
  }

  /**
   * user_profile deleteMany
   */
  export type user_profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to delete
     */
    where?: user_profileWhereInput
    /**
     * Limit how many user_profiles to delete.
     */
    limit?: number
  }

  /**
   * user_profile without action
   */
  export type user_profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
  }


  /**
   * Model user_security
   */

  export type AggregateUser_security = {
    _count: User_securityCountAggregateOutputType | null
    _avg: User_securityAvgAggregateOutputType | null
    _sum: User_securitySumAggregateOutputType | null
    _min: User_securityMinAggregateOutputType | null
    _max: User_securityMaxAggregateOutputType | null
  }

  export type User_securityAvgAggregateOutputType = {
    failed_attempts: number | null
  }

  export type User_securitySumAggregateOutputType = {
    failed_attempts: number | null
  }

  export type User_securityMinAggregateOutputType = {
    user_id: string | null
    failed_attempts: number | null
    last_failed_login: Date | null
    otp_code: string | null
    otp_expires_at: Date | null
    updated_at: Date | null
  }

  export type User_securityMaxAggregateOutputType = {
    user_id: string | null
    failed_attempts: number | null
    last_failed_login: Date | null
    otp_code: string | null
    otp_expires_at: Date | null
    updated_at: Date | null
  }

  export type User_securityCountAggregateOutputType = {
    user_id: number
    failed_attempts: number
    last_failed_login: number
    otp_code: number
    otp_expires_at: number
    recovery_codes: number
    updated_at: number
    _all: number
  }


  export type User_securityAvgAggregateInputType = {
    failed_attempts?: true
  }

  export type User_securitySumAggregateInputType = {
    failed_attempts?: true
  }

  export type User_securityMinAggregateInputType = {
    user_id?: true
    failed_attempts?: true
    last_failed_login?: true
    otp_code?: true
    otp_expires_at?: true
    updated_at?: true
  }

  export type User_securityMaxAggregateInputType = {
    user_id?: true
    failed_attempts?: true
    last_failed_login?: true
    otp_code?: true
    otp_expires_at?: true
    updated_at?: true
  }

  export type User_securityCountAggregateInputType = {
    user_id?: true
    failed_attempts?: true
    last_failed_login?: true
    otp_code?: true
    otp_expires_at?: true
    recovery_codes?: true
    updated_at?: true
    _all?: true
  }

  export type User_securityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_security to aggregate.
     */
    where?: user_securityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_securities to fetch.
     */
    orderBy?: user_securityOrderByWithRelationInput | user_securityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_securityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_securities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_securities
    **/
    _count?: true | User_securityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_securityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_securitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_securityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_securityMaxAggregateInputType
  }

  export type GetUser_securityAggregateType<T extends User_securityAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_security]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_security[P]>
      : GetScalarType<T[P], AggregateUser_security[P]>
  }




  export type user_securityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_securityWhereInput
    orderBy?: user_securityOrderByWithAggregationInput | user_securityOrderByWithAggregationInput[]
    by: User_securityScalarFieldEnum[] | User_securityScalarFieldEnum
    having?: user_securityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_securityCountAggregateInputType | true
    _avg?: User_securityAvgAggregateInputType
    _sum?: User_securitySumAggregateInputType
    _min?: User_securityMinAggregateInputType
    _max?: User_securityMaxAggregateInputType
  }

  export type User_securityGroupByOutputType = {
    user_id: string
    failed_attempts: number | null
    last_failed_login: Date | null
    otp_code: string | null
    otp_expires_at: Date | null
    recovery_codes: string[]
    updated_at: Date
    _count: User_securityCountAggregateOutputType | null
    _avg: User_securityAvgAggregateOutputType | null
    _sum: User_securitySumAggregateOutputType | null
    _min: User_securityMinAggregateOutputType | null
    _max: User_securityMaxAggregateOutputType | null
  }

  type GetUser_securityGroupByPayload<T extends user_securityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_securityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_securityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_securityGroupByOutputType[P]>
            : GetScalarType<T[P], User_securityGroupByOutputType[P]>
        }
      >
    >


  export type user_securitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    failed_attempts?: boolean
    last_failed_login?: boolean
    otp_code?: boolean
    otp_expires_at?: boolean
    recovery_codes?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_security"]>

  export type user_securitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    failed_attempts?: boolean
    last_failed_login?: boolean
    otp_code?: boolean
    otp_expires_at?: boolean
    recovery_codes?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_security"]>

  export type user_securitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    failed_attempts?: boolean
    last_failed_login?: boolean
    otp_code?: boolean
    otp_expires_at?: boolean
    recovery_codes?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_security"]>

  export type user_securitySelectScalar = {
    user_id?: boolean
    failed_attempts?: boolean
    last_failed_login?: boolean
    otp_code?: boolean
    otp_expires_at?: boolean
    recovery_codes?: boolean
    updated_at?: boolean
  }

  export type user_securityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "failed_attempts" | "last_failed_login" | "otp_code" | "otp_expires_at" | "recovery_codes" | "updated_at", ExtArgs["result"]["user_security"]>
  export type user_securityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_securityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_securityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_securityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_security"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      failed_attempts: number | null
      last_failed_login: Date | null
      otp_code: string | null
      otp_expires_at: Date | null
      recovery_codes: string[]
      updated_at: Date
    }, ExtArgs["result"]["user_security"]>
    composites: {}
  }

  type user_securityGetPayload<S extends boolean | null | undefined | user_securityDefaultArgs> = $Result.GetResult<Prisma.$user_securityPayload, S>

  type user_securityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_securityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_securityCountAggregateInputType | true
    }

  export interface user_securityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_security'], meta: { name: 'user_security' } }
    /**
     * Find zero or one User_security that matches the filter.
     * @param {user_securityFindUniqueArgs} args - Arguments to find a User_security
     * @example
     * // Get one User_security
     * const user_security = await prisma.user_security.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_securityFindUniqueArgs>(args: SelectSubset<T, user_securityFindUniqueArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_security that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_securityFindUniqueOrThrowArgs} args - Arguments to find a User_security
     * @example
     * // Get one User_security
     * const user_security = await prisma.user_security.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_securityFindUniqueOrThrowArgs>(args: SelectSubset<T, user_securityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_security that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_securityFindFirstArgs} args - Arguments to find a User_security
     * @example
     * // Get one User_security
     * const user_security = await prisma.user_security.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_securityFindFirstArgs>(args?: SelectSubset<T, user_securityFindFirstArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_security that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_securityFindFirstOrThrowArgs} args - Arguments to find a User_security
     * @example
     * // Get one User_security
     * const user_security = await prisma.user_security.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_securityFindFirstOrThrowArgs>(args?: SelectSubset<T, user_securityFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_securities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_securityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_securities
     * const user_securities = await prisma.user_security.findMany()
     * 
     * // Get first 10 User_securities
     * const user_securities = await prisma.user_security.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_securityWithUser_idOnly = await prisma.user_security.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_securityFindManyArgs>(args?: SelectSubset<T, user_securityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_security.
     * @param {user_securityCreateArgs} args - Arguments to create a User_security.
     * @example
     * // Create one User_security
     * const User_security = await prisma.user_security.create({
     *   data: {
     *     // ... data to create a User_security
     *   }
     * })
     * 
     */
    create<T extends user_securityCreateArgs>(args: SelectSubset<T, user_securityCreateArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_securities.
     * @param {user_securityCreateManyArgs} args - Arguments to create many User_securities.
     * @example
     * // Create many User_securities
     * const user_security = await prisma.user_security.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_securityCreateManyArgs>(args?: SelectSubset<T, user_securityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_securities and returns the data saved in the database.
     * @param {user_securityCreateManyAndReturnArgs} args - Arguments to create many User_securities.
     * @example
     * // Create many User_securities
     * const user_security = await prisma.user_security.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_securities and only return the `user_id`
     * const user_securityWithUser_idOnly = await prisma.user_security.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_securityCreateManyAndReturnArgs>(args?: SelectSubset<T, user_securityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_security.
     * @param {user_securityDeleteArgs} args - Arguments to delete one User_security.
     * @example
     * // Delete one User_security
     * const User_security = await prisma.user_security.delete({
     *   where: {
     *     // ... filter to delete one User_security
     *   }
     * })
     * 
     */
    delete<T extends user_securityDeleteArgs>(args: SelectSubset<T, user_securityDeleteArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_security.
     * @param {user_securityUpdateArgs} args - Arguments to update one User_security.
     * @example
     * // Update one User_security
     * const user_security = await prisma.user_security.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_securityUpdateArgs>(args: SelectSubset<T, user_securityUpdateArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_securities.
     * @param {user_securityDeleteManyArgs} args - Arguments to filter User_securities to delete.
     * @example
     * // Delete a few User_securities
     * const { count } = await prisma.user_security.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_securityDeleteManyArgs>(args?: SelectSubset<T, user_securityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_securities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_securityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_securities
     * const user_security = await prisma.user_security.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_securityUpdateManyArgs>(args: SelectSubset<T, user_securityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_securities and returns the data updated in the database.
     * @param {user_securityUpdateManyAndReturnArgs} args - Arguments to update many User_securities.
     * @example
     * // Update many User_securities
     * const user_security = await prisma.user_security.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_securities and only return the `user_id`
     * const user_securityWithUser_idOnly = await prisma.user_security.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_securityUpdateManyAndReturnArgs>(args: SelectSubset<T, user_securityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_security.
     * @param {user_securityUpsertArgs} args - Arguments to update or create a User_security.
     * @example
     * // Update or create a User_security
     * const user_security = await prisma.user_security.upsert({
     *   create: {
     *     // ... data to create a User_security
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_security we want to update
     *   }
     * })
     */
    upsert<T extends user_securityUpsertArgs>(args: SelectSubset<T, user_securityUpsertArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_securities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_securityCountArgs} args - Arguments to filter User_securities to count.
     * @example
     * // Count the number of User_securities
     * const count = await prisma.user_security.count({
     *   where: {
     *     // ... the filter for the User_securities we want to count
     *   }
     * })
    **/
    count<T extends user_securityCountArgs>(
      args?: Subset<T, user_securityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_securityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_security.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_securityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_securityAggregateArgs>(args: Subset<T, User_securityAggregateArgs>): Prisma.PrismaPromise<GetUser_securityAggregateType<T>>

    /**
     * Group by User_security.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_securityGroupByArgs} args - Group by arguments.
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
      T extends user_securityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_securityGroupByArgs['orderBy'] }
        : { orderBy?: user_securityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_securityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_securityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_security model
   */
  readonly fields: user_securityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_security.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_securityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_security model
   */
  interface user_securityFieldRefs {
    readonly user_id: FieldRef<"user_security", 'String'>
    readonly failed_attempts: FieldRef<"user_security", 'Int'>
    readonly last_failed_login: FieldRef<"user_security", 'DateTime'>
    readonly otp_code: FieldRef<"user_security", 'String'>
    readonly otp_expires_at: FieldRef<"user_security", 'DateTime'>
    readonly recovery_codes: FieldRef<"user_security", 'String[]'>
    readonly updated_at: FieldRef<"user_security", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_security findUnique
   */
  export type user_securityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * Filter, which user_security to fetch.
     */
    where: user_securityWhereUniqueInput
  }

  /**
   * user_security findUniqueOrThrow
   */
  export type user_securityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * Filter, which user_security to fetch.
     */
    where: user_securityWhereUniqueInput
  }

  /**
   * user_security findFirst
   */
  export type user_securityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * Filter, which user_security to fetch.
     */
    where?: user_securityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_securities to fetch.
     */
    orderBy?: user_securityOrderByWithRelationInput | user_securityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_securities.
     */
    cursor?: user_securityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_securities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_securities.
     */
    distinct?: User_securityScalarFieldEnum | User_securityScalarFieldEnum[]
  }

  /**
   * user_security findFirstOrThrow
   */
  export type user_securityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * Filter, which user_security to fetch.
     */
    where?: user_securityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_securities to fetch.
     */
    orderBy?: user_securityOrderByWithRelationInput | user_securityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_securities.
     */
    cursor?: user_securityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_securities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_securities.
     */
    distinct?: User_securityScalarFieldEnum | User_securityScalarFieldEnum[]
  }

  /**
   * user_security findMany
   */
  export type user_securityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * Filter, which user_securities to fetch.
     */
    where?: user_securityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_securities to fetch.
     */
    orderBy?: user_securityOrderByWithRelationInput | user_securityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_securities.
     */
    cursor?: user_securityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_securities.
     */
    skip?: number
    distinct?: User_securityScalarFieldEnum | User_securityScalarFieldEnum[]
  }

  /**
   * user_security create
   */
  export type user_securityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * The data needed to create a user_security.
     */
    data: XOR<user_securityCreateInput, user_securityUncheckedCreateInput>
  }

  /**
   * user_security createMany
   */
  export type user_securityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_securities.
     */
    data: user_securityCreateManyInput | user_securityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_security createManyAndReturn
   */
  export type user_securityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * The data used to create many user_securities.
     */
    data: user_securityCreateManyInput | user_securityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_security update
   */
  export type user_securityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * The data needed to update a user_security.
     */
    data: XOR<user_securityUpdateInput, user_securityUncheckedUpdateInput>
    /**
     * Choose, which user_security to update.
     */
    where: user_securityWhereUniqueInput
  }

  /**
   * user_security updateMany
   */
  export type user_securityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_securities.
     */
    data: XOR<user_securityUpdateManyMutationInput, user_securityUncheckedUpdateManyInput>
    /**
     * Filter which user_securities to update
     */
    where?: user_securityWhereInput
    /**
     * Limit how many user_securities to update.
     */
    limit?: number
  }

  /**
   * user_security updateManyAndReturn
   */
  export type user_securityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * The data used to update user_securities.
     */
    data: XOR<user_securityUpdateManyMutationInput, user_securityUncheckedUpdateManyInput>
    /**
     * Filter which user_securities to update
     */
    where?: user_securityWhereInput
    /**
     * Limit how many user_securities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_security upsert
   */
  export type user_securityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * The filter to search for the user_security to update in case it exists.
     */
    where: user_securityWhereUniqueInput
    /**
     * In case the user_security found by the `where` argument doesn't exist, create a new user_security with this data.
     */
    create: XOR<user_securityCreateInput, user_securityUncheckedCreateInput>
    /**
     * In case the user_security was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_securityUpdateInput, user_securityUncheckedUpdateInput>
  }

  /**
   * user_security delete
   */
  export type user_securityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    /**
     * Filter which user_security to delete.
     */
    where: user_securityWhereUniqueInput
  }

  /**
   * user_security deleteMany
   */
  export type user_securityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_securities to delete
     */
    where?: user_securityWhereInput
    /**
     * Limit how many user_securities to delete.
     */
    limit?: number
  }

  /**
   * user_security without action
   */
  export type user_securityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
  }


  /**
   * Model user_sessions
   */

  export type AggregateUser_sessions = {
    _count: User_sessionsCountAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  export type User_sessionsMinAggregateOutputType = {
    session_id: string | null
    user_id: string | null
    token: string | null
    created_at: Date | null
    is_revoked: boolean | null
    secret: string | null
  }

  export type User_sessionsMaxAggregateOutputType = {
    session_id: string | null
    user_id: string | null
    token: string | null
    created_at: Date | null
    is_revoked: boolean | null
    secret: string | null
  }

  export type User_sessionsCountAggregateOutputType = {
    session_id: number
    user_id: number
    token: number
    created_at: number
    is_revoked: number
    secret: number
    _all: number
  }


  export type User_sessionsMinAggregateInputType = {
    session_id?: true
    user_id?: true
    token?: true
    created_at?: true
    is_revoked?: true
    secret?: true
  }

  export type User_sessionsMaxAggregateInputType = {
    session_id?: true
    user_id?: true
    token?: true
    created_at?: true
    is_revoked?: true
    secret?: true
  }

  export type User_sessionsCountAggregateInputType = {
    session_id?: true
    user_id?: true
    token?: true
    created_at?: true
    is_revoked?: true
    secret?: true
    _all?: true
  }

  export type User_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_sessions to aggregate.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_sessions
    **/
    _count?: true | User_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_sessionsMaxAggregateInputType
  }

  export type GetUser_sessionsAggregateType<T extends User_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_sessions[P]>
      : GetScalarType<T[P], AggregateUser_sessions[P]>
  }




  export type user_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_sessionsWhereInput
    orderBy?: user_sessionsOrderByWithAggregationInput | user_sessionsOrderByWithAggregationInput[]
    by: User_sessionsScalarFieldEnum[] | User_sessionsScalarFieldEnum
    having?: user_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_sessionsCountAggregateInputType | true
    _min?: User_sessionsMinAggregateInputType
    _max?: User_sessionsMaxAggregateInputType
  }

  export type User_sessionsGroupByOutputType = {
    session_id: string
    user_id: string
    token: string
    created_at: Date
    is_revoked: boolean | null
    secret: string | null
    _count: User_sessionsCountAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  type GetUser_sessionsGroupByPayload<T extends user_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type user_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    is_revoked?: boolean
    secret?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_sessions"]>

  export type user_sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    is_revoked?: boolean
    secret?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_sessions"]>

  export type user_sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    is_revoked?: boolean
    secret?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_sessions"]>

  export type user_sessionsSelectScalar = {
    session_id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    is_revoked?: boolean
    secret?: boolean
  }

  export type user_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_id" | "user_id" | "token" | "created_at" | "is_revoked" | "secret", ExtArgs["result"]["user_sessions"]>
  export type user_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_sessions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      session_id: string
      user_id: string
      token: string
      created_at: Date
      is_revoked: boolean | null
      secret: string | null
    }, ExtArgs["result"]["user_sessions"]>
    composites: {}
  }

  type user_sessionsGetPayload<S extends boolean | null | undefined | user_sessionsDefaultArgs> = $Result.GetResult<Prisma.$user_sessionsPayload, S>

  type user_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_sessionsCountAggregateInputType | true
    }

  export interface user_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_sessions'], meta: { name: 'user_sessions' } }
    /**
     * Find zero or one User_sessions that matches the filter.
     * @param {user_sessionsFindUniqueArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_sessionsFindUniqueArgs>(args: SelectSubset<T, user_sessionsFindUniqueArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_sessionsFindUniqueOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindFirstArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_sessionsFindFirstArgs>(args?: SelectSubset<T, user_sessionsFindFirstArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindFirstOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_sessions
     * const user_sessions = await prisma.user_sessions.findMany()
     * 
     * // Get first 10 User_sessions
     * const user_sessions = await prisma.user_sessions.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const user_sessionsWithSession_idOnly = await prisma.user_sessions.findMany({ select: { session_id: true } })
     * 
     */
    findMany<T extends user_sessionsFindManyArgs>(args?: SelectSubset<T, user_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_sessions.
     * @param {user_sessionsCreateArgs} args - Arguments to create a User_sessions.
     * @example
     * // Create one User_sessions
     * const User_sessions = await prisma.user_sessions.create({
     *   data: {
     *     // ... data to create a User_sessions
     *   }
     * })
     * 
     */
    create<T extends user_sessionsCreateArgs>(args: SelectSubset<T, user_sessionsCreateArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_sessions.
     * @param {user_sessionsCreateManyArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_sessions = await prisma.user_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_sessionsCreateManyArgs>(args?: SelectSubset<T, user_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_sessions and returns the data saved in the database.
     * @param {user_sessionsCreateManyAndReturnArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_sessions = await prisma.user_sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_sessions and only return the `session_id`
     * const user_sessionsWithSession_idOnly = await prisma.user_sessions.createManyAndReturn({
     *   select: { session_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_sessions.
     * @param {user_sessionsDeleteArgs} args - Arguments to delete one User_sessions.
     * @example
     * // Delete one User_sessions
     * const User_sessions = await prisma.user_sessions.delete({
     *   where: {
     *     // ... filter to delete one User_sessions
     *   }
     * })
     * 
     */
    delete<T extends user_sessionsDeleteArgs>(args: SelectSubset<T, user_sessionsDeleteArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_sessions.
     * @param {user_sessionsUpdateArgs} args - Arguments to update one User_sessions.
     * @example
     * // Update one User_sessions
     * const user_sessions = await prisma.user_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_sessionsUpdateArgs>(args: SelectSubset<T, user_sessionsUpdateArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_sessions.
     * @param {user_sessionsDeleteManyArgs} args - Arguments to filter User_sessions to delete.
     * @example
     * // Delete a few User_sessions
     * const { count } = await prisma.user_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_sessionsDeleteManyArgs>(args?: SelectSubset<T, user_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_sessions
     * const user_sessions = await prisma.user_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_sessionsUpdateManyArgs>(args: SelectSubset<T, user_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions and returns the data updated in the database.
     * @param {user_sessionsUpdateManyAndReturnArgs} args - Arguments to update many User_sessions.
     * @example
     * // Update many User_sessions
     * const user_sessions = await prisma.user_sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_sessions and only return the `session_id`
     * const user_sessionsWithSession_idOnly = await prisma.user_sessions.updateManyAndReturn({
     *   select: { session_id: true },
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
    updateManyAndReturn<T extends user_sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_sessions.
     * @param {user_sessionsUpsertArgs} args - Arguments to update or create a User_sessions.
     * @example
     * // Update or create a User_sessions
     * const user_sessions = await prisma.user_sessions.upsert({
     *   create: {
     *     // ... data to create a User_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_sessions we want to update
     *   }
     * })
     */
    upsert<T extends user_sessionsUpsertArgs>(args: SelectSubset<T, user_sessionsUpsertArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsCountArgs} args - Arguments to filter User_sessions to count.
     * @example
     * // Count the number of User_sessions
     * const count = await prisma.user_sessions.count({
     *   where: {
     *     // ... the filter for the User_sessions we want to count
     *   }
     * })
    **/
    count<T extends user_sessionsCountArgs>(
      args?: Subset<T, user_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_sessionsAggregateArgs>(args: Subset<T, User_sessionsAggregateArgs>): Prisma.PrismaPromise<GetUser_sessionsAggregateType<T>>

    /**
     * Group by User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsGroupByArgs} args - Group by arguments.
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
      T extends user_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: user_sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_sessions model
   */
  readonly fields: user_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_sessions model
   */
  interface user_sessionsFieldRefs {
    readonly session_id: FieldRef<"user_sessions", 'String'>
    readonly user_id: FieldRef<"user_sessions", 'String'>
    readonly token: FieldRef<"user_sessions", 'String'>
    readonly created_at: FieldRef<"user_sessions", 'DateTime'>
    readonly is_revoked: FieldRef<"user_sessions", 'Boolean'>
    readonly secret: FieldRef<"user_sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_sessions findUnique
   */
  export type user_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions findUniqueOrThrow
   */
  export type user_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions findFirst
   */
  export type user_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions findFirstOrThrow
   */
  export type user_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions findMany
   */
  export type user_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions create
   */
  export type user_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_sessions.
     */
    data: XOR<user_sessionsCreateInput, user_sessionsUncheckedCreateInput>
  }

  /**
   * user_sessions createMany
   */
  export type user_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_sessions.
     */
    data: user_sessionsCreateManyInput | user_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_sessions createManyAndReturn
   */
  export type user_sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many user_sessions.
     */
    data: user_sessionsCreateManyInput | user_sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_sessions update
   */
  export type user_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_sessions.
     */
    data: XOR<user_sessionsUpdateInput, user_sessionsUncheckedUpdateInput>
    /**
     * Choose, which user_sessions to update.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions updateMany
   */
  export type user_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_sessions.
     */
    data: XOR<user_sessionsUpdateManyMutationInput, user_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which user_sessions to update
     */
    where?: user_sessionsWhereInput
    /**
     * Limit how many user_sessions to update.
     */
    limit?: number
  }

  /**
   * user_sessions updateManyAndReturn
   */
  export type user_sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * The data used to update user_sessions.
     */
    data: XOR<user_sessionsUpdateManyMutationInput, user_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which user_sessions to update
     */
    where?: user_sessionsWhereInput
    /**
     * Limit how many user_sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_sessions upsert
   */
  export type user_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_sessions to update in case it exists.
     */
    where: user_sessionsWhereUniqueInput
    /**
     * In case the user_sessions found by the `where` argument doesn't exist, create a new user_sessions with this data.
     */
    create: XOR<user_sessionsCreateInput, user_sessionsUncheckedCreateInput>
    /**
     * In case the user_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_sessionsUpdateInput, user_sessionsUncheckedUpdateInput>
  }

  /**
   * user_sessions delete
   */
  export type user_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    /**
     * Filter which user_sessions to delete.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions deleteMany
   */
  export type user_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_sessions to delete
     */
    where?: user_sessionsWhereInput
    /**
     * Limit how many user_sessions to delete.
     */
    limit?: number
  }

  /**
   * user_sessions without action
   */
  export type user_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    intitial_balance: number | null
  }

  export type UsersSumAggregateOutputType = {
    intitial_balance: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
    is_verified: boolean | null
    is_active: boolean | null
    pass_salts: string | null
    user_type: string | null
    intitial_balance: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
    is_verified: boolean | null
    is_active: boolean | null
    pass_salts: string | null
    user_type: string | null
    intitial_balance: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    password_hash: number
    created_at: number
    updated_at: number
    is_verified: number
    is_active: number
    pass_salts: number
    user_type: number
    intitial_balance: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    intitial_balance?: true
  }

  export type UsersSumAggregateInputType = {
    intitial_balance?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    is_verified?: true
    is_active?: true
    pass_salts?: true
    user_type?: true
    intitial_balance?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    is_verified?: true
    is_active?: true
    pass_salts?: true
    user_type?: true
    intitial_balance?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    is_verified?: true
    is_active?: true
    pass_salts?: true
    user_type?: true
    intitial_balance?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    password_hash: string
    created_at: Date
    updated_at: Date
    is_verified: boolean | null
    is_active: boolean | null
    pass_salts: string | null
    user_type: string | null
    intitial_balance: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    is_active?: boolean
    pass_salts?: boolean
    user_type?: boolean
    intitial_balance?: boolean
    user_about?: boolean | users$user_aboutArgs<ExtArgs>
    user_analytics?: boolean | users$user_analyticsArgs<ExtArgs>
    user_audit_logs?: boolean | users$user_audit_logsArgs<ExtArgs>
    user_blocklist?: boolean | users$user_blocklistArgs<ExtArgs>
    user_certificates?: boolean | users$user_certificatesArgs<ExtArgs>
    user_profile?: boolean | users$user_profileArgs<ExtArgs>
    user_security?: boolean | users$user_securityArgs<ExtArgs>
    user_sessions?: boolean | users$user_sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    is_active?: boolean
    pass_salts?: boolean
    user_type?: boolean
    intitial_balance?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    is_active?: boolean
    pass_salts?: boolean
    user_type?: boolean
    intitial_balance?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    is_active?: boolean
    pass_salts?: boolean
    user_type?: boolean
    intitial_balance?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "password_hash" | "created_at" | "updated_at" | "is_verified" | "is_active" | "pass_salts" | "user_type" | "intitial_balance", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_about?: boolean | users$user_aboutArgs<ExtArgs>
    user_analytics?: boolean | users$user_analyticsArgs<ExtArgs>
    user_audit_logs?: boolean | users$user_audit_logsArgs<ExtArgs>
    user_blocklist?: boolean | users$user_blocklistArgs<ExtArgs>
    user_certificates?: boolean | users$user_certificatesArgs<ExtArgs>
    user_profile?: boolean | users$user_profileArgs<ExtArgs>
    user_security?: boolean | users$user_securityArgs<ExtArgs>
    user_sessions?: boolean | users$user_sessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_about: Prisma.$user_aboutPayload<ExtArgs> | null
      user_analytics: Prisma.$user_analyticsPayload<ExtArgs> | null
      user_audit_logs: Prisma.$user_audit_logsPayload<ExtArgs>[]
      user_blocklist: Prisma.$user_blocklistPayload<ExtArgs> | null
      user_certificates: Prisma.$user_certificatesPayload<ExtArgs> | null
      user_profile: Prisma.$user_profilePayload<ExtArgs> | null
      user_security: Prisma.$user_securityPayload<ExtArgs> | null
      user_sessions: Prisma.$user_sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      password_hash: string
      created_at: Date
      updated_at: Date
      is_verified: boolean | null
      is_active: boolean | null
      pass_salts: string | null
      user_type: string | null
      intitial_balance: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_about<T extends users$user_aboutArgs<ExtArgs> = {}>(args?: Subset<T, users$user_aboutArgs<ExtArgs>>): Prisma__user_aboutClient<$Result.GetResult<Prisma.$user_aboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_analytics<T extends users$user_analyticsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_analyticsArgs<ExtArgs>>): Prisma__user_analyticsClient<$Result.GetResult<Prisma.$user_analyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_audit_logs<T extends users$user_audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_blocklist<T extends users$user_blocklistArgs<ExtArgs> = {}>(args?: Subset<T, users$user_blocklistArgs<ExtArgs>>): Prisma__user_blocklistClient<$Result.GetResult<Prisma.$user_blocklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_certificates<T extends users$user_certificatesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_certificatesArgs<ExtArgs>>): Prisma__user_certificatesClient<$Result.GetResult<Prisma.$user_certificatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_profile<T extends users$user_profileArgs<ExtArgs> = {}>(args?: Subset<T, users$user_profileArgs<ExtArgs>>): Prisma__user_profileClient<$Result.GetResult<Prisma.$user_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_security<T extends users$user_securityArgs<ExtArgs> = {}>(args?: Subset<T, users$user_securityArgs<ExtArgs>>): Prisma__user_securityClient<$Result.GetResult<Prisma.$user_securityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_sessions<T extends users$user_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly is_verified: FieldRef<"users", 'Boolean'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly pass_salts: FieldRef<"users", 'String'>
    readonly user_type: FieldRef<"users", 'String'>
    readonly intitial_balance: FieldRef<"users", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.user_about
   */
  export type users$user_aboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_about
     */
    select?: user_aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_about
     */
    omit?: user_aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_aboutInclude<ExtArgs> | null
    where?: user_aboutWhereInput
  }

  /**
   * users.user_analytics
   */
  export type users$user_analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_analytics
     */
    select?: user_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_analytics
     */
    omit?: user_analyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_analyticsInclude<ExtArgs> | null
    where?: user_analyticsWhereInput
  }

  /**
   * users.user_audit_logs
   */
  export type users$user_audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_audit_logs
     */
    select?: user_audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_audit_logs
     */
    omit?: user_audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_audit_logsInclude<ExtArgs> | null
    where?: user_audit_logsWhereInput
    orderBy?: user_audit_logsOrderByWithRelationInput | user_audit_logsOrderByWithRelationInput[]
    cursor?: user_audit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_audit_logsScalarFieldEnum | User_audit_logsScalarFieldEnum[]
  }

  /**
   * users.user_blocklist
   */
  export type users$user_blocklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_blocklist
     */
    select?: user_blocklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_blocklist
     */
    omit?: user_blocklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_blocklistInclude<ExtArgs> | null
    where?: user_blocklistWhereInput
  }

  /**
   * users.user_certificates
   */
  export type users$user_certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_certificates
     */
    select?: user_certificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_certificates
     */
    omit?: user_certificatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_certificatesInclude<ExtArgs> | null
    where?: user_certificatesWhereInput
  }

  /**
   * users.user_profile
   */
  export type users$user_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profile
     */
    select?: user_profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profile
     */
    omit?: user_profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profileInclude<ExtArgs> | null
    where?: user_profileWhereInput
  }

  /**
   * users.user_security
   */
  export type users$user_securityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_security
     */
    select?: user_securitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_security
     */
    omit?: user_securityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_securityInclude<ExtArgs> | null
    where?: user_securityWhereInput
  }

  /**
   * users.user_sessions
   */
  export type users$user_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sessionsInclude<ExtArgs> | null
    where?: user_sessionsWhereInput
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    cursor?: user_sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const User_aboutScalarFieldEnum: {
    about_id: 'about_id',
    user_id: 'user_id',
    about: 'about',
    goals: 'goals',
    skills: 'skills'
  };

  export type User_aboutScalarFieldEnum = (typeof User_aboutScalarFieldEnum)[keyof typeof User_aboutScalarFieldEnum]


  export const User_analyticsScalarFieldEnum: {
    user_id: 'user_id',
    posts_count: 'posts_count',
    likes_received: 'likes_received',
    followers_count: 'followers_count',
    following_count: 'following_count',
    last_login: 'last_login',
    activity_score: 'activity_score'
  };

  export type User_analyticsScalarFieldEnum = (typeof User_analyticsScalarFieldEnum)[keyof typeof User_analyticsScalarFieldEnum]


  export const User_audit_logsScalarFieldEnum: {
    audit_id: 'audit_id',
    user_id: 'user_id',
    action_type: 'action_type',
    details: 'details',
    performed_by: 'performed_by',
    event_time: 'event_time'
  };

  export type User_audit_logsScalarFieldEnum = (typeof User_audit_logsScalarFieldEnum)[keyof typeof User_audit_logsScalarFieldEnum]


  export const User_blocklistScalarFieldEnum: {
    block_id: 'block_id',
    user_id: 'user_id',
    reason: 'reason',
    blocked_at: 'blocked_at'
  };

  export type User_blocklistScalarFieldEnum = (typeof User_blocklistScalarFieldEnum)[keyof typeof User_blocklistScalarFieldEnum]


  export const User_certificatesScalarFieldEnum: {
    user_id: 'user_id',
    public_key: 'public_key',
    certificate: 'certificate',
    created_at: 'created_at'
  };

  export type User_certificatesScalarFieldEnum = (typeof User_certificatesScalarFieldEnum)[keyof typeof User_certificatesScalarFieldEnum]


  export const User_profileScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    display_name: 'display_name',
    bio: 'bio',
    avatar_url: 'avatar_url',
    website: 'website',
    social_links: 'social_links',
    updated_at: 'updated_at',
    dob: 'dob',
    country: 'country',
    banner_url: 'banner_url'
  };

  export type User_profileScalarFieldEnum = (typeof User_profileScalarFieldEnum)[keyof typeof User_profileScalarFieldEnum]


  export const User_securityScalarFieldEnum: {
    user_id: 'user_id',
    failed_attempts: 'failed_attempts',
    last_failed_login: 'last_failed_login',
    otp_code: 'otp_code',
    otp_expires_at: 'otp_expires_at',
    recovery_codes: 'recovery_codes',
    updated_at: 'updated_at'
  };

  export type User_securityScalarFieldEnum = (typeof User_securityScalarFieldEnum)[keyof typeof User_securityScalarFieldEnum]


  export const User_sessionsScalarFieldEnum: {
    session_id: 'session_id',
    user_id: 'user_id',
    token: 'token',
    created_at: 'created_at',
    is_revoked: 'is_revoked',
    secret: 'secret'
  };

  export type User_sessionsScalarFieldEnum = (typeof User_sessionsScalarFieldEnum)[keyof typeof User_sessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_verified: 'is_verified',
    is_active: 'is_active',
    pass_salts: 'pass_salts',
    user_type: 'user_type',
    intitial_balance: 'intitial_balance'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type user_aboutWhereInput = {
    AND?: user_aboutWhereInput | user_aboutWhereInput[]
    OR?: user_aboutWhereInput[]
    NOT?: user_aboutWhereInput | user_aboutWhereInput[]
    about_id?: UuidFilter<"user_about"> | string
    user_id?: UuidFilter<"user_about"> | string
    about?: StringNullableFilter<"user_about"> | string | null
    goals?: StringNullableFilter<"user_about"> | string | null
    skills?: StringNullableListFilter<"user_about">
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_aboutOrderByWithRelationInput = {
    about_id?: SortOrder
    user_id?: SortOrder
    about?: SortOrderInput | SortOrder
    goals?: SortOrderInput | SortOrder
    skills?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_aboutWhereUniqueInput = Prisma.AtLeast<{
    about_id?: string
    user_id?: string
    AND?: user_aboutWhereInput | user_aboutWhereInput[]
    OR?: user_aboutWhereInput[]
    NOT?: user_aboutWhereInput | user_aboutWhereInput[]
    about?: StringNullableFilter<"user_about"> | string | null
    goals?: StringNullableFilter<"user_about"> | string | null
    skills?: StringNullableListFilter<"user_about">
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "about_id" | "user_id">

  export type user_aboutOrderByWithAggregationInput = {
    about_id?: SortOrder
    user_id?: SortOrder
    about?: SortOrderInput | SortOrder
    goals?: SortOrderInput | SortOrder
    skills?: SortOrder
    _count?: user_aboutCountOrderByAggregateInput
    _max?: user_aboutMaxOrderByAggregateInput
    _min?: user_aboutMinOrderByAggregateInput
  }

  export type user_aboutScalarWhereWithAggregatesInput = {
    AND?: user_aboutScalarWhereWithAggregatesInput | user_aboutScalarWhereWithAggregatesInput[]
    OR?: user_aboutScalarWhereWithAggregatesInput[]
    NOT?: user_aboutScalarWhereWithAggregatesInput | user_aboutScalarWhereWithAggregatesInput[]
    about_id?: UuidWithAggregatesFilter<"user_about"> | string
    user_id?: UuidWithAggregatesFilter<"user_about"> | string
    about?: StringNullableWithAggregatesFilter<"user_about"> | string | null
    goals?: StringNullableWithAggregatesFilter<"user_about"> | string | null
    skills?: StringNullableListFilter<"user_about">
  }

  export type user_analyticsWhereInput = {
    AND?: user_analyticsWhereInput | user_analyticsWhereInput[]
    OR?: user_analyticsWhereInput[]
    NOT?: user_analyticsWhereInput | user_analyticsWhereInput[]
    user_id?: UuidFilter<"user_analytics"> | string
    posts_count?: IntNullableFilter<"user_analytics"> | number | null
    likes_received?: IntNullableFilter<"user_analytics"> | number | null
    followers_count?: IntNullableFilter<"user_analytics"> | number | null
    following_count?: IntNullableFilter<"user_analytics"> | number | null
    last_login?: DateTimeNullableFilter<"user_analytics"> | Date | string | null
    activity_score?: DecimalNullableFilter<"user_analytics"> | Decimal | DecimalJsLike | number | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_analyticsOrderByWithRelationInput = {
    user_id?: SortOrder
    posts_count?: SortOrderInput | SortOrder
    likes_received?: SortOrderInput | SortOrder
    followers_count?: SortOrderInput | SortOrder
    following_count?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    activity_score?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_analyticsWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: user_analyticsWhereInput | user_analyticsWhereInput[]
    OR?: user_analyticsWhereInput[]
    NOT?: user_analyticsWhereInput | user_analyticsWhereInput[]
    posts_count?: IntNullableFilter<"user_analytics"> | number | null
    likes_received?: IntNullableFilter<"user_analytics"> | number | null
    followers_count?: IntNullableFilter<"user_analytics"> | number | null
    following_count?: IntNullableFilter<"user_analytics"> | number | null
    last_login?: DateTimeNullableFilter<"user_analytics"> | Date | string | null
    activity_score?: DecimalNullableFilter<"user_analytics"> | Decimal | DecimalJsLike | number | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id">

  export type user_analyticsOrderByWithAggregationInput = {
    user_id?: SortOrder
    posts_count?: SortOrderInput | SortOrder
    likes_received?: SortOrderInput | SortOrder
    followers_count?: SortOrderInput | SortOrder
    following_count?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    activity_score?: SortOrderInput | SortOrder
    _count?: user_analyticsCountOrderByAggregateInput
    _avg?: user_analyticsAvgOrderByAggregateInput
    _max?: user_analyticsMaxOrderByAggregateInput
    _min?: user_analyticsMinOrderByAggregateInput
    _sum?: user_analyticsSumOrderByAggregateInput
  }

  export type user_analyticsScalarWhereWithAggregatesInput = {
    AND?: user_analyticsScalarWhereWithAggregatesInput | user_analyticsScalarWhereWithAggregatesInput[]
    OR?: user_analyticsScalarWhereWithAggregatesInput[]
    NOT?: user_analyticsScalarWhereWithAggregatesInput | user_analyticsScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user_analytics"> | string
    posts_count?: IntNullableWithAggregatesFilter<"user_analytics"> | number | null
    likes_received?: IntNullableWithAggregatesFilter<"user_analytics"> | number | null
    followers_count?: IntNullableWithAggregatesFilter<"user_analytics"> | number | null
    following_count?: IntNullableWithAggregatesFilter<"user_analytics"> | number | null
    last_login?: DateTimeNullableWithAggregatesFilter<"user_analytics"> | Date | string | null
    activity_score?: DecimalNullableWithAggregatesFilter<"user_analytics"> | Decimal | DecimalJsLike | number | string | null
  }

  export type user_audit_logsWhereInput = {
    AND?: user_audit_logsWhereInput | user_audit_logsWhereInput[]
    OR?: user_audit_logsWhereInput[]
    NOT?: user_audit_logsWhereInput | user_audit_logsWhereInput[]
    audit_id?: UuidFilter<"user_audit_logs"> | string
    user_id?: UuidNullableFilter<"user_audit_logs"> | string | null
    action_type?: StringFilter<"user_audit_logs"> | string
    details?: JsonNullableFilter<"user_audit_logs">
    performed_by?: UuidNullableFilter<"user_audit_logs"> | string | null
    event_time?: DateTimeFilter<"user_audit_logs"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type user_audit_logsOrderByWithRelationInput = {
    audit_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action_type?: SortOrder
    details?: SortOrderInput | SortOrder
    performed_by?: SortOrderInput | SortOrder
    event_time?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_audit_logsWhereUniqueInput = Prisma.AtLeast<{
    audit_id?: string
    AND?: user_audit_logsWhereInput | user_audit_logsWhereInput[]
    OR?: user_audit_logsWhereInput[]
    NOT?: user_audit_logsWhereInput | user_audit_logsWhereInput[]
    user_id?: UuidNullableFilter<"user_audit_logs"> | string | null
    action_type?: StringFilter<"user_audit_logs"> | string
    details?: JsonNullableFilter<"user_audit_logs">
    performed_by?: UuidNullableFilter<"user_audit_logs"> | string | null
    event_time?: DateTimeFilter<"user_audit_logs"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "audit_id">

  export type user_audit_logsOrderByWithAggregationInput = {
    audit_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action_type?: SortOrder
    details?: SortOrderInput | SortOrder
    performed_by?: SortOrderInput | SortOrder
    event_time?: SortOrder
    _count?: user_audit_logsCountOrderByAggregateInput
    _max?: user_audit_logsMaxOrderByAggregateInput
    _min?: user_audit_logsMinOrderByAggregateInput
  }

  export type user_audit_logsScalarWhereWithAggregatesInput = {
    AND?: user_audit_logsScalarWhereWithAggregatesInput | user_audit_logsScalarWhereWithAggregatesInput[]
    OR?: user_audit_logsScalarWhereWithAggregatesInput[]
    NOT?: user_audit_logsScalarWhereWithAggregatesInput | user_audit_logsScalarWhereWithAggregatesInput[]
    audit_id?: UuidWithAggregatesFilter<"user_audit_logs"> | string
    user_id?: UuidNullableWithAggregatesFilter<"user_audit_logs"> | string | null
    action_type?: StringWithAggregatesFilter<"user_audit_logs"> | string
    details?: JsonNullableWithAggregatesFilter<"user_audit_logs">
    performed_by?: UuidNullableWithAggregatesFilter<"user_audit_logs"> | string | null
    event_time?: DateTimeWithAggregatesFilter<"user_audit_logs"> | Date | string
  }

  export type user_blocklistWhereInput = {
    AND?: user_blocklistWhereInput | user_blocklistWhereInput[]
    OR?: user_blocklistWhereInput[]
    NOT?: user_blocklistWhereInput | user_blocklistWhereInput[]
    block_id?: UuidFilter<"user_blocklist"> | string
    user_id?: UuidNullableFilter<"user_blocklist"> | string | null
    reason?: StringFilter<"user_blocklist"> | string
    blocked_at?: DateTimeFilter<"user_blocklist"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type user_blocklistOrderByWithRelationInput = {
    block_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    reason?: SortOrder
    blocked_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_blocklistWhereUniqueInput = Prisma.AtLeast<{
    block_id?: string
    user_id?: string
    AND?: user_blocklistWhereInput | user_blocklistWhereInput[]
    OR?: user_blocklistWhereInput[]
    NOT?: user_blocklistWhereInput | user_blocklistWhereInput[]
    reason?: StringFilter<"user_blocklist"> | string
    blocked_at?: DateTimeFilter<"user_blocklist"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "block_id" | "user_id">

  export type user_blocklistOrderByWithAggregationInput = {
    block_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    reason?: SortOrder
    blocked_at?: SortOrder
    _count?: user_blocklistCountOrderByAggregateInput
    _max?: user_blocklistMaxOrderByAggregateInput
    _min?: user_blocklistMinOrderByAggregateInput
  }

  export type user_blocklistScalarWhereWithAggregatesInput = {
    AND?: user_blocklistScalarWhereWithAggregatesInput | user_blocklistScalarWhereWithAggregatesInput[]
    OR?: user_blocklistScalarWhereWithAggregatesInput[]
    NOT?: user_blocklistScalarWhereWithAggregatesInput | user_blocklistScalarWhereWithAggregatesInput[]
    block_id?: UuidWithAggregatesFilter<"user_blocklist"> | string
    user_id?: UuidNullableWithAggregatesFilter<"user_blocklist"> | string | null
    reason?: StringWithAggregatesFilter<"user_blocklist"> | string
    blocked_at?: DateTimeWithAggregatesFilter<"user_blocklist"> | Date | string
  }

  export type user_certificatesWhereInput = {
    AND?: user_certificatesWhereInput | user_certificatesWhereInput[]
    OR?: user_certificatesWhereInput[]
    NOT?: user_certificatesWhereInput | user_certificatesWhereInput[]
    user_id?: UuidFilter<"user_certificates"> | string
    public_key?: StringFilter<"user_certificates"> | string
    certificate?: StringNullableFilter<"user_certificates"> | string | null
    created_at?: DateTimeFilter<"user_certificates"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_certificatesOrderByWithRelationInput = {
    user_id?: SortOrder
    public_key?: SortOrder
    certificate?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_certificatesWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: user_certificatesWhereInput | user_certificatesWhereInput[]
    OR?: user_certificatesWhereInput[]
    NOT?: user_certificatesWhereInput | user_certificatesWhereInput[]
    public_key?: StringFilter<"user_certificates"> | string
    certificate?: StringNullableFilter<"user_certificates"> | string | null
    created_at?: DateTimeFilter<"user_certificates"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id">

  export type user_certificatesOrderByWithAggregationInput = {
    user_id?: SortOrder
    public_key?: SortOrder
    certificate?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: user_certificatesCountOrderByAggregateInput
    _max?: user_certificatesMaxOrderByAggregateInput
    _min?: user_certificatesMinOrderByAggregateInput
  }

  export type user_certificatesScalarWhereWithAggregatesInput = {
    AND?: user_certificatesScalarWhereWithAggregatesInput | user_certificatesScalarWhereWithAggregatesInput[]
    OR?: user_certificatesScalarWhereWithAggregatesInput[]
    NOT?: user_certificatesScalarWhereWithAggregatesInput | user_certificatesScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user_certificates"> | string
    public_key?: StringWithAggregatesFilter<"user_certificates"> | string
    certificate?: StringNullableWithAggregatesFilter<"user_certificates"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_certificates"> | Date | string
  }

  export type user_profileWhereInput = {
    AND?: user_profileWhereInput | user_profileWhereInput[]
    OR?: user_profileWhereInput[]
    NOT?: user_profileWhereInput | user_profileWhereInput[]
    user_id?: UuidFilter<"user_profile"> | string
    username?: StringFilter<"user_profile"> | string
    display_name?: StringNullableFilter<"user_profile"> | string | null
    bio?: StringNullableFilter<"user_profile"> | string | null
    avatar_url?: StringNullableFilter<"user_profile"> | string | null
    website?: StringNullableFilter<"user_profile"> | string | null
    social_links?: JsonNullableFilter<"user_profile">
    updated_at?: DateTimeFilter<"user_profile"> | Date | string
    dob?: DateTimeNullableFilter<"user_profile"> | Date | string | null
    country?: StringNullableFilter<"user_profile"> | string | null
    banner_url?: StringNullableFilter<"user_profile"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_profileOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    display_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    social_links?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    dob?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    banner_url?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_profileWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    username?: string
    AND?: user_profileWhereInput | user_profileWhereInput[]
    OR?: user_profileWhereInput[]
    NOT?: user_profileWhereInput | user_profileWhereInput[]
    display_name?: StringNullableFilter<"user_profile"> | string | null
    bio?: StringNullableFilter<"user_profile"> | string | null
    avatar_url?: StringNullableFilter<"user_profile"> | string | null
    website?: StringNullableFilter<"user_profile"> | string | null
    social_links?: JsonNullableFilter<"user_profile">
    updated_at?: DateTimeFilter<"user_profile"> | Date | string
    dob?: DateTimeNullableFilter<"user_profile"> | Date | string | null
    country?: StringNullableFilter<"user_profile"> | string | null
    banner_url?: StringNullableFilter<"user_profile"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id" | "username">

  export type user_profileOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    display_name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    social_links?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    dob?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    banner_url?: SortOrderInput | SortOrder
    _count?: user_profileCountOrderByAggregateInput
    _max?: user_profileMaxOrderByAggregateInput
    _min?: user_profileMinOrderByAggregateInput
  }

  export type user_profileScalarWhereWithAggregatesInput = {
    AND?: user_profileScalarWhereWithAggregatesInput | user_profileScalarWhereWithAggregatesInput[]
    OR?: user_profileScalarWhereWithAggregatesInput[]
    NOT?: user_profileScalarWhereWithAggregatesInput | user_profileScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user_profile"> | string
    username?: StringWithAggregatesFilter<"user_profile"> | string
    display_name?: StringNullableWithAggregatesFilter<"user_profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"user_profile"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"user_profile"> | string | null
    website?: StringNullableWithAggregatesFilter<"user_profile"> | string | null
    social_links?: JsonNullableWithAggregatesFilter<"user_profile">
    updated_at?: DateTimeWithAggregatesFilter<"user_profile"> | Date | string
    dob?: DateTimeNullableWithAggregatesFilter<"user_profile"> | Date | string | null
    country?: StringNullableWithAggregatesFilter<"user_profile"> | string | null
    banner_url?: StringNullableWithAggregatesFilter<"user_profile"> | string | null
  }

  export type user_securityWhereInput = {
    AND?: user_securityWhereInput | user_securityWhereInput[]
    OR?: user_securityWhereInput[]
    NOT?: user_securityWhereInput | user_securityWhereInput[]
    user_id?: UuidFilter<"user_security"> | string
    failed_attempts?: IntNullableFilter<"user_security"> | number | null
    last_failed_login?: DateTimeNullableFilter<"user_security"> | Date | string | null
    otp_code?: StringNullableFilter<"user_security"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"user_security"> | Date | string | null
    recovery_codes?: StringNullableListFilter<"user_security">
    updated_at?: DateTimeFilter<"user_security"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_securityOrderByWithRelationInput = {
    user_id?: SortOrder
    failed_attempts?: SortOrderInput | SortOrder
    last_failed_login?: SortOrderInput | SortOrder
    otp_code?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    recovery_codes?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_securityWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: user_securityWhereInput | user_securityWhereInput[]
    OR?: user_securityWhereInput[]
    NOT?: user_securityWhereInput | user_securityWhereInput[]
    failed_attempts?: IntNullableFilter<"user_security"> | number | null
    last_failed_login?: DateTimeNullableFilter<"user_security"> | Date | string | null
    otp_code?: StringNullableFilter<"user_security"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"user_security"> | Date | string | null
    recovery_codes?: StringNullableListFilter<"user_security">
    updated_at?: DateTimeFilter<"user_security"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id">

  export type user_securityOrderByWithAggregationInput = {
    user_id?: SortOrder
    failed_attempts?: SortOrderInput | SortOrder
    last_failed_login?: SortOrderInput | SortOrder
    otp_code?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    recovery_codes?: SortOrder
    updated_at?: SortOrder
    _count?: user_securityCountOrderByAggregateInput
    _avg?: user_securityAvgOrderByAggregateInput
    _max?: user_securityMaxOrderByAggregateInput
    _min?: user_securityMinOrderByAggregateInput
    _sum?: user_securitySumOrderByAggregateInput
  }

  export type user_securityScalarWhereWithAggregatesInput = {
    AND?: user_securityScalarWhereWithAggregatesInput | user_securityScalarWhereWithAggregatesInput[]
    OR?: user_securityScalarWhereWithAggregatesInput[]
    NOT?: user_securityScalarWhereWithAggregatesInput | user_securityScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user_security"> | string
    failed_attempts?: IntNullableWithAggregatesFilter<"user_security"> | number | null
    last_failed_login?: DateTimeNullableWithAggregatesFilter<"user_security"> | Date | string | null
    otp_code?: StringNullableWithAggregatesFilter<"user_security"> | string | null
    otp_expires_at?: DateTimeNullableWithAggregatesFilter<"user_security"> | Date | string | null
    recovery_codes?: StringNullableListFilter<"user_security">
    updated_at?: DateTimeWithAggregatesFilter<"user_security"> | Date | string
  }

  export type user_sessionsWhereInput = {
    AND?: user_sessionsWhereInput | user_sessionsWhereInput[]
    OR?: user_sessionsWhereInput[]
    NOT?: user_sessionsWhereInput | user_sessionsWhereInput[]
    session_id?: UuidFilter<"user_sessions"> | string
    user_id?: UuidFilter<"user_sessions"> | string
    token?: StringFilter<"user_sessions"> | string
    created_at?: DateTimeFilter<"user_sessions"> | Date | string
    is_revoked?: BoolNullableFilter<"user_sessions"> | boolean | null
    secret?: StringNullableFilter<"user_sessions"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_sessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    is_revoked?: SortOrderInput | SortOrder
    secret?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_sessionsWhereUniqueInput = Prisma.AtLeast<{
    session_id?: string
    AND?: user_sessionsWhereInput | user_sessionsWhereInput[]
    OR?: user_sessionsWhereInput[]
    NOT?: user_sessionsWhereInput | user_sessionsWhereInput[]
    user_id?: UuidFilter<"user_sessions"> | string
    token?: StringFilter<"user_sessions"> | string
    created_at?: DateTimeFilter<"user_sessions"> | Date | string
    is_revoked?: BoolNullableFilter<"user_sessions"> | boolean | null
    secret?: StringNullableFilter<"user_sessions"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "session_id">

  export type user_sessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    is_revoked?: SortOrderInput | SortOrder
    secret?: SortOrderInput | SortOrder
    _count?: user_sessionsCountOrderByAggregateInput
    _max?: user_sessionsMaxOrderByAggregateInput
    _min?: user_sessionsMinOrderByAggregateInput
  }

  export type user_sessionsScalarWhereWithAggregatesInput = {
    AND?: user_sessionsScalarWhereWithAggregatesInput | user_sessionsScalarWhereWithAggregatesInput[]
    OR?: user_sessionsScalarWhereWithAggregatesInput[]
    NOT?: user_sessionsScalarWhereWithAggregatesInput | user_sessionsScalarWhereWithAggregatesInput[]
    session_id?: UuidWithAggregatesFilter<"user_sessions"> | string
    user_id?: UuidWithAggregatesFilter<"user_sessions"> | string
    token?: StringWithAggregatesFilter<"user_sessions"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_sessions"> | Date | string
    is_revoked?: BoolNullableWithAggregatesFilter<"user_sessions"> | boolean | null
    secret?: StringNullableWithAggregatesFilter<"user_sessions"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    is_verified?: BoolNullableFilter<"users"> | boolean | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    pass_salts?: StringNullableFilter<"users"> | string | null
    user_type?: StringNullableFilter<"users"> | string | null
    intitial_balance?: FloatFilter<"users"> | number
    user_about?: XOR<User_aboutNullableScalarRelationFilter, user_aboutWhereInput> | null
    user_analytics?: XOR<User_analyticsNullableScalarRelationFilter, user_analyticsWhereInput> | null
    user_audit_logs?: User_audit_logsListRelationFilter
    user_blocklist?: XOR<User_blocklistNullableScalarRelationFilter, user_blocklistWhereInput> | null
    user_certificates?: XOR<User_certificatesNullableScalarRelationFilter, user_certificatesWhereInput> | null
    user_profile?: XOR<User_profileNullableScalarRelationFilter, user_profileWhereInput> | null
    user_security?: XOR<User_securityNullableScalarRelationFilter, user_securityWhereInput> | null
    user_sessions?: User_sessionsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    pass_salts?: SortOrderInput | SortOrder
    user_type?: SortOrderInput | SortOrder
    intitial_balance?: SortOrder
    user_about?: user_aboutOrderByWithRelationInput
    user_analytics?: user_analyticsOrderByWithRelationInput
    user_audit_logs?: user_audit_logsOrderByRelationAggregateInput
    user_blocklist?: user_blocklistOrderByWithRelationInput
    user_certificates?: user_certificatesOrderByWithRelationInput
    user_profile?: user_profileOrderByWithRelationInput
    user_security?: user_securityOrderByWithRelationInput
    user_sessions?: user_sessionsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    is_verified?: BoolNullableFilter<"users"> | boolean | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    pass_salts?: StringNullableFilter<"users"> | string | null
    user_type?: StringNullableFilter<"users"> | string | null
    intitial_balance?: FloatFilter<"users"> | number
    user_about?: XOR<User_aboutNullableScalarRelationFilter, user_aboutWhereInput> | null
    user_analytics?: XOR<User_analyticsNullableScalarRelationFilter, user_analyticsWhereInput> | null
    user_audit_logs?: User_audit_logsListRelationFilter
    user_blocklist?: XOR<User_blocklistNullableScalarRelationFilter, user_blocklistWhereInput> | null
    user_certificates?: XOR<User_certificatesNullableScalarRelationFilter, user_certificatesWhereInput> | null
    user_profile?: XOR<User_profileNullableScalarRelationFilter, user_profileWhereInput> | null
    user_security?: XOR<User_securityNullableScalarRelationFilter, user_securityWhereInput> | null
    user_sessions?: User_sessionsListRelationFilter
  }, "id" | "email" | "phone">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    pass_salts?: SortOrderInput | SortOrder
    user_type?: SortOrderInput | SortOrder
    intitial_balance?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    is_verified?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    pass_salts?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_type?: StringNullableWithAggregatesFilter<"users"> | string | null
    intitial_balance?: FloatWithAggregatesFilter<"users"> | number
  }

  export type user_aboutCreateInput = {
    about_id?: string
    about?: string | null
    goals?: string | null
    skills?: user_aboutCreateskillsInput | string[]
    users: usersCreateNestedOneWithoutUser_aboutInput
  }

  export type user_aboutUncheckedCreateInput = {
    about_id?: string
    user_id: string
    about?: string | null
    goals?: string | null
    skills?: user_aboutCreateskillsInput | string[]
  }

  export type user_aboutUpdateInput = {
    about_id?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: user_aboutUpdateskillsInput | string[]
    users?: usersUpdateOneRequiredWithoutUser_aboutNestedInput
  }

  export type user_aboutUncheckedUpdateInput = {
    about_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: user_aboutUpdateskillsInput | string[]
  }

  export type user_aboutCreateManyInput = {
    about_id?: string
    user_id: string
    about?: string | null
    goals?: string | null
    skills?: user_aboutCreateskillsInput | string[]
  }

  export type user_aboutUpdateManyMutationInput = {
    about_id?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: user_aboutUpdateskillsInput | string[]
  }

  export type user_aboutUncheckedUpdateManyInput = {
    about_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: user_aboutUpdateskillsInput | string[]
  }

  export type user_analyticsCreateInput = {
    posts_count?: number | null
    likes_received?: number | null
    followers_count?: number | null
    following_count?: number | null
    last_login?: Date | string | null
    activity_score?: Decimal | DecimalJsLike | number | string | null
    users: usersCreateNestedOneWithoutUser_analyticsInput
  }

  export type user_analyticsUncheckedCreateInput = {
    user_id: string
    posts_count?: number | null
    likes_received?: number | null
    followers_count?: number | null
    following_count?: number | null
    last_login?: Date | string | null
    activity_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type user_analyticsUpdateInput = {
    posts_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_received?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUpdateOneRequiredWithoutUser_analyticsNestedInput
  }

  export type user_analyticsUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    posts_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_received?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type user_analyticsCreateManyInput = {
    user_id: string
    posts_count?: number | null
    likes_received?: number | null
    followers_count?: number | null
    following_count?: number | null
    last_login?: Date | string | null
    activity_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type user_analyticsUpdateManyMutationInput = {
    posts_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_received?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type user_analyticsUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    posts_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_received?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type user_audit_logsCreateInput = {
    audit_id?: string
    action_type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: string | null
    event_time?: Date | string
    users?: usersCreateNestedOneWithoutUser_audit_logsInput
  }

  export type user_audit_logsUncheckedCreateInput = {
    audit_id?: string
    user_id?: string | null
    action_type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: string | null
    event_time?: Date | string
  }

  export type user_audit_logsUpdateInput = {
    audit_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutUser_audit_logsNestedInput
  }

  export type user_audit_logsUncheckedUpdateInput = {
    audit_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action_type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_audit_logsCreateManyInput = {
    audit_id?: string
    user_id?: string | null
    action_type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: string | null
    event_time?: Date | string
  }

  export type user_audit_logsUpdateManyMutationInput = {
    audit_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_audit_logsUncheckedUpdateManyInput = {
    audit_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action_type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_blocklistCreateInput = {
    block_id?: string
    reason: string
    blocked_at?: Date | string
    users?: usersCreateNestedOneWithoutUser_blocklistInput
  }

  export type user_blocklistUncheckedCreateInput = {
    block_id?: string
    user_id?: string | null
    reason: string
    blocked_at?: Date | string
  }

  export type user_blocklistUpdateInput = {
    block_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    blocked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutUser_blocklistNestedInput
  }

  export type user_blocklistUncheckedUpdateInput = {
    block_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    blocked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_blocklistCreateManyInput = {
    block_id?: string
    user_id?: string | null
    reason: string
    blocked_at?: Date | string
  }

  export type user_blocklistUpdateManyMutationInput = {
    block_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    blocked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_blocklistUncheckedUpdateManyInput = {
    block_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    blocked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_certificatesCreateInput = {
    public_key: string
    certificate?: string | null
    created_at?: Date | string
    users: usersCreateNestedOneWithoutUser_certificatesInput
  }

  export type user_certificatesUncheckedCreateInput = {
    user_id: string
    public_key: string
    certificate?: string | null
    created_at?: Date | string
  }

  export type user_certificatesUpdateInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_certificatesNestedInput
  }

  export type user_certificatesUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_certificatesCreateManyInput = {
    user_id: string
    public_key: string
    certificate?: string | null
    created_at?: Date | string
  }

  export type user_certificatesUpdateManyMutationInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_certificatesUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_profileCreateInput = {
    username: string
    display_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    website?: string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
    dob?: Date | string | null
    country?: string | null
    banner_url?: string | null
    users: usersCreateNestedOneWithoutUser_profileInput
  }

  export type user_profileUncheckedCreateInput = {
    user_id: string
    username: string
    display_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    website?: string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
    dob?: Date | string | null
    country?: string | null
    banner_url?: string | null
  }

  export type user_profileUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutUser_profileNestedInput
  }

  export type user_profileUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profileCreateManyInput = {
    user_id: string
    username: string
    display_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    website?: string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
    dob?: Date | string | null
    country?: string | null
    banner_url?: string | null
  }

  export type user_profileUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profileUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_securityCreateInput = {
    failed_attempts?: number | null
    last_failed_login?: Date | string | null
    otp_code?: string | null
    otp_expires_at?: Date | string | null
    recovery_codes?: user_securityCreaterecovery_codesInput | string[]
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutUser_securityInput
  }

  export type user_securityUncheckedCreateInput = {
    user_id: string
    failed_attempts?: number | null
    last_failed_login?: Date | string | null
    otp_code?: string | null
    otp_expires_at?: Date | string | null
    recovery_codes?: user_securityCreaterecovery_codesInput | string[]
    updated_at?: Date | string
  }

  export type user_securityUpdateInput = {
    failed_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_failed_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recovery_codes?: user_securityUpdaterecovery_codesInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_securityNestedInput
  }

  export type user_securityUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    failed_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_failed_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recovery_codes?: user_securityUpdaterecovery_codesInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_securityCreateManyInput = {
    user_id: string
    failed_attempts?: number | null
    last_failed_login?: Date | string | null
    otp_code?: string | null
    otp_expires_at?: Date | string | null
    recovery_codes?: user_securityCreaterecovery_codesInput | string[]
    updated_at?: Date | string
  }

  export type user_securityUpdateManyMutationInput = {
    failed_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_failed_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recovery_codes?: user_securityUpdaterecovery_codesInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_securityUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    failed_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_failed_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recovery_codes?: user_securityUpdaterecovery_codesInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_sessionsCreateInput = {
    session_id?: string
    token: string
    created_at?: Date | string
    is_revoked?: boolean | null
    secret?: string | null
    users: usersCreateNestedOneWithoutUser_sessionsInput
  }

  export type user_sessionsUncheckedCreateInput = {
    session_id?: string
    user_id: string
    token: string
    created_at?: Date | string
    is_revoked?: boolean | null
    secret?: string | null
  }

  export type user_sessionsUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutUser_sessionsNestedInput
  }

  export type user_sessionsUncheckedUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_sessionsCreateManyInput = {
    session_id?: string
    user_id: string
    token: string
    created_at?: Date | string
    is_revoked?: boolean | null
    secret?: string | null
  }

  export type user_sessionsUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_sessionsUncheckedUpdateManyInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_aboutCountOrderByAggregateInput = {
    about_id?: SortOrder
    user_id?: SortOrder
    about?: SortOrder
    goals?: SortOrder
    skills?: SortOrder
  }

  export type user_aboutMaxOrderByAggregateInput = {
    about_id?: SortOrder
    user_id?: SortOrder
    about?: SortOrder
    goals?: SortOrder
  }

  export type user_aboutMinOrderByAggregateInput = {
    about_id?: SortOrder
    user_id?: SortOrder
    about?: SortOrder
    goals?: SortOrder
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

  export type user_analyticsCountOrderByAggregateInput = {
    user_id?: SortOrder
    posts_count?: SortOrder
    likes_received?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    last_login?: SortOrder
    activity_score?: SortOrder
  }

  export type user_analyticsAvgOrderByAggregateInput = {
    posts_count?: SortOrder
    likes_received?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    activity_score?: SortOrder
  }

  export type user_analyticsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    posts_count?: SortOrder
    likes_received?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    last_login?: SortOrder
    activity_score?: SortOrder
  }

  export type user_analyticsMinOrderByAggregateInput = {
    user_id?: SortOrder
    posts_count?: SortOrder
    likes_received?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    last_login?: SortOrder
    activity_score?: SortOrder
  }

  export type user_analyticsSumOrderByAggregateInput = {
    posts_count?: SortOrder
    likes_received?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    activity_score?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type user_audit_logsCountOrderByAggregateInput = {
    audit_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    details?: SortOrder
    performed_by?: SortOrder
    event_time?: SortOrder
  }

  export type user_audit_logsMaxOrderByAggregateInput = {
    audit_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    performed_by?: SortOrder
    event_time?: SortOrder
  }

  export type user_audit_logsMinOrderByAggregateInput = {
    audit_id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    performed_by?: SortOrder
    event_time?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type user_blocklistCountOrderByAggregateInput = {
    block_id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    blocked_at?: SortOrder
  }

  export type user_blocklistMaxOrderByAggregateInput = {
    block_id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    blocked_at?: SortOrder
  }

  export type user_blocklistMinOrderByAggregateInput = {
    block_id?: SortOrder
    user_id?: SortOrder
    reason?: SortOrder
    blocked_at?: SortOrder
  }

  export type user_certificatesCountOrderByAggregateInput = {
    user_id?: SortOrder
    public_key?: SortOrder
    certificate?: SortOrder
    created_at?: SortOrder
  }

  export type user_certificatesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    public_key?: SortOrder
    certificate?: SortOrder
    created_at?: SortOrder
  }

  export type user_certificatesMinOrderByAggregateInput = {
    user_id?: SortOrder
    public_key?: SortOrder
    certificate?: SortOrder
    created_at?: SortOrder
  }

  export type user_profileCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    avatar_url?: SortOrder
    website?: SortOrder
    social_links?: SortOrder
    updated_at?: SortOrder
    dob?: SortOrder
    country?: SortOrder
    banner_url?: SortOrder
  }

  export type user_profileMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    avatar_url?: SortOrder
    website?: SortOrder
    updated_at?: SortOrder
    dob?: SortOrder
    country?: SortOrder
    banner_url?: SortOrder
  }

  export type user_profileMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    avatar_url?: SortOrder
    website?: SortOrder
    updated_at?: SortOrder
    dob?: SortOrder
    country?: SortOrder
    banner_url?: SortOrder
  }

  export type user_securityCountOrderByAggregateInput = {
    user_id?: SortOrder
    failed_attempts?: SortOrder
    last_failed_login?: SortOrder
    otp_code?: SortOrder
    otp_expires_at?: SortOrder
    recovery_codes?: SortOrder
    updated_at?: SortOrder
  }

  export type user_securityAvgOrderByAggregateInput = {
    failed_attempts?: SortOrder
  }

  export type user_securityMaxOrderByAggregateInput = {
    user_id?: SortOrder
    failed_attempts?: SortOrder
    last_failed_login?: SortOrder
    otp_code?: SortOrder
    otp_expires_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_securityMinOrderByAggregateInput = {
    user_id?: SortOrder
    failed_attempts?: SortOrder
    last_failed_login?: SortOrder
    otp_code?: SortOrder
    otp_expires_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_securitySumOrderByAggregateInput = {
    failed_attempts?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type user_sessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    is_revoked?: SortOrder
    secret?: SortOrder
  }

  export type user_sessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    is_revoked?: SortOrder
    secret?: SortOrder
  }

  export type user_sessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    is_revoked?: SortOrder
    secret?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type User_aboutNullableScalarRelationFilter = {
    is?: user_aboutWhereInput | null
    isNot?: user_aboutWhereInput | null
  }

  export type User_analyticsNullableScalarRelationFilter = {
    is?: user_analyticsWhereInput | null
    isNot?: user_analyticsWhereInput | null
  }

  export type User_audit_logsListRelationFilter = {
    every?: user_audit_logsWhereInput
    some?: user_audit_logsWhereInput
    none?: user_audit_logsWhereInput
  }

  export type User_blocklistNullableScalarRelationFilter = {
    is?: user_blocklistWhereInput | null
    isNot?: user_blocklistWhereInput | null
  }

  export type User_certificatesNullableScalarRelationFilter = {
    is?: user_certificatesWhereInput | null
    isNot?: user_certificatesWhereInput | null
  }

  export type User_profileNullableScalarRelationFilter = {
    is?: user_profileWhereInput | null
    isNot?: user_profileWhereInput | null
  }

  export type User_securityNullableScalarRelationFilter = {
    is?: user_securityWhereInput | null
    isNot?: user_securityWhereInput | null
  }

  export type User_sessionsListRelationFilter = {
    every?: user_sessionsWhereInput
    some?: user_sessionsWhereInput
    none?: user_sessionsWhereInput
  }

  export type user_audit_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    pass_salts?: SortOrder
    user_type?: SortOrder
    intitial_balance?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    intitial_balance?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    pass_salts?: SortOrder
    user_type?: SortOrder
    intitial_balance?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    pass_salts?: SortOrder
    user_type?: SortOrder
    intitial_balance?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    intitial_balance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type user_aboutCreateskillsInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutUser_aboutInput = {
    create?: XOR<usersCreateWithoutUser_aboutInput, usersUncheckedCreateWithoutUser_aboutInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_aboutInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type user_aboutUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneRequiredWithoutUser_aboutNestedInput = {
    create?: XOR<usersCreateWithoutUser_aboutInput, usersUncheckedCreateWithoutUser_aboutInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_aboutInput
    upsert?: usersUpsertWithoutUser_aboutInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_aboutInput, usersUpdateWithoutUser_aboutInput>, usersUncheckedUpdateWithoutUser_aboutInput>
  }

  export type usersCreateNestedOneWithoutUser_analyticsInput = {
    create?: XOR<usersCreateWithoutUser_analyticsInput, usersUncheckedCreateWithoutUser_analyticsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_analyticsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutUser_analyticsNestedInput = {
    create?: XOR<usersCreateWithoutUser_analyticsInput, usersUncheckedCreateWithoutUser_analyticsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_analyticsInput
    upsert?: usersUpsertWithoutUser_analyticsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_analyticsInput, usersUpdateWithoutUser_analyticsInput>, usersUncheckedUpdateWithoutUser_analyticsInput>
  }

  export type usersCreateNestedOneWithoutUser_audit_logsInput = {
    create?: XOR<usersCreateWithoutUser_audit_logsInput, usersUncheckedCreateWithoutUser_audit_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_audit_logsInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneWithoutUser_audit_logsNestedInput = {
    create?: XOR<usersCreateWithoutUser_audit_logsInput, usersUncheckedCreateWithoutUser_audit_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_audit_logsInput
    upsert?: usersUpsertWithoutUser_audit_logsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_audit_logsInput, usersUpdateWithoutUser_audit_logsInput>, usersUncheckedUpdateWithoutUser_audit_logsInput>
  }

  export type usersCreateNestedOneWithoutUser_blocklistInput = {
    create?: XOR<usersCreateWithoutUser_blocklistInput, usersUncheckedCreateWithoutUser_blocklistInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_blocklistInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutUser_blocklistNestedInput = {
    create?: XOR<usersCreateWithoutUser_blocklistInput, usersUncheckedCreateWithoutUser_blocklistInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_blocklistInput
    upsert?: usersUpsertWithoutUser_blocklistInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_blocklistInput, usersUpdateWithoutUser_blocklistInput>, usersUncheckedUpdateWithoutUser_blocklistInput>
  }

  export type usersCreateNestedOneWithoutUser_certificatesInput = {
    create?: XOR<usersCreateWithoutUser_certificatesInput, usersUncheckedCreateWithoutUser_certificatesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_certificatesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_certificatesNestedInput = {
    create?: XOR<usersCreateWithoutUser_certificatesInput, usersUncheckedCreateWithoutUser_certificatesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_certificatesInput
    upsert?: usersUpsertWithoutUser_certificatesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_certificatesInput, usersUpdateWithoutUser_certificatesInput>, usersUncheckedUpdateWithoutUser_certificatesInput>
  }

  export type usersCreateNestedOneWithoutUser_profileInput = {
    create?: XOR<usersCreateWithoutUser_profileInput, usersUncheckedCreateWithoutUser_profileInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_profileInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_profileNestedInput = {
    create?: XOR<usersCreateWithoutUser_profileInput, usersUncheckedCreateWithoutUser_profileInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_profileInput
    upsert?: usersUpsertWithoutUser_profileInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_profileInput, usersUpdateWithoutUser_profileInput>, usersUncheckedUpdateWithoutUser_profileInput>
  }

  export type user_securityCreaterecovery_codesInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutUser_securityInput = {
    create?: XOR<usersCreateWithoutUser_securityInput, usersUncheckedCreateWithoutUser_securityInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_securityInput
    connect?: usersWhereUniqueInput
  }

  export type user_securityUpdaterecovery_codesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneRequiredWithoutUser_securityNestedInput = {
    create?: XOR<usersCreateWithoutUser_securityInput, usersUncheckedCreateWithoutUser_securityInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_securityInput
    upsert?: usersUpsertWithoutUser_securityInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_securityInput, usersUpdateWithoutUser_securityInput>, usersUncheckedUpdateWithoutUser_securityInput>
  }

  export type usersCreateNestedOneWithoutUser_sessionsInput = {
    create?: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_sessionsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneRequiredWithoutUser_sessionsNestedInput = {
    create?: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_sessionsInput
    upsert?: usersUpsertWithoutUser_sessionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_sessionsInput, usersUpdateWithoutUser_sessionsInput>, usersUncheckedUpdateWithoutUser_sessionsInput>
  }

  export type user_aboutCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_aboutCreateWithoutUsersInput, user_aboutUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_aboutCreateOrConnectWithoutUsersInput
    connect?: user_aboutWhereUniqueInput
  }

  export type user_analyticsCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_analyticsCreateWithoutUsersInput, user_analyticsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_analyticsCreateOrConnectWithoutUsersInput
    connect?: user_analyticsWhereUniqueInput
  }

  export type user_audit_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_audit_logsCreateWithoutUsersInput, user_audit_logsUncheckedCreateWithoutUsersInput> | user_audit_logsCreateWithoutUsersInput[] | user_audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_audit_logsCreateOrConnectWithoutUsersInput | user_audit_logsCreateOrConnectWithoutUsersInput[]
    createMany?: user_audit_logsCreateManyUsersInputEnvelope
    connect?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
  }

  export type user_blocklistCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_blocklistCreateWithoutUsersInput, user_blocklistUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_blocklistCreateOrConnectWithoutUsersInput
    connect?: user_blocklistWhereUniqueInput
  }

  export type user_certificatesCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_certificatesCreateWithoutUsersInput, user_certificatesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_certificatesCreateOrConnectWithoutUsersInput
    connect?: user_certificatesWhereUniqueInput
  }

  export type user_profileCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_profileCreateWithoutUsersInput, user_profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profileCreateOrConnectWithoutUsersInput
    connect?: user_profileWhereUniqueInput
  }

  export type user_securityCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_securityCreateWithoutUsersInput, user_securityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_securityCreateOrConnectWithoutUsersInput
    connect?: user_securityWhereUniqueInput
  }

  export type user_sessionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
  }

  export type user_aboutUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_aboutCreateWithoutUsersInput, user_aboutUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_aboutCreateOrConnectWithoutUsersInput
    connect?: user_aboutWhereUniqueInput
  }

  export type user_analyticsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_analyticsCreateWithoutUsersInput, user_analyticsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_analyticsCreateOrConnectWithoutUsersInput
    connect?: user_analyticsWhereUniqueInput
  }

  export type user_audit_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_audit_logsCreateWithoutUsersInput, user_audit_logsUncheckedCreateWithoutUsersInput> | user_audit_logsCreateWithoutUsersInput[] | user_audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_audit_logsCreateOrConnectWithoutUsersInput | user_audit_logsCreateOrConnectWithoutUsersInput[]
    createMany?: user_audit_logsCreateManyUsersInputEnvelope
    connect?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
  }

  export type user_blocklistUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_blocklistCreateWithoutUsersInput, user_blocklistUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_blocklistCreateOrConnectWithoutUsersInput
    connect?: user_blocklistWhereUniqueInput
  }

  export type user_certificatesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_certificatesCreateWithoutUsersInput, user_certificatesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_certificatesCreateOrConnectWithoutUsersInput
    connect?: user_certificatesWhereUniqueInput
  }

  export type user_profileUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_profileCreateWithoutUsersInput, user_profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profileCreateOrConnectWithoutUsersInput
    connect?: user_profileWhereUniqueInput
  }

  export type user_securityUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_securityCreateWithoutUsersInput, user_securityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_securityCreateOrConnectWithoutUsersInput
    connect?: user_securityWhereUniqueInput
  }

  export type user_sessionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_aboutUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_aboutCreateWithoutUsersInput, user_aboutUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_aboutCreateOrConnectWithoutUsersInput
    upsert?: user_aboutUpsertWithoutUsersInput
    disconnect?: user_aboutWhereInput | boolean
    delete?: user_aboutWhereInput | boolean
    connect?: user_aboutWhereUniqueInput
    update?: XOR<XOR<user_aboutUpdateToOneWithWhereWithoutUsersInput, user_aboutUpdateWithoutUsersInput>, user_aboutUncheckedUpdateWithoutUsersInput>
  }

  export type user_analyticsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_analyticsCreateWithoutUsersInput, user_analyticsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_analyticsCreateOrConnectWithoutUsersInput
    upsert?: user_analyticsUpsertWithoutUsersInput
    disconnect?: user_analyticsWhereInput | boolean
    delete?: user_analyticsWhereInput | boolean
    connect?: user_analyticsWhereUniqueInput
    update?: XOR<XOR<user_analyticsUpdateToOneWithWhereWithoutUsersInput, user_analyticsUpdateWithoutUsersInput>, user_analyticsUncheckedUpdateWithoutUsersInput>
  }

  export type user_audit_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_audit_logsCreateWithoutUsersInput, user_audit_logsUncheckedCreateWithoutUsersInput> | user_audit_logsCreateWithoutUsersInput[] | user_audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_audit_logsCreateOrConnectWithoutUsersInput | user_audit_logsCreateOrConnectWithoutUsersInput[]
    upsert?: user_audit_logsUpsertWithWhereUniqueWithoutUsersInput | user_audit_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_audit_logsCreateManyUsersInputEnvelope
    set?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    disconnect?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    delete?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    connect?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    update?: user_audit_logsUpdateWithWhereUniqueWithoutUsersInput | user_audit_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_audit_logsUpdateManyWithWhereWithoutUsersInput | user_audit_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_audit_logsScalarWhereInput | user_audit_logsScalarWhereInput[]
  }

  export type user_blocklistUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_blocklistCreateWithoutUsersInput, user_blocklistUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_blocklistCreateOrConnectWithoutUsersInput
    upsert?: user_blocklistUpsertWithoutUsersInput
    disconnect?: user_blocklistWhereInput | boolean
    delete?: user_blocklistWhereInput | boolean
    connect?: user_blocklistWhereUniqueInput
    update?: XOR<XOR<user_blocklistUpdateToOneWithWhereWithoutUsersInput, user_blocklistUpdateWithoutUsersInput>, user_blocklistUncheckedUpdateWithoutUsersInput>
  }

  export type user_certificatesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_certificatesCreateWithoutUsersInput, user_certificatesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_certificatesCreateOrConnectWithoutUsersInput
    upsert?: user_certificatesUpsertWithoutUsersInput
    disconnect?: user_certificatesWhereInput | boolean
    delete?: user_certificatesWhereInput | boolean
    connect?: user_certificatesWhereUniqueInput
    update?: XOR<XOR<user_certificatesUpdateToOneWithWhereWithoutUsersInput, user_certificatesUpdateWithoutUsersInput>, user_certificatesUncheckedUpdateWithoutUsersInput>
  }

  export type user_profileUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_profileCreateWithoutUsersInput, user_profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profileCreateOrConnectWithoutUsersInput
    upsert?: user_profileUpsertWithoutUsersInput
    disconnect?: user_profileWhereInput | boolean
    delete?: user_profileWhereInput | boolean
    connect?: user_profileWhereUniqueInput
    update?: XOR<XOR<user_profileUpdateToOneWithWhereWithoutUsersInput, user_profileUpdateWithoutUsersInput>, user_profileUncheckedUpdateWithoutUsersInput>
  }

  export type user_securityUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_securityCreateWithoutUsersInput, user_securityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_securityCreateOrConnectWithoutUsersInput
    upsert?: user_securityUpsertWithoutUsersInput
    disconnect?: user_securityWhereInput | boolean
    delete?: user_securityWhereInput | boolean
    connect?: user_securityWhereUniqueInput
    update?: XOR<XOR<user_securityUpdateToOneWithWhereWithoutUsersInput, user_securityUpdateWithoutUsersInput>, user_securityUncheckedUpdateWithoutUsersInput>
  }

  export type user_sessionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: user_sessionsUpsertWithWhereUniqueWithoutUsersInput | user_sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    set?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    disconnect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    delete?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    update?: user_sessionsUpdateWithWhereUniqueWithoutUsersInput | user_sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_sessionsUpdateManyWithWhereWithoutUsersInput | user_sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
  }

  export type user_aboutUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_aboutCreateWithoutUsersInput, user_aboutUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_aboutCreateOrConnectWithoutUsersInput
    upsert?: user_aboutUpsertWithoutUsersInput
    disconnect?: user_aboutWhereInput | boolean
    delete?: user_aboutWhereInput | boolean
    connect?: user_aboutWhereUniqueInput
    update?: XOR<XOR<user_aboutUpdateToOneWithWhereWithoutUsersInput, user_aboutUpdateWithoutUsersInput>, user_aboutUncheckedUpdateWithoutUsersInput>
  }

  export type user_analyticsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_analyticsCreateWithoutUsersInput, user_analyticsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_analyticsCreateOrConnectWithoutUsersInput
    upsert?: user_analyticsUpsertWithoutUsersInput
    disconnect?: user_analyticsWhereInput | boolean
    delete?: user_analyticsWhereInput | boolean
    connect?: user_analyticsWhereUniqueInput
    update?: XOR<XOR<user_analyticsUpdateToOneWithWhereWithoutUsersInput, user_analyticsUpdateWithoutUsersInput>, user_analyticsUncheckedUpdateWithoutUsersInput>
  }

  export type user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_audit_logsCreateWithoutUsersInput, user_audit_logsUncheckedCreateWithoutUsersInput> | user_audit_logsCreateWithoutUsersInput[] | user_audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_audit_logsCreateOrConnectWithoutUsersInput | user_audit_logsCreateOrConnectWithoutUsersInput[]
    upsert?: user_audit_logsUpsertWithWhereUniqueWithoutUsersInput | user_audit_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_audit_logsCreateManyUsersInputEnvelope
    set?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    disconnect?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    delete?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    connect?: user_audit_logsWhereUniqueInput | user_audit_logsWhereUniqueInput[]
    update?: user_audit_logsUpdateWithWhereUniqueWithoutUsersInput | user_audit_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_audit_logsUpdateManyWithWhereWithoutUsersInput | user_audit_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_audit_logsScalarWhereInput | user_audit_logsScalarWhereInput[]
  }

  export type user_blocklistUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_blocklistCreateWithoutUsersInput, user_blocklistUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_blocklistCreateOrConnectWithoutUsersInput
    upsert?: user_blocklistUpsertWithoutUsersInput
    disconnect?: user_blocklistWhereInput | boolean
    delete?: user_blocklistWhereInput | boolean
    connect?: user_blocklistWhereUniqueInput
    update?: XOR<XOR<user_blocklistUpdateToOneWithWhereWithoutUsersInput, user_blocklistUpdateWithoutUsersInput>, user_blocklistUncheckedUpdateWithoutUsersInput>
  }

  export type user_certificatesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_certificatesCreateWithoutUsersInput, user_certificatesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_certificatesCreateOrConnectWithoutUsersInput
    upsert?: user_certificatesUpsertWithoutUsersInput
    disconnect?: user_certificatesWhereInput | boolean
    delete?: user_certificatesWhereInput | boolean
    connect?: user_certificatesWhereUniqueInput
    update?: XOR<XOR<user_certificatesUpdateToOneWithWhereWithoutUsersInput, user_certificatesUpdateWithoutUsersInput>, user_certificatesUncheckedUpdateWithoutUsersInput>
  }

  export type user_profileUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_profileCreateWithoutUsersInput, user_profileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profileCreateOrConnectWithoutUsersInput
    upsert?: user_profileUpsertWithoutUsersInput
    disconnect?: user_profileWhereInput | boolean
    delete?: user_profileWhereInput | boolean
    connect?: user_profileWhereUniqueInput
    update?: XOR<XOR<user_profileUpdateToOneWithWhereWithoutUsersInput, user_profileUpdateWithoutUsersInput>, user_profileUncheckedUpdateWithoutUsersInput>
  }

  export type user_securityUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_securityCreateWithoutUsersInput, user_securityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_securityCreateOrConnectWithoutUsersInput
    upsert?: user_securityUpsertWithoutUsersInput
    disconnect?: user_securityWhereInput | boolean
    delete?: user_securityWhereInput | boolean
    connect?: user_securityWhereUniqueInput
    update?: XOR<XOR<user_securityUpdateToOneWithWhereWithoutUsersInput, user_securityUpdateWithoutUsersInput>, user_securityUncheckedUpdateWithoutUsersInput>
  }

  export type user_sessionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput> | user_sessionsCreateWithoutUsersInput[] | user_sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_sessionsCreateOrConnectWithoutUsersInput | user_sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: user_sessionsUpsertWithWhereUniqueWithoutUsersInput | user_sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_sessionsCreateManyUsersInputEnvelope
    set?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    disconnect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    delete?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    connect?: user_sessionsWhereUniqueInput | user_sessionsWhereUniqueInput[]
    update?: user_sessionsUpdateWithWhereUniqueWithoutUsersInput | user_sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_sessionsUpdateManyWithWhereWithoutUsersInput | user_sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type usersCreateWithoutUser_aboutInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_aboutInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_aboutInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_aboutInput, usersUncheckedCreateWithoutUser_aboutInput>
  }

  export type usersUpsertWithoutUser_aboutInput = {
    update: XOR<usersUpdateWithoutUser_aboutInput, usersUncheckedUpdateWithoutUser_aboutInput>
    create: XOR<usersCreateWithoutUser_aboutInput, usersUncheckedCreateWithoutUser_aboutInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_aboutInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_aboutInput, usersUncheckedUpdateWithoutUser_aboutInput>
  }

  export type usersUpdateWithoutUser_aboutInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_aboutInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_analyticsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_analyticsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_analyticsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_analyticsInput, usersUncheckedCreateWithoutUser_analyticsInput>
  }

  export type usersUpsertWithoutUser_analyticsInput = {
    update: XOR<usersUpdateWithoutUser_analyticsInput, usersUncheckedUpdateWithoutUser_analyticsInput>
    create: XOR<usersCreateWithoutUser_analyticsInput, usersUncheckedCreateWithoutUser_analyticsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_analyticsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_analyticsInput, usersUncheckedUpdateWithoutUser_analyticsInput>
  }

  export type usersUpdateWithoutUser_analyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_analyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_audit_logsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_audit_logsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_audit_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_audit_logsInput, usersUncheckedCreateWithoutUser_audit_logsInput>
  }

  export type usersUpsertWithoutUser_audit_logsInput = {
    update: XOR<usersUpdateWithoutUser_audit_logsInput, usersUncheckedUpdateWithoutUser_audit_logsInput>
    create: XOR<usersCreateWithoutUser_audit_logsInput, usersUncheckedCreateWithoutUser_audit_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_audit_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_audit_logsInput, usersUncheckedUpdateWithoutUser_audit_logsInput>
  }

  export type usersUpdateWithoutUser_audit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_audit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_blocklistInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_blocklistInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_blocklistInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_blocklistInput, usersUncheckedCreateWithoutUser_blocklistInput>
  }

  export type usersUpsertWithoutUser_blocklistInput = {
    update: XOR<usersUpdateWithoutUser_blocklistInput, usersUncheckedUpdateWithoutUser_blocklistInput>
    create: XOR<usersCreateWithoutUser_blocklistInput, usersUncheckedCreateWithoutUser_blocklistInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_blocklistInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_blocklistInput, usersUncheckedUpdateWithoutUser_blocklistInput>
  }

  export type usersUpdateWithoutUser_blocklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_blocklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_certificatesInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_certificatesInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_certificatesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_certificatesInput, usersUncheckedCreateWithoutUser_certificatesInput>
  }

  export type usersUpsertWithoutUser_certificatesInput = {
    update: XOR<usersUpdateWithoutUser_certificatesInput, usersUncheckedUpdateWithoutUser_certificatesInput>
    create: XOR<usersCreateWithoutUser_certificatesInput, usersUncheckedCreateWithoutUser_certificatesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_certificatesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_certificatesInput, usersUncheckedUpdateWithoutUser_certificatesInput>
  }

  export type usersUpdateWithoutUser_certificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_certificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_profileInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_profileInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_profileInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_profileInput, usersUncheckedCreateWithoutUser_profileInput>
  }

  export type usersUpsertWithoutUser_profileInput = {
    update: XOR<usersUpdateWithoutUser_profileInput, usersUncheckedUpdateWithoutUser_profileInput>
    create: XOR<usersCreateWithoutUser_profileInput, usersUncheckedCreateWithoutUser_profileInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_profileInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_profileInput, usersUncheckedUpdateWithoutUser_profileInput>
  }

  export type usersUpdateWithoutUser_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_securityInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_securityInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_sessions?: user_sessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_securityInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_securityInput, usersUncheckedCreateWithoutUser_securityInput>
  }

  export type usersUpsertWithoutUser_securityInput = {
    update: XOR<usersUpdateWithoutUser_securityInput, usersUncheckedUpdateWithoutUser_securityInput>
    create: XOR<usersCreateWithoutUser_securityInput, usersUncheckedCreateWithoutUser_securityInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_securityInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_securityInput, usersUncheckedUpdateWithoutUser_securityInput>
  }

  export type usersUpdateWithoutUser_securityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_securityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_sessions?: user_sessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_sessionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesCreateNestedOneWithoutUsersInput
    user_profile?: user_profileCreateNestedOneWithoutUsersInput
    user_security?: user_securityCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_sessionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean | null
    is_active?: boolean | null
    pass_salts?: string | null
    user_type?: string | null
    intitial_balance?: number
    user_about?: user_aboutUncheckedCreateNestedOneWithoutUsersInput
    user_analytics?: user_analyticsUncheckedCreateNestedOneWithoutUsersInput
    user_audit_logs?: user_audit_logsUncheckedCreateNestedManyWithoutUsersInput
    user_blocklist?: user_blocklistUncheckedCreateNestedOneWithoutUsersInput
    user_certificates?: user_certificatesUncheckedCreateNestedOneWithoutUsersInput
    user_profile?: user_profileUncheckedCreateNestedOneWithoutUsersInput
    user_security?: user_securityUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_sessionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
  }

  export type usersUpsertWithoutUser_sessionsInput = {
    update: XOR<usersUpdateWithoutUser_sessionsInput, usersUncheckedUpdateWithoutUser_sessionsInput>
    create: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_sessionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_sessionsInput, usersUncheckedUpdateWithoutUser_sessionsInput>
  }

  export type usersUpdateWithoutUser_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_sessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pass_salts?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableStringFieldUpdateOperationsInput | string | null
    intitial_balance?: FloatFieldUpdateOperationsInput | number
    user_about?: user_aboutUncheckedUpdateOneWithoutUsersNestedInput
    user_analytics?: user_analyticsUncheckedUpdateOneWithoutUsersNestedInput
    user_audit_logs?: user_audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    user_blocklist?: user_blocklistUncheckedUpdateOneWithoutUsersNestedInput
    user_certificates?: user_certificatesUncheckedUpdateOneWithoutUsersNestedInput
    user_profile?: user_profileUncheckedUpdateOneWithoutUsersNestedInput
    user_security?: user_securityUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type user_aboutCreateWithoutUsersInput = {
    about_id?: string
    about?: string | null
    goals?: string | null
    skills?: user_aboutCreateskillsInput | string[]
  }

  export type user_aboutUncheckedCreateWithoutUsersInput = {
    about_id?: string
    about?: string | null
    goals?: string | null
    skills?: user_aboutCreateskillsInput | string[]
  }

  export type user_aboutCreateOrConnectWithoutUsersInput = {
    where: user_aboutWhereUniqueInput
    create: XOR<user_aboutCreateWithoutUsersInput, user_aboutUncheckedCreateWithoutUsersInput>
  }

  export type user_analyticsCreateWithoutUsersInput = {
    posts_count?: number | null
    likes_received?: number | null
    followers_count?: number | null
    following_count?: number | null
    last_login?: Date | string | null
    activity_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type user_analyticsUncheckedCreateWithoutUsersInput = {
    posts_count?: number | null
    likes_received?: number | null
    followers_count?: number | null
    following_count?: number | null
    last_login?: Date | string | null
    activity_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type user_analyticsCreateOrConnectWithoutUsersInput = {
    where: user_analyticsWhereUniqueInput
    create: XOR<user_analyticsCreateWithoutUsersInput, user_analyticsUncheckedCreateWithoutUsersInput>
  }

  export type user_audit_logsCreateWithoutUsersInput = {
    audit_id?: string
    action_type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: string | null
    event_time?: Date | string
  }

  export type user_audit_logsUncheckedCreateWithoutUsersInput = {
    audit_id?: string
    action_type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: string | null
    event_time?: Date | string
  }

  export type user_audit_logsCreateOrConnectWithoutUsersInput = {
    where: user_audit_logsWhereUniqueInput
    create: XOR<user_audit_logsCreateWithoutUsersInput, user_audit_logsUncheckedCreateWithoutUsersInput>
  }

  export type user_audit_logsCreateManyUsersInputEnvelope = {
    data: user_audit_logsCreateManyUsersInput | user_audit_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_blocklistCreateWithoutUsersInput = {
    block_id?: string
    reason: string
    blocked_at?: Date | string
  }

  export type user_blocklistUncheckedCreateWithoutUsersInput = {
    block_id?: string
    reason: string
    blocked_at?: Date | string
  }

  export type user_blocklistCreateOrConnectWithoutUsersInput = {
    where: user_blocklistWhereUniqueInput
    create: XOR<user_blocklistCreateWithoutUsersInput, user_blocklistUncheckedCreateWithoutUsersInput>
  }

  export type user_certificatesCreateWithoutUsersInput = {
    public_key: string
    certificate?: string | null
    created_at?: Date | string
  }

  export type user_certificatesUncheckedCreateWithoutUsersInput = {
    public_key: string
    certificate?: string | null
    created_at?: Date | string
  }

  export type user_certificatesCreateOrConnectWithoutUsersInput = {
    where: user_certificatesWhereUniqueInput
    create: XOR<user_certificatesCreateWithoutUsersInput, user_certificatesUncheckedCreateWithoutUsersInput>
  }

  export type user_profileCreateWithoutUsersInput = {
    username: string
    display_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    website?: string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
    dob?: Date | string | null
    country?: string | null
    banner_url?: string | null
  }

  export type user_profileUncheckedCreateWithoutUsersInput = {
    username: string
    display_name?: string | null
    bio?: string | null
    avatar_url?: string | null
    website?: string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
    dob?: Date | string | null
    country?: string | null
    banner_url?: string | null
  }

  export type user_profileCreateOrConnectWithoutUsersInput = {
    where: user_profileWhereUniqueInput
    create: XOR<user_profileCreateWithoutUsersInput, user_profileUncheckedCreateWithoutUsersInput>
  }

  export type user_securityCreateWithoutUsersInput = {
    failed_attempts?: number | null
    last_failed_login?: Date | string | null
    otp_code?: string | null
    otp_expires_at?: Date | string | null
    recovery_codes?: user_securityCreaterecovery_codesInput | string[]
    updated_at?: Date | string
  }

  export type user_securityUncheckedCreateWithoutUsersInput = {
    failed_attempts?: number | null
    last_failed_login?: Date | string | null
    otp_code?: string | null
    otp_expires_at?: Date | string | null
    recovery_codes?: user_securityCreaterecovery_codesInput | string[]
    updated_at?: Date | string
  }

  export type user_securityCreateOrConnectWithoutUsersInput = {
    where: user_securityWhereUniqueInput
    create: XOR<user_securityCreateWithoutUsersInput, user_securityUncheckedCreateWithoutUsersInput>
  }

  export type user_sessionsCreateWithoutUsersInput = {
    session_id?: string
    token: string
    created_at?: Date | string
    is_revoked?: boolean | null
    secret?: string | null
  }

  export type user_sessionsUncheckedCreateWithoutUsersInput = {
    session_id?: string
    token: string
    created_at?: Date | string
    is_revoked?: boolean | null
    secret?: string | null
  }

  export type user_sessionsCreateOrConnectWithoutUsersInput = {
    where: user_sessionsWhereUniqueInput
    create: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput>
  }

  export type user_sessionsCreateManyUsersInputEnvelope = {
    data: user_sessionsCreateManyUsersInput | user_sessionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_aboutUpsertWithoutUsersInput = {
    update: XOR<user_aboutUpdateWithoutUsersInput, user_aboutUncheckedUpdateWithoutUsersInput>
    create: XOR<user_aboutCreateWithoutUsersInput, user_aboutUncheckedCreateWithoutUsersInput>
    where?: user_aboutWhereInput
  }

  export type user_aboutUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_aboutWhereInput
    data: XOR<user_aboutUpdateWithoutUsersInput, user_aboutUncheckedUpdateWithoutUsersInput>
  }

  export type user_aboutUpdateWithoutUsersInput = {
    about_id?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: user_aboutUpdateskillsInput | string[]
  }

  export type user_aboutUncheckedUpdateWithoutUsersInput = {
    about_id?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: user_aboutUpdateskillsInput | string[]
  }

  export type user_analyticsUpsertWithoutUsersInput = {
    update: XOR<user_analyticsUpdateWithoutUsersInput, user_analyticsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_analyticsCreateWithoutUsersInput, user_analyticsUncheckedCreateWithoutUsersInput>
    where?: user_analyticsWhereInput
  }

  export type user_analyticsUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_analyticsWhereInput
    data: XOR<user_analyticsUpdateWithoutUsersInput, user_analyticsUncheckedUpdateWithoutUsersInput>
  }

  export type user_analyticsUpdateWithoutUsersInput = {
    posts_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_received?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type user_analyticsUncheckedUpdateWithoutUsersInput = {
    posts_count?: NullableIntFieldUpdateOperationsInput | number | null
    likes_received?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type user_audit_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_audit_logsWhereUniqueInput
    update: XOR<user_audit_logsUpdateWithoutUsersInput, user_audit_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_audit_logsCreateWithoutUsersInput, user_audit_logsUncheckedCreateWithoutUsersInput>
  }

  export type user_audit_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_audit_logsWhereUniqueInput
    data: XOR<user_audit_logsUpdateWithoutUsersInput, user_audit_logsUncheckedUpdateWithoutUsersInput>
  }

  export type user_audit_logsUpdateManyWithWhereWithoutUsersInput = {
    where: user_audit_logsScalarWhereInput
    data: XOR<user_audit_logsUpdateManyMutationInput, user_audit_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_audit_logsScalarWhereInput = {
    AND?: user_audit_logsScalarWhereInput | user_audit_logsScalarWhereInput[]
    OR?: user_audit_logsScalarWhereInput[]
    NOT?: user_audit_logsScalarWhereInput | user_audit_logsScalarWhereInput[]
    audit_id?: UuidFilter<"user_audit_logs"> | string
    user_id?: UuidNullableFilter<"user_audit_logs"> | string | null
    action_type?: StringFilter<"user_audit_logs"> | string
    details?: JsonNullableFilter<"user_audit_logs">
    performed_by?: UuidNullableFilter<"user_audit_logs"> | string | null
    event_time?: DateTimeFilter<"user_audit_logs"> | Date | string
  }

  export type user_blocklistUpsertWithoutUsersInput = {
    update: XOR<user_blocklistUpdateWithoutUsersInput, user_blocklistUncheckedUpdateWithoutUsersInput>
    create: XOR<user_blocklistCreateWithoutUsersInput, user_blocklistUncheckedCreateWithoutUsersInput>
    where?: user_blocklistWhereInput
  }

  export type user_blocklistUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_blocklistWhereInput
    data: XOR<user_blocklistUpdateWithoutUsersInput, user_blocklistUncheckedUpdateWithoutUsersInput>
  }

  export type user_blocklistUpdateWithoutUsersInput = {
    block_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    blocked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_blocklistUncheckedUpdateWithoutUsersInput = {
    block_id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    blocked_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_certificatesUpsertWithoutUsersInput = {
    update: XOR<user_certificatesUpdateWithoutUsersInput, user_certificatesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_certificatesCreateWithoutUsersInput, user_certificatesUncheckedCreateWithoutUsersInput>
    where?: user_certificatesWhereInput
  }

  export type user_certificatesUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_certificatesWhereInput
    data: XOR<user_certificatesUpdateWithoutUsersInput, user_certificatesUncheckedUpdateWithoutUsersInput>
  }

  export type user_certificatesUpdateWithoutUsersInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_certificatesUncheckedUpdateWithoutUsersInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_profileUpsertWithoutUsersInput = {
    update: XOR<user_profileUpdateWithoutUsersInput, user_profileUncheckedUpdateWithoutUsersInput>
    create: XOR<user_profileCreateWithoutUsersInput, user_profileUncheckedCreateWithoutUsersInput>
    where?: user_profileWhereInput
  }

  export type user_profileUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_profileWhereInput
    data: XOR<user_profileUpdateWithoutUsersInput, user_profileUncheckedUpdateWithoutUsersInput>
  }

  export type user_profileUpdateWithoutUsersInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_profileUncheckedUpdateWithoutUsersInput = {
    username?: StringFieldUpdateOperationsInput | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    banner_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_securityUpsertWithoutUsersInput = {
    update: XOR<user_securityUpdateWithoutUsersInput, user_securityUncheckedUpdateWithoutUsersInput>
    create: XOR<user_securityCreateWithoutUsersInput, user_securityUncheckedCreateWithoutUsersInput>
    where?: user_securityWhereInput
  }

  export type user_securityUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_securityWhereInput
    data: XOR<user_securityUpdateWithoutUsersInput, user_securityUncheckedUpdateWithoutUsersInput>
  }

  export type user_securityUpdateWithoutUsersInput = {
    failed_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_failed_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recovery_codes?: user_securityUpdaterecovery_codesInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_securityUncheckedUpdateWithoutUsersInput = {
    failed_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    last_failed_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_code?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recovery_codes?: user_securityUpdaterecovery_codesInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_sessionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_sessionsWhereUniqueInput
    update: XOR<user_sessionsUpdateWithoutUsersInput, user_sessionsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_sessionsCreateWithoutUsersInput, user_sessionsUncheckedCreateWithoutUsersInput>
  }

  export type user_sessionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_sessionsWhereUniqueInput
    data: XOR<user_sessionsUpdateWithoutUsersInput, user_sessionsUncheckedUpdateWithoutUsersInput>
  }

  export type user_sessionsUpdateManyWithWhereWithoutUsersInput = {
    where: user_sessionsScalarWhereInput
    data: XOR<user_sessionsUpdateManyMutationInput, user_sessionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_sessionsScalarWhereInput = {
    AND?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
    OR?: user_sessionsScalarWhereInput[]
    NOT?: user_sessionsScalarWhereInput | user_sessionsScalarWhereInput[]
    session_id?: UuidFilter<"user_sessions"> | string
    user_id?: UuidFilter<"user_sessions"> | string
    token?: StringFilter<"user_sessions"> | string
    created_at?: DateTimeFilter<"user_sessions"> | Date | string
    is_revoked?: BoolNullableFilter<"user_sessions"> | boolean | null
    secret?: StringNullableFilter<"user_sessions"> | string | null
  }

  export type user_audit_logsCreateManyUsersInput = {
    audit_id?: string
    action_type: string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: string | null
    event_time?: Date | string
  }

  export type user_sessionsCreateManyUsersInput = {
    session_id?: string
    token: string
    created_at?: Date | string
    is_revoked?: boolean | null
    secret?: string | null
  }

  export type user_audit_logsUpdateWithoutUsersInput = {
    audit_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_audit_logsUncheckedUpdateWithoutUsersInput = {
    audit_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_audit_logsUncheckedUpdateManyWithoutUsersInput = {
    audit_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    performed_by?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_sessionsUpdateWithoutUsersInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_sessionsUncheckedUpdateWithoutUsersInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_sessionsUncheckedUpdateManyWithoutUsersInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
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