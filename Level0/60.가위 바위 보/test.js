

function solution(rsp) {
let arr = []
 const b = rsp.split('').map(x=> {
    if(x == '2') arr.push('0')
    if(x == '0') arr.push('5')
    if(x == '5') arr.push('2')
  })
  return arr.join('')
}


// 다른 사람풀이 과정을 보던중 객체를 사용해서 푸는 방법이 너무 인상적이어서 기록!

// function solution(rsp) {
//   let arr = {
//      2 : 0,
//      0 : 5,
//      5 : 2
//   }
//   let a = [...rsp].map(x => arr[x]).join('');
//   return a

// }
