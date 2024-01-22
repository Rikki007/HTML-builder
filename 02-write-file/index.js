const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
fs.writeFile(
  path.join(__dirname, '02-text.txt'),
  '',
  (err) => {
    if (err) throw err;
    console.log('file was creted, ready to record data');
  },
);
stdin.on('data', (data) => {
  fs.appendFile(
    path.join(__dirname, '02-text.txt'),
    data.toString(),
    (err) => {
      if (err) throw err;
      console.log('file was modified');
    },
  );
});