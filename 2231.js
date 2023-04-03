let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = 0;
const numStr = String(N);

for (i = N - numStr.length * 9; i > 0; i--) {
	let sum = i;
	for (let j = 0; j < numStr.length; j++) {
		sum += Number(String(i)[j]);
	}
	if (sum === N) {
		answer = i;
		break;
	}
}

console.log(answer);
