const a =[[80, 70], [90, 50], [40, 70], [50, 80]]

function solution(list) {
  const c = list.map(x=> (x[0] + x[1]) /2 )
  const base =  c.slice().sort((i,j) => j-i);
  return c.map(x=> base.indexOf(x) + 1)


}

solution(a)