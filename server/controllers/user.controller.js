const User = require('../model/userSchema');

const checkUser = async (ctx) => {
  try {
    const user = await User.checkUser();
    ctx.send(user);
  } catch (e) { }
}

const newUser = async (ctx) => {
  try {
    ctx.response.body = await User.createUser(ctx.request.body);
    await ctx.send(ctx.response.body);
  } catch (e) { }
}

module.exports = {
	checkUser,
	newUser
}
