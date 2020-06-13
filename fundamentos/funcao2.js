//ARMAZENANDO UMA FUNCAO EM UMA VARIAVEL

const imprimirSoma = function(a, b){ //funcao anonima function() 
    console.log(a + b)
}

imprimirSoma(2, 3)


//ARMAZENANDO UMA FUNCAO ARROW EM UMA VARIAVEL
//substitui a palavra ( function ) por ( => ) 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//RETORNO IMPLICITO
//funcao de uma linha
const subtracao = (a, b) => a - b
console.log(subtracao(5,5))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!!')



