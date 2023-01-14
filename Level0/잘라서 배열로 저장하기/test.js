function solution(my_str, n) {
  const a = my_str.split("")
  let arr = [] ;
  for(let i =0; i<a.length; i++){
      if(i%n == 0){
        arr.push(my_str.substring(i,(i+n)))
      }
  }
  return arr
}