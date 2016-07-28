const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = 'bar index';
});

module.exports = router;
