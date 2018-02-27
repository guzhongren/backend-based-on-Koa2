'use strict'
import Router from 'koa-router'
const router = Router()
router.get('/', async(ctx, next) => {
  console.log('coming')
  ctx.body = {
    hello: 'world'
  }
  next()
}).post('/', async(ctx, next) => {
  ctx.body = {
    index: 'index'
  }
})
export default router
