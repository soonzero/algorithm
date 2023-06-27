const fs = require('fs');
const [skill, goal] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

console.log(skill.length >= goal.length ? 'go' : 'no');
