

function solution(list) {
   const max = Math.max(...list)
   const min = Math.min(...list)
   let arr = [];

   //주어진 값에 max값이 있을때
   for(let i =1; i<=max; i++) {
     if(min + i > max) {
        arr.push(i)
     }
   }

   //주어진 값에 max값이 없을때
   for(let i=1; i<(max + min); i++) {
      if(max < i) arr.push(i)
   }
return arr.length
}


/**
 * 다른 사람들의 문제 풀이 
 *
 *  정말 대단한거 같다 ...
 *  
 */
  // function solution(list) {
  //   return Math.min(...list)*2 -1
  // }