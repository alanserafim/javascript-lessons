// ===> filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// const idades = [10, 12, 15, 18, 20, 35]
// const podeDirigir = idades.filter(idade => {
//     return idade >=18
// })
// console.log(podeDirigir);
// console.log(idades);

const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')

btnFiltrarLivrosDeFront.addEventListener("click", filtrarLivroDeFront())

function filtrarLivroDeFront(livros) {
    let livrosFiltrados = livros.filter( livro  => livro.categoria == 'front-end')
    console.table(livrosFiltrados)
}
