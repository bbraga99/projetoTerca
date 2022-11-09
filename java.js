salvar = document.querySelector("#btSalvar");

salvar.addEventListener('click',function(e) {
    e.preventDefault();
    
    let tipo = document.querySelector("#tipo").value;
    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let ano = document.querySelector("#ano").value;
    let valor = document.querySelector("#valor").value;

    if(tipo != '' && marca != '' && modelo != '' && ano != '' && valor != '' ) {
        veiculo = new Veiculo(tipo,marca,modelo,ano,valor);
        listaVeiculos.push(veiculo);
        document.querySelectorAll('input').value = '';
    } else {
        alert("Falta algo")
    } 
})


listaVeiculos = [];


function Listar(lista) {
    let auxHtml = '';
    for ( let i = 0; i < lista.length;i++) {

    }

}

class Veiculo {
    constructor(tipo,marca,modelo,ano,valor) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
    }
}

