let fs = require('fs');
let [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(
	Math.max(Number([...A].reverse().join('')), Number([...B].reverse().join('')))
);
