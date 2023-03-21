

function solution(list) {
  if(list.length == 1) return list[0];
  let base = list.reduce((i,j) => {
    i[j] = (i[j] || 0) +1
    return i
  }, {})
    let key = Object.keys(base).map(x => [
      parseInt(x), base[x]
    ]).sort((i,j) => j[1] - i[1]);

    if(key[0][1] === key?.[1]?.[1]) {
      return -1
    }

      return key[0][0];
}
