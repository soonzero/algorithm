let fs = require('fs');
let [, ...commands] = fs.readFileSync('test.txt').toString().trim().split('\n');

class Collection {
	constructor() {
		this.set = new Set([]);
	}

	add(value) {
		this.set.add(value);
	}

	remove(value) {
		this.set.delete(value);
	}

	check(value) {
		return this.set.has(value) ? 1 : 0;
	}

	toggle(value) {
		if (this.set.has(value)) this.set.delete(value);
		else this.set.add(value);
	}

	all() {
		const array = Array(20)
			.fill(1)
			.map((item, index) => item + index);
		this.set = new Set(array);
	}

	empty() {
		this.set = new Set([]);
	}
}

let S = new Collection();

for (let command of commands) {
	switch (command) {
		case 'check':
			console.log(S.check(+command.split(' ')[1]));
			break;
		case 'add':
			S.add(+command.split(' ')[1]);
			break;
		case 'remove':
			S.remove(+command.split(' ')[1]);
			break;
		case 'toggle':
			S.toggle(+command.split(' ')[1]);
			break;
		case 'all':
			S.all();
			break;
		case 'empty':
			S.empty();
			break;
		default:
			break;
	}
}
