
function solution(balls, share) {
  function fac(n){
      let i = 1;
      for(let j = 2; j <= n; j++) i*= j;
      return i;
  }
  let answer = Math.round(fac(balls) / (fac(balls-share) * fac(share)));
  return answer;
}


