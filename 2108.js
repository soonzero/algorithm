const fs = require('fs');
let [, ...numbers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

numbers.sort((a, b) => a - b);

class Statistics {
	constructor(array) {
		this.array = array;
	}

	median() {
		return this.array[Math.floor(this.array.length / 2)];
	}

	average() {
		return Math.round(
			this.array.reduce((a, b) => a + b, 0) / this.array.length
		);
	}

	range() {
		return Math.max(...this.array) - Math.min(...this.array);
	}

	mode() {
		let frequency = {};

		for (let i = 0; i < this.array.length; i++) {
			frequency[this.array[i]] = (frequency[this.array[i]] || 0) + 1;
		}

		let maxCount = Math.max(...Object.values(frequency));
		let maxNums = [];

		for (let index in frequency) {
			if (frequency[index] === maxCount) maxNums.push(+index);
		}

		return maxNums.length > 1 ? maxNums.sort((a, b) => a - b)[1] : maxNums[0];
	}
}

let program = new Statistics(numbers);

console.log(
	`${program.average()}\n${program.median()}\n${program.mode()}\n${program.range()}`
);
