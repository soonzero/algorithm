const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +inputs[0];
const S = inputs[2];
const Pn = 'IO'.repeat(N) + 'I';

let toggle = false;
let count = 1;
let answer = 0;

for (let i = 0; i < S.length; i++) {
	if (!toggle && S[i] === 'I') toggle = true;
	else if (toggle && S[i - 1] !== S[i]) count++;
	else {
		const diff = count - Pn.length;
		if (diff >= 0) answer += Math.floor(diff / 2) + 1;
		count = 1;
		if (S[i] === 'O') toggle = false;
	}
}

if (count >= Pn.length) answer += Math.floor((count - Pn.length) / 2) + 1;

console.log(answer);
