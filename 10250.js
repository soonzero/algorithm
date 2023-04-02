let fs = require('fs');
let [, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';

function getRoomNumber(h, n) {
	let floorNum = n % h;
	let roomNum = n % h === 0 ? `${n / h}` : Math.floor(n / h) + 1;

	answer += `${floorNum === 0 ? h : floorNum}${
		roomNum >= 10 ? roomNum : `0${roomNum}`
	}\n`;
}

for (let input of inputs) {
	let [H, , N] = input.split(' ').map(Number);
	getRoomNumber(H, N);
}

console.log(answer.trim());
