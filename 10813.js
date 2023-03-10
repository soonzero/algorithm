let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const array = [];

for (let i = 0; i < Number(input[0].split(' ')[0]); i++) {
	array.push(i + 1);
}

for (let m = 0; m < input[0].split(' ')[1]; m++) {
	let [i, j] = input[m + 1].split(' ').map(Number);
	[array[i - 1], array[j - 1]] = [array[j - 1], array[i - 1]];
}

console.log(array.join(' ').trim());
