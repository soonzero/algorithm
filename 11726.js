const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString().trim();

// let array = new Array(n + 1).fill(0);

// array[1] = 1;
// array[2] = 2;

// for (let i = 3; i <= n; i++) {
// 	array[i] = (array[i - 1] + array[i - 2]) % 10007;
// }

// console.log(array[n]);

let array = new Map();

array.set(1, 1);
array.set(2, 2);

for (let i = 3; i <= n; i++) {
	array.set(i, (array.get(i - 1) + array.get(i - 2)) % 10007);
}

console.log(array.get(n));
