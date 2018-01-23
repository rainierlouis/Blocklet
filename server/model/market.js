// const db = require('monk')('localhost/tokens'); //coin tokens
// const tokens = db.get('tokens')
//
// const getMarkets = async (ctx) => {
//   console.log(ctx.params.period);
//   try {
//     let res await db.tokens.aggregate([
//       {
//         $group: {
//           _id: {
//             id: "$id",
//             year: { $year: "$timestamp" },
//             day: { $dayOfMonth: "$timestamp" },
//             hour: { $hour: "$timestamp" },
//             minute: { $minute: "$timestamp" }
//           },
//           value: { $avg: "$price" }
//         }
//       }
//     ])
//     console.log(res);
//     return res;
//   }
//   .catch(function (error) {
//     console.log(error);
//   });
// }
//
// module.exports = {
//   getMarkets
// }

// ?=hour
// ?=day
// ?=week
// ?=month
