declare module 'jwks-rsa-promisified' {

  import * as ExpressJwt from "express-jwt";

  function JwksRsaPromisified(options: JwksRsa.Options): JwksRsa.JwksClient;

  namespace JwksRsaPromisified {
    class JwksClient {
      constructor(options: Options);

      getKey: (cb: (err: Error, keys: Jwk) => any) => any;
      getKeyAsync: () => Promise<Jwk>;

      getSigningKey: (kid: string, cb: (err: Error, key: Jwk) => any) => any;
      getSigningKeyAsync: (kid:string) => Promise<Jwk>;

      getSigningKeys: (cb: (err: Error, keys: Jwk[]) => any) => any;
      getSigningKeysAsync: () => Promise<Jwk[]>;
    }

    interface Jwk {
      kid: string;
      nbf?: number;
      publicKey?: string;
      rsaPublicKey?: string;
    }

    interface Options {
      jwksUri: string;
      rateLimit?: boolean;
      cache?: boolean;
      cacheMaxEntries?: number;
      cacheMaxAge?: number;
      jwksRequestsPerMinute?: number;
      strictSsl?: boolean;
      handleSigningKeyError?(err: Error, cb: (err: Error) => void): any;
    }

    function expressJwtSecret(options: JwksRsa.Options): ExpressJwt.SecretCallback;

    function hapiJwt2Key(options: JwksRsa.Options): (name: string, scheme: string, options?: any) => void;

    function koaJwtSecret(options: JwksRsa.Options): (name: string, scheme: string, options?: any) => void;

    class ArgumentError extends Error {
      constructor(message: string);
    }

    class JwksError extends Error {
      constructor(message: string);
    }

    class JwksRateLimitError extends Error {
      constructor(message: string);
    }

    class SigningKeyNotFoundError extends Error {
      constructor(message: string);
    }
  }

  export = JwksRsaPromisified;
}
