const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let cardsSet = new Set();

for (let i = 1; i <= N; i++) {
	cardsSet.add(i);
}

let cards = [...cardsSet];

while (cards.length !== 1) {
	cards.shift();
	const firstCard = cards.shift();
	cards.push(firstCard);
}

console.log(cards[0]);
