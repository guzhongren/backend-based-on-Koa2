var router = require("koa-router")();
router.get("/", async(ctx, next) => {
  ctx.body = {
    hello: "world"
  };
  next();
}).post("/", (ctx, next) => {
  ctx.body={
    index: "index"
  }
});
module.exports = router;
