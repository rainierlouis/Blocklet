const mongoose = require('mongoose');
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
// User.createUser = () => {}

// TODO: check user method
// User.checkUser = () => {}

module.exports = User;

// Card.getCards = () => {
//   return Card.find({}, (err, data) => {
//     return data;
//   })
// }
//
// Card.newCard = async (body) => {
//   console.log(body);
//   const card = new Card({
//     title: body.title,
//     date: body.date,
//     code: body.code
//   })
//   await card.save();
//   return card;
// }
