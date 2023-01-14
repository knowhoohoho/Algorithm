function solution(A, B) {
  if(A == B) return 0;
  let n =[...A]
  for(let i=0; i < n.length; i++){
      n.unshift(n.pop())
     if(n.join('') == B) return i+1 
  }
  return -1
  
}
