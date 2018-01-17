const Koa = require('koa')
const app = new Koa()

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  console.log('x-respon.....')
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logger

app.use(async (ctx, next) => {
  console.log('loger.....')
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}, testst`)
})

// response

app.use(async ctx => {
  console.log('response')
  ctx.body = 'Hello World'
})

app.listen(3000)
