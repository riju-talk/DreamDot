
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
 * Model admin_actions_log
 * 
 */
export type admin_actions_log = $Result.DefaultSelection<Prisma.$admin_actions_logPayload>
/**
 * Model notification_log
 * 
 */
export type notification_log = $Result.DefaultSelection<Prisma.$notification_logPayload>
/**
 * Model system_audit_log
 * 
 */
export type system_audit_log = $Result.DefaultSelection<Prisma.$system_audit_logPayload>
/**
 * Model admin_cred
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type admin_cred = $Result.DefaultSelection<Prisma.$admin_credPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admin_actions_logs
 * const admin_actions_logs = await prisma.admin_actions_log.findMany()
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
   * // Fetch zero or more Admin_actions_logs
   * const admin_actions_logs = await prisma.admin_actions_log.findMany()
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
   * `prisma.admin_actions_log`: Exposes CRUD operations for the **admin_actions_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_actions_logs
    * const admin_actions_logs = await prisma.admin_actions_log.findMany()
    * ```
    */
  get admin_actions_log(): Prisma.admin_actions_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification_log`: Exposes CRUD operations for the **notification_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notification_logs
    * const notification_logs = await prisma.notification_log.findMany()
    * ```
    */
  get notification_log(): Prisma.notification_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.system_audit_log`: Exposes CRUD operations for the **system_audit_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more System_audit_logs
    * const system_audit_logs = await prisma.system_audit_log.findMany()
    * ```
    */
  get system_audit_log(): Prisma.system_audit_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_cred`: Exposes CRUD operations for the **admin_cred** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_creds
    * const admin_creds = await prisma.admin_cred.findMany()
    * ```
    */
  get admin_cred(): Prisma.admin_credDelegate<ExtArgs, ClientOptions>;
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
    admin_actions_log: 'admin_actions_log',
    notification_log: 'notification_log',
    system_audit_log: 'system_audit_log',
    admin_cred: 'admin_cred'
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
      modelProps: "admin_actions_log" | "notification_log" | "system_audit_log" | "admin_cred"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin_actions_log: {
        payload: Prisma.$admin_actions_logPayload<ExtArgs>
        fields: Prisma.admin_actions_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_actions_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_actions_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>
          }
          findFirst: {
            args: Prisma.admin_actions_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_actions_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>
          }
          findMany: {
            args: Prisma.admin_actions_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>[]
          }
          create: {
            args: Prisma.admin_actions_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>
          }
          createMany: {
            args: Prisma.admin_actions_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.admin_actions_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>[]
          }
          delete: {
            args: Prisma.admin_actions_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>
          }
          update: {
            args: Prisma.admin_actions_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>
          }
          deleteMany: {
            args: Prisma.admin_actions_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_actions_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.admin_actions_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>[]
          }
          upsert: {
            args: Prisma.admin_actions_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_actions_logPayload>
          }
          aggregate: {
            args: Prisma.Admin_actions_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_actions_log>
          }
          groupBy: {
            args: Prisma.admin_actions_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_actions_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_actions_logCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_actions_logCountAggregateOutputType> | number
          }
        }
      }
      notification_log: {
        payload: Prisma.$notification_logPayload<ExtArgs>
        fields: Prisma.notification_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notification_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notification_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>
          }
          findFirst: {
            args: Prisma.notification_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notification_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>
          }
          findMany: {
            args: Prisma.notification_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>[]
          }
          create: {
            args: Prisma.notification_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>
          }
          createMany: {
            args: Prisma.notification_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notification_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>[]
          }
          delete: {
            args: Prisma.notification_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>
          }
          update: {
            args: Prisma.notification_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>
          }
          deleteMany: {
            args: Prisma.notification_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notification_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notification_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>[]
          }
          upsert: {
            args: Prisma.notification_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_logPayload>
          }
          aggregate: {
            args: Prisma.Notification_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification_log>
          }
          groupBy: {
            args: Prisma.notification_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Notification_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.notification_logCountArgs<ExtArgs>
            result: $Utils.Optional<Notification_logCountAggregateOutputType> | number
          }
        }
      }
      system_audit_log: {
        payload: Prisma.$system_audit_logPayload<ExtArgs>
        fields: Prisma.system_audit_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.system_audit_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.system_audit_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>
          }
          findFirst: {
            args: Prisma.system_audit_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.system_audit_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>
          }
          findMany: {
            args: Prisma.system_audit_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>[]
          }
          create: {
            args: Prisma.system_audit_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>
          }
          createMany: {
            args: Prisma.system_audit_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.system_audit_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>[]
          }
          delete: {
            args: Prisma.system_audit_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>
          }
          update: {
            args: Prisma.system_audit_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>
          }
          deleteMany: {
            args: Prisma.system_audit_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.system_audit_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.system_audit_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>[]
          }
          upsert: {
            args: Prisma.system_audit_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_audit_logPayload>
          }
          aggregate: {
            args: Prisma.System_audit_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystem_audit_log>
          }
          groupBy: {
            args: Prisma.system_audit_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<System_audit_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.system_audit_logCountArgs<ExtArgs>
            result: $Utils.Optional<System_audit_logCountAggregateOutputType> | number
          }
        }
      }
      admin_cred: {
        payload: Prisma.$admin_credPayload<ExtArgs>
        fields: Prisma.admin_credFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_credFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_credFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>
          }
          findFirst: {
            args: Prisma.admin_credFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_credFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>
          }
          findMany: {
            args: Prisma.admin_credFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>[]
          }
          create: {
            args: Prisma.admin_credCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>
          }
          createMany: {
            args: Prisma.admin_credCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.admin_credCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>[]
          }
          delete: {
            args: Prisma.admin_credDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>
          }
          update: {
            args: Prisma.admin_credUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>
          }
          deleteMany: {
            args: Prisma.admin_credDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_credUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.admin_credUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>[]
          }
          upsert: {
            args: Prisma.admin_credUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_credPayload>
          }
          aggregate: {
            args: Prisma.Admin_credAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_cred>
          }
          groupBy: {
            args: Prisma.admin_credGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_credGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_credCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_credCountAggregateOutputType> | number
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
    admin_actions_log?: admin_actions_logOmit
    notification_log?: notification_logOmit
    system_audit_log?: system_audit_logOmit
    admin_cred?: admin_credOmit
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
   * Models
   */

  /**
   * Model admin_actions_log
   */

  export type AggregateAdmin_actions_log = {
    _count: Admin_actions_logCountAggregateOutputType | null
    _min: Admin_actions_logMinAggregateOutputType | null
    _max: Admin_actions_logMaxAggregateOutputType | null
  }

  export type Admin_actions_logMinAggregateOutputType = {
    id: string | null
    admin_id: string | null
    action_type: string | null
    target_id: string | null
    description: string | null
    created_at: Date | null
  }

  export type Admin_actions_logMaxAggregateOutputType = {
    id: string | null
    admin_id: string | null
    action_type: string | null
    target_id: string | null
    description: string | null
    created_at: Date | null
  }

  export type Admin_actions_logCountAggregateOutputType = {
    id: number
    admin_id: number
    action_type: number
    target_id: number
    description: number
    created_at: number
    _all: number
  }


  export type Admin_actions_logMinAggregateInputType = {
    id?: true
    admin_id?: true
    action_type?: true
    target_id?: true
    description?: true
    created_at?: true
  }

  export type Admin_actions_logMaxAggregateInputType = {
    id?: true
    admin_id?: true
    action_type?: true
    target_id?: true
    description?: true
    created_at?: true
  }

  export type Admin_actions_logCountAggregateInputType = {
    id?: true
    admin_id?: true
    action_type?: true
    target_id?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type Admin_actions_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_actions_log to aggregate.
     */
    where?: admin_actions_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions_logs to fetch.
     */
    orderBy?: admin_actions_logOrderByWithRelationInput | admin_actions_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_actions_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_actions_logs
    **/
    _count?: true | Admin_actions_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_actions_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_actions_logMaxAggregateInputType
  }

  export type GetAdmin_actions_logAggregateType<T extends Admin_actions_logAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_actions_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_actions_log[P]>
      : GetScalarType<T[P], AggregateAdmin_actions_log[P]>
  }




  export type admin_actions_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_actions_logWhereInput
    orderBy?: admin_actions_logOrderByWithAggregationInput | admin_actions_logOrderByWithAggregationInput[]
    by: Admin_actions_logScalarFieldEnum[] | Admin_actions_logScalarFieldEnum
    having?: admin_actions_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_actions_logCountAggregateInputType | true
    _min?: Admin_actions_logMinAggregateInputType
    _max?: Admin_actions_logMaxAggregateInputType
  }

  export type Admin_actions_logGroupByOutputType = {
    id: string
    admin_id: string
    action_type: string
    target_id: string | null
    description: string | null
    created_at: Date
    _count: Admin_actions_logCountAggregateOutputType | null
    _min: Admin_actions_logMinAggregateOutputType | null
    _max: Admin_actions_logMaxAggregateOutputType | null
  }

  type GetAdmin_actions_logGroupByPayload<T extends admin_actions_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_actions_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_actions_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_actions_logGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_actions_logGroupByOutputType[P]>
        }
      >
    >


  export type admin_actions_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action_type?: boolean
    target_id?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin_actions_log"]>

  export type admin_actions_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action_type?: boolean
    target_id?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin_actions_log"]>

  export type admin_actions_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action_type?: boolean
    target_id?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin_actions_log"]>

  export type admin_actions_logSelectScalar = {
    id?: boolean
    admin_id?: boolean
    action_type?: boolean
    target_id?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type admin_actions_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin_id" | "action_type" | "target_id" | "description" | "created_at", ExtArgs["result"]["admin_actions_log"]>

  export type $admin_actions_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_actions_log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      admin_id: string
      action_type: string
      target_id: string | null
      description: string | null
      created_at: Date
    }, ExtArgs["result"]["admin_actions_log"]>
    composites: {}
  }

  type admin_actions_logGetPayload<S extends boolean | null | undefined | admin_actions_logDefaultArgs> = $Result.GetResult<Prisma.$admin_actions_logPayload, S>

  type admin_actions_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_actions_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_actions_logCountAggregateInputType | true
    }

  export interface admin_actions_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_actions_log'], meta: { name: 'admin_actions_log' } }
    /**
     * Find zero or one Admin_actions_log that matches the filter.
     * @param {admin_actions_logFindUniqueArgs} args - Arguments to find a Admin_actions_log
     * @example
     * // Get one Admin_actions_log
     * const admin_actions_log = await prisma.admin_actions_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_actions_logFindUniqueArgs>(args: SelectSubset<T, admin_actions_logFindUniqueArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_actions_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_actions_logFindUniqueOrThrowArgs} args - Arguments to find a Admin_actions_log
     * @example
     * // Get one Admin_actions_log
     * const admin_actions_log = await prisma.admin_actions_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_actions_logFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_actions_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_actions_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actions_logFindFirstArgs} args - Arguments to find a Admin_actions_log
     * @example
     * // Get one Admin_actions_log
     * const admin_actions_log = await prisma.admin_actions_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_actions_logFindFirstArgs>(args?: SelectSubset<T, admin_actions_logFindFirstArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_actions_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actions_logFindFirstOrThrowArgs} args - Arguments to find a Admin_actions_log
     * @example
     * // Get one Admin_actions_log
     * const admin_actions_log = await prisma.admin_actions_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_actions_logFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_actions_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_actions_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actions_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_actions_logs
     * const admin_actions_logs = await prisma.admin_actions_log.findMany()
     * 
     * // Get first 10 Admin_actions_logs
     * const admin_actions_logs = await prisma.admin_actions_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_actions_logWithIdOnly = await prisma.admin_actions_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends admin_actions_logFindManyArgs>(args?: SelectSubset<T, admin_actions_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_actions_log.
     * @param {admin_actions_logCreateArgs} args - Arguments to create a Admin_actions_log.
     * @example
     * // Create one Admin_actions_log
     * const Admin_actions_log = await prisma.admin_actions_log.create({
     *   data: {
     *     // ... data to create a Admin_actions_log
     *   }
     * })
     * 
     */
    create<T extends admin_actions_logCreateArgs>(args: SelectSubset<T, admin_actions_logCreateArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_actions_logs.
     * @param {admin_actions_logCreateManyArgs} args - Arguments to create many Admin_actions_logs.
     * @example
     * // Create many Admin_actions_logs
     * const admin_actions_log = await prisma.admin_actions_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_actions_logCreateManyArgs>(args?: SelectSubset<T, admin_actions_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admin_actions_logs and returns the data saved in the database.
     * @param {admin_actions_logCreateManyAndReturnArgs} args - Arguments to create many Admin_actions_logs.
     * @example
     * // Create many Admin_actions_logs
     * const admin_actions_log = await prisma.admin_actions_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admin_actions_logs and only return the `id`
     * const admin_actions_logWithIdOnly = await prisma.admin_actions_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends admin_actions_logCreateManyAndReturnArgs>(args?: SelectSubset<T, admin_actions_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin_actions_log.
     * @param {admin_actions_logDeleteArgs} args - Arguments to delete one Admin_actions_log.
     * @example
     * // Delete one Admin_actions_log
     * const Admin_actions_log = await prisma.admin_actions_log.delete({
     *   where: {
     *     // ... filter to delete one Admin_actions_log
     *   }
     * })
     * 
     */
    delete<T extends admin_actions_logDeleteArgs>(args: SelectSubset<T, admin_actions_logDeleteArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_actions_log.
     * @param {admin_actions_logUpdateArgs} args - Arguments to update one Admin_actions_log.
     * @example
     * // Update one Admin_actions_log
     * const admin_actions_log = await prisma.admin_actions_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_actions_logUpdateArgs>(args: SelectSubset<T, admin_actions_logUpdateArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_actions_logs.
     * @param {admin_actions_logDeleteManyArgs} args - Arguments to filter Admin_actions_logs to delete.
     * @example
     * // Delete a few Admin_actions_logs
     * const { count } = await prisma.admin_actions_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_actions_logDeleteManyArgs>(args?: SelectSubset<T, admin_actions_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_actions_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actions_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_actions_logs
     * const admin_actions_log = await prisma.admin_actions_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_actions_logUpdateManyArgs>(args: SelectSubset<T, admin_actions_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_actions_logs and returns the data updated in the database.
     * @param {admin_actions_logUpdateManyAndReturnArgs} args - Arguments to update many Admin_actions_logs.
     * @example
     * // Update many Admin_actions_logs
     * const admin_actions_log = await prisma.admin_actions_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admin_actions_logs and only return the `id`
     * const admin_actions_logWithIdOnly = await prisma.admin_actions_log.updateManyAndReturn({
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
    updateManyAndReturn<T extends admin_actions_logUpdateManyAndReturnArgs>(args: SelectSubset<T, admin_actions_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin_actions_log.
     * @param {admin_actions_logUpsertArgs} args - Arguments to update or create a Admin_actions_log.
     * @example
     * // Update or create a Admin_actions_log
     * const admin_actions_log = await prisma.admin_actions_log.upsert({
     *   create: {
     *     // ... data to create a Admin_actions_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_actions_log we want to update
     *   }
     * })
     */
    upsert<T extends admin_actions_logUpsertArgs>(args: SelectSubset<T, admin_actions_logUpsertArgs<ExtArgs>>): Prisma__admin_actions_logClient<$Result.GetResult<Prisma.$admin_actions_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_actions_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actions_logCountArgs} args - Arguments to filter Admin_actions_logs to count.
     * @example
     * // Count the number of Admin_actions_logs
     * const count = await prisma.admin_actions_log.count({
     *   where: {
     *     // ... the filter for the Admin_actions_logs we want to count
     *   }
     * })
    **/
    count<T extends admin_actions_logCountArgs>(
      args?: Subset<T, admin_actions_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_actions_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_actions_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_actions_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_actions_logAggregateArgs>(args: Subset<T, Admin_actions_logAggregateArgs>): Prisma.PrismaPromise<GetAdmin_actions_logAggregateType<T>>

    /**
     * Group by Admin_actions_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_actions_logGroupByArgs} args - Group by arguments.
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
      T extends admin_actions_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_actions_logGroupByArgs['orderBy'] }
        : { orderBy?: admin_actions_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, admin_actions_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_actions_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_actions_log model
   */
  readonly fields: admin_actions_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_actions_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_actions_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the admin_actions_log model
   */ 
  interface admin_actions_logFieldRefs {
    readonly id: FieldRef<"admin_actions_log", 'String'>
    readonly admin_id: FieldRef<"admin_actions_log", 'String'>
    readonly action_type: FieldRef<"admin_actions_log", 'String'>
    readonly target_id: FieldRef<"admin_actions_log", 'String'>
    readonly description: FieldRef<"admin_actions_log", 'String'>
    readonly created_at: FieldRef<"admin_actions_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin_actions_log findUnique
   */
  export type admin_actions_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions_log to fetch.
     */
    where: admin_actions_logWhereUniqueInput
  }

  /**
   * admin_actions_log findUniqueOrThrow
   */
  export type admin_actions_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions_log to fetch.
     */
    where: admin_actions_logWhereUniqueInput
  }

  /**
   * admin_actions_log findFirst
   */
  export type admin_actions_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions_log to fetch.
     */
    where?: admin_actions_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions_logs to fetch.
     */
    orderBy?: admin_actions_logOrderByWithRelationInput | admin_actions_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_actions_logs.
     */
    cursor?: admin_actions_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_actions_logs.
     */
    distinct?: Admin_actions_logScalarFieldEnum | Admin_actions_logScalarFieldEnum[]
  }

  /**
   * admin_actions_log findFirstOrThrow
   */
  export type admin_actions_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions_log to fetch.
     */
    where?: admin_actions_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions_logs to fetch.
     */
    orderBy?: admin_actions_logOrderByWithRelationInput | admin_actions_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_actions_logs.
     */
    cursor?: admin_actions_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_actions_logs.
     */
    distinct?: Admin_actions_logScalarFieldEnum | Admin_actions_logScalarFieldEnum[]
  }

  /**
   * admin_actions_log findMany
   */
  export type admin_actions_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * Filter, which admin_actions_logs to fetch.
     */
    where?: admin_actions_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_actions_logs to fetch.
     */
    orderBy?: admin_actions_logOrderByWithRelationInput | admin_actions_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_actions_logs.
     */
    cursor?: admin_actions_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_actions_logs.
     */
    skip?: number
    distinct?: Admin_actions_logScalarFieldEnum | Admin_actions_logScalarFieldEnum[]
  }

  /**
   * admin_actions_log create
   */
  export type admin_actions_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_actions_log.
     */
    data: XOR<admin_actions_logCreateInput, admin_actions_logUncheckedCreateInput>
  }

  /**
   * admin_actions_log createMany
   */
  export type admin_actions_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_actions_logs.
     */
    data: admin_actions_logCreateManyInput | admin_actions_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_actions_log createManyAndReturn
   */
  export type admin_actions_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * The data used to create many admin_actions_logs.
     */
    data: admin_actions_logCreateManyInput | admin_actions_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_actions_log update
   */
  export type admin_actions_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_actions_log.
     */
    data: XOR<admin_actions_logUpdateInput, admin_actions_logUncheckedUpdateInput>
    /**
     * Choose, which admin_actions_log to update.
     */
    where: admin_actions_logWhereUniqueInput
  }

  /**
   * admin_actions_log updateMany
   */
  export type admin_actions_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_actions_logs.
     */
    data: XOR<admin_actions_logUpdateManyMutationInput, admin_actions_logUncheckedUpdateManyInput>
    /**
     * Filter which admin_actions_logs to update
     */
    where?: admin_actions_logWhereInput
    /**
     * Limit how many admin_actions_logs to update.
     */
    limit?: number
  }

  /**
   * admin_actions_log updateManyAndReturn
   */
  export type admin_actions_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * The data used to update admin_actions_logs.
     */
    data: XOR<admin_actions_logUpdateManyMutationInput, admin_actions_logUncheckedUpdateManyInput>
    /**
     * Filter which admin_actions_logs to update
     */
    where?: admin_actions_logWhereInput
    /**
     * Limit how many admin_actions_logs to update.
     */
    limit?: number
  }

  /**
   * admin_actions_log upsert
   */
  export type admin_actions_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_actions_log to update in case it exists.
     */
    where: admin_actions_logWhereUniqueInput
    /**
     * In case the admin_actions_log found by the `where` argument doesn't exist, create a new admin_actions_log with this data.
     */
    create: XOR<admin_actions_logCreateInput, admin_actions_logUncheckedCreateInput>
    /**
     * In case the admin_actions_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_actions_logUpdateInput, admin_actions_logUncheckedUpdateInput>
  }

  /**
   * admin_actions_log delete
   */
  export type admin_actions_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
    /**
     * Filter which admin_actions_log to delete.
     */
    where: admin_actions_logWhereUniqueInput
  }

  /**
   * admin_actions_log deleteMany
   */
  export type admin_actions_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_actions_logs to delete
     */
    where?: admin_actions_logWhereInput
    /**
     * Limit how many admin_actions_logs to delete.
     */
    limit?: number
  }

  /**
   * admin_actions_log without action
   */
  export type admin_actions_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_actions_log
     */
    select?: admin_actions_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_actions_log
     */
    omit?: admin_actions_logOmit<ExtArgs> | null
  }


  /**
   * Model notification_log
   */

  export type AggregateNotification_log = {
    _count: Notification_logCountAggregateOutputType | null
    _min: Notification_logMinAggregateOutputType | null
    _max: Notification_logMaxAggregateOutputType | null
  }

  export type Notification_logMinAggregateOutputType = {
    id: string | null
    recipient_id: string | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type Notification_logMaxAggregateOutputType = {
    id: string | null
    recipient_id: string | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type Notification_logCountAggregateOutputType = {
    id: number
    recipient_id: number
    message: number
    is_read: number
    created_at: number
    _all: number
  }


  export type Notification_logMinAggregateInputType = {
    id?: true
    recipient_id?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type Notification_logMaxAggregateInputType = {
    id?: true
    recipient_id?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type Notification_logCountAggregateInputType = {
    id?: true
    recipient_id?: true
    message?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type Notification_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification_log to aggregate.
     */
    where?: notification_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_logs to fetch.
     */
    orderBy?: notification_logOrderByWithRelationInput | notification_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notification_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notification_logs
    **/
    _count?: true | Notification_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Notification_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Notification_logMaxAggregateInputType
  }

  export type GetNotification_logAggregateType<T extends Notification_logAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification_log[P]>
      : GetScalarType<T[P], AggregateNotification_log[P]>
  }




  export type notification_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notification_logWhereInput
    orderBy?: notification_logOrderByWithAggregationInput | notification_logOrderByWithAggregationInput[]
    by: Notification_logScalarFieldEnum[] | Notification_logScalarFieldEnum
    having?: notification_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Notification_logCountAggregateInputType | true
    _min?: Notification_logMinAggregateInputType
    _max?: Notification_logMaxAggregateInputType
  }

  export type Notification_logGroupByOutputType = {
    id: string
    recipient_id: string
    message: string
    is_read: boolean | null
    created_at: Date
    _count: Notification_logCountAggregateOutputType | null
    _min: Notification_logMinAggregateOutputType | null
    _max: Notification_logMaxAggregateOutputType | null
  }

  type GetNotification_logGroupByPayload<T extends notification_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Notification_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Notification_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Notification_logGroupByOutputType[P]>
            : GetScalarType<T[P], Notification_logGroupByOutputType[P]>
        }
      >
    >


  export type notification_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification_log"]>

  export type notification_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification_log"]>

  export type notification_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification_log"]>

  export type notification_logSelectScalar = {
    id?: boolean
    recipient_id?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type notification_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipient_id" | "message" | "is_read" | "created_at", ExtArgs["result"]["notification_log"]>

  export type $notification_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification_log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipient_id: string
      message: string
      is_read: boolean | null
      created_at: Date
    }, ExtArgs["result"]["notification_log"]>
    composites: {}
  }

  type notification_logGetPayload<S extends boolean | null | undefined | notification_logDefaultArgs> = $Result.GetResult<Prisma.$notification_logPayload, S>

  type notification_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notification_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Notification_logCountAggregateInputType | true
    }

  export interface notification_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification_log'], meta: { name: 'notification_log' } }
    /**
     * Find zero or one Notification_log that matches the filter.
     * @param {notification_logFindUniqueArgs} args - Arguments to find a Notification_log
     * @example
     * // Get one Notification_log
     * const notification_log = await prisma.notification_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notification_logFindUniqueArgs>(args: SelectSubset<T, notification_logFindUniqueArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notification_logFindUniqueOrThrowArgs} args - Arguments to find a Notification_log
     * @example
     * // Get one Notification_log
     * const notification_log = await prisma.notification_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notification_logFindUniqueOrThrowArgs>(args: SelectSubset<T, notification_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_logFindFirstArgs} args - Arguments to find a Notification_log
     * @example
     * // Get one Notification_log
     * const notification_log = await prisma.notification_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notification_logFindFirstArgs>(args?: SelectSubset<T, notification_logFindFirstArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_logFindFirstOrThrowArgs} args - Arguments to find a Notification_log
     * @example
     * // Get one Notification_log
     * const notification_log = await prisma.notification_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notification_logFindFirstOrThrowArgs>(args?: SelectSubset<T, notification_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notification_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notification_logs
     * const notification_logs = await prisma.notification_log.findMany()
     * 
     * // Get first 10 Notification_logs
     * const notification_logs = await prisma.notification_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notification_logWithIdOnly = await prisma.notification_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notification_logFindManyArgs>(args?: SelectSubset<T, notification_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification_log.
     * @param {notification_logCreateArgs} args - Arguments to create a Notification_log.
     * @example
     * // Create one Notification_log
     * const Notification_log = await prisma.notification_log.create({
     *   data: {
     *     // ... data to create a Notification_log
     *   }
     * })
     * 
     */
    create<T extends notification_logCreateArgs>(args: SelectSubset<T, notification_logCreateArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notification_logs.
     * @param {notification_logCreateManyArgs} args - Arguments to create many Notification_logs.
     * @example
     * // Create many Notification_logs
     * const notification_log = await prisma.notification_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notification_logCreateManyArgs>(args?: SelectSubset<T, notification_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notification_logs and returns the data saved in the database.
     * @param {notification_logCreateManyAndReturnArgs} args - Arguments to create many Notification_logs.
     * @example
     * // Create many Notification_logs
     * const notification_log = await prisma.notification_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notification_logs and only return the `id`
     * const notification_logWithIdOnly = await prisma.notification_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notification_logCreateManyAndReturnArgs>(args?: SelectSubset<T, notification_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification_log.
     * @param {notification_logDeleteArgs} args - Arguments to delete one Notification_log.
     * @example
     * // Delete one Notification_log
     * const Notification_log = await prisma.notification_log.delete({
     *   where: {
     *     // ... filter to delete one Notification_log
     *   }
     * })
     * 
     */
    delete<T extends notification_logDeleteArgs>(args: SelectSubset<T, notification_logDeleteArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification_log.
     * @param {notification_logUpdateArgs} args - Arguments to update one Notification_log.
     * @example
     * // Update one Notification_log
     * const notification_log = await prisma.notification_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notification_logUpdateArgs>(args: SelectSubset<T, notification_logUpdateArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notification_logs.
     * @param {notification_logDeleteManyArgs} args - Arguments to filter Notification_logs to delete.
     * @example
     * // Delete a few Notification_logs
     * const { count } = await prisma.notification_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notification_logDeleteManyArgs>(args?: SelectSubset<T, notification_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notification_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notification_logs
     * const notification_log = await prisma.notification_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notification_logUpdateManyArgs>(args: SelectSubset<T, notification_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notification_logs and returns the data updated in the database.
     * @param {notification_logUpdateManyAndReturnArgs} args - Arguments to update many Notification_logs.
     * @example
     * // Update many Notification_logs
     * const notification_log = await prisma.notification_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notification_logs and only return the `id`
     * const notification_logWithIdOnly = await prisma.notification_log.updateManyAndReturn({
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
    updateManyAndReturn<T extends notification_logUpdateManyAndReturnArgs>(args: SelectSubset<T, notification_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification_log.
     * @param {notification_logUpsertArgs} args - Arguments to update or create a Notification_log.
     * @example
     * // Update or create a Notification_log
     * const notification_log = await prisma.notification_log.upsert({
     *   create: {
     *     // ... data to create a Notification_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification_log we want to update
     *   }
     * })
     */
    upsert<T extends notification_logUpsertArgs>(args: SelectSubset<T, notification_logUpsertArgs<ExtArgs>>): Prisma__notification_logClient<$Result.GetResult<Prisma.$notification_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notification_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_logCountArgs} args - Arguments to filter Notification_logs to count.
     * @example
     * // Count the number of Notification_logs
     * const count = await prisma.notification_log.count({
     *   where: {
     *     // ... the filter for the Notification_logs we want to count
     *   }
     * })
    **/
    count<T extends notification_logCountArgs>(
      args?: Subset<T, notification_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Notification_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Notification_logAggregateArgs>(args: Subset<T, Notification_logAggregateArgs>): Prisma.PrismaPromise<GetNotification_logAggregateType<T>>

    /**
     * Group by Notification_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_logGroupByArgs} args - Group by arguments.
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
      T extends notification_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notification_logGroupByArgs['orderBy'] }
        : { orderBy?: notification_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notification_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotification_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification_log model
   */
  readonly fields: notification_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notification_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the notification_log model
   */ 
  interface notification_logFieldRefs {
    readonly id: FieldRef<"notification_log", 'String'>
    readonly recipient_id: FieldRef<"notification_log", 'String'>
    readonly message: FieldRef<"notification_log", 'String'>
    readonly is_read: FieldRef<"notification_log", 'Boolean'>
    readonly created_at: FieldRef<"notification_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification_log findUnique
   */
  export type notification_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * Filter, which notification_log to fetch.
     */
    where: notification_logWhereUniqueInput
  }

  /**
   * notification_log findUniqueOrThrow
   */
  export type notification_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * Filter, which notification_log to fetch.
     */
    where: notification_logWhereUniqueInput
  }

  /**
   * notification_log findFirst
   */
  export type notification_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * Filter, which notification_log to fetch.
     */
    where?: notification_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_logs to fetch.
     */
    orderBy?: notification_logOrderByWithRelationInput | notification_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notification_logs.
     */
    cursor?: notification_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notification_logs.
     */
    distinct?: Notification_logScalarFieldEnum | Notification_logScalarFieldEnum[]
  }

  /**
   * notification_log findFirstOrThrow
   */
  export type notification_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * Filter, which notification_log to fetch.
     */
    where?: notification_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_logs to fetch.
     */
    orderBy?: notification_logOrderByWithRelationInput | notification_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notification_logs.
     */
    cursor?: notification_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notification_logs.
     */
    distinct?: Notification_logScalarFieldEnum | Notification_logScalarFieldEnum[]
  }

  /**
   * notification_log findMany
   */
  export type notification_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * Filter, which notification_logs to fetch.
     */
    where?: notification_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_logs to fetch.
     */
    orderBy?: notification_logOrderByWithRelationInput | notification_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notification_logs.
     */
    cursor?: notification_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_logs.
     */
    skip?: number
    distinct?: Notification_logScalarFieldEnum | Notification_logScalarFieldEnum[]
  }

  /**
   * notification_log create
   */
  export type notification_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * The data needed to create a notification_log.
     */
    data: XOR<notification_logCreateInput, notification_logUncheckedCreateInput>
  }

  /**
   * notification_log createMany
   */
  export type notification_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notification_logs.
     */
    data: notification_logCreateManyInput | notification_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification_log createManyAndReturn
   */
  export type notification_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * The data used to create many notification_logs.
     */
    data: notification_logCreateManyInput | notification_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification_log update
   */
  export type notification_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * The data needed to update a notification_log.
     */
    data: XOR<notification_logUpdateInput, notification_logUncheckedUpdateInput>
    /**
     * Choose, which notification_log to update.
     */
    where: notification_logWhereUniqueInput
  }

  /**
   * notification_log updateMany
   */
  export type notification_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notification_logs.
     */
    data: XOR<notification_logUpdateManyMutationInput, notification_logUncheckedUpdateManyInput>
    /**
     * Filter which notification_logs to update
     */
    where?: notification_logWhereInput
    /**
     * Limit how many notification_logs to update.
     */
    limit?: number
  }

  /**
   * notification_log updateManyAndReturn
   */
  export type notification_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * The data used to update notification_logs.
     */
    data: XOR<notification_logUpdateManyMutationInput, notification_logUncheckedUpdateManyInput>
    /**
     * Filter which notification_logs to update
     */
    where?: notification_logWhereInput
    /**
     * Limit how many notification_logs to update.
     */
    limit?: number
  }

  /**
   * notification_log upsert
   */
  export type notification_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * The filter to search for the notification_log to update in case it exists.
     */
    where: notification_logWhereUniqueInput
    /**
     * In case the notification_log found by the `where` argument doesn't exist, create a new notification_log with this data.
     */
    create: XOR<notification_logCreateInput, notification_logUncheckedCreateInput>
    /**
     * In case the notification_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notification_logUpdateInput, notification_logUncheckedUpdateInput>
  }

  /**
   * notification_log delete
   */
  export type notification_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
    /**
     * Filter which notification_log to delete.
     */
    where: notification_logWhereUniqueInput
  }

  /**
   * notification_log deleteMany
   */
  export type notification_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification_logs to delete
     */
    where?: notification_logWhereInput
    /**
     * Limit how many notification_logs to delete.
     */
    limit?: number
  }

  /**
   * notification_log without action
   */
  export type notification_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_log
     */
    select?: notification_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_log
     */
    omit?: notification_logOmit<ExtArgs> | null
  }


  /**
   * Model system_audit_log
   */

  export type AggregateSystem_audit_log = {
    _count: System_audit_logCountAggregateOutputType | null
    _min: System_audit_logMinAggregateOutputType | null
    _max: System_audit_logMaxAggregateOutputType | null
  }

  export type System_audit_logMinAggregateOutputType = {
    id: string | null
    event_type: string | null
    details: string | null
    created_at: Date | null
  }

  export type System_audit_logMaxAggregateOutputType = {
    id: string | null
    event_type: string | null
    details: string | null
    created_at: Date | null
  }

  export type System_audit_logCountAggregateOutputType = {
    id: number
    event_type: number
    details: number
    created_at: number
    _all: number
  }


  export type System_audit_logMinAggregateInputType = {
    id?: true
    event_type?: true
    details?: true
    created_at?: true
  }

  export type System_audit_logMaxAggregateInputType = {
    id?: true
    event_type?: true
    details?: true
    created_at?: true
  }

  export type System_audit_logCountAggregateInputType = {
    id?: true
    event_type?: true
    details?: true
    created_at?: true
    _all?: true
  }

  export type System_audit_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which system_audit_log to aggregate.
     */
    where?: system_audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_audit_logs to fetch.
     */
    orderBy?: system_audit_logOrderByWithRelationInput | system_audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: system_audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned system_audit_logs
    **/
    _count?: true | System_audit_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: System_audit_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: System_audit_logMaxAggregateInputType
  }

  export type GetSystem_audit_logAggregateType<T extends System_audit_logAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem_audit_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem_audit_log[P]>
      : GetScalarType<T[P], AggregateSystem_audit_log[P]>
  }




  export type system_audit_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: system_audit_logWhereInput
    orderBy?: system_audit_logOrderByWithAggregationInput | system_audit_logOrderByWithAggregationInput[]
    by: System_audit_logScalarFieldEnum[] | System_audit_logScalarFieldEnum
    having?: system_audit_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: System_audit_logCountAggregateInputType | true
    _min?: System_audit_logMinAggregateInputType
    _max?: System_audit_logMaxAggregateInputType
  }

  export type System_audit_logGroupByOutputType = {
    id: string
    event_type: string
    details: string | null
    created_at: Date
    _count: System_audit_logCountAggregateOutputType | null
    _min: System_audit_logMinAggregateOutputType | null
    _max: System_audit_logMaxAggregateOutputType | null
  }

  type GetSystem_audit_logGroupByPayload<T extends system_audit_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<System_audit_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof System_audit_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], System_audit_logGroupByOutputType[P]>
            : GetScalarType<T[P], System_audit_logGroupByOutputType[P]>
        }
      >
    >


  export type system_audit_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    details?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["system_audit_log"]>

  export type system_audit_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    details?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["system_audit_log"]>

  export type system_audit_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    details?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["system_audit_log"]>

  export type system_audit_logSelectScalar = {
    id?: boolean
    event_type?: boolean
    details?: boolean
    created_at?: boolean
  }

  export type system_audit_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_type" | "details" | "created_at", ExtArgs["result"]["system_audit_log"]>

  export type $system_audit_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "system_audit_log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_type: string
      details: string | null
      created_at: Date
    }, ExtArgs["result"]["system_audit_log"]>
    composites: {}
  }

  type system_audit_logGetPayload<S extends boolean | null | undefined | system_audit_logDefaultArgs> = $Result.GetResult<Prisma.$system_audit_logPayload, S>

  type system_audit_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<system_audit_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: System_audit_logCountAggregateInputType | true
    }

  export interface system_audit_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['system_audit_log'], meta: { name: 'system_audit_log' } }
    /**
     * Find zero or one System_audit_log that matches the filter.
     * @param {system_audit_logFindUniqueArgs} args - Arguments to find a System_audit_log
     * @example
     * // Get one System_audit_log
     * const system_audit_log = await prisma.system_audit_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends system_audit_logFindUniqueArgs>(args: SelectSubset<T, system_audit_logFindUniqueArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one System_audit_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {system_audit_logFindUniqueOrThrowArgs} args - Arguments to find a System_audit_log
     * @example
     * // Get one System_audit_log
     * const system_audit_log = await prisma.system_audit_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends system_audit_logFindUniqueOrThrowArgs>(args: SelectSubset<T, system_audit_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System_audit_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_audit_logFindFirstArgs} args - Arguments to find a System_audit_log
     * @example
     * // Get one System_audit_log
     * const system_audit_log = await prisma.system_audit_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends system_audit_logFindFirstArgs>(args?: SelectSubset<T, system_audit_logFindFirstArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System_audit_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_audit_logFindFirstOrThrowArgs} args - Arguments to find a System_audit_log
     * @example
     * // Get one System_audit_log
     * const system_audit_log = await prisma.system_audit_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends system_audit_logFindFirstOrThrowArgs>(args?: SelectSubset<T, system_audit_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more System_audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_audit_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all System_audit_logs
     * const system_audit_logs = await prisma.system_audit_log.findMany()
     * 
     * // Get first 10 System_audit_logs
     * const system_audit_logs = await prisma.system_audit_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const system_audit_logWithIdOnly = await prisma.system_audit_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends system_audit_logFindManyArgs>(args?: SelectSubset<T, system_audit_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a System_audit_log.
     * @param {system_audit_logCreateArgs} args - Arguments to create a System_audit_log.
     * @example
     * // Create one System_audit_log
     * const System_audit_log = await prisma.system_audit_log.create({
     *   data: {
     *     // ... data to create a System_audit_log
     *   }
     * })
     * 
     */
    create<T extends system_audit_logCreateArgs>(args: SelectSubset<T, system_audit_logCreateArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many System_audit_logs.
     * @param {system_audit_logCreateManyArgs} args - Arguments to create many System_audit_logs.
     * @example
     * // Create many System_audit_logs
     * const system_audit_log = await prisma.system_audit_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends system_audit_logCreateManyArgs>(args?: SelectSubset<T, system_audit_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many System_audit_logs and returns the data saved in the database.
     * @param {system_audit_logCreateManyAndReturnArgs} args - Arguments to create many System_audit_logs.
     * @example
     * // Create many System_audit_logs
     * const system_audit_log = await prisma.system_audit_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many System_audit_logs and only return the `id`
     * const system_audit_logWithIdOnly = await prisma.system_audit_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends system_audit_logCreateManyAndReturnArgs>(args?: SelectSubset<T, system_audit_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a System_audit_log.
     * @param {system_audit_logDeleteArgs} args - Arguments to delete one System_audit_log.
     * @example
     * // Delete one System_audit_log
     * const System_audit_log = await prisma.system_audit_log.delete({
     *   where: {
     *     // ... filter to delete one System_audit_log
     *   }
     * })
     * 
     */
    delete<T extends system_audit_logDeleteArgs>(args: SelectSubset<T, system_audit_logDeleteArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one System_audit_log.
     * @param {system_audit_logUpdateArgs} args - Arguments to update one System_audit_log.
     * @example
     * // Update one System_audit_log
     * const system_audit_log = await prisma.system_audit_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends system_audit_logUpdateArgs>(args: SelectSubset<T, system_audit_logUpdateArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more System_audit_logs.
     * @param {system_audit_logDeleteManyArgs} args - Arguments to filter System_audit_logs to delete.
     * @example
     * // Delete a few System_audit_logs
     * const { count } = await prisma.system_audit_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends system_audit_logDeleteManyArgs>(args?: SelectSubset<T, system_audit_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more System_audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_audit_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many System_audit_logs
     * const system_audit_log = await prisma.system_audit_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends system_audit_logUpdateManyArgs>(args: SelectSubset<T, system_audit_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more System_audit_logs and returns the data updated in the database.
     * @param {system_audit_logUpdateManyAndReturnArgs} args - Arguments to update many System_audit_logs.
     * @example
     * // Update many System_audit_logs
     * const system_audit_log = await prisma.system_audit_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more System_audit_logs and only return the `id`
     * const system_audit_logWithIdOnly = await prisma.system_audit_log.updateManyAndReturn({
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
    updateManyAndReturn<T extends system_audit_logUpdateManyAndReturnArgs>(args: SelectSubset<T, system_audit_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one System_audit_log.
     * @param {system_audit_logUpsertArgs} args - Arguments to update or create a System_audit_log.
     * @example
     * // Update or create a System_audit_log
     * const system_audit_log = await prisma.system_audit_log.upsert({
     *   create: {
     *     // ... data to create a System_audit_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System_audit_log we want to update
     *   }
     * })
     */
    upsert<T extends system_audit_logUpsertArgs>(args: SelectSubset<T, system_audit_logUpsertArgs<ExtArgs>>): Prisma__system_audit_logClient<$Result.GetResult<Prisma.$system_audit_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of System_audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_audit_logCountArgs} args - Arguments to filter System_audit_logs to count.
     * @example
     * // Count the number of System_audit_logs
     * const count = await prisma.system_audit_log.count({
     *   where: {
     *     // ... the filter for the System_audit_logs we want to count
     *   }
     * })
    **/
    count<T extends system_audit_logCountArgs>(
      args?: Subset<T, system_audit_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], System_audit_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System_audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_audit_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends System_audit_logAggregateArgs>(args: Subset<T, System_audit_logAggregateArgs>): Prisma.PrismaPromise<GetSystem_audit_logAggregateType<T>>

    /**
     * Group by System_audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_audit_logGroupByArgs} args - Group by arguments.
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
      T extends system_audit_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: system_audit_logGroupByArgs['orderBy'] }
        : { orderBy?: system_audit_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, system_audit_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystem_audit_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the system_audit_log model
   */
  readonly fields: system_audit_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for system_audit_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__system_audit_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the system_audit_log model
   */ 
  interface system_audit_logFieldRefs {
    readonly id: FieldRef<"system_audit_log", 'String'>
    readonly event_type: FieldRef<"system_audit_log", 'String'>
    readonly details: FieldRef<"system_audit_log", 'String'>
    readonly created_at: FieldRef<"system_audit_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * system_audit_log findUnique
   */
  export type system_audit_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * Filter, which system_audit_log to fetch.
     */
    where: system_audit_logWhereUniqueInput
  }

  /**
   * system_audit_log findUniqueOrThrow
   */
  export type system_audit_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * Filter, which system_audit_log to fetch.
     */
    where: system_audit_logWhereUniqueInput
  }

  /**
   * system_audit_log findFirst
   */
  export type system_audit_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * Filter, which system_audit_log to fetch.
     */
    where?: system_audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_audit_logs to fetch.
     */
    orderBy?: system_audit_logOrderByWithRelationInput | system_audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_audit_logs.
     */
    cursor?: system_audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_audit_logs.
     */
    distinct?: System_audit_logScalarFieldEnum | System_audit_logScalarFieldEnum[]
  }

  /**
   * system_audit_log findFirstOrThrow
   */
  export type system_audit_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * Filter, which system_audit_log to fetch.
     */
    where?: system_audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_audit_logs to fetch.
     */
    orderBy?: system_audit_logOrderByWithRelationInput | system_audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_audit_logs.
     */
    cursor?: system_audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_audit_logs.
     */
    distinct?: System_audit_logScalarFieldEnum | System_audit_logScalarFieldEnum[]
  }

  /**
   * system_audit_log findMany
   */
  export type system_audit_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * Filter, which system_audit_logs to fetch.
     */
    where?: system_audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_audit_logs to fetch.
     */
    orderBy?: system_audit_logOrderByWithRelationInput | system_audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing system_audit_logs.
     */
    cursor?: system_audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_audit_logs.
     */
    skip?: number
    distinct?: System_audit_logScalarFieldEnum | System_audit_logScalarFieldEnum[]
  }

  /**
   * system_audit_log create
   */
  export type system_audit_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * The data needed to create a system_audit_log.
     */
    data: XOR<system_audit_logCreateInput, system_audit_logUncheckedCreateInput>
  }

  /**
   * system_audit_log createMany
   */
  export type system_audit_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many system_audit_logs.
     */
    data: system_audit_logCreateManyInput | system_audit_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * system_audit_log createManyAndReturn
   */
  export type system_audit_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * The data used to create many system_audit_logs.
     */
    data: system_audit_logCreateManyInput | system_audit_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * system_audit_log update
   */
  export type system_audit_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * The data needed to update a system_audit_log.
     */
    data: XOR<system_audit_logUpdateInput, system_audit_logUncheckedUpdateInput>
    /**
     * Choose, which system_audit_log to update.
     */
    where: system_audit_logWhereUniqueInput
  }

  /**
   * system_audit_log updateMany
   */
  export type system_audit_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update system_audit_logs.
     */
    data: XOR<system_audit_logUpdateManyMutationInput, system_audit_logUncheckedUpdateManyInput>
    /**
     * Filter which system_audit_logs to update
     */
    where?: system_audit_logWhereInput
    /**
     * Limit how many system_audit_logs to update.
     */
    limit?: number
  }

  /**
   * system_audit_log updateManyAndReturn
   */
  export type system_audit_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * The data used to update system_audit_logs.
     */
    data: XOR<system_audit_logUpdateManyMutationInput, system_audit_logUncheckedUpdateManyInput>
    /**
     * Filter which system_audit_logs to update
     */
    where?: system_audit_logWhereInput
    /**
     * Limit how many system_audit_logs to update.
     */
    limit?: number
  }

  /**
   * system_audit_log upsert
   */
  export type system_audit_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * The filter to search for the system_audit_log to update in case it exists.
     */
    where: system_audit_logWhereUniqueInput
    /**
     * In case the system_audit_log found by the `where` argument doesn't exist, create a new system_audit_log with this data.
     */
    create: XOR<system_audit_logCreateInput, system_audit_logUncheckedCreateInput>
    /**
     * In case the system_audit_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<system_audit_logUpdateInput, system_audit_logUncheckedUpdateInput>
  }

  /**
   * system_audit_log delete
   */
  export type system_audit_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
    /**
     * Filter which system_audit_log to delete.
     */
    where: system_audit_logWhereUniqueInput
  }

  /**
   * system_audit_log deleteMany
   */
  export type system_audit_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which system_audit_logs to delete
     */
    where?: system_audit_logWhereInput
    /**
     * Limit how many system_audit_logs to delete.
     */
    limit?: number
  }

  /**
   * system_audit_log without action
   */
  export type system_audit_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_audit_log
     */
    select?: system_audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_audit_log
     */
    omit?: system_audit_logOmit<ExtArgs> | null
  }


  /**
   * Model admin_cred
   */

  export type AggregateAdmin_cred = {
    _count: Admin_credCountAggregateOutputType | null
    _avg: Admin_credAvgAggregateOutputType | null
    _sum: Admin_credSumAggregateOutputType | null
    _min: Admin_credMinAggregateOutputType | null
    _max: Admin_credMaxAggregateOutputType | null
  }

  export type Admin_credAvgAggregateOutputType = {
    c_id: number | null
  }

  export type Admin_credSumAggregateOutputType = {
    c_id: bigint | null
  }

  export type Admin_credMinAggregateOutputType = {
    c_id: bigint | null
    created_at: Date | null
    name: string | null
    password: string | null
    hash: string | null
  }

  export type Admin_credMaxAggregateOutputType = {
    c_id: bigint | null
    created_at: Date | null
    name: string | null
    password: string | null
    hash: string | null
  }

  export type Admin_credCountAggregateOutputType = {
    c_id: number
    created_at: number
    name: number
    password: number
    hash: number
    _all: number
  }


  export type Admin_credAvgAggregateInputType = {
    c_id?: true
  }

  export type Admin_credSumAggregateInputType = {
    c_id?: true
  }

  export type Admin_credMinAggregateInputType = {
    c_id?: true
    created_at?: true
    name?: true
    password?: true
    hash?: true
  }

  export type Admin_credMaxAggregateInputType = {
    c_id?: true
    created_at?: true
    name?: true
    password?: true
    hash?: true
  }

  export type Admin_credCountAggregateInputType = {
    c_id?: true
    created_at?: true
    name?: true
    password?: true
    hash?: true
    _all?: true
  }

  export type Admin_credAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_cred to aggregate.
     */
    where?: admin_credWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_creds to fetch.
     */
    orderBy?: admin_credOrderByWithRelationInput | admin_credOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_credWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_creds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_creds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_creds
    **/
    _count?: true | Admin_credCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_credAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_credSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_credMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_credMaxAggregateInputType
  }

  export type GetAdmin_credAggregateType<T extends Admin_credAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_cred]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_cred[P]>
      : GetScalarType<T[P], AggregateAdmin_cred[P]>
  }




  export type admin_credGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_credWhereInput
    orderBy?: admin_credOrderByWithAggregationInput | admin_credOrderByWithAggregationInput[]
    by: Admin_credScalarFieldEnum[] | Admin_credScalarFieldEnum
    having?: admin_credScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_credCountAggregateInputType | true
    _avg?: Admin_credAvgAggregateInputType
    _sum?: Admin_credSumAggregateInputType
    _min?: Admin_credMinAggregateInputType
    _max?: Admin_credMaxAggregateInputType
  }

  export type Admin_credGroupByOutputType = {
    c_id: bigint
    created_at: Date
    name: string | null
    password: string | null
    hash: string
    _count: Admin_credCountAggregateOutputType | null
    _avg: Admin_credAvgAggregateOutputType | null
    _sum: Admin_credSumAggregateOutputType | null
    _min: Admin_credMinAggregateOutputType | null
    _max: Admin_credMaxAggregateOutputType | null
  }

  type GetAdmin_credGroupByPayload<T extends admin_credGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_credGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_credGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_credGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_credGroupByOutputType[P]>
        }
      >
    >


  export type admin_credSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    c_id?: boolean
    created_at?: boolean
    name?: boolean
    password?: boolean
    hash?: boolean
  }, ExtArgs["result"]["admin_cred"]>

  export type admin_credSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    c_id?: boolean
    created_at?: boolean
    name?: boolean
    password?: boolean
    hash?: boolean
  }, ExtArgs["result"]["admin_cred"]>

  export type admin_credSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    c_id?: boolean
    created_at?: boolean
    name?: boolean
    password?: boolean
    hash?: boolean
  }, ExtArgs["result"]["admin_cred"]>

  export type admin_credSelectScalar = {
    c_id?: boolean
    created_at?: boolean
    name?: boolean
    password?: boolean
    hash?: boolean
  }

  export type admin_credOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"c_id" | "created_at" | "name" | "password" | "hash", ExtArgs["result"]["admin_cred"]>

  export type $admin_credPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_cred"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      c_id: bigint
      created_at: Date
      name: string | null
      password: string | null
      hash: string
    }, ExtArgs["result"]["admin_cred"]>
    composites: {}
  }

  type admin_credGetPayload<S extends boolean | null | undefined | admin_credDefaultArgs> = $Result.GetResult<Prisma.$admin_credPayload, S>

  type admin_credCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_credFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_credCountAggregateInputType | true
    }

  export interface admin_credDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_cred'], meta: { name: 'admin_cred' } }
    /**
     * Find zero or one Admin_cred that matches the filter.
     * @param {admin_credFindUniqueArgs} args - Arguments to find a Admin_cred
     * @example
     * // Get one Admin_cred
     * const admin_cred = await prisma.admin_cred.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_credFindUniqueArgs>(args: SelectSubset<T, admin_credFindUniqueArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_cred that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_credFindUniqueOrThrowArgs} args - Arguments to find a Admin_cred
     * @example
     * // Get one Admin_cred
     * const admin_cred = await prisma.admin_cred.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_credFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_credFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_cred that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_credFindFirstArgs} args - Arguments to find a Admin_cred
     * @example
     * // Get one Admin_cred
     * const admin_cred = await prisma.admin_cred.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_credFindFirstArgs>(args?: SelectSubset<T, admin_credFindFirstArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_cred that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_credFindFirstOrThrowArgs} args - Arguments to find a Admin_cred
     * @example
     * // Get one Admin_cred
     * const admin_cred = await prisma.admin_cred.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_credFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_credFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_creds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_credFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_creds
     * const admin_creds = await prisma.admin_cred.findMany()
     * 
     * // Get first 10 Admin_creds
     * const admin_creds = await prisma.admin_cred.findMany({ take: 10 })
     * 
     * // Only select the `c_id`
     * const admin_credWithC_idOnly = await prisma.admin_cred.findMany({ select: { c_id: true } })
     * 
     */
    findMany<T extends admin_credFindManyArgs>(args?: SelectSubset<T, admin_credFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_cred.
     * @param {admin_credCreateArgs} args - Arguments to create a Admin_cred.
     * @example
     * // Create one Admin_cred
     * const Admin_cred = await prisma.admin_cred.create({
     *   data: {
     *     // ... data to create a Admin_cred
     *   }
     * })
     * 
     */
    create<T extends admin_credCreateArgs>(args: SelectSubset<T, admin_credCreateArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_creds.
     * @param {admin_credCreateManyArgs} args - Arguments to create many Admin_creds.
     * @example
     * // Create many Admin_creds
     * const admin_cred = await prisma.admin_cred.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_credCreateManyArgs>(args?: SelectSubset<T, admin_credCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admin_creds and returns the data saved in the database.
     * @param {admin_credCreateManyAndReturnArgs} args - Arguments to create many Admin_creds.
     * @example
     * // Create many Admin_creds
     * const admin_cred = await prisma.admin_cred.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admin_creds and only return the `c_id`
     * const admin_credWithC_idOnly = await prisma.admin_cred.createManyAndReturn({
     *   select: { c_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends admin_credCreateManyAndReturnArgs>(args?: SelectSubset<T, admin_credCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin_cred.
     * @param {admin_credDeleteArgs} args - Arguments to delete one Admin_cred.
     * @example
     * // Delete one Admin_cred
     * const Admin_cred = await prisma.admin_cred.delete({
     *   where: {
     *     // ... filter to delete one Admin_cred
     *   }
     * })
     * 
     */
    delete<T extends admin_credDeleteArgs>(args: SelectSubset<T, admin_credDeleteArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_cred.
     * @param {admin_credUpdateArgs} args - Arguments to update one Admin_cred.
     * @example
     * // Update one Admin_cred
     * const admin_cred = await prisma.admin_cred.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_credUpdateArgs>(args: SelectSubset<T, admin_credUpdateArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_creds.
     * @param {admin_credDeleteManyArgs} args - Arguments to filter Admin_creds to delete.
     * @example
     * // Delete a few Admin_creds
     * const { count } = await prisma.admin_cred.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_credDeleteManyArgs>(args?: SelectSubset<T, admin_credDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_creds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_credUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_creds
     * const admin_cred = await prisma.admin_cred.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_credUpdateManyArgs>(args: SelectSubset<T, admin_credUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_creds and returns the data updated in the database.
     * @param {admin_credUpdateManyAndReturnArgs} args - Arguments to update many Admin_creds.
     * @example
     * // Update many Admin_creds
     * const admin_cred = await prisma.admin_cred.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admin_creds and only return the `c_id`
     * const admin_credWithC_idOnly = await prisma.admin_cred.updateManyAndReturn({
     *   select: { c_id: true },
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
    updateManyAndReturn<T extends admin_credUpdateManyAndReturnArgs>(args: SelectSubset<T, admin_credUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin_cred.
     * @param {admin_credUpsertArgs} args - Arguments to update or create a Admin_cred.
     * @example
     * // Update or create a Admin_cred
     * const admin_cred = await prisma.admin_cred.upsert({
     *   create: {
     *     // ... data to create a Admin_cred
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_cred we want to update
     *   }
     * })
     */
    upsert<T extends admin_credUpsertArgs>(args: SelectSubset<T, admin_credUpsertArgs<ExtArgs>>): Prisma__admin_credClient<$Result.GetResult<Prisma.$admin_credPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_creds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_credCountArgs} args - Arguments to filter Admin_creds to count.
     * @example
     * // Count the number of Admin_creds
     * const count = await prisma.admin_cred.count({
     *   where: {
     *     // ... the filter for the Admin_creds we want to count
     *   }
     * })
    **/
    count<T extends admin_credCountArgs>(
      args?: Subset<T, admin_credCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_credCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_cred.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_credAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_credAggregateArgs>(args: Subset<T, Admin_credAggregateArgs>): Prisma.PrismaPromise<GetAdmin_credAggregateType<T>>

    /**
     * Group by Admin_cred.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_credGroupByArgs} args - Group by arguments.
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
      T extends admin_credGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_credGroupByArgs['orderBy'] }
        : { orderBy?: admin_credGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, admin_credGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_credGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_cred model
   */
  readonly fields: admin_credFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_cred.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_credClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the admin_cred model
   */ 
  interface admin_credFieldRefs {
    readonly c_id: FieldRef<"admin_cred", 'BigInt'>
    readonly created_at: FieldRef<"admin_cred", 'DateTime'>
    readonly name: FieldRef<"admin_cred", 'String'>
    readonly password: FieldRef<"admin_cred", 'String'>
    readonly hash: FieldRef<"admin_cred", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin_cred findUnique
   */
  export type admin_credFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * Filter, which admin_cred to fetch.
     */
    where: admin_credWhereUniqueInput
  }

  /**
   * admin_cred findUniqueOrThrow
   */
  export type admin_credFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * Filter, which admin_cred to fetch.
     */
    where: admin_credWhereUniqueInput
  }

  /**
   * admin_cred findFirst
   */
  export type admin_credFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * Filter, which admin_cred to fetch.
     */
    where?: admin_credWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_creds to fetch.
     */
    orderBy?: admin_credOrderByWithRelationInput | admin_credOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_creds.
     */
    cursor?: admin_credWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_creds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_creds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_creds.
     */
    distinct?: Admin_credScalarFieldEnum | Admin_credScalarFieldEnum[]
  }

  /**
   * admin_cred findFirstOrThrow
   */
  export type admin_credFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * Filter, which admin_cred to fetch.
     */
    where?: admin_credWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_creds to fetch.
     */
    orderBy?: admin_credOrderByWithRelationInput | admin_credOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_creds.
     */
    cursor?: admin_credWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_creds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_creds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_creds.
     */
    distinct?: Admin_credScalarFieldEnum | Admin_credScalarFieldEnum[]
  }

  /**
   * admin_cred findMany
   */
  export type admin_credFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * Filter, which admin_creds to fetch.
     */
    where?: admin_credWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_creds to fetch.
     */
    orderBy?: admin_credOrderByWithRelationInput | admin_credOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_creds.
     */
    cursor?: admin_credWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_creds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_creds.
     */
    skip?: number
    distinct?: Admin_credScalarFieldEnum | Admin_credScalarFieldEnum[]
  }

  /**
   * admin_cred create
   */
  export type admin_credCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_cred.
     */
    data: XOR<admin_credCreateInput, admin_credUncheckedCreateInput>
  }

  /**
   * admin_cred createMany
   */
  export type admin_credCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_creds.
     */
    data: admin_credCreateManyInput | admin_credCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_cred createManyAndReturn
   */
  export type admin_credCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * The data used to create many admin_creds.
     */
    data: admin_credCreateManyInput | admin_credCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_cred update
   */
  export type admin_credUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_cred.
     */
    data: XOR<admin_credUpdateInput, admin_credUncheckedUpdateInput>
    /**
     * Choose, which admin_cred to update.
     */
    where: admin_credWhereUniqueInput
  }

  /**
   * admin_cred updateMany
   */
  export type admin_credUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_creds.
     */
    data: XOR<admin_credUpdateManyMutationInput, admin_credUncheckedUpdateManyInput>
    /**
     * Filter which admin_creds to update
     */
    where?: admin_credWhereInput
    /**
     * Limit how many admin_creds to update.
     */
    limit?: number
  }

  /**
   * admin_cred updateManyAndReturn
   */
  export type admin_credUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * The data used to update admin_creds.
     */
    data: XOR<admin_credUpdateManyMutationInput, admin_credUncheckedUpdateManyInput>
    /**
     * Filter which admin_creds to update
     */
    where?: admin_credWhereInput
    /**
     * Limit how many admin_creds to update.
     */
    limit?: number
  }

  /**
   * admin_cred upsert
   */
  export type admin_credUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_cred to update in case it exists.
     */
    where: admin_credWhereUniqueInput
    /**
     * In case the admin_cred found by the `where` argument doesn't exist, create a new admin_cred with this data.
     */
    create: XOR<admin_credCreateInput, admin_credUncheckedCreateInput>
    /**
     * In case the admin_cred was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_credUpdateInput, admin_credUncheckedUpdateInput>
  }

  /**
   * admin_cred delete
   */
  export type admin_credDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
    /**
     * Filter which admin_cred to delete.
     */
    where: admin_credWhereUniqueInput
  }

  /**
   * admin_cred deleteMany
   */
  export type admin_credDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_creds to delete
     */
    where?: admin_credWhereInput
    /**
     * Limit how many admin_creds to delete.
     */
    limit?: number
  }

  /**
   * admin_cred without action
   */
  export type admin_credDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_cred
     */
    select?: admin_credSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_cred
     */
    omit?: admin_credOmit<ExtArgs> | null
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


  export const Admin_actions_logScalarFieldEnum: {
    id: 'id',
    admin_id: 'admin_id',
    action_type: 'action_type',
    target_id: 'target_id',
    description: 'description',
    created_at: 'created_at'
  };

  export type Admin_actions_logScalarFieldEnum = (typeof Admin_actions_logScalarFieldEnum)[keyof typeof Admin_actions_logScalarFieldEnum]


  export const Notification_logScalarFieldEnum: {
    id: 'id',
    recipient_id: 'recipient_id',
    message: 'message',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type Notification_logScalarFieldEnum = (typeof Notification_logScalarFieldEnum)[keyof typeof Notification_logScalarFieldEnum]


  export const System_audit_logScalarFieldEnum: {
    id: 'id',
    event_type: 'event_type',
    details: 'details',
    created_at: 'created_at'
  };

  export type System_audit_logScalarFieldEnum = (typeof System_audit_logScalarFieldEnum)[keyof typeof System_audit_logScalarFieldEnum]


  export const Admin_credScalarFieldEnum: {
    c_id: 'c_id',
    created_at: 'created_at',
    name: 'name',
    password: 'password',
    hash: 'hash'
  };

  export type Admin_credScalarFieldEnum = (typeof Admin_credScalarFieldEnum)[keyof typeof Admin_credScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type admin_actions_logWhereInput = {
    AND?: admin_actions_logWhereInput | admin_actions_logWhereInput[]
    OR?: admin_actions_logWhereInput[]
    NOT?: admin_actions_logWhereInput | admin_actions_logWhereInput[]
    id?: UuidFilter<"admin_actions_log"> | string
    admin_id?: UuidFilter<"admin_actions_log"> | string
    action_type?: StringFilter<"admin_actions_log"> | string
    target_id?: UuidNullableFilter<"admin_actions_log"> | string | null
    description?: StringNullableFilter<"admin_actions_log"> | string | null
    created_at?: DateTimeFilter<"admin_actions_log"> | Date | string
  }

  export type admin_actions_logOrderByWithRelationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action_type?: SortOrder
    target_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type admin_actions_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: admin_actions_logWhereInput | admin_actions_logWhereInput[]
    OR?: admin_actions_logWhereInput[]
    NOT?: admin_actions_logWhereInput | admin_actions_logWhereInput[]
    admin_id?: UuidFilter<"admin_actions_log"> | string
    action_type?: StringFilter<"admin_actions_log"> | string
    target_id?: UuidNullableFilter<"admin_actions_log"> | string | null
    description?: StringNullableFilter<"admin_actions_log"> | string | null
    created_at?: DateTimeFilter<"admin_actions_log"> | Date | string
  }, "id">

  export type admin_actions_logOrderByWithAggregationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action_type?: SortOrder
    target_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: admin_actions_logCountOrderByAggregateInput
    _max?: admin_actions_logMaxOrderByAggregateInput
    _min?: admin_actions_logMinOrderByAggregateInput
  }

  export type admin_actions_logScalarWhereWithAggregatesInput = {
    AND?: admin_actions_logScalarWhereWithAggregatesInput | admin_actions_logScalarWhereWithAggregatesInput[]
    OR?: admin_actions_logScalarWhereWithAggregatesInput[]
    NOT?: admin_actions_logScalarWhereWithAggregatesInput | admin_actions_logScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"admin_actions_log"> | string
    admin_id?: UuidWithAggregatesFilter<"admin_actions_log"> | string
    action_type?: StringWithAggregatesFilter<"admin_actions_log"> | string
    target_id?: UuidNullableWithAggregatesFilter<"admin_actions_log"> | string | null
    description?: StringNullableWithAggregatesFilter<"admin_actions_log"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"admin_actions_log"> | Date | string
  }

  export type notification_logWhereInput = {
    AND?: notification_logWhereInput | notification_logWhereInput[]
    OR?: notification_logWhereInput[]
    NOT?: notification_logWhereInput | notification_logWhereInput[]
    id?: UuidFilter<"notification_log"> | string
    recipient_id?: UuidFilter<"notification_log"> | string
    message?: StringFilter<"notification_log"> | string
    is_read?: BoolNullableFilter<"notification_log"> | boolean | null
    created_at?: DateTimeFilter<"notification_log"> | Date | string
  }

  export type notification_logOrderByWithRelationInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type notification_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notification_logWhereInput | notification_logWhereInput[]
    OR?: notification_logWhereInput[]
    NOT?: notification_logWhereInput | notification_logWhereInput[]
    recipient_id?: UuidFilter<"notification_log"> | string
    message?: StringFilter<"notification_log"> | string
    is_read?: BoolNullableFilter<"notification_log"> | boolean | null
    created_at?: DateTimeFilter<"notification_log"> | Date | string
  }, "id">

  export type notification_logOrderByWithAggregationInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: notification_logCountOrderByAggregateInput
    _max?: notification_logMaxOrderByAggregateInput
    _min?: notification_logMinOrderByAggregateInput
  }

  export type notification_logScalarWhereWithAggregatesInput = {
    AND?: notification_logScalarWhereWithAggregatesInput | notification_logScalarWhereWithAggregatesInput[]
    OR?: notification_logScalarWhereWithAggregatesInput[]
    NOT?: notification_logScalarWhereWithAggregatesInput | notification_logScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"notification_log"> | string
    recipient_id?: UuidWithAggregatesFilter<"notification_log"> | string
    message?: StringWithAggregatesFilter<"notification_log"> | string
    is_read?: BoolNullableWithAggregatesFilter<"notification_log"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"notification_log"> | Date | string
  }

  export type system_audit_logWhereInput = {
    AND?: system_audit_logWhereInput | system_audit_logWhereInput[]
    OR?: system_audit_logWhereInput[]
    NOT?: system_audit_logWhereInput | system_audit_logWhereInput[]
    id?: UuidFilter<"system_audit_log"> | string
    event_type?: StringFilter<"system_audit_log"> | string
    details?: StringNullableFilter<"system_audit_log"> | string | null
    created_at?: DateTimeFilter<"system_audit_log"> | Date | string
  }

  export type system_audit_logOrderByWithRelationInput = {
    id?: SortOrder
    event_type?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type system_audit_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: system_audit_logWhereInput | system_audit_logWhereInput[]
    OR?: system_audit_logWhereInput[]
    NOT?: system_audit_logWhereInput | system_audit_logWhereInput[]
    event_type?: StringFilter<"system_audit_log"> | string
    details?: StringNullableFilter<"system_audit_log"> | string | null
    created_at?: DateTimeFilter<"system_audit_log"> | Date | string
  }, "id">

  export type system_audit_logOrderByWithAggregationInput = {
    id?: SortOrder
    event_type?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: system_audit_logCountOrderByAggregateInput
    _max?: system_audit_logMaxOrderByAggregateInput
    _min?: system_audit_logMinOrderByAggregateInput
  }

  export type system_audit_logScalarWhereWithAggregatesInput = {
    AND?: system_audit_logScalarWhereWithAggregatesInput | system_audit_logScalarWhereWithAggregatesInput[]
    OR?: system_audit_logScalarWhereWithAggregatesInput[]
    NOT?: system_audit_logScalarWhereWithAggregatesInput | system_audit_logScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"system_audit_log"> | string
    event_type?: StringWithAggregatesFilter<"system_audit_log"> | string
    details?: StringNullableWithAggregatesFilter<"system_audit_log"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"system_audit_log"> | Date | string
  }

  export type admin_credWhereInput = {
    AND?: admin_credWhereInput | admin_credWhereInput[]
    OR?: admin_credWhereInput[]
    NOT?: admin_credWhereInput | admin_credWhereInput[]
    c_id?: BigIntFilter<"admin_cred"> | bigint | number
    created_at?: DateTimeFilter<"admin_cred"> | Date | string
    name?: StringNullableFilter<"admin_cred"> | string | null
    password?: StringNullableFilter<"admin_cred"> | string | null
    hash?: StringFilter<"admin_cred"> | string
  }

  export type admin_credOrderByWithRelationInput = {
    c_id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    hash?: SortOrder
  }

  export type admin_credWhereUniqueInput = Prisma.AtLeast<{
    c_id?: bigint | number
    AND?: admin_credWhereInput | admin_credWhereInput[]
    OR?: admin_credWhereInput[]
    NOT?: admin_credWhereInput | admin_credWhereInput[]
    created_at?: DateTimeFilter<"admin_cred"> | Date | string
    name?: StringNullableFilter<"admin_cred"> | string | null
    password?: StringNullableFilter<"admin_cred"> | string | null
    hash?: StringFilter<"admin_cred"> | string
  }, "c_id">

  export type admin_credOrderByWithAggregationInput = {
    c_id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    hash?: SortOrder
    _count?: admin_credCountOrderByAggregateInput
    _avg?: admin_credAvgOrderByAggregateInput
    _max?: admin_credMaxOrderByAggregateInput
    _min?: admin_credMinOrderByAggregateInput
    _sum?: admin_credSumOrderByAggregateInput
  }

  export type admin_credScalarWhereWithAggregatesInput = {
    AND?: admin_credScalarWhereWithAggregatesInput | admin_credScalarWhereWithAggregatesInput[]
    OR?: admin_credScalarWhereWithAggregatesInput[]
    NOT?: admin_credScalarWhereWithAggregatesInput | admin_credScalarWhereWithAggregatesInput[]
    c_id?: BigIntWithAggregatesFilter<"admin_cred"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"admin_cred"> | Date | string
    name?: StringNullableWithAggregatesFilter<"admin_cred"> | string | null
    password?: StringNullableWithAggregatesFilter<"admin_cred"> | string | null
    hash?: StringWithAggregatesFilter<"admin_cred"> | string
  }

  export type admin_actions_logCreateInput = {
    id?: string
    admin_id: string
    action_type: string
    target_id?: string | null
    description?: string | null
    created_at?: Date | string
  }

  export type admin_actions_logUncheckedCreateInput = {
    id?: string
    admin_id: string
    action_type: string
    target_id?: string | null
    description?: string | null
    created_at?: Date | string
  }

  export type admin_actions_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_actions_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_actions_logCreateManyInput = {
    id?: string
    admin_id: string
    action_type: string
    target_id?: string | null
    description?: string | null
    created_at?: Date | string
  }

  export type admin_actions_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_actions_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    action_type?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notification_logCreateInput = {
    id?: string
    recipient_id: string
    message: string
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type notification_logUncheckedCreateInput = {
    id?: string
    recipient_id: string
    message: string
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type notification_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notification_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notification_logCreateManyInput = {
    id?: string
    recipient_id: string
    message: string
    is_read?: boolean | null
    created_at?: Date | string
  }

  export type notification_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notification_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type system_audit_logCreateInput = {
    id?: string
    event_type: string
    details?: string | null
    created_at?: Date | string
  }

  export type system_audit_logUncheckedCreateInput = {
    id?: string
    event_type: string
    details?: string | null
    created_at?: Date | string
  }

  export type system_audit_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type system_audit_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type system_audit_logCreateManyInput = {
    id?: string
    event_type: string
    details?: string | null
    created_at?: Date | string
  }

  export type system_audit_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type system_audit_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_credCreateInput = {
    c_id?: bigint | number
    created_at?: Date | string
    name?: string | null
    password?: string | null
    hash: string
  }

  export type admin_credUncheckedCreateInput = {
    c_id?: bigint | number
    created_at?: Date | string
    name?: string | null
    password?: string | null
    hash: string
  }

  export type admin_credUpdateInput = {
    c_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type admin_credUncheckedUpdateInput = {
    c_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type admin_credCreateManyInput = {
    c_id?: bigint | number
    created_at?: Date | string
    name?: string | null
    password?: string | null
    hash: string
  }

  export type admin_credUpdateManyMutationInput = {
    c_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type admin_credUncheckedUpdateManyInput = {
    c_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type admin_actions_logCountOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action_type?: SortOrder
    target_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type admin_actions_logMaxOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action_type?: SortOrder
    target_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type admin_actions_logMinOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action_type?: SortOrder
    target_id?: SortOrder
    description?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type notification_logCountOrderByAggregateInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notification_logMaxOrderByAggregateInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notification_logMinOrderByAggregateInput = {
    id?: SortOrder
    recipient_id?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type system_audit_logCountOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
  }

  export type system_audit_logMaxOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
  }

  export type system_audit_logMinOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type admin_credCountOrderByAggregateInput = {
    c_id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hash?: SortOrder
  }

  export type admin_credAvgOrderByAggregateInput = {
    c_id?: SortOrder
  }

  export type admin_credMaxOrderByAggregateInput = {
    c_id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hash?: SortOrder
  }

  export type admin_credMinOrderByAggregateInput = {
    c_id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    password?: SortOrder
    hash?: SortOrder
  }

  export type admin_credSumOrderByAggregateInput = {
    c_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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