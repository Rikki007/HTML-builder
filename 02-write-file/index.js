const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = process;
const rl = readline.createInterface(stdin, stdout);

// greetings
console.log('Hi');

// create file or say that file is already exist
fs.readFile(
  path.join(__dirname, '02-text.txt'),
  "utf-8",
  (err, data) => {
    
    if (err) {
      fs.writeFile(
        path.join(__dirname, '02-text.txt'),
        '',
        (err) => {
          if (err) throw err;
          console.log("File was created, ready to update file");
        },
      );
    }
    if (!err) {
      console.log('File is exist, ready to update file');
    }
  },
);

// check enter value
rl.on('line', (data) => {
  if (data.toString() === 'exit') {
    console.log('bye');
    rl.close();
  }
  fs.appendFile(
    path.join(__dirname, '02-text.txt'),
    data + '\n',
    (err) => {
      if (err) throw err;
      console.log('file was modified');
    },
  );
});

// exit if press ctrl+c
rl.on('SIGINT', () => {
  console.log('bye');
  rl.close();
})

rl.on('close', () => {
  process.exit();
});

