function solution(list) {
  const b =list.sort((i,j) => j-i)
  return b[0] >= b[1] + b[2] ? 2 :1
}
