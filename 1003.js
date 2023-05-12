// let fs = require('fs');
// let [, ...numbers] = fs
// 	.readFileSync('/dev/stdin')
// 	.toString()
// 	.trim()
// 	.split('\n')
// 	.map(Number);

// let fib = [
// 	[1, 0],
// 	[0, 1],
// ];

// const getFib = (number) => {
// 	if (!fib[number])
// 		fib[number] = [
// 			getFib(number - 2)[0] + getFib(number - 1)[0],
// 			getFib(number - 2)[1] + getFib(number - 1)[1],
// 		];

// 	return fib[number];
// };

// let answer = [];

// for (let number of numbers) {
// 	answer.push(getFib(number).join(' '));
// }

// console.log(answer.join('\n'));

// 위 코드가 계속 안 돼서 아래 코드로 했었는데
// 문제는 input을 입력받을 때 trim()을 해주지 않아서 그런 것이었음..
// 결국 해결은 했는데, 위 코드가 4ms 더 빠른 기록을 보여줌

let fs = require('fs');
let [, ...numbers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const max = Math.max(...numbers);

let fib = [
	[1, 0],
	[0, 1],
];

for (let i = 2; i <= max; i++) {
	fib.push([fib[i - 2][0] + fib[i - 1][0], fib[i - 2][1] + fib[i - 1][1]]);
}

numbers.forEach((v) => console.log(`${fib[v][0]} ${fib[v][1]}`));
