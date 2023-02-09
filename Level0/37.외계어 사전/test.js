
function solution(base, list) {
  const jobase = base.sort().join('');
  const arr =[];
  for(let i =0; i<list.length; i++) {
    arr.push(list[i].split('').sort().join(''));
  }
 return  arr.includes(jobase) ? 1 :2

}

/** 
 * 다른 사람들의 풀이를 보고 
 * 
 * 
 * some의 위대함을 깨달았다... 
*/

// function solution(base,list) {
//   return list.some(s => base.sort().toString() == [...s].sort().toString())
// }
