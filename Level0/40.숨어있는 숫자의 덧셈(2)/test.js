function solution(list) {
  let result = 0
  for(let i=0; i <list.length; i++) {
      let tmp ='';
      
      //!isNaN만 사용해도 괜찮을 거 같지만 mdn에서 Number.isNan을 권장함.
      while(!Number.isNaN(+(list[i]))) {
          tmp += list[i]
          i ++
          console.log(tmp)
      }
      result += +tmp
  }
  return result                                                                                                                                                                         
}