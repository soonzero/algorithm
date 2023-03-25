let fs = require('fs');
let [, ...points] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

points = points.map((point) => point.split(' ').map(Number));

let X = [];
let Y = [];

for (let point of points) {
	X.push(point[0]);
	Y.push(point[1]);
}

console.log(
	(Math.max(...X) - Math.min(...X)) * (Math.max(...Y) - Math.min(...Y))
);
