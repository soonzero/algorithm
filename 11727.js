const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString().trim();

let array = new Map();

array.set(1, 1);
array.set(2, 3);

for (let i = 3; i <= n; i++) {
	array.set(i, (array.get(i - 1) + 2 * array.get(i - 2)) % 10007);
}

console.log(array.get(n));
