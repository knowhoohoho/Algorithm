

function solution(list) {
  let num = list;
  let big = parseInt(list/5);
  let mi =0;
  num = num%5;
  if(num >=3) {
    mi = parseInt(num/3);
    num = num%3;
  }

  return big + mi + num
}


//다른 사람 풀이 나머지를 활용한 풀이 

// function solution(hp) {
//     return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
// }