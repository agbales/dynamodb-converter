const AWS = require('aws-sdk');
const convertObj = require('json-to-dynamo');
const uuidv4 = require('uuid/v4');
let APPEND_UUID = false;

const convertObjectToPutRequest = obj => {
  let item = convertObj(obj);

  if (APPEND_UUID) {
    item = { ...item, uuid: { S: uuidv4() } };
  }

  return {
    PutRequest: {
      Item: item
    }
  };
};

const convertForDynamo = (data, tableName) => {
  const result = {
    RequestItems: {
      [tableName]: data.map(convertObjectToPutRequest)
    }
  };
  return result;
};

const convertArray = (array, tableName, uuid = false) => {
  if (!Array.isArray(array)) {
    throw new Error('Must provide array');
  }
  APPEND_UUID = uuid;
  const data = convertForDynamo(array, tableName);
  return data;
};

const convert = (obj, uuid = false) => {
  let marshalled = AWS.DynamoDB.Converter.marshall(obj);
  if (uuid) {
    marshalled = { ...marshalled, uuid: { S: uuidv4() } };
  }
  return marshalled;
};

const unconvert = obj => {
  return AWS.DynamoDB.Converter.unmarshall(obj);
};

const batch = (array, number = 25) => {
  return array.chunk(number);
};

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    let temporal = [];

    for (let i = 0; i < this.length; i += chunkSize) {
      temporal.push(this.slice(i, i + chunkSize));
    }

    return temporal;
  }
});

module.exports = { convertArray, convert, unconvert, batch };
