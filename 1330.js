let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [A, B] = input;

if (Number(A) > Number(B)) {
	console.log('>');
} else if (Number(A) < Number(B)) {
	console.log('<');
} else {
	console.log('==');
}
