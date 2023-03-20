let fs = require('fs');
let [n, ...papers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let board = Array.from(Array(100), () => Array(100).fill(0));
let answer = 0;

for (let i = 0; i < n; i++) {
	let [row, col] = papers[i].split(' ').map(Number);
	for (let r = row; r < row + 10; r++) {
		for (let c = col; c < col + 10; c++) {
			board[r][c] += 1;
			if (board[r][c] === 1) answer++;
		}
	}
}

console.log(answer);

// 첫 시도: 색종이 개수 * 100 - (겹쳐진 색종이 넓이)
// 세 개 이상의 색종이가 겹쳐진 경우를 판별하기 너무 어려워서 포기

// 두 번째 시도: 아예 색종이로 덮여진 부분만 개수 세기
// Array(100).fill(Array(100).fill(0)) 으로 시도했는데, 계속 안 됨
// 이유는 바로 배열 속의 배열들이 다 같은 것을 참조하고 있었기 때문
// 이렇게 하게 되면, 배열의 한 요소를 수정하는 순간 다른 요소에도 영향을 줌
// 어쩐지 [3, 7]부터 [3, 16]까지 한 번 밖에 안 돌았는데
// [4, 7]이 이미 1이더라..

// 세 번째 시도: 동일한 방법, 다른 코드
// Array.from(Array(100), () => Array(100).fill(0))
// from 메소드를 사용해서 각각 다른 곳을 참조하고 있는 100개의 0 배열을 100개 담은 배열을 만듦
// 이 경우 두 번째 시도와 다르게 각각 다른 곳을 참조하고 있기 때문에
// 배열의 한 요소를 수정하더라도 다른 요소에는 영향을 주지 않음
