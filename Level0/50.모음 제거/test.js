function solution(list) {
  return list.split('').filter(x => !['a','e','i','o','u'].includes(x)).join('')

} 