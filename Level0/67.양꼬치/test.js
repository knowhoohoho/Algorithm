
function solution(n,k) {
  let sum = ((n * 12000) + (k - parseInt(n/10)) *2000);
  return sum
}

console.log(solution(10,3))