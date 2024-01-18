function solution(sequence) {
   let array1 = sequence
   let array2 = [...sequence]
   if(checkArray(array1)  || checkArrayReverse(array2)) {
    return true
   }
   else return false
 }
 
 
 function checkArray(sequence){
    let numerosRemovidos = 0
    let array = sequence
    console.log(array);
    for(let i=0; i<array.length; i++){
        console.log(array);
       if(array[i] >= array[i+1] && numerosRemovidos < 1 ) {
         array.splice(i, 1)
         numerosRemovidos = 1
         for(let i=0; i<array.length; i++){ 
            console.log(array);
            if(array[i] >= array[i+1] ) return false
         }
       }
    }
   return true
 }

 function checkArrayReverse(sequence){
    let numerosRemovidos = 0
    let array = sequence.reverse()
    console.log(array);
    for(let i=0; i<array.length; i++){
       console.log(array);
       if(array[i] <= array[i+1]  && numerosRemovidos < 1) {
         array.splice(i, 1)
         numerosRemovidos = 1
         for(let i=0; i<array.length; i++){ 
            console.log(array);
            if(array[i] <= array[i+1] ) return false
         }
       }
    }
   return true
 }

 

 console.log(solution([1, 3, 2, 1]));