
function solution(list) {
  return list.reverse()
}



function solution(list) {
  let arr =[];
  list.forEach(x => {
    arr.unshift(x)
  })
  return arr
}
