

function solution(n,m,list) {
  let aa = 0;
  let num = list[0] + (m-1);
  for(const a of list) {
    if(a <= num) continue ;
    else {
      num = a + (m-1);
      aa ++;
    }
  }
  return aa + 1;
}

