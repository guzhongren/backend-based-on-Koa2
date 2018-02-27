'use strict'
import config from './config/apiConfig'
import IndexRouter from './routes'
import UserRouter from './routes/user'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import cors from 'koa-cors'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import serve from 'koa-static'
import Router from 'koa-router'
import path from 'path'
import Koa from 'koa'
import ErrorHandle from './middleWares/errorHandle'

const router = Router({
  prefix: config.api.apiPrefix
})
const app = new Koa()

app.use(ErrorHandle)
.use(logger())
.use(bodyParser())
.use(helmet())
.use(cors())

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
