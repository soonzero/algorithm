const fs = require('fs');
const [D, H, W] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

const tvRatio = D / (H ** 2 + W ** 2) ** 0.5;

console.log(Math.floor(tvRatio * H), Math.floor(tvRatio * W));
