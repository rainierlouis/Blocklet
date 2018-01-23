const monk = require('monk');
const db = monk('localhost/balances');

const Balance = db.get('balances');

const addBalance = (ctx) => {
  console.log(ctx.request.body);
}

const getBalances = (ctx) => {

}

module.exports = {
  addBalance, getBalances
}
