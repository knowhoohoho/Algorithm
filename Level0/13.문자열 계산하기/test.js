// eval() 사용해서 식을 풀었지만 eval 권장하지 않기 때문에 다른 방법으로 

function solution(my_string) {
  const base = (my_string + '').split(' ')
  while(base.length > 1) base.unshift(+base.shift() + (base.shift() == '+' ? 1 : -1) * base.shift())
  return base[0]
}
