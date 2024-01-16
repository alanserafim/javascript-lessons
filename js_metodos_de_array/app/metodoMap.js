// ===========================> map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

export function aplicarDesconto(livros) {
    const desconto = 0.3
    let livrosComDesconto = livros.map( livro => {
        // para cada livro me retorne
        // uma cópia do objeto livro, porém o preço será o preco menos o desconto
        return {
            ...livro, preco: livro.preco - (livro.preco * desconto)
        }

    })
    return livrosComDesconto

}