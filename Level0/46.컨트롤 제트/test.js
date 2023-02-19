const a = "1 2 0 Z 3"




function solution(list) {
  const base =  list.split(' ');
  let sum = 0;
  let num = 0;
  while(num < base.length) {
    if(base[num] == 'Z') {
      sum  = sum - parseInt(base[num -1]); 
      num ++}
    else {sum  = sum + parseInt(base[num]);
      num ++}
    
  }
  return sum

}


/**
 *  다른 사람의 풀이
 */


function solution(list) {
 let arr = [];
 list.split(' ').forEach(x => {
   if(x == 'Z') arr.pop();
   else arr.push(x)
 })

 return arr.reduce((i,j) => parseInt(i) + parseInt(j), 0);
}
/**
 *  스택의 개념과 같이 배열의 원소가 Z일 경우 가장뒤에 있는 걸 빼주고 그게 아니라면 계속 추가 해주는 개념이다.
 *  이런 방법으로 생각 할 수 있다니 대단한거 같다!
 */

