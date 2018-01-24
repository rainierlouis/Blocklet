'use strict';

const usersController = require('./controllers/usersController');
const balancesController = require('./controllers/balancesController');
const MarketController = require('./controllers/market.controller');
const DataController = require('./controllers/data.controller');

const router = require('koa-router')();

const authorize = async (ctx, next) => {
  if (!ctx.user) {
    ctx.status = 401;
    return;
  }

  await next();
};

//CHANGING BALANCES WITHOUT AUTH!!!!!

const routes = function (app) {
  router.post('/auth', usersController.auth);
  router.get('/logout', authorize, usersController.logout);
  router.get('/me', authorize, usersController.me)
        .post('/balances', authorize, balancesController.addBalance)
        .get('/balances', authorize, balancesController.getBalances)
        .post('/data', DataController.addData)
        .get('/data', DataController.getTokens)
        .get('/markets/:period', MarketController.getMarkets);

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
