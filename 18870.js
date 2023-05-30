const fs = require('fs');
let [, dots] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

dots = dots.split(' ').map(Number);

const set = new Set(dots);
let uniqueArray = [...set].sort((a, b) => a - b);
let map = new Map();
let answer = [];

uniqueArray.forEach((value, index) => {
	map.set(value, index);
});

for (let dot of dots) {
	answer.push(map.get(dot));
}

console.log(answer.join(' '));
