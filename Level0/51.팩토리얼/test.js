const  a = 3628800
function solution(list) {
  let sum = 1;
  let num = 1;
  while(sum < list) {
    sum = sum * num;
    if(sum > list) break;
    num ++
  }
  return num ==1 ? 1 : num -1
}

solution(1)