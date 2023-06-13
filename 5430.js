let fs = require('fs');
let [T, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let answer = [];

for (let i = 0; i < T; i++) {
	let [p, n, array] = inputs.splice(0, 3);
	let isReversed = false;
	let stop = false;
	array = array.slice(1, -1).split(',');

	for (let func of p) {
		if (func === 'R') isReversed = !isReversed;
		else {
			if (n === '0') {
				answer.push('error');
				stop = true;
				break;
			}

			if (array.length === 0) {
				answer.push('error');
				stop = true;
				break;
			}

			if (isReversed) array.pop();
			else array.shift();
		}
	}

	if (!stop)
		answer.push(`[${(isReversed ? array.reverse() : array).join(',')}]`);
}

console.log(answer.join('\n').trim());
