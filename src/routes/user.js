import Router from 'koa-router'
import User from '../model/userModel'
const router = Router()

router.get('/', async (ctx, next) => {
  await new User().getUsers().then((res) => {
    ctx.status = 200
    ctx.body = res
    // 测试
    // ctx.status = 200
    // ctx.body = {
    //   'user': 'a'
    // }
  }, (err) => {
    ctx.status = err.status
    ctx.body = err.message
  })
}).post('/', (ctx, next) => {
  ctx.body = {
    username: '阿，希爸',
    age: 31
  }
}).put('/:id', (ctx, next) => {
  ctx.body = ctx.request
})
export default router
