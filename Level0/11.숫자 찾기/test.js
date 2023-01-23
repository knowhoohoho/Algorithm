function solution(num, k) {
 const a = (num + '').split('').map(x => +x).indexOf(k)
 return a == -a ? -1 : a+1
}