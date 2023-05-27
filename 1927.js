const fs = require('fs');
const [, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

class MinHeap {
	constructor() {
		this.heap = [];
	}

	swap(index1, index2) {
		let temp = this.heap[index1];

		this.heap[index1] = this.heap[index2];
		this.heap[index2] = temp;
	}

	push(value) {
		this.heap.push(value);
		this.bubbleUp();
	}

	bubbleUp() {
		let currentIndex = this.heap.length - 1;

		while (currentIndex > 0) {
			const parentIndex = Math.floor((currentIndex - 1) / 2);

			if (this.heap[parentIndex] <= this.heap[currentIndex]) break;
			this.swap(parentIndex, currentIndex);

			currentIndex = parentIndex;
		}
	}

	bubbleDown(index) {
		const left = (index + 1) * 2 - 1;
		const right = (index + 1) * 2;
		const length = this.heap.length;

		let smallestIndex = index;

		if (left < length && this.heap[left] < this.heap[smallestIndex])
			smallestIndex = left;
		if (right < length && this.heap[right] < this.heap[smallestIndex])
			smallestIndex = right;
		if (smallestIndex !== index) {
			this.swap(index, smallestIndex);
			this.bubbleDown(smallestIndex);
		}
	}

	min() {
		if (this.heap.length === 0) return 0;
		else if (this.heap.length === 1) return this.heap.pop();

		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown(0);
		return min;
	}
}

let minHeap = new MinHeap();
const answer = [];

for (let input of inputs) {
	switch (input) {
		case 0:
			answer.push(minHeap.min());
			break;
		default:
			minHeap.push(input);
			break;
	}
}

console.log(answer.join('\n'));
