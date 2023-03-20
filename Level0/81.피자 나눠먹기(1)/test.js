

function solution(list) {
  return list%7 == 0 ? list/7 : parseInt(list/7) +1
}

console.log(solution(15))