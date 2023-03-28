let fs = require('fs');
let [, ...answers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

console.log(
	answers
		.map((answer) => {
			let score = 0;
			let currentScore = 0;
			for (let i = 0; i < answer.length; i++) {
				if (answer[i] === 'X') currentScore = 0;
				else {
					if (answer[i - 1] === 'O') currentScore++;
					else currentScore = 1;
				}

				score += currentScore;
			}
			return score;
		})
		.join('\n')
		.trim()
);
