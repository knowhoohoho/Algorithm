function solution(list) {
  const base = { zero:0, one :1 , two: 2 , three : 3 , four:4, five:5 , six:6, seven:7, eight:8, nine:9}
  const data = new RegExp(Object.keys(base).join('|'),'g')

  return +list.replace(data,i => base[i])

}