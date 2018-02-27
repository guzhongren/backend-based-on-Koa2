import Router from 'koa-router'
// import User from '../model/user'
const router = Router()

router.get('/', async(ctx, next) => {
  try {
    // let result = await User.getUser()
    // ctx.body = result
    // 测试
    ctx.status = 200
    ctx.body = {
      'user': 'a'
    }
  } catch (err) {
    console.log('catch', err)
    ctx.status = 404
    ctx.body = '未找到到啊。。'
  }
}).post('/', (ctx, next) => {
  ctx.body = {
    username: '阿，希爸',
    age: 31
  }
}).put('/:id', (ctx, next) => {
  ctx.body = ctx.request
})
export default router
