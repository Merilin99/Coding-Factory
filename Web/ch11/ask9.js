function newarrays (pinakas, megethos) {
  
    let arr= [];

    arr.push([]);
    
    for (number of pinakas) {

        let arrLastIndex = arr.length-1;
        let arrLastArrayInside = arr[arrLastIndex];
        
        if (arrLastArrayInside.length < megethos )
        {
            arrLastArrayInside.push(number);
        }
        else
        {
            arr.push( [number] );
        }
    }

    
  
    return arr;
  }