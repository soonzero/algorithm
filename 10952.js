let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let i = 0; i < input.length; i++) {
	let [A, B] = input[i].split(' ').map((n) => +n);
	if (A === 0 && B === 0) break; // break랑 return 헷갈리지 말기
	result += `${A + B}\n`;
}

console.log(result);
