'use strict'
import config from './config/apiConfig'
import IndexRouter from './routes'
import UserRouter from './routes/user'
import compress from 'koa-compress'
import cors from 'koa-cors'
import logger from 'koa-logger'
import serve from 'koa-static'
import Router from 'koa-router'
import path from 'path'
import Koa from 'koa'
// import ErrorHandle from './middleWares/errorHandle'
// import Logger from './middleWares/logger'
const router = Router({
  prefix: config.api.apiPrefix
})
const app = new Koa()
// Logger
app.use(logger())
// 跨域设置
.use(cors())
// app.use(ErrorHandle())

router.use('', IndexRouter.routes())
  .use('/user', UserRouter.routes())
app.use(router.routes())

// Serve static files
.use(serve(path.join(__dirname, 'public')))

// Compress
.use(compress())

.listen(config.api.apiPort)
console.log(`listening on port ${config.api.apiPort}`)

module.exports = app
