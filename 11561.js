const fs = require('fs');
let [, ...dots] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
	dots
		.sort((a, b) => {
			if (+a.split(' ')[1] > +b.split(' ')[1]) return 1;
			else if (+a.split(' ')[1] < +b.split(' ')[1]) return -1;
			else {
				if (+a.split(' ')[0] > +b.split(' ')[0]) return 1;
				else return -1;
			}
		})
		.join('\n')
);
