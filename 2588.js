let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [A, B] = input;

console.log(`${Number(A) * Number(B[B.length - 1])}
${Number(A) * Number(B[B.length - 2])}
${Number(A) * Number(B[0])}
${Number(A) * Number(B)}`);
