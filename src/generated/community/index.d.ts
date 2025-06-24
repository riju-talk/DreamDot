
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
 * Model communities
 * 
 */
export type communities = $Result.DefaultSelection<Prisma.$communitiesPayload>
/**
 * Model community_members
 * 
 */
export type community_members = $Result.DefaultSelection<Prisma.$community_membersPayload>
/**
 * Model community_posts_metadata
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type community_posts_metadata = $Result.DefaultSelection<Prisma.$community_posts_metadataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Communities
 * const communities = await prisma.communities.findMany()
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
   * // Fetch zero or more Communities
   * const communities = await prisma.communities.findMany()
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
   * `prisma.communities`: Exposes CRUD operations for the **communities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.communities.findMany()
    * ```
    */
  get communities(): Prisma.communitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community_members`: Exposes CRUD operations for the **community_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Community_members
    * const community_members = await prisma.community_members.findMany()
    * ```
    */
  get community_members(): Prisma.community_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community_posts_metadata`: Exposes CRUD operations for the **community_posts_metadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Community_posts_metadata
    * const community_posts_metadata = await prisma.community_posts_metadata.findMany()
    * ```
    */
  get community_posts_metadata(): Prisma.community_posts_metadataDelegate<ExtArgs, ClientOptions>;
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
    communities: 'communities',
    community_members: 'community_members',
    community_posts_metadata: 'community_posts_metadata'
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
      modelProps: "communities" | "community_members" | "community_posts_metadata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      communities: {
        payload: Prisma.$communitiesPayload<ExtArgs>
        fields: Prisma.communitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          findFirst: {
            args: Prisma.communitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          findMany: {
            args: Prisma.communitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>[]
          }
          create: {
            args: Prisma.communitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          createMany: {
            args: Prisma.communitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.communitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>[]
          }
          delete: {
            args: Prisma.communitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          update: {
            args: Prisma.communitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          deleteMany: {
            args: Prisma.communitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.communitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.communitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>[]
          }
          upsert: {
            args: Prisma.communitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communitiesPayload>
          }
          aggregate: {
            args: Prisma.CommunitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunities>
          }
          groupBy: {
            args: Prisma.communitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.communitiesCountArgs<ExtArgs>
            result: $Utils.Optional<CommunitiesCountAggregateOutputType> | number
          }
        }
      }
      community_members: {
        payload: Prisma.$community_membersPayload<ExtArgs>
        fields: Prisma.community_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.community_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.community_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>
          }
          findFirst: {
            args: Prisma.community_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.community_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>
          }
          findMany: {
            args: Prisma.community_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>[]
          }
          create: {
            args: Prisma.community_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>
          }
          createMany: {
            args: Prisma.community_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.community_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>[]
          }
          delete: {
            args: Prisma.community_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>
          }
          update: {
            args: Prisma.community_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>
          }
          deleteMany: {
            args: Prisma.community_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.community_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.community_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>[]
          }
          upsert: {
            args: Prisma.community_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_membersPayload>
          }
          aggregate: {
            args: Prisma.Community_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity_members>
          }
          groupBy: {
            args: Prisma.community_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Community_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.community_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Community_membersCountAggregateOutputType> | number
          }
        }
      }
      community_posts_metadata: {
        payload: Prisma.$community_posts_metadataPayload<ExtArgs>
        fields: Prisma.community_posts_metadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.community_posts_metadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.community_posts_metadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>
          }
          findFirst: {
            args: Prisma.community_posts_metadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.community_posts_metadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>
          }
          findMany: {
            args: Prisma.community_posts_metadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>[]
          }
          create: {
            args: Prisma.community_posts_metadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>
          }
          createMany: {
            args: Prisma.community_posts_metadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.community_posts_metadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>[]
          }
          delete: {
            args: Prisma.community_posts_metadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>
          }
          update: {
            args: Prisma.community_posts_metadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>
          }
          deleteMany: {
            args: Prisma.community_posts_metadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.community_posts_metadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.community_posts_metadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>[]
          }
          upsert: {
            args: Prisma.community_posts_metadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$community_posts_metadataPayload>
          }
          aggregate: {
            args: Prisma.Community_posts_metadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity_posts_metadata>
          }
          groupBy: {
            args: Prisma.community_posts_metadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Community_posts_metadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.community_posts_metadataCountArgs<ExtArgs>
            result: $Utils.Optional<Community_posts_metadataCountAggregateOutputType> | number
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
    communities?: communitiesOmit
    community_members?: community_membersOmit
    community_posts_metadata?: community_posts_metadataOmit
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
   * Count Type CommunitiesCountOutputType
   */

  export type CommunitiesCountOutputType = {
    community_members: number
    community_posts_metadata: number
  }

  export type CommunitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_members?: boolean | CommunitiesCountOutputTypeCountCommunity_membersArgs
    community_posts_metadata?: boolean | CommunitiesCountOutputTypeCountCommunity_posts_metadataArgs
  }

  // Custom InputTypes
  /**
   * CommunitiesCountOutputType without action
   */
  export type CommunitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitiesCountOutputType
     */
    select?: CommunitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunitiesCountOutputType without action
   */
  export type CommunitiesCountOutputTypeCountCommunity_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: community_membersWhereInput
  }

  /**
   * CommunitiesCountOutputType without action
   */
  export type CommunitiesCountOutputTypeCountCommunity_posts_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: community_posts_metadataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model communities
   */

  export type AggregateCommunities = {
    _count: CommunitiesCountAggregateOutputType | null
    _min: CommunitiesMinAggregateOutputType | null
    _max: CommunitiesMaxAggregateOutputType | null
  }

  export type CommunitiesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommunitiesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CommunitiesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CommunitiesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type CommunitiesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type CommunitiesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CommunitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communities to aggregate.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned communities
    **/
    _count?: true | CommunitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunitiesMaxAggregateInputType
  }

  export type GetCommunitiesAggregateType<T extends CommunitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunities[P]>
      : GetScalarType<T[P], AggregateCommunities[P]>
  }




  export type communitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communitiesWhereInput
    orderBy?: communitiesOrderByWithAggregationInput | communitiesOrderByWithAggregationInput[]
    by: CommunitiesScalarFieldEnum[] | CommunitiesScalarFieldEnum
    having?: communitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunitiesCountAggregateInputType | true
    _min?: CommunitiesMinAggregateInputType
    _max?: CommunitiesMaxAggregateInputType
  }

  export type CommunitiesGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: CommunitiesCountAggregateOutputType | null
    _min: CommunitiesMinAggregateOutputType | null
    _max: CommunitiesMaxAggregateOutputType | null
  }

  type GetCommunitiesGroupByPayload<T extends communitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CommunitiesGroupByOutputType[P]>
        }
      >
    >


  export type communitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    community_members?: boolean | communities$community_membersArgs<ExtArgs>
    community_posts_metadata?: boolean | communities$community_posts_metadataArgs<ExtArgs>
    _count?: boolean | CommunitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communities"]>

  export type communitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["communities"]>

  export type communitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["communities"]>

  export type communitiesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type communitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["communities"]>
  export type communitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_members?: boolean | communities$community_membersArgs<ExtArgs>
    community_posts_metadata?: boolean | communities$community_posts_metadataArgs<ExtArgs>
    _count?: boolean | CommunitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type communitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type communitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $communitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "communities"
    objects: {
      community_members: Prisma.$community_membersPayload<ExtArgs>[]
      community_posts_metadata: Prisma.$community_posts_metadataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["communities"]>
    composites: {}
  }

  type communitiesGetPayload<S extends boolean | null | undefined | communitiesDefaultArgs> = $Result.GetResult<Prisma.$communitiesPayload, S>

  type communitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<communitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunitiesCountAggregateInputType | true
    }

  export interface communitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['communities'], meta: { name: 'communities' } }
    /**
     * Find zero or one Communities that matches the filter.
     * @param {communitiesFindUniqueArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends communitiesFindUniqueArgs>(args: SelectSubset<T, communitiesFindUniqueArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Communities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {communitiesFindUniqueOrThrowArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends communitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, communitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesFindFirstArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends communitiesFindFirstArgs>(args?: SelectSubset<T, communitiesFindFirstArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesFindFirstOrThrowArgs} args - Arguments to find a Communities
     * @example
     * // Get one Communities
     * const communities = await prisma.communities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends communitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, communitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.communities.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.communities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communitiesWithIdOnly = await prisma.communities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends communitiesFindManyArgs>(args?: SelectSubset<T, communitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Communities.
     * @param {communitiesCreateArgs} args - Arguments to create a Communities.
     * @example
     * // Create one Communities
     * const Communities = await prisma.communities.create({
     *   data: {
     *     // ... data to create a Communities
     *   }
     * })
     * 
     */
    create<T extends communitiesCreateArgs>(args: SelectSubset<T, communitiesCreateArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {communitiesCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const communities = await prisma.communities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends communitiesCreateManyArgs>(args?: SelectSubset<T, communitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {communitiesCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const communities = await prisma.communities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communitiesWithIdOnly = await prisma.communities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends communitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, communitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Communities.
     * @param {communitiesDeleteArgs} args - Arguments to delete one Communities.
     * @example
     * // Delete one Communities
     * const Communities = await prisma.communities.delete({
     *   where: {
     *     // ... filter to delete one Communities
     *   }
     * })
     * 
     */
    delete<T extends communitiesDeleteArgs>(args: SelectSubset<T, communitiesDeleteArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Communities.
     * @param {communitiesUpdateArgs} args - Arguments to update one Communities.
     * @example
     * // Update one Communities
     * const communities = await prisma.communities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends communitiesUpdateArgs>(args: SelectSubset<T, communitiesUpdateArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {communitiesDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.communities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends communitiesDeleteManyArgs>(args?: SelectSubset<T, communitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const communities = await prisma.communities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends communitiesUpdateManyArgs>(args: SelectSubset<T, communitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {communitiesUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const communities = await prisma.communities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communitiesWithIdOnly = await prisma.communities.updateManyAndReturn({
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
    updateManyAndReturn<T extends communitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, communitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Communities.
     * @param {communitiesUpsertArgs} args - Arguments to update or create a Communities.
     * @example
     * // Update or create a Communities
     * const communities = await prisma.communities.upsert({
     *   create: {
     *     // ... data to create a Communities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communities we want to update
     *   }
     * })
     */
    upsert<T extends communitiesUpsertArgs>(args: SelectSubset<T, communitiesUpsertArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.communities.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends communitiesCountArgs>(
      args?: Subset<T, communitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunitiesAggregateArgs>(args: Subset<T, CommunitiesAggregateArgs>): Prisma.PrismaPromise<GetCommunitiesAggregateType<T>>

    /**
     * Group by Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communitiesGroupByArgs} args - Group by arguments.
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
      T extends communitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: communitiesGroupByArgs['orderBy'] }
        : { orderBy?: communitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, communitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the communities model
   */
  readonly fields: communitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for communities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__communitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community_members<T extends communities$community_membersArgs<ExtArgs> = {}>(args?: Subset<T, communities$community_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    community_posts_metadata<T extends communities$community_posts_metadataArgs<ExtArgs> = {}>(args?: Subset<T, communities$community_posts_metadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the communities model
   */
  interface communitiesFieldRefs {
    readonly id: FieldRef<"communities", 'String'>
    readonly name: FieldRef<"communities", 'String'>
    readonly description: FieldRef<"communities", 'String'>
    readonly created_at: FieldRef<"communities", 'DateTime'>
    readonly updated_at: FieldRef<"communities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * communities findUnique
   */
  export type communitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities findUniqueOrThrow
   */
  export type communitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities findFirst
   */
  export type communitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communities.
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communities.
     */
    distinct?: CommunitiesScalarFieldEnum | CommunitiesScalarFieldEnum[]
  }

  /**
   * communities findFirstOrThrow
   */
  export type communitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communities.
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communities.
     */
    distinct?: CommunitiesScalarFieldEnum | CommunitiesScalarFieldEnum[]
  }

  /**
   * communities findMany
   */
  export type communitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * Filter, which communities to fetch.
     */
    where?: communitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communities to fetch.
     */
    orderBy?: communitiesOrderByWithRelationInput | communitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing communities.
     */
    cursor?: communitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communities.
     */
    skip?: number
    distinct?: CommunitiesScalarFieldEnum | CommunitiesScalarFieldEnum[]
  }

  /**
   * communities create
   */
  export type communitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a communities.
     */
    data: XOR<communitiesCreateInput, communitiesUncheckedCreateInput>
  }

  /**
   * communities createMany
   */
  export type communitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many communities.
     */
    data: communitiesCreateManyInput | communitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communities createManyAndReturn
   */
  export type communitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * The data used to create many communities.
     */
    data: communitiesCreateManyInput | communitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communities update
   */
  export type communitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a communities.
     */
    data: XOR<communitiesUpdateInput, communitiesUncheckedUpdateInput>
    /**
     * Choose, which communities to update.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities updateMany
   */
  export type communitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update communities.
     */
    data: XOR<communitiesUpdateManyMutationInput, communitiesUncheckedUpdateManyInput>
    /**
     * Filter which communities to update
     */
    where?: communitiesWhereInput
    /**
     * Limit how many communities to update.
     */
    limit?: number
  }

  /**
   * communities updateManyAndReturn
   */
  export type communitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * The data used to update communities.
     */
    data: XOR<communitiesUpdateManyMutationInput, communitiesUncheckedUpdateManyInput>
    /**
     * Filter which communities to update
     */
    where?: communitiesWhereInput
    /**
     * Limit how many communities to update.
     */
    limit?: number
  }

  /**
   * communities upsert
   */
  export type communitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the communities to update in case it exists.
     */
    where: communitiesWhereUniqueInput
    /**
     * In case the communities found by the `where` argument doesn't exist, create a new communities with this data.
     */
    create: XOR<communitiesCreateInput, communitiesUncheckedCreateInput>
    /**
     * In case the communities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<communitiesUpdateInput, communitiesUncheckedUpdateInput>
  }

  /**
   * communities delete
   */
  export type communitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
    /**
     * Filter which communities to delete.
     */
    where: communitiesWhereUniqueInput
  }

  /**
   * communities deleteMany
   */
  export type communitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communities to delete
     */
    where?: communitiesWhereInput
    /**
     * Limit how many communities to delete.
     */
    limit?: number
  }

  /**
   * communities.community_members
   */
  export type communities$community_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    where?: community_membersWhereInput
    orderBy?: community_membersOrderByWithRelationInput | community_membersOrderByWithRelationInput[]
    cursor?: community_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Community_membersScalarFieldEnum | Community_membersScalarFieldEnum[]
  }

  /**
   * communities.community_posts_metadata
   */
  export type communities$community_posts_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    where?: community_posts_metadataWhereInput
    orderBy?: community_posts_metadataOrderByWithRelationInput | community_posts_metadataOrderByWithRelationInput[]
    cursor?: community_posts_metadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Community_posts_metadataScalarFieldEnum | Community_posts_metadataScalarFieldEnum[]
  }

  /**
   * communities without action
   */
  export type communitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communities
     */
    select?: communitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communities
     */
    omit?: communitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communitiesInclude<ExtArgs> | null
  }


  /**
   * Model community_members
   */

  export type AggregateCommunity_members = {
    _count: Community_membersCountAggregateOutputType | null
    _min: Community_membersMinAggregateOutputType | null
    _max: Community_membersMaxAggregateOutputType | null
  }

  export type Community_membersMinAggregateOutputType = {
    community_id: string | null
    user_id: string | null
    role: string | null
    joined_at: Date | null
  }

  export type Community_membersMaxAggregateOutputType = {
    community_id: string | null
    user_id: string | null
    role: string | null
    joined_at: Date | null
  }

  export type Community_membersCountAggregateOutputType = {
    community_id: number
    user_id: number
    role: number
    joined_at: number
    _all: number
  }


  export type Community_membersMinAggregateInputType = {
    community_id?: true
    user_id?: true
    role?: true
    joined_at?: true
  }

  export type Community_membersMaxAggregateInputType = {
    community_id?: true
    user_id?: true
    role?: true
    joined_at?: true
  }

  export type Community_membersCountAggregateInputType = {
    community_id?: true
    user_id?: true
    role?: true
    joined_at?: true
    _all?: true
  }

  export type Community_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_members to aggregate.
     */
    where?: community_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_members to fetch.
     */
    orderBy?: community_membersOrderByWithRelationInput | community_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: community_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned community_members
    **/
    _count?: true | Community_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Community_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Community_membersMaxAggregateInputType
  }

  export type GetCommunity_membersAggregateType<T extends Community_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity_members[P]>
      : GetScalarType<T[P], AggregateCommunity_members[P]>
  }




  export type community_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: community_membersWhereInput
    orderBy?: community_membersOrderByWithAggregationInput | community_membersOrderByWithAggregationInput[]
    by: Community_membersScalarFieldEnum[] | Community_membersScalarFieldEnum
    having?: community_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Community_membersCountAggregateInputType | true
    _min?: Community_membersMinAggregateInputType
    _max?: Community_membersMaxAggregateInputType
  }

  export type Community_membersGroupByOutputType = {
    community_id: string
    user_id: string
    role: string | null
    joined_at: Date
    _count: Community_membersCountAggregateOutputType | null
    _min: Community_membersMinAggregateOutputType | null
    _max: Community_membersMaxAggregateOutputType | null
  }

  type GetCommunity_membersGroupByPayload<T extends community_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Community_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Community_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Community_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Community_membersGroupByOutputType[P]>
        }
      >
    >


  export type community_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    joined_at?: boolean
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community_members"]>

  export type community_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    joined_at?: boolean
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community_members"]>

  export type community_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    joined_at?: boolean
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community_members"]>

  export type community_membersSelectScalar = {
    community_id?: boolean
    user_id?: boolean
    role?: boolean
    joined_at?: boolean
  }

  export type community_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"community_id" | "user_id" | "role" | "joined_at", ExtArgs["result"]["community_members"]>
  export type community_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }
  export type community_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }
  export type community_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }

  export type $community_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "community_members"
    objects: {
      communities: Prisma.$communitiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      community_id: string
      user_id: string
      role: string | null
      joined_at: Date
    }, ExtArgs["result"]["community_members"]>
    composites: {}
  }

  type community_membersGetPayload<S extends boolean | null | undefined | community_membersDefaultArgs> = $Result.GetResult<Prisma.$community_membersPayload, S>

  type community_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<community_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Community_membersCountAggregateInputType | true
    }

  export interface community_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['community_members'], meta: { name: 'community_members' } }
    /**
     * Find zero or one Community_members that matches the filter.
     * @param {community_membersFindUniqueArgs} args - Arguments to find a Community_members
     * @example
     * // Get one Community_members
     * const community_members = await prisma.community_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends community_membersFindUniqueArgs>(args: SelectSubset<T, community_membersFindUniqueArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {community_membersFindUniqueOrThrowArgs} args - Arguments to find a Community_members
     * @example
     * // Get one Community_members
     * const community_members = await prisma.community_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends community_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, community_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_membersFindFirstArgs} args - Arguments to find a Community_members
     * @example
     * // Get one Community_members
     * const community_members = await prisma.community_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends community_membersFindFirstArgs>(args?: SelectSubset<T, community_membersFindFirstArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_membersFindFirstOrThrowArgs} args - Arguments to find a Community_members
     * @example
     * // Get one Community_members
     * const community_members = await prisma.community_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends community_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, community_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Community_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Community_members
     * const community_members = await prisma.community_members.findMany()
     * 
     * // Get first 10 Community_members
     * const community_members = await prisma.community_members.findMany({ take: 10 })
     * 
     * // Only select the `community_id`
     * const community_membersWithCommunity_idOnly = await prisma.community_members.findMany({ select: { community_id: true } })
     * 
     */
    findMany<T extends community_membersFindManyArgs>(args?: SelectSubset<T, community_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community_members.
     * @param {community_membersCreateArgs} args - Arguments to create a Community_members.
     * @example
     * // Create one Community_members
     * const Community_members = await prisma.community_members.create({
     *   data: {
     *     // ... data to create a Community_members
     *   }
     * })
     * 
     */
    create<T extends community_membersCreateArgs>(args: SelectSubset<T, community_membersCreateArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Community_members.
     * @param {community_membersCreateManyArgs} args - Arguments to create many Community_members.
     * @example
     * // Create many Community_members
     * const community_members = await prisma.community_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends community_membersCreateManyArgs>(args?: SelectSubset<T, community_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Community_members and returns the data saved in the database.
     * @param {community_membersCreateManyAndReturnArgs} args - Arguments to create many Community_members.
     * @example
     * // Create many Community_members
     * const community_members = await prisma.community_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Community_members and only return the `community_id`
     * const community_membersWithCommunity_idOnly = await prisma.community_members.createManyAndReturn({
     *   select: { community_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends community_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, community_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community_members.
     * @param {community_membersDeleteArgs} args - Arguments to delete one Community_members.
     * @example
     * // Delete one Community_members
     * const Community_members = await prisma.community_members.delete({
     *   where: {
     *     // ... filter to delete one Community_members
     *   }
     * })
     * 
     */
    delete<T extends community_membersDeleteArgs>(args: SelectSubset<T, community_membersDeleteArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community_members.
     * @param {community_membersUpdateArgs} args - Arguments to update one Community_members.
     * @example
     * // Update one Community_members
     * const community_members = await prisma.community_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends community_membersUpdateArgs>(args: SelectSubset<T, community_membersUpdateArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Community_members.
     * @param {community_membersDeleteManyArgs} args - Arguments to filter Community_members to delete.
     * @example
     * // Delete a few Community_members
     * const { count } = await prisma.community_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends community_membersDeleteManyArgs>(args?: SelectSubset<T, community_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Community_members
     * const community_members = await prisma.community_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends community_membersUpdateManyArgs>(args: SelectSubset<T, community_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_members and returns the data updated in the database.
     * @param {community_membersUpdateManyAndReturnArgs} args - Arguments to update many Community_members.
     * @example
     * // Update many Community_members
     * const community_members = await prisma.community_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Community_members and only return the `community_id`
     * const community_membersWithCommunity_idOnly = await prisma.community_members.updateManyAndReturn({
     *   select: { community_id: true },
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
    updateManyAndReturn<T extends community_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, community_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community_members.
     * @param {community_membersUpsertArgs} args - Arguments to update or create a Community_members.
     * @example
     * // Update or create a Community_members
     * const community_members = await prisma.community_members.upsert({
     *   create: {
     *     // ... data to create a Community_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community_members we want to update
     *   }
     * })
     */
    upsert<T extends community_membersUpsertArgs>(args: SelectSubset<T, community_membersUpsertArgs<ExtArgs>>): Prisma__community_membersClient<$Result.GetResult<Prisma.$community_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Community_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_membersCountArgs} args - Arguments to filter Community_members to count.
     * @example
     * // Count the number of Community_members
     * const count = await prisma.community_members.count({
     *   where: {
     *     // ... the filter for the Community_members we want to count
     *   }
     * })
    **/
    count<T extends community_membersCountArgs>(
      args?: Subset<T, community_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Community_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Community_membersAggregateArgs>(args: Subset<T, Community_membersAggregateArgs>): Prisma.PrismaPromise<GetCommunity_membersAggregateType<T>>

    /**
     * Group by Community_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_membersGroupByArgs} args - Group by arguments.
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
      T extends community_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: community_membersGroupByArgs['orderBy'] }
        : { orderBy?: community_membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, community_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunity_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the community_members model
   */
  readonly fields: community_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for community_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__community_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    communities<T extends communitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, communitiesDefaultArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the community_members model
   */
  interface community_membersFieldRefs {
    readonly community_id: FieldRef<"community_members", 'String'>
    readonly user_id: FieldRef<"community_members", 'String'>
    readonly role: FieldRef<"community_members", 'String'>
    readonly joined_at: FieldRef<"community_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * community_members findUnique
   */
  export type community_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * Filter, which community_members to fetch.
     */
    where: community_membersWhereUniqueInput
  }

  /**
   * community_members findUniqueOrThrow
   */
  export type community_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * Filter, which community_members to fetch.
     */
    where: community_membersWhereUniqueInput
  }

  /**
   * community_members findFirst
   */
  export type community_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * Filter, which community_members to fetch.
     */
    where?: community_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_members to fetch.
     */
    orderBy?: community_membersOrderByWithRelationInput | community_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_members.
     */
    cursor?: community_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_members.
     */
    distinct?: Community_membersScalarFieldEnum | Community_membersScalarFieldEnum[]
  }

  /**
   * community_members findFirstOrThrow
   */
  export type community_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * Filter, which community_members to fetch.
     */
    where?: community_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_members to fetch.
     */
    orderBy?: community_membersOrderByWithRelationInput | community_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_members.
     */
    cursor?: community_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_members.
     */
    distinct?: Community_membersScalarFieldEnum | Community_membersScalarFieldEnum[]
  }

  /**
   * community_members findMany
   */
  export type community_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * Filter, which community_members to fetch.
     */
    where?: community_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_members to fetch.
     */
    orderBy?: community_membersOrderByWithRelationInput | community_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing community_members.
     */
    cursor?: community_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_members.
     */
    skip?: number
    distinct?: Community_membersScalarFieldEnum | Community_membersScalarFieldEnum[]
  }

  /**
   * community_members create
   */
  export type community_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a community_members.
     */
    data: XOR<community_membersCreateInput, community_membersUncheckedCreateInput>
  }

  /**
   * community_members createMany
   */
  export type community_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many community_members.
     */
    data: community_membersCreateManyInput | community_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * community_members createManyAndReturn
   */
  export type community_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * The data used to create many community_members.
     */
    data: community_membersCreateManyInput | community_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * community_members update
   */
  export type community_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a community_members.
     */
    data: XOR<community_membersUpdateInput, community_membersUncheckedUpdateInput>
    /**
     * Choose, which community_members to update.
     */
    where: community_membersWhereUniqueInput
  }

  /**
   * community_members updateMany
   */
  export type community_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update community_members.
     */
    data: XOR<community_membersUpdateManyMutationInput, community_membersUncheckedUpdateManyInput>
    /**
     * Filter which community_members to update
     */
    where?: community_membersWhereInput
    /**
     * Limit how many community_members to update.
     */
    limit?: number
  }

  /**
   * community_members updateManyAndReturn
   */
  export type community_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * The data used to update community_members.
     */
    data: XOR<community_membersUpdateManyMutationInput, community_membersUncheckedUpdateManyInput>
    /**
     * Filter which community_members to update
     */
    where?: community_membersWhereInput
    /**
     * Limit how many community_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * community_members upsert
   */
  export type community_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the community_members to update in case it exists.
     */
    where: community_membersWhereUniqueInput
    /**
     * In case the community_members found by the `where` argument doesn't exist, create a new community_members with this data.
     */
    create: XOR<community_membersCreateInput, community_membersUncheckedCreateInput>
    /**
     * In case the community_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<community_membersUpdateInput, community_membersUncheckedUpdateInput>
  }

  /**
   * community_members delete
   */
  export type community_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
    /**
     * Filter which community_members to delete.
     */
    where: community_membersWhereUniqueInput
  }

  /**
   * community_members deleteMany
   */
  export type community_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_members to delete
     */
    where?: community_membersWhereInput
    /**
     * Limit how many community_members to delete.
     */
    limit?: number
  }

  /**
   * community_members without action
   */
  export type community_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_members
     */
    select?: community_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_members
     */
    omit?: community_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_membersInclude<ExtArgs> | null
  }


  /**
   * Model community_posts_metadata
   */

  export type AggregateCommunity_posts_metadata = {
    _count: Community_posts_metadataCountAggregateOutputType | null
    _min: Community_posts_metadataMinAggregateOutputType | null
    _max: Community_posts_metadataMaxAggregateOutputType | null
  }

  export type Community_posts_metadataMinAggregateOutputType = {
    id: string | null
    community_id: string | null
    user_id: string | null
    title: string | null
    summary: string | null
    post_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Community_posts_metadataMaxAggregateOutputType = {
    id: string | null
    community_id: string | null
    user_id: string | null
    title: string | null
    summary: string | null
    post_type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Community_posts_metadataCountAggregateOutputType = {
    id: number
    community_id: number
    user_id: number
    title: number
    summary: number
    post_type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Community_posts_metadataMinAggregateInputType = {
    id?: true
    community_id?: true
    user_id?: true
    title?: true
    summary?: true
    post_type?: true
    created_at?: true
    updated_at?: true
  }

  export type Community_posts_metadataMaxAggregateInputType = {
    id?: true
    community_id?: true
    user_id?: true
    title?: true
    summary?: true
    post_type?: true
    created_at?: true
    updated_at?: true
  }

  export type Community_posts_metadataCountAggregateInputType = {
    id?: true
    community_id?: true
    user_id?: true
    title?: true
    summary?: true
    post_type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Community_posts_metadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_posts_metadata to aggregate.
     */
    where?: community_posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_posts_metadata to fetch.
     */
    orderBy?: community_posts_metadataOrderByWithRelationInput | community_posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: community_posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_posts_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned community_posts_metadata
    **/
    _count?: true | Community_posts_metadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Community_posts_metadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Community_posts_metadataMaxAggregateInputType
  }

  export type GetCommunity_posts_metadataAggregateType<T extends Community_posts_metadataAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity_posts_metadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity_posts_metadata[P]>
      : GetScalarType<T[P], AggregateCommunity_posts_metadata[P]>
  }




  export type community_posts_metadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: community_posts_metadataWhereInput
    orderBy?: community_posts_metadataOrderByWithAggregationInput | community_posts_metadataOrderByWithAggregationInput[]
    by: Community_posts_metadataScalarFieldEnum[] | Community_posts_metadataScalarFieldEnum
    having?: community_posts_metadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Community_posts_metadataCountAggregateInputType | true
    _min?: Community_posts_metadataMinAggregateInputType
    _max?: Community_posts_metadataMaxAggregateInputType
  }

  export type Community_posts_metadataGroupByOutputType = {
    id: string
    community_id: string
    user_id: string
    title: string | null
    summary: string | null
    post_type: string | null
    created_at: Date
    updated_at: Date
    _count: Community_posts_metadataCountAggregateOutputType | null
    _min: Community_posts_metadataMinAggregateOutputType | null
    _max: Community_posts_metadataMaxAggregateOutputType | null
  }

  type GetCommunity_posts_metadataGroupByPayload<T extends community_posts_metadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Community_posts_metadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Community_posts_metadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Community_posts_metadataGroupByOutputType[P]>
            : GetScalarType<T[P], Community_posts_metadataGroupByOutputType[P]>
        }
      >
    >


  export type community_posts_metadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    community_id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community_posts_metadata"]>

  export type community_posts_metadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    community_id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community_posts_metadata"]>

  export type community_posts_metadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    community_id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community_posts_metadata"]>

  export type community_posts_metadataSelectScalar = {
    id?: boolean
    community_id?: boolean
    user_id?: boolean
    title?: boolean
    summary?: boolean
    post_type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type community_posts_metadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "community_id" | "user_id" | "title" | "summary" | "post_type" | "created_at" | "updated_at", ExtArgs["result"]["community_posts_metadata"]>
  export type community_posts_metadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }
  export type community_posts_metadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }
  export type community_posts_metadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | communitiesDefaultArgs<ExtArgs>
  }

  export type $community_posts_metadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "community_posts_metadata"
    objects: {
      communities: Prisma.$communitiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      community_id: string
      user_id: string
      title: string | null
      summary: string | null
      post_type: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["community_posts_metadata"]>
    composites: {}
  }

  type community_posts_metadataGetPayload<S extends boolean | null | undefined | community_posts_metadataDefaultArgs> = $Result.GetResult<Prisma.$community_posts_metadataPayload, S>

  type community_posts_metadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<community_posts_metadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Community_posts_metadataCountAggregateInputType | true
    }

  export interface community_posts_metadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['community_posts_metadata'], meta: { name: 'community_posts_metadata' } }
    /**
     * Find zero or one Community_posts_metadata that matches the filter.
     * @param {community_posts_metadataFindUniqueArgs} args - Arguments to find a Community_posts_metadata
     * @example
     * // Get one Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends community_posts_metadataFindUniqueArgs>(args: SelectSubset<T, community_posts_metadataFindUniqueArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community_posts_metadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {community_posts_metadataFindUniqueOrThrowArgs} args - Arguments to find a Community_posts_metadata
     * @example
     * // Get one Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends community_posts_metadataFindUniqueOrThrowArgs>(args: SelectSubset<T, community_posts_metadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community_posts_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_posts_metadataFindFirstArgs} args - Arguments to find a Community_posts_metadata
     * @example
     * // Get one Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends community_posts_metadataFindFirstArgs>(args?: SelectSubset<T, community_posts_metadataFindFirstArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community_posts_metadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_posts_metadataFindFirstOrThrowArgs} args - Arguments to find a Community_posts_metadata
     * @example
     * // Get one Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends community_posts_metadataFindFirstOrThrowArgs>(args?: SelectSubset<T, community_posts_metadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Community_posts_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_posts_metadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.findMany()
     * 
     * // Get first 10 Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const community_posts_metadataWithIdOnly = await prisma.community_posts_metadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends community_posts_metadataFindManyArgs>(args?: SelectSubset<T, community_posts_metadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community_posts_metadata.
     * @param {community_posts_metadataCreateArgs} args - Arguments to create a Community_posts_metadata.
     * @example
     * // Create one Community_posts_metadata
     * const Community_posts_metadata = await prisma.community_posts_metadata.create({
     *   data: {
     *     // ... data to create a Community_posts_metadata
     *   }
     * })
     * 
     */
    create<T extends community_posts_metadataCreateArgs>(args: SelectSubset<T, community_posts_metadataCreateArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Community_posts_metadata.
     * @param {community_posts_metadataCreateManyArgs} args - Arguments to create many Community_posts_metadata.
     * @example
     * // Create many Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends community_posts_metadataCreateManyArgs>(args?: SelectSubset<T, community_posts_metadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Community_posts_metadata and returns the data saved in the database.
     * @param {community_posts_metadataCreateManyAndReturnArgs} args - Arguments to create many Community_posts_metadata.
     * @example
     * // Create many Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Community_posts_metadata and only return the `id`
     * const community_posts_metadataWithIdOnly = await prisma.community_posts_metadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends community_posts_metadataCreateManyAndReturnArgs>(args?: SelectSubset<T, community_posts_metadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community_posts_metadata.
     * @param {community_posts_metadataDeleteArgs} args - Arguments to delete one Community_posts_metadata.
     * @example
     * // Delete one Community_posts_metadata
     * const Community_posts_metadata = await prisma.community_posts_metadata.delete({
     *   where: {
     *     // ... filter to delete one Community_posts_metadata
     *   }
     * })
     * 
     */
    delete<T extends community_posts_metadataDeleteArgs>(args: SelectSubset<T, community_posts_metadataDeleteArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community_posts_metadata.
     * @param {community_posts_metadataUpdateArgs} args - Arguments to update one Community_posts_metadata.
     * @example
     * // Update one Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends community_posts_metadataUpdateArgs>(args: SelectSubset<T, community_posts_metadataUpdateArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Community_posts_metadata.
     * @param {community_posts_metadataDeleteManyArgs} args - Arguments to filter Community_posts_metadata to delete.
     * @example
     * // Delete a few Community_posts_metadata
     * const { count } = await prisma.community_posts_metadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends community_posts_metadataDeleteManyArgs>(args?: SelectSubset<T, community_posts_metadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_posts_metadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends community_posts_metadataUpdateManyArgs>(args: SelectSubset<T, community_posts_metadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Community_posts_metadata and returns the data updated in the database.
     * @param {community_posts_metadataUpdateManyAndReturnArgs} args - Arguments to update many Community_posts_metadata.
     * @example
     * // Update many Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Community_posts_metadata and only return the `id`
     * const community_posts_metadataWithIdOnly = await prisma.community_posts_metadata.updateManyAndReturn({
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
    updateManyAndReturn<T extends community_posts_metadataUpdateManyAndReturnArgs>(args: SelectSubset<T, community_posts_metadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community_posts_metadata.
     * @param {community_posts_metadataUpsertArgs} args - Arguments to update or create a Community_posts_metadata.
     * @example
     * // Update or create a Community_posts_metadata
     * const community_posts_metadata = await prisma.community_posts_metadata.upsert({
     *   create: {
     *     // ... data to create a Community_posts_metadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community_posts_metadata we want to update
     *   }
     * })
     */
    upsert<T extends community_posts_metadataUpsertArgs>(args: SelectSubset<T, community_posts_metadataUpsertArgs<ExtArgs>>): Prisma__community_posts_metadataClient<$Result.GetResult<Prisma.$community_posts_metadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Community_posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_posts_metadataCountArgs} args - Arguments to filter Community_posts_metadata to count.
     * @example
     * // Count the number of Community_posts_metadata
     * const count = await prisma.community_posts_metadata.count({
     *   where: {
     *     // ... the filter for the Community_posts_metadata we want to count
     *   }
     * })
    **/
    count<T extends community_posts_metadataCountArgs>(
      args?: Subset<T, community_posts_metadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Community_posts_metadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community_posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Community_posts_metadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Community_posts_metadataAggregateArgs>(args: Subset<T, Community_posts_metadataAggregateArgs>): Prisma.PrismaPromise<GetCommunity_posts_metadataAggregateType<T>>

    /**
     * Group by Community_posts_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {community_posts_metadataGroupByArgs} args - Group by arguments.
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
      T extends community_posts_metadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: community_posts_metadataGroupByArgs['orderBy'] }
        : { orderBy?: community_posts_metadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, community_posts_metadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunity_posts_metadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the community_posts_metadata model
   */
  readonly fields: community_posts_metadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for community_posts_metadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__community_posts_metadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    communities<T extends communitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, communitiesDefaultArgs<ExtArgs>>): Prisma__communitiesClient<$Result.GetResult<Prisma.$communitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the community_posts_metadata model
   */
  interface community_posts_metadataFieldRefs {
    readonly id: FieldRef<"community_posts_metadata", 'String'>
    readonly community_id: FieldRef<"community_posts_metadata", 'String'>
    readonly user_id: FieldRef<"community_posts_metadata", 'String'>
    readonly title: FieldRef<"community_posts_metadata", 'String'>
    readonly summary: FieldRef<"community_posts_metadata", 'String'>
    readonly post_type: FieldRef<"community_posts_metadata", 'String'>
    readonly created_at: FieldRef<"community_posts_metadata", 'DateTime'>
    readonly updated_at: FieldRef<"community_posts_metadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * community_posts_metadata findUnique
   */
  export type community_posts_metadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which community_posts_metadata to fetch.
     */
    where: community_posts_metadataWhereUniqueInput
  }

  /**
   * community_posts_metadata findUniqueOrThrow
   */
  export type community_posts_metadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which community_posts_metadata to fetch.
     */
    where: community_posts_metadataWhereUniqueInput
  }

  /**
   * community_posts_metadata findFirst
   */
  export type community_posts_metadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which community_posts_metadata to fetch.
     */
    where?: community_posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_posts_metadata to fetch.
     */
    orderBy?: community_posts_metadataOrderByWithRelationInput | community_posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_posts_metadata.
     */
    cursor?: community_posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_posts_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_posts_metadata.
     */
    distinct?: Community_posts_metadataScalarFieldEnum | Community_posts_metadataScalarFieldEnum[]
  }

  /**
   * community_posts_metadata findFirstOrThrow
   */
  export type community_posts_metadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which community_posts_metadata to fetch.
     */
    where?: community_posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_posts_metadata to fetch.
     */
    orderBy?: community_posts_metadataOrderByWithRelationInput | community_posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for community_posts_metadata.
     */
    cursor?: community_posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_posts_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of community_posts_metadata.
     */
    distinct?: Community_posts_metadataScalarFieldEnum | Community_posts_metadataScalarFieldEnum[]
  }

  /**
   * community_posts_metadata findMany
   */
  export type community_posts_metadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * Filter, which community_posts_metadata to fetch.
     */
    where?: community_posts_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of community_posts_metadata to fetch.
     */
    orderBy?: community_posts_metadataOrderByWithRelationInput | community_posts_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing community_posts_metadata.
     */
    cursor?: community_posts_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` community_posts_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` community_posts_metadata.
     */
    skip?: number
    distinct?: Community_posts_metadataScalarFieldEnum | Community_posts_metadataScalarFieldEnum[]
  }

  /**
   * community_posts_metadata create
   */
  export type community_posts_metadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * The data needed to create a community_posts_metadata.
     */
    data: XOR<community_posts_metadataCreateInput, community_posts_metadataUncheckedCreateInput>
  }

  /**
   * community_posts_metadata createMany
   */
  export type community_posts_metadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many community_posts_metadata.
     */
    data: community_posts_metadataCreateManyInput | community_posts_metadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * community_posts_metadata createManyAndReturn
   */
  export type community_posts_metadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * The data used to create many community_posts_metadata.
     */
    data: community_posts_metadataCreateManyInput | community_posts_metadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * community_posts_metadata update
   */
  export type community_posts_metadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * The data needed to update a community_posts_metadata.
     */
    data: XOR<community_posts_metadataUpdateInput, community_posts_metadataUncheckedUpdateInput>
    /**
     * Choose, which community_posts_metadata to update.
     */
    where: community_posts_metadataWhereUniqueInput
  }

  /**
   * community_posts_metadata updateMany
   */
  export type community_posts_metadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update community_posts_metadata.
     */
    data: XOR<community_posts_metadataUpdateManyMutationInput, community_posts_metadataUncheckedUpdateManyInput>
    /**
     * Filter which community_posts_metadata to update
     */
    where?: community_posts_metadataWhereInput
    /**
     * Limit how many community_posts_metadata to update.
     */
    limit?: number
  }

  /**
   * community_posts_metadata updateManyAndReturn
   */
  export type community_posts_metadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * The data used to update community_posts_metadata.
     */
    data: XOR<community_posts_metadataUpdateManyMutationInput, community_posts_metadataUncheckedUpdateManyInput>
    /**
     * Filter which community_posts_metadata to update
     */
    where?: community_posts_metadataWhereInput
    /**
     * Limit how many community_posts_metadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * community_posts_metadata upsert
   */
  export type community_posts_metadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * The filter to search for the community_posts_metadata to update in case it exists.
     */
    where: community_posts_metadataWhereUniqueInput
    /**
     * In case the community_posts_metadata found by the `where` argument doesn't exist, create a new community_posts_metadata with this data.
     */
    create: XOR<community_posts_metadataCreateInput, community_posts_metadataUncheckedCreateInput>
    /**
     * In case the community_posts_metadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<community_posts_metadataUpdateInput, community_posts_metadataUncheckedUpdateInput>
  }

  /**
   * community_posts_metadata delete
   */
  export type community_posts_metadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
    /**
     * Filter which community_posts_metadata to delete.
     */
    where: community_posts_metadataWhereUniqueInput
  }

  /**
   * community_posts_metadata deleteMany
   */
  export type community_posts_metadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which community_posts_metadata to delete
     */
    where?: community_posts_metadataWhereInput
    /**
     * Limit how many community_posts_metadata to delete.
     */
    limit?: number
  }

  /**
   * community_posts_metadata without action
   */
  export type community_posts_metadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the community_posts_metadata
     */
    select?: community_posts_metadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the community_posts_metadata
     */
    omit?: community_posts_metadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: community_posts_metadataInclude<ExtArgs> | null
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


  export const CommunitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CommunitiesScalarFieldEnum = (typeof CommunitiesScalarFieldEnum)[keyof typeof CommunitiesScalarFieldEnum]


  export const Community_membersScalarFieldEnum: {
    community_id: 'community_id',
    user_id: 'user_id',
    role: 'role',
    joined_at: 'joined_at'
  };

  export type Community_membersScalarFieldEnum = (typeof Community_membersScalarFieldEnum)[keyof typeof Community_membersScalarFieldEnum]


  export const Community_posts_metadataScalarFieldEnum: {
    id: 'id',
    community_id: 'community_id',
    user_id: 'user_id',
    title: 'title',
    summary: 'summary',
    post_type: 'post_type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Community_posts_metadataScalarFieldEnum = (typeof Community_posts_metadataScalarFieldEnum)[keyof typeof Community_posts_metadataScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type communitiesWhereInput = {
    AND?: communitiesWhereInput | communitiesWhereInput[]
    OR?: communitiesWhereInput[]
    NOT?: communitiesWhereInput | communitiesWhereInput[]
    id?: UuidFilter<"communities"> | string
    name?: StringFilter<"communities"> | string
    description?: StringNullableFilter<"communities"> | string | null
    created_at?: DateTimeFilter<"communities"> | Date | string
    updated_at?: DateTimeFilter<"communities"> | Date | string
    community_members?: Community_membersListRelationFilter
    community_posts_metadata?: Community_posts_metadataListRelationFilter
  }

  export type communitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    community_members?: community_membersOrderByRelationAggregateInput
    community_posts_metadata?: community_posts_metadataOrderByRelationAggregateInput
  }

  export type communitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: communitiesWhereInput | communitiesWhereInput[]
    OR?: communitiesWhereInput[]
    NOT?: communitiesWhereInput | communitiesWhereInput[]
    name?: StringFilter<"communities"> | string
    description?: StringNullableFilter<"communities"> | string | null
    created_at?: DateTimeFilter<"communities"> | Date | string
    updated_at?: DateTimeFilter<"communities"> | Date | string
    community_members?: Community_membersListRelationFilter
    community_posts_metadata?: Community_posts_metadataListRelationFilter
  }, "id">

  export type communitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: communitiesCountOrderByAggregateInput
    _max?: communitiesMaxOrderByAggregateInput
    _min?: communitiesMinOrderByAggregateInput
  }

  export type communitiesScalarWhereWithAggregatesInput = {
    AND?: communitiesScalarWhereWithAggregatesInput | communitiesScalarWhereWithAggregatesInput[]
    OR?: communitiesScalarWhereWithAggregatesInput[]
    NOT?: communitiesScalarWhereWithAggregatesInput | communitiesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"communities"> | string
    name?: StringWithAggregatesFilter<"communities"> | string
    description?: StringNullableWithAggregatesFilter<"communities"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"communities"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"communities"> | Date | string
  }

  export type community_membersWhereInput = {
    AND?: community_membersWhereInput | community_membersWhereInput[]
    OR?: community_membersWhereInput[]
    NOT?: community_membersWhereInput | community_membersWhereInput[]
    community_id?: UuidFilter<"community_members"> | string
    user_id?: UuidFilter<"community_members"> | string
    role?: StringNullableFilter<"community_members"> | string | null
    joined_at?: DateTimeFilter<"community_members"> | Date | string
    communities?: XOR<CommunitiesScalarRelationFilter, communitiesWhereInput>
  }

  export type community_membersOrderByWithRelationInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    communities?: communitiesOrderByWithRelationInput
  }

  export type community_membersWhereUniqueInput = Prisma.AtLeast<{
    community_id_user_id?: community_membersCommunity_idUser_idCompoundUniqueInput
    AND?: community_membersWhereInput | community_membersWhereInput[]
    OR?: community_membersWhereInput[]
    NOT?: community_membersWhereInput | community_membersWhereInput[]
    community_id?: UuidFilter<"community_members"> | string
    user_id?: UuidFilter<"community_members"> | string
    role?: StringNullableFilter<"community_members"> | string | null
    joined_at?: DateTimeFilter<"community_members"> | Date | string
    communities?: XOR<CommunitiesScalarRelationFilter, communitiesWhereInput>
  }, "community_id_user_id">

  export type community_membersOrderByWithAggregationInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    _count?: community_membersCountOrderByAggregateInput
    _max?: community_membersMaxOrderByAggregateInput
    _min?: community_membersMinOrderByAggregateInput
  }

  export type community_membersScalarWhereWithAggregatesInput = {
    AND?: community_membersScalarWhereWithAggregatesInput | community_membersScalarWhereWithAggregatesInput[]
    OR?: community_membersScalarWhereWithAggregatesInput[]
    NOT?: community_membersScalarWhereWithAggregatesInput | community_membersScalarWhereWithAggregatesInput[]
    community_id?: UuidWithAggregatesFilter<"community_members"> | string
    user_id?: UuidWithAggregatesFilter<"community_members"> | string
    role?: StringNullableWithAggregatesFilter<"community_members"> | string | null
    joined_at?: DateTimeWithAggregatesFilter<"community_members"> | Date | string
  }

  export type community_posts_metadataWhereInput = {
    AND?: community_posts_metadataWhereInput | community_posts_metadataWhereInput[]
    OR?: community_posts_metadataWhereInput[]
    NOT?: community_posts_metadataWhereInput | community_posts_metadataWhereInput[]
    id?: UuidFilter<"community_posts_metadata"> | string
    community_id?: UuidFilter<"community_posts_metadata"> | string
    user_id?: UuidFilter<"community_posts_metadata"> | string
    title?: StringNullableFilter<"community_posts_metadata"> | string | null
    summary?: StringNullableFilter<"community_posts_metadata"> | string | null
    post_type?: StringNullableFilter<"community_posts_metadata"> | string | null
    created_at?: DateTimeFilter<"community_posts_metadata"> | Date | string
    updated_at?: DateTimeFilter<"community_posts_metadata"> | Date | string
    communities?: XOR<CommunitiesScalarRelationFilter, communitiesWhereInput>
  }

  export type community_posts_metadataOrderByWithRelationInput = {
    id?: SortOrder
    community_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    post_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    communities?: communitiesOrderByWithRelationInput
  }

  export type community_posts_metadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: community_posts_metadataWhereInput | community_posts_metadataWhereInput[]
    OR?: community_posts_metadataWhereInput[]
    NOT?: community_posts_metadataWhereInput | community_posts_metadataWhereInput[]
    community_id?: UuidFilter<"community_posts_metadata"> | string
    user_id?: UuidFilter<"community_posts_metadata"> | string
    title?: StringNullableFilter<"community_posts_metadata"> | string | null
    summary?: StringNullableFilter<"community_posts_metadata"> | string | null
    post_type?: StringNullableFilter<"community_posts_metadata"> | string | null
    created_at?: DateTimeFilter<"community_posts_metadata"> | Date | string
    updated_at?: DateTimeFilter<"community_posts_metadata"> | Date | string
    communities?: XOR<CommunitiesScalarRelationFilter, communitiesWhereInput>
  }, "id">

  export type community_posts_metadataOrderByWithAggregationInput = {
    id?: SortOrder
    community_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    post_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: community_posts_metadataCountOrderByAggregateInput
    _max?: community_posts_metadataMaxOrderByAggregateInput
    _min?: community_posts_metadataMinOrderByAggregateInput
  }

  export type community_posts_metadataScalarWhereWithAggregatesInput = {
    AND?: community_posts_metadataScalarWhereWithAggregatesInput | community_posts_metadataScalarWhereWithAggregatesInput[]
    OR?: community_posts_metadataScalarWhereWithAggregatesInput[]
    NOT?: community_posts_metadataScalarWhereWithAggregatesInput | community_posts_metadataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"community_posts_metadata"> | string
    community_id?: UuidWithAggregatesFilter<"community_posts_metadata"> | string
    user_id?: UuidWithAggregatesFilter<"community_posts_metadata"> | string
    title?: StringNullableWithAggregatesFilter<"community_posts_metadata"> | string | null
    summary?: StringNullableWithAggregatesFilter<"community_posts_metadata"> | string | null
    post_type?: StringNullableWithAggregatesFilter<"community_posts_metadata"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"community_posts_metadata"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"community_posts_metadata"> | Date | string
  }

  export type communitiesCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    community_members?: community_membersCreateNestedManyWithoutCommunitiesInput
    community_posts_metadata?: community_posts_metadataCreateNestedManyWithoutCommunitiesInput
  }

  export type communitiesUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    community_members?: community_membersUncheckedCreateNestedManyWithoutCommunitiesInput
    community_posts_metadata?: community_posts_metadataUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type communitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    community_members?: community_membersUpdateManyWithoutCommunitiesNestedInput
    community_posts_metadata?: community_posts_metadataUpdateManyWithoutCommunitiesNestedInput
  }

  export type communitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    community_members?: community_membersUncheckedUpdateManyWithoutCommunitiesNestedInput
    community_posts_metadata?: community_posts_metadataUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type communitiesCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type communitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type communitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_membersCreateInput = {
    user_id: string
    role?: string | null
    joined_at?: Date | string
    communities: communitiesCreateNestedOneWithoutCommunity_membersInput
  }

  export type community_membersUncheckedCreateInput = {
    community_id: string
    user_id: string
    role?: string | null
    joined_at?: Date | string
  }

  export type community_membersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: communitiesUpdateOneRequiredWithoutCommunity_membersNestedInput
  }

  export type community_membersUncheckedUpdateInput = {
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_membersCreateManyInput = {
    community_id: string
    user_id: string
    role?: string | null
    joined_at?: Date | string
  }

  export type community_membersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_membersUncheckedUpdateManyInput = {
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_posts_metadataCreateInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    communities: communitiesCreateNestedOneWithoutCommunity_posts_metadataInput
  }

  export type community_posts_metadataUncheckedCreateInput = {
    id?: string
    community_id: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type community_posts_metadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: communitiesUpdateOneRequiredWithoutCommunity_posts_metadataNestedInput
  }

  export type community_posts_metadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_posts_metadataCreateManyInput = {
    id?: string
    community_id: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type community_posts_metadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_posts_metadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    community_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type Community_membersListRelationFilter = {
    every?: community_membersWhereInput
    some?: community_membersWhereInput
    none?: community_membersWhereInput
  }

  export type Community_posts_metadataListRelationFilter = {
    every?: community_posts_metadataWhereInput
    some?: community_posts_metadataWhereInput
    none?: community_posts_metadataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type community_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type community_posts_metadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type communitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type communitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type communitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type CommunitiesScalarRelationFilter = {
    is?: communitiesWhereInput
    isNot?: communitiesWhereInput
  }

  export type community_membersCommunity_idUser_idCompoundUniqueInput = {
    community_id: string
    user_id: string
  }

  export type community_membersCountOrderByAggregateInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type community_membersMaxOrderByAggregateInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type community_membersMinOrderByAggregateInput = {
    community_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type community_posts_metadataCountOrderByAggregateInput = {
    id?: SortOrder
    community_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    post_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type community_posts_metadataMaxOrderByAggregateInput = {
    id?: SortOrder
    community_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    post_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type community_posts_metadataMinOrderByAggregateInput = {
    id?: SortOrder
    community_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    post_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type community_membersCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<community_membersCreateWithoutCommunitiesInput, community_membersUncheckedCreateWithoutCommunitiesInput> | community_membersCreateWithoutCommunitiesInput[] | community_membersUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_membersCreateOrConnectWithoutCommunitiesInput | community_membersCreateOrConnectWithoutCommunitiesInput[]
    createMany?: community_membersCreateManyCommunitiesInputEnvelope
    connect?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
  }

  export type community_posts_metadataCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<community_posts_metadataCreateWithoutCommunitiesInput, community_posts_metadataUncheckedCreateWithoutCommunitiesInput> | community_posts_metadataCreateWithoutCommunitiesInput[] | community_posts_metadataUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_posts_metadataCreateOrConnectWithoutCommunitiesInput | community_posts_metadataCreateOrConnectWithoutCommunitiesInput[]
    createMany?: community_posts_metadataCreateManyCommunitiesInputEnvelope
    connect?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
  }

  export type community_membersUncheckedCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<community_membersCreateWithoutCommunitiesInput, community_membersUncheckedCreateWithoutCommunitiesInput> | community_membersCreateWithoutCommunitiesInput[] | community_membersUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_membersCreateOrConnectWithoutCommunitiesInput | community_membersCreateOrConnectWithoutCommunitiesInput[]
    createMany?: community_membersCreateManyCommunitiesInputEnvelope
    connect?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
  }

  export type community_posts_metadataUncheckedCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<community_posts_metadataCreateWithoutCommunitiesInput, community_posts_metadataUncheckedCreateWithoutCommunitiesInput> | community_posts_metadataCreateWithoutCommunitiesInput[] | community_posts_metadataUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_posts_metadataCreateOrConnectWithoutCommunitiesInput | community_posts_metadataCreateOrConnectWithoutCommunitiesInput[]
    createMany?: community_posts_metadataCreateManyCommunitiesInputEnvelope
    connect?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
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

  export type community_membersUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<community_membersCreateWithoutCommunitiesInput, community_membersUncheckedCreateWithoutCommunitiesInput> | community_membersCreateWithoutCommunitiesInput[] | community_membersUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_membersCreateOrConnectWithoutCommunitiesInput | community_membersCreateOrConnectWithoutCommunitiesInput[]
    upsert?: community_membersUpsertWithWhereUniqueWithoutCommunitiesInput | community_membersUpsertWithWhereUniqueWithoutCommunitiesInput[]
    createMany?: community_membersCreateManyCommunitiesInputEnvelope
    set?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    disconnect?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    delete?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    connect?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    update?: community_membersUpdateWithWhereUniqueWithoutCommunitiesInput | community_membersUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: community_membersUpdateManyWithWhereWithoutCommunitiesInput | community_membersUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: community_membersScalarWhereInput | community_membersScalarWhereInput[]
  }

  export type community_posts_metadataUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<community_posts_metadataCreateWithoutCommunitiesInput, community_posts_metadataUncheckedCreateWithoutCommunitiesInput> | community_posts_metadataCreateWithoutCommunitiesInput[] | community_posts_metadataUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_posts_metadataCreateOrConnectWithoutCommunitiesInput | community_posts_metadataCreateOrConnectWithoutCommunitiesInput[]
    upsert?: community_posts_metadataUpsertWithWhereUniqueWithoutCommunitiesInput | community_posts_metadataUpsertWithWhereUniqueWithoutCommunitiesInput[]
    createMany?: community_posts_metadataCreateManyCommunitiesInputEnvelope
    set?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    disconnect?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    delete?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    connect?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    update?: community_posts_metadataUpdateWithWhereUniqueWithoutCommunitiesInput | community_posts_metadataUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: community_posts_metadataUpdateManyWithWhereWithoutCommunitiesInput | community_posts_metadataUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: community_posts_metadataScalarWhereInput | community_posts_metadataScalarWhereInput[]
  }

  export type community_membersUncheckedUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<community_membersCreateWithoutCommunitiesInput, community_membersUncheckedCreateWithoutCommunitiesInput> | community_membersCreateWithoutCommunitiesInput[] | community_membersUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_membersCreateOrConnectWithoutCommunitiesInput | community_membersCreateOrConnectWithoutCommunitiesInput[]
    upsert?: community_membersUpsertWithWhereUniqueWithoutCommunitiesInput | community_membersUpsertWithWhereUniqueWithoutCommunitiesInput[]
    createMany?: community_membersCreateManyCommunitiesInputEnvelope
    set?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    disconnect?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    delete?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    connect?: community_membersWhereUniqueInput | community_membersWhereUniqueInput[]
    update?: community_membersUpdateWithWhereUniqueWithoutCommunitiesInput | community_membersUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: community_membersUpdateManyWithWhereWithoutCommunitiesInput | community_membersUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: community_membersScalarWhereInput | community_membersScalarWhereInput[]
  }

  export type community_posts_metadataUncheckedUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<community_posts_metadataCreateWithoutCommunitiesInput, community_posts_metadataUncheckedCreateWithoutCommunitiesInput> | community_posts_metadataCreateWithoutCommunitiesInput[] | community_posts_metadataUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: community_posts_metadataCreateOrConnectWithoutCommunitiesInput | community_posts_metadataCreateOrConnectWithoutCommunitiesInput[]
    upsert?: community_posts_metadataUpsertWithWhereUniqueWithoutCommunitiesInput | community_posts_metadataUpsertWithWhereUniqueWithoutCommunitiesInput[]
    createMany?: community_posts_metadataCreateManyCommunitiesInputEnvelope
    set?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    disconnect?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    delete?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    connect?: community_posts_metadataWhereUniqueInput | community_posts_metadataWhereUniqueInput[]
    update?: community_posts_metadataUpdateWithWhereUniqueWithoutCommunitiesInput | community_posts_metadataUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: community_posts_metadataUpdateManyWithWhereWithoutCommunitiesInput | community_posts_metadataUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: community_posts_metadataScalarWhereInput | community_posts_metadataScalarWhereInput[]
  }

  export type communitiesCreateNestedOneWithoutCommunity_membersInput = {
    create?: XOR<communitiesCreateWithoutCommunity_membersInput, communitiesUncheckedCreateWithoutCommunity_membersInput>
    connectOrCreate?: communitiesCreateOrConnectWithoutCommunity_membersInput
    connect?: communitiesWhereUniqueInput
  }

  export type communitiesUpdateOneRequiredWithoutCommunity_membersNestedInput = {
    create?: XOR<communitiesCreateWithoutCommunity_membersInput, communitiesUncheckedCreateWithoutCommunity_membersInput>
    connectOrCreate?: communitiesCreateOrConnectWithoutCommunity_membersInput
    upsert?: communitiesUpsertWithoutCommunity_membersInput
    connect?: communitiesWhereUniqueInput
    update?: XOR<XOR<communitiesUpdateToOneWithWhereWithoutCommunity_membersInput, communitiesUpdateWithoutCommunity_membersInput>, communitiesUncheckedUpdateWithoutCommunity_membersInput>
  }

  export type communitiesCreateNestedOneWithoutCommunity_posts_metadataInput = {
    create?: XOR<communitiesCreateWithoutCommunity_posts_metadataInput, communitiesUncheckedCreateWithoutCommunity_posts_metadataInput>
    connectOrCreate?: communitiesCreateOrConnectWithoutCommunity_posts_metadataInput
    connect?: communitiesWhereUniqueInput
  }

  export type communitiesUpdateOneRequiredWithoutCommunity_posts_metadataNestedInput = {
    create?: XOR<communitiesCreateWithoutCommunity_posts_metadataInput, communitiesUncheckedCreateWithoutCommunity_posts_metadataInput>
    connectOrCreate?: communitiesCreateOrConnectWithoutCommunity_posts_metadataInput
    upsert?: communitiesUpsertWithoutCommunity_posts_metadataInput
    connect?: communitiesWhereUniqueInput
    update?: XOR<XOR<communitiesUpdateToOneWithWhereWithoutCommunity_posts_metadataInput, communitiesUpdateWithoutCommunity_posts_metadataInput>, communitiesUncheckedUpdateWithoutCommunity_posts_metadataInput>
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

  export type community_membersCreateWithoutCommunitiesInput = {
    user_id: string
    role?: string | null
    joined_at?: Date | string
  }

  export type community_membersUncheckedCreateWithoutCommunitiesInput = {
    user_id: string
    role?: string | null
    joined_at?: Date | string
  }

  export type community_membersCreateOrConnectWithoutCommunitiesInput = {
    where: community_membersWhereUniqueInput
    create: XOR<community_membersCreateWithoutCommunitiesInput, community_membersUncheckedCreateWithoutCommunitiesInput>
  }

  export type community_membersCreateManyCommunitiesInputEnvelope = {
    data: community_membersCreateManyCommunitiesInput | community_membersCreateManyCommunitiesInput[]
    skipDuplicates?: boolean
  }

  export type community_posts_metadataCreateWithoutCommunitiesInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type community_posts_metadataUncheckedCreateWithoutCommunitiesInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type community_posts_metadataCreateOrConnectWithoutCommunitiesInput = {
    where: community_posts_metadataWhereUniqueInput
    create: XOR<community_posts_metadataCreateWithoutCommunitiesInput, community_posts_metadataUncheckedCreateWithoutCommunitiesInput>
  }

  export type community_posts_metadataCreateManyCommunitiesInputEnvelope = {
    data: community_posts_metadataCreateManyCommunitiesInput | community_posts_metadataCreateManyCommunitiesInput[]
    skipDuplicates?: boolean
  }

  export type community_membersUpsertWithWhereUniqueWithoutCommunitiesInput = {
    where: community_membersWhereUniqueInput
    update: XOR<community_membersUpdateWithoutCommunitiesInput, community_membersUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<community_membersCreateWithoutCommunitiesInput, community_membersUncheckedCreateWithoutCommunitiesInput>
  }

  export type community_membersUpdateWithWhereUniqueWithoutCommunitiesInput = {
    where: community_membersWhereUniqueInput
    data: XOR<community_membersUpdateWithoutCommunitiesInput, community_membersUncheckedUpdateWithoutCommunitiesInput>
  }

  export type community_membersUpdateManyWithWhereWithoutCommunitiesInput = {
    where: community_membersScalarWhereInput
    data: XOR<community_membersUpdateManyMutationInput, community_membersUncheckedUpdateManyWithoutCommunitiesInput>
  }

  export type community_membersScalarWhereInput = {
    AND?: community_membersScalarWhereInput | community_membersScalarWhereInput[]
    OR?: community_membersScalarWhereInput[]
    NOT?: community_membersScalarWhereInput | community_membersScalarWhereInput[]
    community_id?: UuidFilter<"community_members"> | string
    user_id?: UuidFilter<"community_members"> | string
    role?: StringNullableFilter<"community_members"> | string | null
    joined_at?: DateTimeFilter<"community_members"> | Date | string
  }

  export type community_posts_metadataUpsertWithWhereUniqueWithoutCommunitiesInput = {
    where: community_posts_metadataWhereUniqueInput
    update: XOR<community_posts_metadataUpdateWithoutCommunitiesInput, community_posts_metadataUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<community_posts_metadataCreateWithoutCommunitiesInput, community_posts_metadataUncheckedCreateWithoutCommunitiesInput>
  }

  export type community_posts_metadataUpdateWithWhereUniqueWithoutCommunitiesInput = {
    where: community_posts_metadataWhereUniqueInput
    data: XOR<community_posts_metadataUpdateWithoutCommunitiesInput, community_posts_metadataUncheckedUpdateWithoutCommunitiesInput>
  }

  export type community_posts_metadataUpdateManyWithWhereWithoutCommunitiesInput = {
    where: community_posts_metadataScalarWhereInput
    data: XOR<community_posts_metadataUpdateManyMutationInput, community_posts_metadataUncheckedUpdateManyWithoutCommunitiesInput>
  }

  export type community_posts_metadataScalarWhereInput = {
    AND?: community_posts_metadataScalarWhereInput | community_posts_metadataScalarWhereInput[]
    OR?: community_posts_metadataScalarWhereInput[]
    NOT?: community_posts_metadataScalarWhereInput | community_posts_metadataScalarWhereInput[]
    id?: UuidFilter<"community_posts_metadata"> | string
    community_id?: UuidFilter<"community_posts_metadata"> | string
    user_id?: UuidFilter<"community_posts_metadata"> | string
    title?: StringNullableFilter<"community_posts_metadata"> | string | null
    summary?: StringNullableFilter<"community_posts_metadata"> | string | null
    post_type?: StringNullableFilter<"community_posts_metadata"> | string | null
    created_at?: DateTimeFilter<"community_posts_metadata"> | Date | string
    updated_at?: DateTimeFilter<"community_posts_metadata"> | Date | string
  }

  export type communitiesCreateWithoutCommunity_membersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    community_posts_metadata?: community_posts_metadataCreateNestedManyWithoutCommunitiesInput
  }

  export type communitiesUncheckedCreateWithoutCommunity_membersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    community_posts_metadata?: community_posts_metadataUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type communitiesCreateOrConnectWithoutCommunity_membersInput = {
    where: communitiesWhereUniqueInput
    create: XOR<communitiesCreateWithoutCommunity_membersInput, communitiesUncheckedCreateWithoutCommunity_membersInput>
  }

  export type communitiesUpsertWithoutCommunity_membersInput = {
    update: XOR<communitiesUpdateWithoutCommunity_membersInput, communitiesUncheckedUpdateWithoutCommunity_membersInput>
    create: XOR<communitiesCreateWithoutCommunity_membersInput, communitiesUncheckedCreateWithoutCommunity_membersInput>
    where?: communitiesWhereInput
  }

  export type communitiesUpdateToOneWithWhereWithoutCommunity_membersInput = {
    where?: communitiesWhereInput
    data: XOR<communitiesUpdateWithoutCommunity_membersInput, communitiesUncheckedUpdateWithoutCommunity_membersInput>
  }

  export type communitiesUpdateWithoutCommunity_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    community_posts_metadata?: community_posts_metadataUpdateManyWithoutCommunitiesNestedInput
  }

  export type communitiesUncheckedUpdateWithoutCommunity_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    community_posts_metadata?: community_posts_metadataUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type communitiesCreateWithoutCommunity_posts_metadataInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    community_members?: community_membersCreateNestedManyWithoutCommunitiesInput
  }

  export type communitiesUncheckedCreateWithoutCommunity_posts_metadataInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    community_members?: community_membersUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type communitiesCreateOrConnectWithoutCommunity_posts_metadataInput = {
    where: communitiesWhereUniqueInput
    create: XOR<communitiesCreateWithoutCommunity_posts_metadataInput, communitiesUncheckedCreateWithoutCommunity_posts_metadataInput>
  }

  export type communitiesUpsertWithoutCommunity_posts_metadataInput = {
    update: XOR<communitiesUpdateWithoutCommunity_posts_metadataInput, communitiesUncheckedUpdateWithoutCommunity_posts_metadataInput>
    create: XOR<communitiesCreateWithoutCommunity_posts_metadataInput, communitiesUncheckedCreateWithoutCommunity_posts_metadataInput>
    where?: communitiesWhereInput
  }

  export type communitiesUpdateToOneWithWhereWithoutCommunity_posts_metadataInput = {
    where?: communitiesWhereInput
    data: XOR<communitiesUpdateWithoutCommunity_posts_metadataInput, communitiesUncheckedUpdateWithoutCommunity_posts_metadataInput>
  }

  export type communitiesUpdateWithoutCommunity_posts_metadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    community_members?: community_membersUpdateManyWithoutCommunitiesNestedInput
  }

  export type communitiesUncheckedUpdateWithoutCommunity_posts_metadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    community_members?: community_membersUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type community_membersCreateManyCommunitiesInput = {
    user_id: string
    role?: string | null
    joined_at?: Date | string
  }

  export type community_posts_metadataCreateManyCommunitiesInput = {
    id?: string
    user_id: string
    title?: string | null
    summary?: string | null
    post_type?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type community_membersUpdateWithoutCommunitiesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_membersUncheckedUpdateWithoutCommunitiesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_membersUncheckedUpdateManyWithoutCommunitiesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_posts_metadataUpdateWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_posts_metadataUncheckedUpdateWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type community_posts_metadataUncheckedUpdateManyWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    post_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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