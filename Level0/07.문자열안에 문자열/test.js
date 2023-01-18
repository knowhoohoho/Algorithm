function solution(i,j){
  const base = [...i];
  const data = [...j];

  for(let i=0; i<=base.length; i++) {
    base.unshift(base.pop())
    if(base.slice(0,data.length).join('') == j)return 1
  }
  return 2
}
