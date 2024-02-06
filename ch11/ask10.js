function koinastoixia (pinakas1, pinakas2) {
  
    let arr= []
    
    for (number of pinakas1) {
      if (pinakas2.indexOf (number) != -1) { 
          arr.push(number)
      }
    }
  
    return arr;
  }
  
  console.log ( koinastoixia ([1,2,3,4],[2,4,6,7] )  )