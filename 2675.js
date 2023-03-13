let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for (let i = 0; i < Number(input[0]); i++) {
	let [R, S] = input[i + 1].split(' ');
	let str = '';

	for (let k = 0; k < S.length; k++) {
		for (let j = 0; j < Number(R); j++) {
			str += S[k];
		}
	}

	result.push(str);
}

console.log(result.join('\n').trim());
