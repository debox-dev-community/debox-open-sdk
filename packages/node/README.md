# DeBox Open SDK

<p align="center">
  <a href="https://github.com/deboxdao/debox-open-sdk/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@deboxdao/debox-open-sdk?label=@deboxdao/debox-open-sdk" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/@deboxdao/debox-open-sdk">
    <img src="https://img.shields.io/npm/dt/@deboxdao/debox-open-sdk.svg" alt="Total Downloads">
  </a>
  <a href="https://github.com/deboxdao/debox-open-sdk/releases">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version" />
  </a>
</p>

**English** | [中文](./README.zh_CN.md)

### Basic introduction

This project is the Nodejs programming interface of Debox social chat service (Chat Service) API, the encapsulation and implementation of Chat Service Rest API, to help Nodejs developers program and use Debox's chat message service faster.

For detailed API interface and meaning, please refer to: [https://docs.deboxdao.xyz](https://docs.deboxdao.xyz)

### Getting Started

Open platform provides Nodejs language version SDK (Software Development Kit)

Nodejs SDK encapsulates all API interfaces of DeBox services, and you can easily call all API interfaces of related services through Nodejs SDK.

<br />

1. Intall `@deboxdao/debox-open-sdk`.

```bash
npm i @deboxdao/debox-open-sdk

# or
pnpm add @deboxdao/debox-open-sdk

# or
yarn add @deboxdao/debox-open-sdk
```

<br />

2. Once you install `@deboxdao/debox-open-sdk` You need to be clear whether you use commonjs or es modules. This SDK supports both, you can refer to the following example to use.

```js
// Commonjs
const { Client } = require('@deboxdao/debox-open-sdk')

// ES modules
import { Client } from '@deboxdao/debox-open-sdk'
```

<br />

3. Next, you can initialize a client instance with your api key and some custom configurations

```js
const data = new Client({
	endpoint: 'https://open.debox.pro',
	apiKey: 'your-api-key',
})
```

<br />

4. The following APIs are currently supported, and more functions will be added in the future.

- Register callback address

```js
const res = await data.sendChatMsg({
  registerUrl: 'your receive message url address'
  httpMethod: 'your receive message http method'
})
```

- send conversation message

```js
const res = await data.sendChatMsg({
	toUserId: '',
	groupId: 'groupId',
	message: 'Hello World',
})
```
