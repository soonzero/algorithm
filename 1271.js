const fs = require('fs');
const [n, m] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(BigInt);

console.log(n / m + '\n' + (n % m));

// Math 내장 객체의 method는 BigInt와 함께 사용할 수 없음
// BigInt는 소수점 이하가 사라짐
