## Converting JavaScript objects --> DyanmoDB

Convert Javascript objects / JSON files into DynamoDB record formatting. Facilitates putItem or batchWriteItem requests. It also shows how to convert DynamoDB records into JS objects.

## Examples

Find the following in the examples foler:

**Object & Record Conversion**

1. JS Object --> DyanmoDB record
2. DynamoDB record --> JS Object

**Writing to Dynamo -- (optional UUID)**

3. PutItem
4. BatchItemWrite from Array
5. BatchItemWrite from File

## Basic Usage

Batch uploading an array to DyanmoDB:

```
const AWS = require('aws-sdk');
AWS.config.update({region: 'SPECIFY-YOUR-REGION'});
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const json2dynamo = require('json2dynamo')

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
]

const params = json2dynamo.convertData(arr, 'yourTableName');

ddb.batchWriteItem(params, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
```
