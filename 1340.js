const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const date = new Date(input);
const year = date.getFullYear();
const month = date.getMonth() + 1;
let minutes = 0;

const monthObj = {
	1: 31,
	2: 28,
	3: 31,
	4: 30,
	5: 31,
	6: 30,
	7: 31,
	8: 31,
	9: 30,
	10: 31,
	11: 30,
	12: 31,
};

const isYoon = (year) => {
	if (year % 400 === 0) return true;
	else if (year % 4 === 0 && year % 100 !== 0) return true;
	else return false;
};

if (month >= 2) {
	for (let i = 1; i < month; i++) {
		if (i === 2 && isYoon(year)) monthObj[i] += 1;
		minutes += monthObj[i] * 24 * 60;
	}
}

minutes +=
	(date.getDate() - 1) * 24 * 60 + date.getHours() * 60 + date.getMinutes();

console.log((minutes / ((isYoon(year) ? 366 : 365) * 24 * 60)) * 100);
