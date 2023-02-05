// function aa (list, num) {
//   return list.sort((i,j) => {
//      const [o,p] =[Math.abs(i-num), Math.abs(j-num)]
//      console.log('o ::', o,'[[',p)
//     if(o ==p) return j-i
//     return o-p
//   }) 
// }
// aa([1,2,3,4,5,], 4)
/**
 * sort를 사용해서 정렬을 할거고 math.abs를 사용해서   i,j에 주어진 수 num의 절대값을 추려내고 
 * 그 값이 값으면 더 큰 수를 반환해야하기 때문에 j-i를 했고 그게 아니라면 오름차순으로 리턴
 */



