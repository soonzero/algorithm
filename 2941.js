let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let alphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let result = input;

for (let alphabet of alphabets) {
	if (input.includes(alphabet)) {
		result = result.replaceAll(alphabet, 'A');
	}
}

console.log(result.length);
