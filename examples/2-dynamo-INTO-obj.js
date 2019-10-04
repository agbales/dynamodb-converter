// Documentation on AWS.DynamoDB.Converter.unmarshall() at:
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write-batch.html

const AWS = require('aws-sdk');

const obj = {
  userId: {
    N: '1'
  },
  id: {
    N: '10'
  },
  title: {
    S: 'illo est ratione doloremque quia maiores aut'
  },
  completed: {
    BOOL: true
  }
};

const unmarshalled = AWS.DynamoDB.Converter.unmarshall(obj);

console.log(unmarshalled);
