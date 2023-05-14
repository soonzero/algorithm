let fs = require('fs');
let [, ...cases] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let array = new Array(11);

array[1] = 1;
array[2] = 2;
array[3] = 4;

for (let i = 4; i < 11; i++) {
	array[i] = array[i - 3] + array[i - 2] + array[i - 1];
}

cases.forEach((num) => console.log(array[num]));
