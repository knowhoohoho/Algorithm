

//풀다보니 매번 조건이 늘어날때 마다 기입해줘야 되는 사항이 생길거 같군..
// function solution(list, data) {
//   const id = list[0]
//   const pw = list[1]
//   let dd =''
//   data.forEach(element => {
//       if(id == element[0] && pw == element[1]) {
//         console.log('a')
//          dd = 'login'
//       }
//       if(id == element[0] && pw != element[1]) {
//         console.log('b')
//          dd = 'wrong pw'
//       }
//       if(id != element[0] && pw != element[1]) {
//          dd ='fail'
//       }
//   });
//   return dd
// }



//이거 또한 테스트 걸리는 시간 2~3초 대 처음에 더 단축 할 수 없을 까 생각해보자
function solution(base, list) {
    const [ id, pw ] = base;
    for (const [ di, wp ] of list) {
      console.log(di, wp)
        if (id === di && pw === wp) return "login";
        else if (id === di && pw !== wp) return "wrong pw";
    }
    return "fail";
}