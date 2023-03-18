let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;
let stds = 0;

for (let i = 0; i < input.length; i++) {
	let [, std, score] = input[i].split(' ');

	if (score === 'P') {
		continue;
	}

	switch (score) {
		case 'A+':
			score = 4.5;
			break;
		case 'A0':
			score = 4;
			break;
		case 'B+':
			score = 3.5;
			break;
		case 'B0':
			score = 3;
			break;
		case 'C+':
			score = 2.5;
			break;
		case 'C0':
			score = 2;
			break;
		case 'D+':
			score = 1.5;
			break;
		case 'D0':
			score = 1;
			break;
		case 'F':
			score = 0;
			break;
	}

	sum += Number(std) * score;
	stds += Number(std);
}

console.log(sum / stds);
