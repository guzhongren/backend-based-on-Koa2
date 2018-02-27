export default (ctx, next) => {
  console.log(ctx)
  return next().catch((err) => {
    console.log('errrr', err)
    if (err.status === 404) {
      ctx.status = 404
      ctx.body = {
        error: err.originalError ? err.originalError.message : err.message
      }
    } else {
      throw err
    }
  })
}
