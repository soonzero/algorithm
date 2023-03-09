let fs = require('fs');
let N = +fs.readFileSync('/dev/stdin').toString().trim();

for (let i = 0; i < 9; i++) {
	console.log(`${N} * ${i + 1} = ${N * (i + 1)}`);
}
