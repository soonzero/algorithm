let fs = require('fs');
let [, ...commands] = fs.readFileSync('/dev/stdin').toString().split('\n');

class Deque {
	constructor(array) {
		this.array = array;
	}

	push_front(value) {
		this.array.unshift(value);
	}

	push_back(value) {
		this.array.push(value);
	}

	pop_front() {
		const front = this.array.shift();
		return front || -1;
	}

	pop_back() {
		const back = this.array.pop();
		return back || -1;
	}

	size() {
		return this.array.length;
	}

	empty() {
		return this.array.length === 0 ? 1 : 0;
	}

	front() {
		const front = this.array[0];
		return front || -1;
	}

	back() {
		const back = this.array[this.array.length - 1];
		return back || -1;
	}
}

let deque = new Deque([]);
let answer = '';

for (let command of commands) {
	switch (command.split(' ')[0]) {
		case 'push_back':
			deque.push_back(+command.split(' ')[1]);
			break;
		case 'push_front':
			deque.push_front(+command.split(' ')[1]);
			break;
		case 'pop_front':
			answer += `${deque.pop_front()}\n`;
			break;
		case 'pop_back':
			answer += `${deque.pop_back()}\n`;
			break;
		case 'size':
			answer += `${deque.size()}\n`;
			break;
		case 'empty':
			answer += `${deque.empty()}\n`;
			break;
		case 'front':
			answer += `${deque.front()}\n`;
			break;
		case 'back':
			answer += `${deque.back()}\n`;
			break;
	}
}

console.log(answer.trim());
