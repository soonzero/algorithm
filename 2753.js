let fs = require('fs');
let year = Number(fs.readFileSync('/dev/stdin').toString().trim());

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) console.log(1);
else console.log(0);
