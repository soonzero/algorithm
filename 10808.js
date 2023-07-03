const fs = require('fs');
const [...chars] = fs.readFileSync('/dev/stdin').toString().trim().split('');

const charsCount = {};

for (let i = 97; i <= 122; i++) {
	charsCount[String.fromCodePoint(i)] = 0;
}

for (let char of chars) {
	charsCount[char] = (charsCount[char] || 0) + 1;
}

console.log(Object.values(charsCount).join(' '));
