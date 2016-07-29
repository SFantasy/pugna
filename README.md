Pugna
---

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/pugna.svg?style=flat
[npm-url]: https://npmjs.org/package/pugna

An Extensible Node.js Web Architecture

## Install

```sh
npm i pugna -S
```

## Usage

Pugna extends [Koa2](https://github.com/koajs/koa#koa-v2) and you can use it same as Koa: 

```js
const Pugna = require('pugna');
const app = new Pugna();

app.use(ctx => {
  ctx.body = 'Hello Pugna!';
});
```

### `loadModules`

Pugna provides a function for dynamic loading modules:

```js
app.loadModules(app, __dirname);
```

### Appointment

Using `loadModules` should have the following appointment:

- Use `koa-router`
- Each module's name would be used in the application's route rules
- Each module should have `routes` folder and exports the router:

```js
const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = 'bar index';
});

module.exports = router;
```

## Example

See [example](/example).

## License

The [MIT License](LICENSE)
