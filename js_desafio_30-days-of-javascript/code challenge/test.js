function solution(n) {
    let numberString = n.toString()
    let array = numberString.split('')
    let product = array.reduce((a,b) => parseInt(a) * parseInt(b))
    console.log(product)
    let sum = array.reduce((a,b) => parseInt(a) + parseInt(b))
    console.log(sum)
    return parseInt(product) - parseInt(sum)
}

console.log(solution(12345))