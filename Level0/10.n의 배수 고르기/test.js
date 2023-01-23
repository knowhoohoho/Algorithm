const a = 3
const b = [4, 5, 6, 7, 8, 9, 10, 11, 12]

function solution(n, numlist) {
  return numlist.filter(x => x% n == 0).length
}

console.log(solution(a,b))