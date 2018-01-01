const mongoose = require('../db');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true},
    password: {type: String, required: true},
    label: {type: String, required: true},
				address: {type: String, required: true}
})

const User = mongoose.model('user', userSchema);

// TODO: create user method
User.createUser = async (body) => {
	console.log('hi, create user!');
	const user = new User({
		username: body.username,
		password: body.password,
		label: body.label,
		address: body.address
	})
	await user.save();
	return user;
};

// TODO: check user method
User.checkUser = async (username, password) => {
	const userList = await User.find({}, (err, data) => data);
	const user = await userList.filter(entry => {
		return entry.username === username && entry.password === password ?
		entry : false;
	})
	return user;
}

module.exports = User;
