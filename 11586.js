const fs = require('fs');
const [, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let answer;

switch (+inputs.pop()) {
	case 2:
		answer = inputs.map((item) => item.split('').reverse().join(''));
		break;
	case 3:
		answer = inputs.reverse();
		break;
	default:
		answer = inputs;
		break;
}

console.log(answer.join('\n').trim());
