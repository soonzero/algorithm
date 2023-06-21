const fs = require('fs');
let [, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];

function getDistance(a, b, c) {
	let distance = 0;

	for (let i = 0; i < 4; i++) {
		distance += (a[i] !== b[i]) + (b[i] !== c[i]) + (c[i] !== a[i]);
	}

	return distance;
}

for (let i = 0; i < inputs.length / 2; i++) {
	const mbtis = inputs[i * 2 + 1].split(' ');

	if (mbtis.length > 32) {
		answer.push(0);
		continue;
	}

	let result = Infinity;

	for (let j = 0; j < mbtis.length; j++) {
		for (let x = j + 1; x < mbtis.length; x++) {
			for (let y = x + 1; y < mbtis.length; y++) {
				result = Math.min(result, getDistance(mbtis[j], mbtis[x], mbtis[y]));
			}
		}
	}

	answer.push(result);
}

console.log(answer.join('\n').trim());
