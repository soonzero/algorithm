const fs = require('fs');
const [X, Y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const rev = (num) => {
	return +String(num).split('').reverse().join('');
};

console.log(rev(rev(X) + rev(Y)));
