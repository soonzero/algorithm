const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function getScore(grade) {
	switch (grade[0]) {
		case 'A':
			return 4;
		case 'B':
			return 3;
		case 'C':
			return 2;
		case 'D':
			return 1;
		default:
			return 0;
	}
}

console.log(
	(
		getScore(input) + ((input[1] === '+' && 0.3) || (input[1] === '-' && -0.3))
	).toFixed(1)
);
