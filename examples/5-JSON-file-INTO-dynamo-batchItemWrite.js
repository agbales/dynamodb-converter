const fs = require('fs');
const json2dynamo = require('../json2dynamo');

// specifiy file route
const raw = fs.readFileSync('../data/links.json');
const file = JSON.parse(raw);

// true adds a UUID prop
const params = json2dynamo.convertData(file, 'yourTableName', true);

console.log(params);

// Batch Write Items -->

// AWS.config.update({region: 'SPECIFY-YOUR-REGION'});
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// ddb.batchWriteItem(params, (err, data) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });
