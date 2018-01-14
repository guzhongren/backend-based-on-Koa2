'use strict';
var config = require('./config/apiConfig');
var IndexRouter = require('./routes');
var UserRouter = require('./routes/user');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const router = require('koa-router')({
  prefix: config.api.apiPrefix
});
const Koa = require('koa');
const path = require('path');
const app = module.exports = new Koa();
// Logger
app.use(logger());

router.use('/', IndexRouter.routes());
router.use('/user', UserRouter.routes());
app.use(router.routes());

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(config.api.apiPort);
  console.log(`listening on port ${config.api.apiPort}`);
}
