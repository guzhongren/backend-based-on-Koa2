'use strict';
exports.getUser = async(ctx, next) => {
  ctx.body = {
    status: 1,
    data: {
      userName: "test",
      id: 1
    }
  }
  next();
};
