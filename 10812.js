let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for (let i = 0; i < Number(input[0].split(' ')[0]); i++) {
	result.push(i + 1);
}

for (let x = 0; x < Number(input[0].split(' ')[1]); x++) {
	let [i, j, k] = input[x + 1].split(' ').map(Number);
	let temp = result.slice(k - 1, j).concat(result.slice(i - 1, k - 1));
	result.splice(i - 1, j - i + 1, ...temp);
}

console.log(result.join(' '));
