//내가 처음 푼 풀이 내가 생각해도 안 좋다고 생각해서 다시 풀자
function solution(cipher, code) {
  const base = [];
  [...cipher].filter((i,j) => {
    if((j+1)%code == 0) {
      console.log(j)
      base.push(i) 
      }
  })
  return base.join('')
}


function solution(cipher, code) {
  let base = ''
  for(let i =code -1 ; i<cipher.length; i +=code) {
    base += cipher[i]
  }
}
