
function solution(list) {
  const data  = [];
  const b  = parseInt(list/5500);
  const c = parseInt(list% 5500);
  data.push(b,c)
  return data
  
}
