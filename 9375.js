let fs = require('fs');
let [T, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cases = [];

for (let i = 0; i < arr.length; i++) {
	if (arr[i].includes(' ')) cases[cases.length - 1].push(arr[i].split(' '));
	else cases.push([]);
}

for (let c of cases) {
	let frequency = {};

	c.forEach(([, cloth]) => {
		frequency[cloth] = (frequency[cloth] || 0) + 1;
	});

	let set = Object.entries(frequency);

	if (set.length === 1) console.log(set[0][1]);
	else console.log(set.reduce((c, v) => c * (v[1] + 1), 1) - 1);
}
