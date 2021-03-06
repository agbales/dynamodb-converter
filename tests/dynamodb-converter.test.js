const ddbConverter = require('../dynamodb-converter');

describe('Convert & Unconvert', () => {
  test('Converts JS objects to DynamoDB records', () => {
    expect(ddbConverter.convert({ name: 'test' })).toEqual({
      name: { S: 'test' }
    });
  });

  test('Converts JS objects to DynamoDB records with UUID', () => {
    expect(ddbConverter.convert({ name: 'test' }, true)).toHaveProperty('uuid');
  });

  test('Unconverts DyanmoDB records correctly', () => {
    expect(
      ddbConverter.unconvert({
        name: { S: 'test' }
      })
    ).toEqual({ name: 'test' });
  });
});

describe('Table Params', () => {
  beforeEach(() => {
    return (arr = [{ userID: 1, name: 'Julia' }, { userID: 2, name: 'Niko' }]);
  });

  test('Creates batch write params for array of objects', () => {
    const result = {
      RequestItems: {
        yourTableName: [
          {
            PutRequest: {
              Item: {
                userID: {
                  N: '1'
                },
                name: {
                  S: 'Julia'
                }
              }
            }
          },
          {
            PutRequest: {
              Item: {
                userID: {
                  N: '2'
                },
                name: {
                  S: 'Niko'
                }
              }
            }
          }
        ]
      }
    };
    expect(ddbConverter.convertArray(arr, 'yourTableName')).toEqual(result);
  });

  test('Creates batch write params for array of objects with UUID', () => {
    expect(
      ddbConverter.convertArray(arr, 'yourTableName', true).RequestItems
        .yourTableName[0].PutRequest.Item
    ).toHaveProperty('uuid');
  });
});

describe('Batching', () => {
  let largeArray;

  beforeEach(() => {
    largeArray = [];
    for (let i = 0; i < 30; i++) {
      largeArray.push({ sample: true });
    }
  });
  test('Returns batch of 25 by default', () => {
    expect(ddbConverter.batch(largeArray).length).toEqual(2);
  });
  test('Returns specified num batch', () => {
    let batchSize = 2;
    expect(ddbConverter.batch(largeArray, batchSize).length).toEqual(15);
  });
});
