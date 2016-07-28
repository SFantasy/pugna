const config = require('./config.json');
const Pugna = require('../lib');
const app = new Pugna();
const router = require('koa-router')();

router.get('/', ctx => {
  ctx.body = 'Hello Pugna';
});

app.use(router.routes());

app.loadModules(app, __dirname);

app.listen(config.port);
