import  { aplicarDesconto }  from "./metodoMap.js"
import { exibirOsLivrosNaTela }  from "./MetodoForEach.js"

let livros = []
const API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
    const res = await fetch(API)
    livros = await res.json()
    console.table(livros);
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

// =======> Filter

const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' 
                                                    ? filtrarPorDisponibilidade()
                                                    : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTOtalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTOtalDosLivrosDisponiveisNaTela(valorTotal){
    const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}


/// ==> sort

let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}


/// => reduce











