function notnested (pinakas) {
  
    let arr= []
    
    for (pinakas2 of pinakas) {
        for (number of pinakas2) {
             arr.push(number)
        }
         
    }
  
    return arr;
  }
  




  console.log ( notnested([ [1,2,3],[1,2,3],[1,2,3],[1,6,3],[1,9,3] ])  )