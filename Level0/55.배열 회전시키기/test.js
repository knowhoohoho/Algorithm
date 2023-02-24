const a = [1, 2, 3]
const b = "right"

function solution(list, n) {
  if(n == 'right') list.unshift(list.pop())
  if(n == 'left') list.push(list.shift())
  return list
}


console.log(solution(a,b))