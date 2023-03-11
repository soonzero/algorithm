let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let array = [];

for (let i = 0; i < input[0].split(' ')[0]; i++) {
	array[i] = i + 1;
}

for (let i = 0; i < input[0].split(' ')[1]; i++) {
	let [a, b] = input[i + 1].split(' ').map(Number);
	let tempArr = array.slice(a - 1, b);
	array.splice(a - 1, b - a + 1, ...tempArr.reverse());
}

console.log(array.join(' '));
