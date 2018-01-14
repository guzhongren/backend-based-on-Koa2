var router = require('koa-router')();
var User = require('../model/user');
router.get('/', async(ctx, next) => {
  try {
    let result = await User.getUser();
    ctx.body = result;
  }catch(err) {
    console.log('catch', err)
  }
}).post('/', (ctx, next) => {
  ctx.body = {
    username: '阿，希爸',
    age: 31
  }
}).put('/:id', (ctx, next) => {
  ctx.body = ctx.request
})
module.exports = router;
