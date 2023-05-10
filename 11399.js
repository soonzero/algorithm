let fs = require('fs');
let [N, times] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

times = times
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);

const getTime = (num) => {
	if (num === 1) return times[0];
	return times[num - 1] + getTime(num - 1);
};

let sum = 0;

for (let i = 0; i < +N; i++) {
	sum += getTime(i + 1);
}

console.log(sum);
