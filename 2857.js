const fs = require('fs');
const [...agents] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];

for (let i = 0; i < agents.length; i++) {
	if (agents[i].includes('FBI')) {
		answer.push(i + 1);
	}
}

console.log(answer.length > 0 ? answer.join(' ') : 'HE GOT AWAY!');
