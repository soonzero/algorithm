let fs = require('fs');
let [n, ...words] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = n;

for (let i = 0; i < n; i++) {
	let frequency = {};

	for (let j = 0; j < words[i].length; j++) {
		if (j > 0 && words[i][j - 1] !== words[i][j]) {
			if (frequency[words[i][j]]) {
				count--;
				break;
			}
		}
		frequency[words[i][j]] = (frequency[words[i][j]] || 0) + 1;
	}
}

console.log(count);
