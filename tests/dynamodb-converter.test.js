const ddbConverter = require('../dynamodb-converter.js');

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
      yourTableName: [
        {
          PutRequest: {
            Item: {
              userID: {
                M: {
                  N: {
                    S: '1'
                  }
                }
              },
              name: {
                M: {
                  S: {
                    S: 'Julia'
                  }
                }
              }
            }
          }
        },
        {
          PutRequest: {
            Item: {
              userID: {
                M: {
                  N: {
                    S: '2'
                  }
                }
              },
              name: {
                M: {
                  S: {
                    S: 'Niko'
                  }
                }
              }
            }
          }
        }
      ]
    };
    expect(ddbConverter.convertArray(arr, 'yourTableName')).toEqual(result);
  });

  test('Creates batch write params for array of objects with UUID', () => {
    expect(
      ddbConverter.convertArray(arr, 'yourTableName', true).yourTableName[0]
        .PutRequest.Item
    ).toHaveProperty('uuid');
  });
});
