const ddbConverter = require('../dynamodb-converter');

const arr = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  }
];

// true adds a UUID prop
const params = ddbConverter.convertArray(arr, 'yourTableName', true);

console.log(params);

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
