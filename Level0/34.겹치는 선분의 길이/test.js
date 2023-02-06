
function solution(list) {
  const base = list.reduce((b,[x,y]) => {
    for(let i = Math.min(x,y) +1; i<=Math.max(x,y); i++) b[i] = b[i] ?b[i] +1 : 1;
    return b
  },{})
  const ss = Object.values(base).filter(x => x >1).length
  return ss

}