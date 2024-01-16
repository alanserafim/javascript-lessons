// ==========================> forEach
// link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


const elementosParaInserir = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

export function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ""
    elementosParaInserir.innerHTML = ""
    // para cada livro no array insira um o HTML abaixo dentro do elemento com id "livros"
    listaDeLivros.forEach(livro => {
        let disponibilidade = verificaDisponibilidadeDoLivro(livro)
        elementosParaInserir.innerHTML +=`
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    })
    
}

function verificaDisponibilidadeDoLivro(livro) {
    if (livro.quantidade > 0) {
        return 'livro__imagens'
    } else {
        return 'livro__imagens indisponivel'
    }
}