let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let [A, B] = input;

console.log(`${Number(A) + Number(B)}
${Number(A) - Number(B)}
${Number(A) * Number(B)}
${Math.floor(Number(A) / Number(B))}
${Number(A) % Number(B)}`);
