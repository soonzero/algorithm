let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

let frequency = {};
let max = 0;

for (let char of [...input]) {
	frequency[char] = (frequency[char] || 0) + 1;
}

for (let char in frequency) {
	if (max < frequency[char]) max = frequency[char];
}

console.log(
	Object.keys(frequency).filter((key) => frequency[key] === max).length > 1
		? '?'
		: Object.keys(frequency).find((key) => frequency[key] === max)
);
