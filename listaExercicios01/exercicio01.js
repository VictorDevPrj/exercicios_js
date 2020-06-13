/*
01) Crie uma função que dado dois valores 
(passados como parâmetros) mostre no console 
a soma, subtração,
multiplicação e divisão desses valores.
 */

 function calculadora(a, b){
     soma = a + b
     sub = a - b
     mult = a * b
     div = a / b

     exibir = `Soma => ${soma} \n`+
              `Subtração => ${sub} \n`+
              `Multiplicação => ${mult} \n`+
              `Divisão => ${div}`
    return exibir
 }

 let a = calculadora(10, 100)
 console.log(a)
