let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [A, B, C] = input;

console.log(`${(Number(A) + Number(B)) % Number(C)}
${((Number(A) % Number(C)) + (Number(B) % Number(C))) % Number(C)}
${(Number(A) * Number(B)) % Number(C)}
${((Number(A) % Number(C)) * (Number(B) % Number(C))) % Number(C)}`);
