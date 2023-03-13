let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let result = [];

for (let i = 97; i < 123; i++) {
	result.push([...input].findIndex((char) => char.charCodeAt() === i));
}

console.log(result.join(' '));
