const fs = require('fs');

const fileContent = fs.readFileSync(process.argv[2], 'utf8');
const lineCount = fileContent.split('\n').length - 1;

console.log(lineCount);
