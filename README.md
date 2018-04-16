# jwks-rsa-promisified

Add promisified methods to [auth0/node-jwks-rsa](https://github.com/auth0/node-jwks-rsa)

## Install
```shell
npm install jwks-rsa-promisified
```

## Example
```javascript
const jwksClient = require('jwks-rsa-promisified');

const client = jwksClient({
  strictSsl: true, // Default value
  jwksUri: 'https://sandrino.auth0.com/.well-known/jwks.json'
});

async function retrieveKey() {
  const kid = 'RkI5MjI5OUY5ODc1N0Q4QzM0OUYzNkVGMTJDOUEzQkFCOTU3NjE2Rg';
  const key = await client.getSigningKeyAsync(kid);
  return key.publicKey || key.rsaPublicKey;
}
```

## Additional methods

```typescript
// type Jwk {
//   kid: string;
//   nbf?: number;
//   publicKey?: string;
//   rsaPublicKey?: string;
// }
client.getSigningKeyAsync(key); // => Promise<Jwk>
client.getSigningKeysAsync(); // => Promise<Jwk[]>
client.getKey(); // => Promise<Jwk>
```