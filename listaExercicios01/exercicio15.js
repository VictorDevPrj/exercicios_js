/*
    15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
    possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
    comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
    que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
    “Não trabalhamos com este tipo de automóvel aqui”.
*/

//Obtem o valor do elemento textfield e armazena na variável "valor"
//var valor = document.getElementById('id1').value;

//Para imprimir na página
//document.write(valor);

//Para imprimir em um elemento específico
//document.getElementById('IdDoElementoEspecifico').innerText = valor

//Para imprimir em um Input Text
//document.getElementById('IdDoElementoInputText').value = valor;


let tipo = () => document.getElementById('cModelo').value
let capt = () => document.getElementById('cExibir').innerHTML = tipo()

function modelos(mod) {
    if (mod == "hatch") {
        return 0
    } else if (mod == "sedans" || mod == "motocicletas" || mod == "caminhonetes") {
        return 1
    }else{
        return 2
    }
}

switch (opc) {
    case 0:
        document.getElementById('cExibir').innerHTML = "Compra efetuada com sucesso"
    break;

    case 1:
        document.getElementById('cExibir').innerHTML = "Tem certeza que não prefere outro modelo ?"
        document.createElement("input type='text' id='tResposta'")
    break;
}

