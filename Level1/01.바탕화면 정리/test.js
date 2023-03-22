

function solution(list) {
   let [top, botton, left, right] = [51, 0, 51, 0];

   for(let i =0; i<list.length; i++) {
      for(let j=0; j<list[0].length; j++) {
        if(list[i][j] === '.') continue;
        top = Math.min(top,i);
        botton = Math.max(botton, i);
        left = Math.min(left, j);
        right = Math.max(right, j);
      }
   }
   return [top,left,botton +1,right +1]

}

