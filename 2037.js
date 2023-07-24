const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [p, w] = input.shift().split(' ').map(Number);
const scopes = [
	['A', 'B', 'C'],
	['D', 'E', 'F'],
	['G', 'H', 'I'],
	['J', 'K', 'L'],
	['M', 'N', 'O'],
	['P', 'Q', 'R', 'S'],
	['T', 'U', 'V'],
	['W', 'X', 'Y', 'Z'],
];

let answer = 0;

for (let i = 0; i < input[0].length; i++) {
	if (input[0][i] === ' ') {
		answer += p;
		continue;
	}
	answer += getTime(input[0][i], input[0][i + 1]);
}

function getTime(curr, next) {
	let result = 0;
	for (let scope of scopes) {
		if (scope.includes(curr)) {
			if (scope.includes(next)) result += w;
			result += (scope.findIndex((el) => el === curr) + 1) * p;
			return result;
		}
	}
}

console.log(answer);
