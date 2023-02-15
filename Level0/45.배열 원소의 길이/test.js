const a = ["We", "are", "the", "world!"];

function solution(list) {
  let arr = [];
  for(b of list) {
    arr.push(b.length)
  }
  return arr
}



/**
 * 처음에 문제를 봤을때 for문을 사용하여 하나하나의 length를 배열 arr에 담아줬는데 
 * 다른 풀이 방법도 있을거 같다고 생각해서 다른 사람의 풀이를 봤는데 
 * 
 * 
 * function solution(list) {
 *  return list.map(x => x.length)
 * }
 * 
 * 
 * 
 * .... 왜 map을 생각하지못했을까
 */