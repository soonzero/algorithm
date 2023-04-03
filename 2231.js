let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = 0;
const numStr = String(N);

// for (i = N - numStr.length * 9; i > 0; i--) {
// 	let sum = i;
// 	for (let j = 0; j < numStr.length; j++) {
// 		sum += Number(String(i)[j]);
// 	}
// 	if (sum === N) {
// 		answer = i;
// 		break;
// 	}
// }
// 틀린 방법:
// N - numStr.length * 9는 생성자가 될 수 있는 최소값인데
// 최대값으로 생각해버려서, 계속 0이 출력됨

// 시작할 값을 최소값으로 설정하고, 최대값은 N - 1
for (i = N - numStr.length * 9; i < N; i++) {
	let sum = i;
	for (let j = 0; j < String(i).length; j++) {
		sum += Number(String(i)[j]);
	}

	// 찾는 즉시 최소값이므로 for문에서 빠져나오기
	if (sum === N) {
		answer = i;
		break;
	}
}

console.log(answer);
