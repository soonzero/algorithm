let fs = require('fs');
let [time, c] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b] = time.split(' ').map((n) => +n);
c = +c; // 숫자로 변경

// (시간, 분으로 나눈 c에서 시간 추가 + 60분 넘어가면 1시간 추가)한 것을 24로 나눈 나머지로 변경
// 1차 틀린 이유: 60 이상이 아니라 초과로 해버림
// a = (a + Math.floor(c / 60) + (b + (c % 60) > 60 ? 1 : 0)) % 24;
a = (a + Math.floor(c / 60) + (b + (c % 60) >= 60 ? 1 : 0)) % 24;

// (시간, 분으로 나눈 c에서 분 추가)한 것이 60분 넘어가면 60분 빼기
// 1차 틀린 이유: 60 이상이 아니라 초과로 해버림
// b = b + (c % 60) > 60 ? b + (c % 60) - 60 : b + (c % 60);
b = b + (c % 60) >= 60 ? b + (c % 60) - 60 : b + (c % 60);

console.log(a, b);
