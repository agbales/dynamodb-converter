// DynamoDB record --> JS object

const ddbConverter = require('../dynamodb-converter');

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

const unconverted = ddbConverter.unconvert(obj);

console.log(unconverted);
