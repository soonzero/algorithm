const fs = require('fs');
let number = Number(fs.readFileSync('/dev/stdin').toString().trim());

const getFactorial = (num) => {
	if (num === 0) return 1n;
	return BigInt(num) * getFactorial(num - 1);
};

let answer = 0;
let stringArr = getFactorial(number).toString().split('').reverse();

for (let i = 0; i < stringArr.length; i++) {
	if (stringArr[i] === '0') answer++;
	else break;
}

console.log(answer);
