const fs = require('fs');
const [, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

class MaxHeap {
	constructor() {
		this.heap = [];
	}

	swap(index1, index2) {
		let temp = this.heap[index1];

		this.heap[index1] = this.heap[index2];
		this.heap[index2] = temp;
	}

	bubbleUp() {
		let currentIndex = this.heap.length - 1;

		while (currentIndex > 0) {
			const parentIndex = Math.floor((currentIndex - 1) / 2);

			if (this.heap[currentIndex] <= this.heap[parentIndex]) break;
			this.swap(parentIndex, currentIndex);

			currentIndex = parentIndex;
		}
	}

	bubbleDown(index) {
		const leftChildIndex = (index + 1) * 2 - 1;
		const rightChildIndex = (index + 1) * 2;
		const length = this.heap.length;

		let biggestIndex = index;

		if (
			leftChildIndex < length &&
			this.heap[leftChildIndex] > this.heap[biggestIndex]
		)
			biggestIndex = leftChildIndex;
		if (
			rightChildIndex < length &&
			this.heap[rightChildIndex] > this.heap[biggestIndex]
		)
			biggestIndex = rightChildIndex;

		if (biggestIndex !== index) {
			this.swap(index, biggestIndex);
			this.bubbleDown(biggestIndex);
		}
	}

	max() {
		if (this.heap.length === 0) return 0;
		else if (this.heap.length === 1) return this.heap.pop();

		const max = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown(0);
		return max;
	}

	push(value) {
		this.heap.push(value);
		this.bubbleUp();
	}
}

const maxHeap = new MaxHeap();
const answer = [];

for (let input of inputs) {
	switch (input) {
		case 0:
			answer.push(maxHeap.max());
			break;
		default:
			maxHeap.push(input);
			break;
	}
}

console.log(answer.join('\n'));
