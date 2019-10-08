const fs = require('fs');
const ddbConverter = require('../dynamodb-converter');

// specifiy file route
const raw = fs.readFileSync('../data/links.json');
const file = JSON.parse(raw);

// true adds a UUID prop
const params = ddbConverter.convertArray(file, 'yourTableName', true);

console.log(JSON.stringify(params));

// You can now batch write array items -->

// const AWS = require('aws-sdk');
// AWS.config.update({region: 'SPECIFY-YOUR-REGION'});
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// ddb.batchWriteItem(params, (err, data) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });
