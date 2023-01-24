function solution(list) {
  const b = list.split('').reduce((i,j) => {i[j] = (i[j] || 0) +1 ; return i;},{})
  return  Object.entries(b).map(x => x[1] == 1 ? x[0] : '').filter(x => x !== '').sort().join('')
}
