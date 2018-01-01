const Router = require('koa-router'),
      router = new Router();

const UserController = require('./controllers/user.controller');

router
  .post('/check', UserController.checkUser)
  .post('/user', UserController.newUser);

  module.exports = router;
