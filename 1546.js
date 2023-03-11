let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let scores = input[1].split(' ').map(Number);
let maxScore = Number(Math.max(...scores));
let sum = 0;

for (let i = 0; i < Number(input[0]); i++) {
	scores[i] = (scores[i] / maxScore) * 100;
	sum += scores[i];
}

console.log(sum / Number(input[0]));
