'use strict';

const usersController = require('./controllers/usersController');
// const usersController = require('./controllers/dataController');

const router = require('koa-router')();

const authorize = async (ctx, next) => {
  if (!ctx.user) {
    ctx.status = 401;
    return;
  }

  await next();
};

const routes = function (app) {
  router.post('/auth', usersController.auth);
  router.get('/logout', authorize, usersController.logout);
  router.get('/me', authorize, usersController.me);
  // router.get('/balance', authorize, usersController.getBalance);
  // router.get('/markets/:period', authorize, dataController.getçmarkets);

  router.options('/', options);
  router.trace('/', trace);
  router.head('/', head);

  app
    .use(router.routes())
    .use(router.allowedMethods());

  return app;
};


const head = async () => {
  return;
};

const options = async () => {
  this.body = 'Allow: HEAD,GET,PUT,DELETE,OPTIONS';
};

const trace = async () => {
  this.body = 'Smart! But you can\'t trace.';
};

module.exports = routes;
