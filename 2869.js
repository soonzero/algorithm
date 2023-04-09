let fs = require('fs');
let [A, B, V] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

// 시간 초과 - 반복문 사용 x

// let dayCount = 0;
// let height = 0;

// while (true) {
// 	dayCount++;
// 	height += A;
// 	if (height >= V) break;
// 	height -= B;
// }

// console.log(dayCount);

// 낮 동안에 목표 높이까지 올라가기만 해도 성공할 수 있기 때문에
// 나눌 수에서 미끄러질 높이를 빼줘야 함

console.log(Math.ceil((V - B) / (A - B)));
