import Router from 'koa-router'
import User from '../model/user'
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
    // return console.log('cucuo', err)
    ctx.status = 500
    ctx.body = err
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
