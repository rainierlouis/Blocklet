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




///


// // Routes
//
// '/markets/:period' // period: hour, day, week, month
//
// // Controller
//
// (ctx, next) => {
//   // month
//   //    match
//   //        timestamp >= timestamp(sameYear, lastMonth, sameDay)
//   //    group
//   //        { id, $dayOfMonth }
//   // -> 28~31 data points
//
//   // week
//   //    match
//   //        timestamp >= currentTimestamp - 1000*3600*24*7
//   //    group
//   //        { id, $dayOfMonth, $hour: { $range: [0-6, 7-12, 13-18, 19-24]} }
//   // -> 7 data points -> 28 points
// }
