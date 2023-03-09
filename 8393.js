let fs = require('fs');
let n = Number(fs.readFileSync('/dev/stdin').toString().trim());

// 재귀함수 사용
// function helper(num) {
// 	if (num === 1) return 1;
// 	return num + helper(num - 1);
// }

// console.log(helper(n));

// 반복문 사용
let sum = 0;

for (let i = 0; i < n; i++) {
	sum += i + 1;
}

console.log(sum);
