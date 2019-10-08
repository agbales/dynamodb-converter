// - JS Object --> DynamoDB Record
// - PutItem request for a single object
// - Be sure to specify TABLENAME

const ddbConverter = require('../dynamodb-converter');

const obj = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
};

// Add UUID by changing false -> true
const converted = ddbConverter.convert(obj, false);

console.log(converted);

// - You can now PutItem to DyanmoDB -->

// const AWS = require('aws-sdk');
// AWS.config.update({region: 'SPECIFY-YOUR-REGION'});
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// dynamodb.putItem(params, function(err, data) {
//   if (err) console.log(err, err.stack);
//   else     console.log(data);
// });
