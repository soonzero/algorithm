let fs = require('fs');
let [, ...commands] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

class Stack {
	constructor(array) {
		this.array = array;
	}

	push(num) {
		this.array.push(num);
	}

	pop() {
		let data = this.array.pop();
		if (!data) return -1;
		return data;
	}

	empty() {
		if (this.array.length > 0) return 0;
		else return 1;
	}

	size() {
		return this.array.length;
	}

	top() {
		if (!this.array[this.array.length - 1]) return -1;
		else return this.array[this.array.length - 1];
	}
}

let answer = [];

let stack = new Stack([]);

commands.forEach((command) => {
	command = command.trim().split(' ');

	switch (command[0]) {
		case 'push':
			stack.push(Number(command[1]));
			break;
		case 'top':
			answer.push(stack.top());
			break;
		case 'size':
			answer.push(stack.size());
			break;
		case 'pop':
			answer.push(stack.pop());
			break;
		case 'empty':
			answer.push(stack.empty());
			break;
		default:
			break;
	}
});

console.log(answer.join('\n').trim());
