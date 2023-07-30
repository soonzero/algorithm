const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString().trim();

let cycle = 0;
let current = +N < 10 ? 0 + N : N;

do {
	const string = String(current);
	current =
		string[1] +
		String(
			+string[0] + +string[1] >= 10
				? String(+string[0] + +string[1])[1]
				: String(+string[0] + +string[1])
		);
	cycle++;
} while (+N !== +current);

console.log(cycle);
