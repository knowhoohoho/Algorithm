


function solution(list) {
 let num =1;
  while(num <= list) {
      let base = (num + '').split('');
      if(num%3 == 0 || base.includes('3')) num++ ,list++
      else num++
  }
  return num -1
}



console.log(solution(40));
