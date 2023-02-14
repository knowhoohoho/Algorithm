
function solution(list, board) {
  const maxX = (board[0] -1)/2
  const maxY = (board[1] -1)/2

  let num = [0,0]
  list.forEach(x => {
    switch(x) {
      case 'left' :
        if(num[0] != -maxX) {
          num[0] -= 1;
        }
        break;
        case 'right' : 
        if(num[0] != maxX) {
            num[0] += 1;
        }    
        break
      case 'up' :
        if(num[1] != maxY) {
            num[1] += 1;
        }
        break
      case 'down' :
        if(num[1] != -maxY){
            num[1] -= 1;
        }    
    }
   

})
  return num
    
}
