let fs = require('fs');
let [...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';
let count = 0;

while (Number(numbers[count]) !== 0) {
	if (Number(numbers[count]) === Number([...numbers[count]].reverse().join('')))
		result += 'yes\n';
	else result += 'no\n';
	count++;
}

console.log(result.trim());
