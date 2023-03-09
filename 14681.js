// let fs = require('fs');
// let [x, y] = fs.readFileSync('test.txt').toString().trim().split('\n');

// if (Number(x) > 0) console.log(Number(y) > 0 ? 1 : 4);
// else console.log(Number(y) > 0 ? 2 : 3);

// fs 모듈로 사용하면 런타임 에러가 발생
// readline으로 수정

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	const [x, y] = input;

	if (x > 0) console.log(y > 0 ? 1 : 4);
	else console.log(y > 0 ? 2 : 3);

	process.exit();
});
