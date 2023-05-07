# DeBox 开放 SDK

> DeBox Open SDK: DeBox 开放 SDK，专为方便Nodejs开发者打造

<p align="center">
  <a href="https://github.com/deboxlove/debox-open-sdk/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/debox-open-sdk?label=debox-open-sdk" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/debox-open-sdk">
    <img src="https://img.shields.io/npm/dt/debox-open-sdk.svg" alt="Total Downloads">
  </a>
  <a href="https://github.com/deboxlove/debox-open-sdk/releases">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version" />
  </a>
</p>

**中文** | [English](./README.md)

### 基础介绍

本项目是Debox社交聊天服务（Chat Service）API的Nodejs编程接口，Chat Service Rest API的封装和实现，帮助Nodejs开发人员更快编程使用Debox的聊天消息服务。

详细API接口以及含义请参考：[https://docs.debox.love](https://docs.debox.love)

### 入门

开放平台提供Nodejs语言版SDK（Software Development Kit）

Nodejs SDK封装了DeBox服务的所有API接口，您可以通过Nodejs SDK轻松调用相关服务的所有API接口。

<br />

1. 安装 `debox-open-sdk`.

```bash
npm i debox-open-sdk

# 或者
pnpm add debox-open-sdk

# 或者
yarn add debox-open-sdk
```

<br />

2. 一旦你安装了`debox-open-sdk` 你需要清楚你使用的是commonjs还是es模块。 本SDK同时支持，您可以参考下面的例子使用：

```js
// Commonjs
const { Client } = require('debox-open-sdk')

// ES modules
import { Client } from 'debox-open-sdk'
```

<br />

3. 接下来，您可以使用您的 api 密钥和一些自定义配置来初始化客户端实例

```js
const data = new Client({
	endpoint: 'https://open.debox.pro',
	apiKey: 'your-api-key',
})
```

<br />

4. 目前支持以下API，后续会增加更多功能。

- 注册回调地址

```js
const res = await data.sendChatMsg({
  registerUrl: 'your receive message url address'
  httpMethod: 'your receive message http method'
})
```

- 发送对话消息

```js
const res = await data.sendChatMsg({
	toUserId: '',
	groupId: 'groupId',
	message: 'Hello World',
})
```
