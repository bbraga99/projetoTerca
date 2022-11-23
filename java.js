salvar = document.querySelector("#btSalvar");

salvar.addEventListener('click', function (e) {
    e.preventDefault();

    let tipo = document.querySelector("#tipo").value;
    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let ano = document.querySelector("#ano").value;
    let valor = document.querySelector("#valor").value;

    if (tipo != '' && marca != '' && modelo != '' && ano != '' && valor != '') {
        veiculo = new Veiculo(tipo, marca, modelo, ano, valor);
        if (posicao == '') {
            listaVeiculos.push(veiculo);
        } else {
            listaVeiculos[posicao] = veiculo;
            posicao = '';
            salvar.innerHTML = 'Cadastrar';
        }
        document.querySelector('#tabela').innerHTML = (Listar());
        document.querySelectorAll('input').value = '';
    } else {
        alert("Preencher todas as informações")
    }

    limpar();
})

listaVeiculos = [];
posicao = '';

function Listar() {
    let auxHtml = '<tr>';
    for (let i = 0; i < listaVeiculos.length; i++) {
        auxHtml += 
            '<td>' + listaVeiculos[i].tipo + '</td>' +
            '<td>' + listaVeiculos[i].marca + '</td>' +
            '<td>' + listaVeiculos[i].modelo + '</td>' +
            '<td>' + listaVeiculos[i].ano + '</td>' +
            '<td>' + listaVeiculos[i].valor + '</td>' +
            '<td>' +
            '<a href="#" class="btn btn-warning btAlterar" rel="' + i + '">' +
            'Alterar' +
            '<a>' +
            '</td>' +
            '<td>' +
            '<a href="#" class="btn btn-danger btExcluir" rel="' + i + '">' +
            'Excluir' +
            '<a>' +
            '</td>' +
            '</tr>';
    }
    return auxHtml;
}

class Veiculo {
    constructor(tipo, marca, modelo, ano, valor) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
    }
}

document.querySelector("#tabela").addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('btAlterar')) {
        salvar.innerHTML = 'Atualizar';
        posicao = el.getAttribute("rel");
        document.querySelector("#tipo").value = listaVeiculos[posicao].tipo;
        document.querySelector("#marca").value = listaVeiculos[posicao].marca;
        document.querySelector("#modelo").value = listaVeiculos[posicao].modelo;
        document.querySelector("#ano").value = listaVeiculos[posicao].ano;
        document.querySelector("#valor").value = listaVeiculos[posicao].valor;
    }
})

document.querySelector("#tabela").addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('btExcluir')) {
        // salvar.innerHTML = 'Atualizar';
        posicao = el.getAttribute("rel");
        listaVeiculos.splice(parseInt(posicao),1);

    }
    document.querySelector('#tabela').innerHTML = (Listar());
});


function limpar() {
    tipo = document.querySelector("#tipo").value = '';
    marca = document.querySelector("#marca").value = '';
    modelo = document.querySelector("#modelo").value = '';
    ano = document.querySelector("#ano").value = '';
    valor = document.querySelector("#valor").value = '';
}