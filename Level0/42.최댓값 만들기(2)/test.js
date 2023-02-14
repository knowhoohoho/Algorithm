
function solution(list) {
  let sum = [];
  
  for(let i=0; i <list.length; i++) {
    for(let j=0; j<list.length; j++) {
      if(i !==j) {
          sum.push(list[i]*list[j])
      }
    }
  }
  return Math.max(...sum)

}


/**
 * 위에 방식으로 풀때는 간단하게 풀었지만  for문을 두번 돌려서 더 간단하게 줄일 수 없을까 생각하다
 * sort를 사용해서 정렬한다음 계산을 한다면 어떨까라는 생각이 들어서 다시 작성해보았다.
 * 확실히 밑에 방식이 더 좋았다고 생각한 이유는 처음 내가 짠 코드는 배열에 길이만큼 두번이나 돌아야 되는데 밑에꺼는 그러지 않아도 된다는게 시간 단축이 더 되는거 같아서 좋았다.
 */


// function solution(list) {
//   const num = list.length;

//   list.sort((a,b) => b-a);

//   return Math.max(
//     list[num -1]  * list[num -2] ,
//     list[0] * list[1]
//   )
// }

