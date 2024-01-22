const fs = require('fs');
const readFile = fs.createReadStream('./01-read-file/text.txt', 'utf-8');
let data = '';
readFile.on('data', (chunk) => {
  data += chunk;
});
readFile.on('end', () => {
  console.log(data);
});
readFile.on('error', (error) => {
  console.log('error, may be wrong directory in terminal', error.massage);
});