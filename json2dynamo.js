const convertObj = require('json-to-dynamo');
const uuidv4 = require('uuid/v4');
let APPEND_UUID = false;

const convertObjectToPutRequest = obj => {
  let item = convertObj(obj);

  if (APPEND_UUID) {
    item = { ...item, uuid: uuidv4() };
  }

  return {
    PutRequest: {
      Item: convertObj(item)
    }
  };
};

const convertForDynamo = (data, tableName) => {
  const result = {
    [tableName]: data.map(convertObjectToPutRequest)
  };
  return result;
};

const convertData = (array, tableName, uuid = false) => {
  if (!Array.isArray(array)) {
    throw new Error('Must provide array');
  }
  APPEND_UUID = uuid;
  const data = convertForDynamo(array, tableName);
  return JSON.stringify(data, null, 2);
};

module.exports = { convertData };
