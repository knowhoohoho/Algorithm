

function solution(a,b,c,d) {
  const boonmo = b * d;
  const boonja = a*d + b*c;
  let num = 1;
  for(let i =1; i <= boonmo; i++) {
      if(boonja%i == 0 && boonmo%i == 0) {
        console.log(i);
        num = i;
      }
  }
  return [boonja/num, boonmo/num];
}

console.log(solution(1,2,3,4));