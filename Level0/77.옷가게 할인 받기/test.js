
function solution(list) {
  if(list >= 500000) {
    return parseInt(list *(1 - 0.2))
  }
  if(list >= 300000) {
    return parseInt(list * (1 - 0.1))
 }
 if(list >= 100000) {
  return parseInt(list * (1 - 0.05))
}
  return list
}


