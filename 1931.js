const fs = require('fs');
let [, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

inputs = inputs
	.map((item) => item.split(' ').map(Number))
	.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let answer = 0;
let temp = 0;

inputs.forEach((time) => {
	if (time[0] >= temp) {
		answer++;
		temp = time[1];
	}
});

console.log(answer);
