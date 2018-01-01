const User = require('../model/userSchema');

const checkUser = async (ctx) => {
  try {
			let userDetails = ctx.request.body;
    ctx.response.body = await User.checkUser(userDetails.username, userDetails.password);
    await ctx.send(ctx.response.body);
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
