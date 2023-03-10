let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let array = Array(Number(input[0].split(' ')[0])).fill(0);

for (let m = 0; m < input[0].split(' ')[1]; m++) {
	let [i, j, k] = input[m + 1].split(' ').map(Number);
	for (let n = i; n <= j; n++) {
		array[n - 1] = k;
	}
}

console.log(array.join(' ').trim());

// 계속 틀린 이유
// 바구니에 공이 있으면 있던 공을 빼고 다시 넣는다 !== 바구니에 공이 있을 때 번호가 같으면 뺀다
// 똑같은 번호의 공이 있으면 그대로 있어야 하는데, 문제 잘못 이해하고 빼기만 해버림
