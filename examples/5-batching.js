const fs = require('fs');
const ddbConverter = require('../dynamodb-converter');

// Generate exmaple array
let largeArray = [];
for (let i = 0; i < 30; i++) {
  largeArray.push({ id: i, price: Math.floor(Math.random() * 100) });
}

// Default batch of 25 (DynamoDB limit)
const batch = ddbConverter.batch(largeArray, 25);
console.log(batch);

// true adds a UUID prop
batch.map((entries, index) => {
  console.log(`BATCH #${index + 1}`);
  const params = ddbConverter.convertArray(entries, 'yourTableName', true);
  console.log(JSON.stringify(params));
});
