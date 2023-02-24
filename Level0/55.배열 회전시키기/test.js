function solution(list, n) {
  if(n == 'right') list.unshift(list.pop())
  if(n == 'left') list.push(list.shift())
  return list
}

