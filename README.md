## Converting JavaScript objects --> DyanmoDB

This repo provides examples of basic transforamtions of Javascript objects or JSON files to prepare them for DynamoDB putItem or batchWriteItem requests. It also shows how to convert DynamoDB records into JS objects.

## Examples

Object & Record Conversion

1 - JS Object --> DyanmoDB record
2 - DynamoDB record --> JS Object

Writing to Dynamo

3 - PutItem (optional UUID)
4 - BatchItemWrite from Array (optional UUID)
5 - BatchItemWrite from File (opitonal UUID)

## Basic Usage

```
var AWS = require('aws-sdk');
AWS.config.update({region: 'SPECIFY-YOUR-REGION'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

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
