function solution(inputArray){
    let novoArray = []
  inputArray.forEach(function(element, indice, array) {
      if(indice < arrayDasMultiplicacoes.length){ 
        novoArray.add(element * array[indice + 1])
      }
        return Math.max(...novoArray)
  }
  )}
