let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

if (N === 1) return;

// 첫 번째: 정답이긴 한데, 시간이 오래 걸림 252ms
// for (let i = 2; i <= N; i++) {
// 	if (N % i === 0) {
// 		console.log(i);
// 		N /= i;
// 		i = 1;
// 	}
// }

// 두 번째: 이것도 정답이긴 한데, 시간 더 오래 걸림 256ms
// let i = 2;

// while (i <= N) {
// 	if (N % i === 0) {
// 		console.log(i);
// 		N /= i;
// 		i = 2;
// 	} else {
// 		i++;
// 	}
// }

// 세 번째: 이것도 정답이지만, 시간 더 오래 걸림 276ms
// 근데, 소인수분해를 곰곰이 생각해보니 굳이 숫자를 다시 초기화할 필요가 없었음
// 2로 나눌 수 있을 때까지 나누고, 더 이상 나눠지지 않는 경우에 나누는 수를 키워도 됨

let result = [];

for (let i = 2; i <= N; i++) {
	while (N % i === 0) {
		result.push(i);
		if (N / i === 1) break;
		N /= i;
	}
}

console.log(result.join('\n').trim());
