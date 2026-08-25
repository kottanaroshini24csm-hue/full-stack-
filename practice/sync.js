const fs = require('fs');
try {
  const data = fs.readFileSync('task.txt', 'utf8');
  console.log(data); // "Hello, this is a text file."
} catch (err) {
  console.error(err);
}
const fs = require('fs');
try {
  fs.writeFileSync('newfile.txt', 'This is new content.');
  console.log('File saved synchronously.');
} catch (err) {
  console.error(err);
}




