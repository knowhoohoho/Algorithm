
function solution(list) {
return list.split('').filter(x => parseInt(x) || parseInt(x) == 0 ).map(x => +x).sort((i,j) => i-j)
}
