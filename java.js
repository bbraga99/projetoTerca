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
        document.querySelector('#tabela').innerHTML =(Listar(listaVeiculos));
        document.querySelectorAll('input').value = '';
    } else {
        alert("Preencher todas as informações")
    } 
})


listaVeiculos = [];

function Listar(lista) {
    let auxHtml = '';
    for ( let i = 0; i < lista.length;i++) {
        auxHtml += '<tr>'+
                        '<td>'+lista[i].tipo+'</td>'+
                        '<td>'+lista[i].marca+'</td>'+
                        '<td>'+lista[i].modelo+'</td>'+
                        '<td>'+lista[i].ano+'</td>'+
                        '<td>'+lista[i].valor+'</td>'+ 
                    '</tr>'; 
    }
    return auxHtml;
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

