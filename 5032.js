const fs = require('fs');
const [e, f, c] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

let answer = Math.floor((e + f) / c); // 5
let empty = answer + ((e + f) % c); // 5

while (true) {
	// 빈 병을 바꿀 수 있으면 계속 진행

	// empty = 5 3
	// 5 / 2 = 2 + 1
	// 3 / 2 = 1 + 1
	// 2 / 2 = 1
	answer += Math.floor(empty / c);
	// answer += 2 -> 7
	// answer += 1 -> 8
	// answer += 1 -> 9
	empty = Math.floor(empty / c) + (empty % c);
	// empty = 3 2 0
	// 빈 병 개수 = 새로운 병으로 바꾼 개수 + 남아 있던 빈 병 개수

	// 빈 병을 더 이상 새 병으로 바꿀 수 없으면 while 탈출
	if (empty / c < 1) break;
}

console.log(answer);
