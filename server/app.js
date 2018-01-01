const Koa = require('koa'),
      cors = require('koa2-cors'),
      bodyParser = require('koa-bodyparser'),
      app = new Koa(),
      router = require('./router');

app
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);

console.log('-----------------');
console.log('listening on 3000');
console.log('-----------------');
