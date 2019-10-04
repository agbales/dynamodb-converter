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

console.log(marshalled);
