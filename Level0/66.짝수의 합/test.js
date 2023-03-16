
function solution(list) {
  let sum = 0;
  for(let i =2; i<=list; i+=2) {
    if(i% 2 == 0 ) {
      sum += i
    }
  }
return sum
}


solution(10)