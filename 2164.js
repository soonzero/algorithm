const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

// 배열을 사용하면 시간 초과가 발생
// shift() 연산: O(n^2)

// let cardsSet = new Set();

// for (let i = 1; i <= N; i++) {
// 	cardsSet.add(i);
// }

// let cards = [...cardsSet];

// while (cards.length !== 1) {
// 	cards.shift();
// 	const firstCard = cards.shift();
// 	cards.push(firstCard);
// }

// console.log(cards[0]);

// 삽입 및 삭제가 빈번한 경우 연결 리스트 (Linked List)를 사용해야 함

class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	add(value) {
		const node = new Node(value);

		if (!this.first) this.first = node;
		else {
			this.last.next = node;
			node.prev = this.last;
		}

		this.last = node;
		this.length++;
		return node;
	}

	getFirst() {
		return this.first.value;
	}

	removeFirst() {
		this.first = this.first.next;
		this.first.prev = null;
		this.length--;
	}

	getSize() {
		return this.length;
	}
}

const list = new LinkedList();

for (let i = 1; i <= N; i++) {
	list.add(i);
}

while (true) {
	if (list.getSize() === 1) break;

	list.removeFirst();
	list.add(list.getFirst());
	list.removeFirst();
}

console.log(list.getFirst());
