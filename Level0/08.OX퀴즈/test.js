function solution(list) {
  let arr = []
  list.map(x => {
    const [a,b] = x.split(' = ');
    const d = a.split(' ')
    if(d[1] == '+') {
      arr.push(parseInt(d[0]) +  parseInt(d[2]) == parseInt(b) ? 'O' : 'X')
    }
    if(d[1] == '-') [
     arr.push( parseInt(d[0]) -  parseInt(d[2]) == parseInt(b) ? 'O' : 'X')
    ]
  })
  return arr
}

