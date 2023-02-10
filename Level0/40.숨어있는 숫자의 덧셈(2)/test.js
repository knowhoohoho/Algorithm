// function solution(list) {
//   let result = 0
//   for(let i=0; i <list.length; i++) {
//       let tmp ='';
      
//       //!isNaN만 사용해도 괜찮을 거 같지만 mdn에서 Number.isNan을 권장함.
//       while(!Number.isNaN(+(list[i]))) {
//           tmp += list[i]
//           i ++
//           console.log(tmp)
//       }
//       result += +tmp
//   }
//   return result                                                                                                                                                                         
// }


/**
 *  다른 사람의 풀이 
 *  정규식을 사용해서 문자열이면 공백으로 바꿔준다.
 *  
 */

function solution(list) {
  return list.replace(/[a-zA-Z]/g, " ").split(' ').filter(x => x != '').reduce((i,j) => parseInt(i) + parseInt(j))
}


