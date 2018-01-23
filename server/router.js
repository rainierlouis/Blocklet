const Router = require('koa-router'),
      router = new Router();

const UserController = require('./controllers/user.controller');
const MarketController = require('./controllers/market.controller');
const DataController = require('./controllers/data.controller');

router
  .post('/check', UserController.checkUser)
  .post('/user', UserController.newUser)
  .post('/data', DataController.addData)
  .get('/markets/:period', MarketController.getMarkets);

module.exports = router;
