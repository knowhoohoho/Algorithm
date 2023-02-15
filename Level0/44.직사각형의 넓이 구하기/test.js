 const a = [[-1, -1], [1, 1], [1, -1], [-1, 1]]

function solution(list) {
  let x = [];
  let y = [];
  for (arr of list) {
    const [xx,yy] = arr
    x.push(xx)
    y.push(yy)
  }
  console.log('xxx : x' , Math.min(...x))
  return (Math.max(...x) - Math.min(...x) ) * (Math.max(...y) - Math.min(...y) )
}

console.log(solution(a))