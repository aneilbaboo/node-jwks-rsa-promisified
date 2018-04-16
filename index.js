"use strict";

module.exports = (function () {
  const Promise = require("bluebird");
  const jwksRSA = require("jwks-rsa");

  const constructor = function JwksClientPromisified(options) {
    const client = jwksRSA(options);
    client.getSigningKeyAsync = Promise.promisify(client.getSigningKey);
    client.getSigningKeysAsync = Promise.promisify(client.getSigningKeys);
    client.getKeysAsync = Promise.promisify(client.getKeys);
    return client;
  }

  constructor.ArgumentError = jwksRSA.ArgumentError;
  constructor.JwksError = jwksRSA.JwksError;
  constructor.JwksRateLimitError = jwksRSA.JwksRateLimitError;
  constructor.SigningKeyNotFoundError = jwksRSA.SigningKeyNotFoundError;

  constructor.expressJwtSecret = jwksRSA.expressJwtSecret;
  constructor.hapiJwt2Key = jwksRSA.hapiJwt2Key;
  constructor.koaJwtSecret = jwksRSA.koaJwtSecret;

  return constructor;
})();
