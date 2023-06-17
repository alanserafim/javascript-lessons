// ====> lançar um erro, sistema para após encontrar o primeiro erro.
// throw 'Meu erro'
 

//====> try.catch
/* let erroEncontrado = null

try {
    let obj = undefined
    console.log(obj);
    console.log(obj.propriedade);
    console.log('Olá, mundo!');
    erroEncontrado = false
} catch(erro) {
    console.log('[erro]');
    console.log(erro);
    erroEncontrado = true
} finally {
    erroEncontrado = null 
    console.log('Finalizar software')
}
console.log(erroEncontrado) */


//====> Throw error : Quando queremos estourar um erro propositalmente
let i = 0
while (i<3) {
try{
    console.log('Iniciando Calculadora')
    let input = 2
    if (input === 0){
        throw 'Valor negado'
    }
    let res = 5 / input
}catch(e){
    i++
}finally{
    console.log('finalizando calculador\n');
}
}








