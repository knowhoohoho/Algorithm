const a = [10, 11, 13]
const c = [3, 10, 28]

//나는 처음 짠거!
function solution(list,n) {
  const b =list.reduce((i,j) => Math.abs(i-n) < Math.abs(j-n) ?  i : j) ;
    console.log(b)
}

//그러다 제한사항을 확인했을때 같은 차이가 나면 더 작은 수를 return 하라는 조건이 있는걸 확인했고 내가 짠코드는 더 큰 수가 리턴 되어서 수정을 했다.

function solution(list,n) {
  const b =list.reduce((i,j) => Math.abs(i-n) < Math.abs(j-n) ?  i : Math.abs(i-n) == Math.abs(j-n) ? Math.min(i,j) : j) ;
    console.log(b)
}


solution(a,12)