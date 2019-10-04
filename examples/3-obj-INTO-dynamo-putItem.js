// Documentation on AWS.DynamoDB.Converter.marshall() at:
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write-batch.html

const AWS = require('aws-sdk');

const obj = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
};

const marshalled = AWS.DynamoDB.Converter.marshall(obj);

const params = {
  TableName: 'yourTableName',
  Item: marshalled
};

console.log(params);

// Putitem to DyanmoDB...
// dynamodb.putItem(params, function(err, data) {
//   if (err) console.log(err, err.stack);
//   else     console.log(data);
// });
