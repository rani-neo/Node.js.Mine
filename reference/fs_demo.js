const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test', 'hello.txt');
const contentToWrite = 'Hello world!';

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      // File doesn't exist, so create it and write the content
      fs.writeFile(filePath, contentToWrite, 'utf8', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File created and written to...');
        }
      });
    } else {
      console.error('Error checking file:', err);
    }
  } else {
    // File already exists, so append the content
    fs.appendFile(filePath, ' I love Node.js', 'utf8', (err) => {
      if (err) {
        console.error('Error appending to file:', err);
      } else {
        console.log('Content appended.');
      }
    });
  }
});

fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) {
    throw err; // This will terminate your script on error
  }
  console.log(data); // Log the content of the file, not just the string 'data'
});
// Rename file 
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err =>  {
    if (err) throw err;
    console.log('file renamed...');
  }
);



