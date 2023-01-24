
function solution(list) {
  const arr = []
  const max = Math.max(...list)
  const b = list.indexOf(max)
  arr.push(max,b)
  return arr
} 
