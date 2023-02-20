
function solution(list) {
  let num = 2
  let arr =[];
  while(list !== 1) {
    if(list % num == 0) {
      arr.push(num);
      list/=num
      console.log(num);
      num =2;
    }else {
      num +=1;
    }
  }

  return Array.from(new Set(arr))
}
