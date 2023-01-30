function solution (i,j,k) {
  let arr = [];
  while(i <= j){
    arr.push(i)
    i++
  }
  return (arr + '').split('').filter(x => x==k).length
}
