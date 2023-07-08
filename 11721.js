const fs = require('fs');
const [...string] = fs.readFileSync('/dev/stdin').toString().trim().split('');

while (Math.ceil(string.length / 10) > 0) {
	console.log(string.splice(0, 10).join(''));
}
