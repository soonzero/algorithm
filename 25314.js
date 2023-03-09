let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

// 반복문 사용
// let result = '';

// for (let i = 0; i < N / 4; i++) {
// 	result += 'long ';
// }

// console.log(`${result}int`);

// 재귀함수 사용

function helper(num) {
	if (num === 0) return '';
	return 'long ' + helper(num - 4);
}

console.log(`${helper(N)}int`);
