let fs = require('fs');
let [, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = [];

for (let input of inputs) {
	const stack = [];
	let result = 'YES';

	for (let i = 0; i < input.length; i++) {
		if (input[i] === '(') stack.push('something');
		else {
			if (!stack.pop()) {
				result = 'NO';
				break;
			}
		}
	}

	if (stack.length !== 0) result = 'NO';

	answer.push(result);
}

console.log(answer.join('\n'));
