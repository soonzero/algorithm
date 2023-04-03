let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

function helper(num, i) {
	if (num >= N) return i;
	return helper(num + 6 * i, ++i);
}

console.log(helper(1, 1));
