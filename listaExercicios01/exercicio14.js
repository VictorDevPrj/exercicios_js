/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

const tipo = function(fruta){
    if(fruta == "maçã"){
        return 0
    }else if(fruta == "kiwi"){
        return 1
    }else if(fruta == "melancia"){
        return 2
    }else{
        return 3
    }
}

switch(tipo("dfd")){
    case 0:
        console.log("Não vendemos esta fruta aqui")
    break;
    
    case 1:
        console.log("Estamos com escassez de kiwis")
    break;

    case 2:
        console.log("Aqui está, são 3 reais o quilo.")
    break;

    default:
        console.log("Opção inválida!!!")
    break;

}