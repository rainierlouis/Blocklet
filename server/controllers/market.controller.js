const db = require('monk')('localhost/tokens'); //coin tokens
const tokens = db.get('tokens');

const model = require('../model/market.js');


const getMarkets = async (ctx) => {
  try {
    // console.log(ctx.params.period);
    // switch(ctx.params.period) {
    //   case 'hour':
    //     break;
    //   case 'day':
    //     break;
    //   case 'week':
    //     break;
    //   case 'month':
    //     break;
    //   default:
    //     console.log('Wrong endpoint');
    // }
    ctx.response.body = await tokens.aggregate([
      {
        $group: {
          _id: {
            id: "$id",
            year: { $year: "$timestamp" },
            day: { $dayOfMonth: "$timestamp" },
            hour: { $hour: "$timestamp" },
            minute: { $minute: "$timestamp" }
          },
          value: { $avg: "$price" }
        }

      }
    ])
    let hour = await tokens.aggregate([
      {
        $sort: { timestamp: -1 },
        prices: { $objectToArray: "$price" },
        $range: [-1, -13],
        // value: { $avg: "$price" }

      }
    ])
    console.log(hour);
    await ctx.send(ctx.response.body);
  } catch (e) { }
}

module.exports = {
  getMarkets,
}
