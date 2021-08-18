# Proof Of Existence (POE) Webapp

This webapp facilitates the registration and verification of a proof-of-existence for files of all types.
For files that are uploaded for registration, a hash of its content is calculated. This hash is registered on an immutable ledger (blockchain).
When uploading a file for verification, the hash of its content is calculated and the blockchain is checked for this hash. If the hash exists, the file has existed from at latest the point in time where the hash was registered.

This application was implemented using Vue.JS. The app can be served as a static website and has support for multiple configurations for connecting to a blockchain.

TODO: Shortly describe deployment options and refer to deployment chapter


## Dependencies
Note the versions for Node and Yarn in `package.json` and `.nvmrc`.

NVM will find `.nvmrc` and make the correct version of Node active in your terminal:
```bash
nvm use
```

Install the Yarn version mentioned in `package.json`:
```bash
npm install -g yarn@x.y.z
```

Install dependencies
``` bash
yarn
```


## Configurations

### Blockchain Proof / Virtual Data Blockchain

Not implemented yet

### Factom

Not implemented yet

### Blockchange

## Running & Deployment
Serve with hot reload at localhost:3000 for development purposes
```bash
yarn dev
```
Windows:
```bash
yarn win-dev
```

Build for production and launch server on Linux
```bash
yarn build
yarn start
```
Build for production and launch server on Windows
```bash
yarn build-win
yarn start-win
```

```bash
# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
