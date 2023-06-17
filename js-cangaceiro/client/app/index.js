//Criar um array campos que armazenará uma referência para cada um dos elementos de entrada no formulário

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

//Buscando a tbody que recebera a linha criada (p4)

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    //cancelando a sumissão do formulário
    event.preventDefault();

    //criar uma linha na tabela
    var tr = document.createElement('tr');

    //Criar as colunas da tabela
    campos.forEach(function(campo){
        //criar uma td sem informações
        var td = document.createElement('td');
        //atribui o valor do campo a td
        td.textContent = campo.value;
        //adiciona a td na tr
        tr.appendChild(td);
    });

    //nova td que armazenará o volume da negociação
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    //adicionando a tr
    tbody.appendChild(tr);

    //limpando os campos do formulário
    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();


});

