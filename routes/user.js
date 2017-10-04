var router = require("koa-router")();
var User = require("../model/user");
router.get("/", User.getUser).post('/', async(ctx, next) => {
  ctx.body = {
    username: '阿，希爸',
    age: 31
  }
}).put('/:id', async(ctx, next) => {
  ctx.body = ctx.request
})
module.exports = router;
