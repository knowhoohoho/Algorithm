
function solution(list) {
  const [b,y] = list.sort((i,j) => j-i)
  return b * y
}