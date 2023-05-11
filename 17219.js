let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let map = new Map();

for (let i = 0; i < N; i++) {
	const [address, password] = input[i + 1].split(' ');
	map.set(address, password);
}

let answer = [];

for (let i = N; i < N + M; i++) {
	answer.push(map.get(input[i + 1]));
}

console.log(answer.join('\n').trim());
