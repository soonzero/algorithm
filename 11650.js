let fs = require('fs');
let [, ...coords] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
	coords
		.sort((a, b) => {
			if (Number(a.split(' ')[0]) > Number(b.split(' ')[0])) return 1;
			else if (Number(a.split(' ')[0]) < Number(b.split(' ')[0])) return -1;
			else {
				if (Number(a.split(' ')[1]) > Number(b.split(' ')[1])) return 1;
				else return -1;
			}
		})
		.join('\n')
		.trim()
);
