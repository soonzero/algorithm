const fs = require('fs');
const [M, N] = fs
	.readFileSync('test.txt')
	.toString()
	.trim()
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);

// 시간 오래 걸림 => 780ms 정도

// let max = 1;
// let min = M * N;

// for (let i = 1; i < M * N; i++) {
// 	if (i <= Math.min(M, N) && M % i === 0 && N % i === 0) max = i;

// 	if (i % M === 0 && i % N === 0) {
// 		min = i;
// 		break;
// 	}
// }

// console.log(`${max}\n${min}`);

// M * N / 최대 공약수 = 최소 공배수
// 124ms

function getGCD(M, N) {
	if (M % N === 0) return N;
	else return getGCD(N, M % N);
}

console.log(`${getGCD(M, N)}\n${(M * N) / getGCD(M, N)}`);
