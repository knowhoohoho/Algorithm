

function solution(list) {
  let n = [];
  let k = [];
  let sum = []
  list.forEach(x => {
    if(x%2 == 0) {n.push(x)}
    else { k.push(x)}
  })
   sum.push(n.length, k.length)
   return sum

}


//다른 사람 풀이 for(let a of) 형태

// function solution(list) {
//   let sum = [0,0];

//   for(let a of list) {
//     sum[a%2] += 1;
//   }
//   return sum;
// }



