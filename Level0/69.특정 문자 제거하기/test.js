

function solution(list, n) {
  return list.split('').filter(x => x != n).join('')

}
