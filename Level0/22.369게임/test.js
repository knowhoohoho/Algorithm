function solution (num) {
  let data = 0;
  (num + '').split('').forEach(x => {if(x != 0 && x%3 ==0){data ++}})
  return data
}
