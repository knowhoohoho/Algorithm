function solution(i,j) {
  return i.split('').sort().join('') == j.split('').sort().join('') ? 1: 0
}


/*
  두 문자열 i,j를 split('')를 사용해 배열로 만든 다음 sort를 사용해서 정렬을 해준다. 
  정렬된 문자열들을 조인을 사용해서 다시 문자열로 바꾼다음 그 값들이 같은지 확인한다.
**/
