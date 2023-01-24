function solution(list , i , j) {
  const base = [...list]
  base.splice(i,1,list[j])
  base.splice(j,1,list[i])
  return base.join('')
}
