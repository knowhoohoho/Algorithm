function solution(list) {
  const base = new Set(list)
  const b = [...base]
  return b.join('')
}
