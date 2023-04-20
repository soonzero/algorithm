const fs = require('fs');
let [, ...users] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

users.sort((a, b) => {
	if (Number(a.split(' ')[0]) > Number(b.split(' ')[0])) return 1;
	else if (Number(a.split(' ')[0]) < Number(b.split(' ')[0])) return -1;
});

console.log(users.join('\n').trim());
