Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false

```javascript
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
```

Resolução de outras pessoas

```javascript

function solution(sequence) {
    var count = 0;
    
    for(var i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i-1]) {
            count++;
            
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
            
        }
    }
    
    return count <= 1;
}
```

```javascript
function solution(seq) {
  var bad=0
  for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
    bad++
    if(bad>1) return false
    if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
  }
  return true
}

```