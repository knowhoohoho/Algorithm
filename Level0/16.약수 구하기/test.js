function solution(list) {
  let arr =[];
  for(let i=0; i<=list; i++) {
    if(list%i == 0) {
      arr.push(i)
    }
  }
  return arr
}

// 시간 복잡도를 한번 생각 해서 다시 만들어보기!