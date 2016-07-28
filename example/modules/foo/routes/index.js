const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = 'foo index';
});

module.exports = router;
