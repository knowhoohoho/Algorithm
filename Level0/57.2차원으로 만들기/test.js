
function solution(list, n) {
 let arr = [];
 for(let i =0; i< list.length; ) { 
    let base = [];
    for(let j=0; j < n; j++) {
      base.push(list[i]);
      i++
    }
    arr.push(base)
 }
 return arr
}
