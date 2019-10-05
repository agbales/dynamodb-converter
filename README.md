## Converting JavaScript objects --> DyanmoDB

Convert Javascript objects / JSON files into DynamoDB record formatting. Facilitates putItem or batchWriteItem requests. It also shows how to convert DynamoDB records into JS objects.

## Installation

```
npm install dynamodb-converter
```

## Basic Usage

```
const ddbConverter = require('../dynamodb-converter')

const obj = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
}

console.log(converted)
```

Output:

```
{
  userId: {
    N: '1'
  },
  id: {
    N: '1'
  },
  title: {
    S: 'delectus aut autem'
  },
  completed: {
    BOOL: false
  }
}
```

## Usage

### .convert

JavaScript object -> DyanmoDB record. Optional UUID (default=false).

```
.convert(object, uuid)
```

From:

```
{ userID: 1 }
```

To:

```
{
  userId: {
    N: '1'
  }
}
```

### .unconvert

DynamoDB record --> Javascript object.

```
.unconvert(object)
```

From:

```
{
  userId: {
    N: '1'
  }
}
```

To:

```
{ userID: 1 }
```

### .convertArray

JavaScript object -> DyanmoDB record BatchItemWrite. Optional UUID (default=false).

```
.convertArray(array, 'TABLE-NAME', uuid)
```

From:

```
[{ userID: 1, name: "Julia" }, {userID: 2, name: "Niko" }]
```

To:

```
{
  "yourTableName": [
    {
      "PutRequest": {
        "Item": {
          "userID": {
            "M": {
              "N": {
                "S": "1"
              }
            }
          },
          "name": {
            "M": {
              "S": {
                "S": "Julia"
              }
            }
          }
        }
      }
    },
    {
      "PutRequest": {
        "Item": {
          "userID": {
            "M": {
              "N": {
                "S": "2"
              }
            }
          },
          "name": {
            "M": {
              "S": {
                "S": "Niko"
              }
            }
          }
        }
      }
    }
  ]
}
```

## Examples

**Reading & Writing to Dynamo (with optional UUID)**

1. JS object --> DyanmoDB record (PutItem)
2. DynamoDB record --> JS object
3. BatchItemWrite from Array
4. BatchItemWrite from File
