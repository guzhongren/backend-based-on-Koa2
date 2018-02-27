async function Logger (ctx, next) {
  const startDate = new Date()
  next()
  console.log(`method: ${ctx.method} code: ${ctx.status} time:${new Date() - startDate}ms`)
}
export default Logger
