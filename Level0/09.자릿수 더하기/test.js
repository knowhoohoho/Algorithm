function solution(list){ 
  const base = (list + '')
  return [...base].reduce((i,j) => parseInt(i)+ parseInt(j),0)

}
