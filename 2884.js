let fs = require('fs');
let [h, m] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map((n) => +n);

if (m < 45) {
	m += 15;
	h = h === 0 ? 23 : h - 1;
} else {
	m -= 45;
}

console.log(`${h} ${m}`);
