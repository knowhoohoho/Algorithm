const a ='cccCCC'

function solution(list) {
 return list.split('').map((i,j) => i == i.replace(/[a-z]/) ? i.toLowerCase() : i.toUpperCase()).join('')
}

solution(a)