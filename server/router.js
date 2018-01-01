const Router = require('koa-router'),
      router = new Router();

const UserController = require('./controllers/user.controller');

router
  .get('/user', UserController.checkUser)
  .post('/new', UserController.newUser);

  module.exports = router;
