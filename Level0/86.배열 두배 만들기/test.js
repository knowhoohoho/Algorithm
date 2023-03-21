

function solution(list) {
  return list.map(x => x*2)
}



function solution(list) {
  return list.reduce((i,j) => [...i, j*2], []);
}
