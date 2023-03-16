
function solution(list) {
  let a = [...list].sort((a,b) => b-a);
  return list.map(x => {
    const b = a.findIndex(y => y=== x);
    return b + 1
  })
}

solution([3, 76, 24])

