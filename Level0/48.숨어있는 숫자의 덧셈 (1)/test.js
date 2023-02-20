function solution(list) {
  let arr =[]
  list.split('').forEach(x => {
      let b = parseInt(x)
      if(b) {
        arr.push(b)
      }
  })

  return arr.reduce((i,j) => i+j)
}

