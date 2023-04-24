let fs = require('fs');
let [, ...commands] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

class Que {
	constructor(array) {
		this.array = array;
	}

	pop() {
		const first = this.array.shift();
		if (!first) return -1;
		else return first;
	}

	push(value) {
		this.array.push(value);
	}

	front() {
		if (this.array[0]) return this.array[0];
		else return -1;
	}

	back() {
		if (this.array[this.array.length - 1])
			return this.array[this.array.length - 1];
		else return -1;
	}

	empty() {
		if (this.array.length === 0) return 1;
		else return 0;
	}

	size() {
		return this.array.length;
	}
}

let que = new Que([]);
let answer = '';

for (let command of commands) {
	switch (command.split(' ')[0]) {
		case 'push':
			que.push(+command.split(' ')[1]);
			break;
		case 'front':
			answer += `${que.front()}\n`;
			break;
		case 'back':
			answer += `${que.back()}\n`;
			break;
		case 'pop':
			answer += `${que.pop()}\n`;
			break;
		case 'size':
			answer += `${que.size()}\n`;
			break;
		case 'empty':
			answer += `${que.empty()}\n`;
			break;
		default:
			break;
	}
}

console.log(answer.trim());
