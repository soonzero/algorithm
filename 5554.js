const fs = require('fs');
const [...minutes] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const TOTAL_MINUTES = minutes.reduce((a, b) => a + b, 0);

console.log(Math.floor(TOTAL_MINUTES / 60) + '\n' + (TOTAL_MINUTES % 60));
