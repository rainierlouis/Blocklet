const axios = require('axios');
const tokens = require('../data/tokens.js');
const db = require('monk')('localhost/tokens'); //coin tokens
const _ = require('lodash');
const model = require('../model/market.js');

//HERE WE FETCH DATA FOR THE HISTORICAL MARKET API

const token = db.get('tokens')

function api(id) {
  return `https://api.coinmarketcap.com/v1/ticker/${id}`;
}

const fetchData = (id) => {
  return axios.get(api(id))
    .then(function (response) {
      return response.data[0];
    })
    .catch(function (error) {
      console.log(error);
    });
}

const addData = async (id) => {
  let res = await fetchData(id);
  console.log('---------TOKEN---------');
  console.log('NAME               ',res.name);
  console.log('ID                 ',res.id);
  console.log('PRICE              ',res.price_usd);
  console.log('TIMESTAMP          ', res.last_updated);
  console.log('PARSED TIMESTAMP   ', new Date(res.last_updated*1000));
  token.insert({
    name: res.name,
    id: res.id,
    price: parseFloat(res.price_usd),
    timestamp: new Date(res.last_updated*1000)
  });
}

const queryTokens  = async (token) => {
  let data = token.map((x) => {
    addData(x.id);
  })
}

setInterval(() => {queryTokens(tokens)}, 300000);

const readDB = () => {
  token.find({ id: 'bitcoin' }).then(res => {
    let data = _.sortBy(res, [(o) => { return o.price; }])
    // console.log(data);
  })
}

const getTokens = async (ctx) => {
    try {
      console.log(tokens);
      let res = await tokens;
      // console.log(res);
      ctx.response.body = res;
      ctx.send(ctx.response.body);
    } catch (e) { }
}

// readDB();

//HOMEMADE API
//Mins in a month 43800; (5 * 8760);
//Mins in a week 10080; (5 * 2016);
//Mins in a day 1440; (5 * 288);
//Mins in a hour 60; ( 5 * 12);

// const getMarkets = (ctx) => {
//   console.log(ctx.params.period);
//   model.getMarkets(ctx);
// }


module.exports = {
fetchData, addData, getTokens,
}
