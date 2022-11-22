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
        if ( posicao == '') {
            listaVeiculos.push(veiculo);
        } else {
            listaVeiculos[posicao] = veiculo;
            posicao = '';
            salvar.innerHTML = 'Cadastrar';
        }
        document.querySelector('#tabela').innerHTML =(Listar(listaVeiculos));
        document.querySelectorAll('input').value = '';
    } else {
        alert("Preencher todas as informações")
    } 
})

listaVeiculos = [];
posicao = '';

function Listar(lista) {
    let auxHtml = '';
    for ( let i = 0; i < lista.length;i++) {
        auxHtml += '<tr>'+
                        '<td>'+lista[i].tipo+'</td>'+
                        '<td>'+lista[i].marca+'</td>'+
                        '<td>'+lista[i].modelo+'</td>'+
                        '<td>'+lista[i].ano+'</td>'+
                        '<td>'+lista[i].valor+'</td>'+ 
                        '<td>'+
                            '<a href="#" class="btn btn-warning btAlterar" rel="'+ i +'">'+
                                'Alterar'+
                            '<a>'+
                        '</td>'+
                        '<td>'+
                            '<a href="#" class="btn btn-danger btExcluir" rel="'+ i +'">'+
                                'Excluir'+
                            '<a>'+
                        '</td>'+
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

document.querySelector("#tabela").addEventListener('click',function(e) {
   const el = e.target;
   if(el.classList.contains('btAlterar')) {
       salvar.innerHTML = 'Atualizar';
       posicao = el.getAttribute("rel");
        document.querySelector("#tipo").value = listaVeiculos[posicao].tipo;
        document.querySelector("#marca").value = listaVeiculos[posicao].marca;
        document.querySelector("#modelo").value = listaVeiculos[posicao].modelo;
        document.querySelector("#ano").value = listaVeiculos[posicao].ano;
        document.querySelector("#valor").value = listaVeiculos[posicao].valor;
   }
})

document.querySelector("#tabela").addEventListener('click',function(e) {
    const el = e.target;
    if(el.classList.contains('btExcluir')) {
         alert('excluindo...');
    }
 })