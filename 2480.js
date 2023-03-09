let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map((n) => +n)
	.sort((a, b) => a - b);

const dice = [...new Set(input)];

switch (dice.length) {
	case 1:
		console.log(10000 + input[0] * 1000);
		break;
	case 2:
		console.log(1000 + input[1] * 100);
		break;
	case 3:
		console.log(input[2] * 100);
		break;
	default:
		break;
}
