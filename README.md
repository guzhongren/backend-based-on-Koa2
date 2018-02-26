# koa2后台设计[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 安装

```shell
yarn install
```

## 启动

```shell
yarn run start
```

## 使用

```shell
curl http://localhost:30000/api/user/
```

![user api](./img/start.png)

## 测试

```shell
yarn run test
```

![test](./img/test.png)

## 覆盖率测试

> 此覆盖率测试不能在Windows平台下运行

```shell
yarn run cover
```

![cover](./img/cover.png)

## 部署

pm2部署前设置

```shell
yarn run deploySetup
```

部署

```shell
yarn run deploy
```

## 访问

```shell
curl http://47.95.247.139/api/
```
