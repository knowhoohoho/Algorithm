

function solution(i,j) {
  const a = Number((i/j).toFixed(10)) == i/j ? 1 : 2 
  console.log(a)
}


solution(7,20)