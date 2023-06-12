const fs = require('fs');
const [, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

class AbsMinHeap {
	constructor() {
		this.heap = [];
	}

	size() {
		return this.heap.length;
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

			if (
				this.heap[parentIndex][0] < this.heap[currentIndex][0] ||
				(this.heap[parentIndex][0] === this.heap[currentIndex][0] &&
					this.heap[parentIndex][1] < this.heap[currentIndex][1])
			)
				break;

			this.swap(parentIndex, currentIndex);
			currentIndex = parentIndex;
		}
	}

	bubbleDown(index) {
		const leftChildIndex = (index + 1) * 2 - 1;
		const rightChildIndex = (index + 1) * 2;
		const length = this.heap.length;

		let smallestIndex = index;

		if (
			leftChildIndex < length &&
			(this.heap[leftChildIndex][0] < this.heap[smallestIndex][0] ||
				(this.heap[leftChildIndex][0] === this.heap[smallestIndex][0] &&
					this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]))
		)
			smallestIndex = leftChildIndex;

		if (
			rightChildIndex < length &&
			(this.heap[rightChildIndex][0] < this.heap[smallestIndex][0] ||
				(this.heap[rightChildIndex][0] === this.heap[smallestIndex][0] &&
					this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]))
		)
			smallestIndex = rightChildIndex;

		if (smallestIndex !== index) {
			this.swap(index, smallestIndex);
			this.bubbleDown(smallestIndex);
		}
	}

	insert(value) {
		this.heap.push(value);
		this.bubbleUp();
	}

	extractMin() {
		if (this.heap.length === 1) return this.heap.pop();
		const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown(0);
		return min;
	}
}

const answer = [];
const minHeap = new AbsMinHeap();

inputs.forEach((item) => {
	if (item === 0) {
		if (minHeap.size() === 0) answer.push(0);
		else answer.push(minHeap.extractMin()[1]);
	} else minHeap.insert([Math.abs(item), item]);
});

console.log(answer.join('\n'));
