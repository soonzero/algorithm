const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = N; i >= 0; i--) {
	if (
		String(i)
			.split('')
			.every((el) => el === '4' || el === '7')
	) {
		console.log(i);
		break;
	}
}
