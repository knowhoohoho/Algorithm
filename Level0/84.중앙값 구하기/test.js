

function solution(list) {
 const base =  list.sort((i,j) => i-j);
 const num = Math.floor(list.length/2) ;
  return list[num];
}
