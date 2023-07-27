const fs = require('fs');
const [N, ...fileNames] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let result = '';

for (let i = 0; i < fileNames[0].length; i++) {
	let same = true;

	for (let j = 0; j < N - 1; j++) {
		if (fileNames[j][i] !== fileNames[j + 1][i]) {
			same = false;
			break;
		}
	}

	if (same) result += fileNames[0][i];
	else result += '?';
}

console.log(result);
