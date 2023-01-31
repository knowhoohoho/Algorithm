

function solution(list) {
  let answer = 0;
  let coupon = list

  while(coupon >= 10){
  
      answer = answer + parseInt(coupon/10)
      coupon = parseInt(coupon/10)+ coupon%10
  }
  return answer;
}

//다시 한번 보자 !! 2023-01-31 1월의 마지막이다. 다시 아자아자 힘내자