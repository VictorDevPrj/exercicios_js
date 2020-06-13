/* 
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados.
(Neste exemplo deve-se abstrair as condições matemáticas de existência de umtriângulo).

*/
const avaliar = function(a, b, c){
    if (a + b < c || a + c < b || b + c < a) {
        return true
    }else {
        return false
    }
}

function equilatero(a, b, c) {
    //Equilátero: Os três lados são iguais. 

    if(a == b && a == c) {
        return true
    }else {
        return false
    }

}

function isosceles(a, b, c) {
  //Isósceles: Dois lados iguais. 

    if(a == b || a == c || b == c) {
        return true
    }
}

function escaleno(a, b, c) {
    //Escaleno: Todos os lados são diferentes.

    if(a != b && a != c && b != c){
        return true
    }

}

function triangulo (a, b, c) {
    let temp = avaliar(a, b, c)

    if(temp == true){
        return 'Não é um triangulo !!'
    }else if(equilatero(a, b, c) == true){
        return 'Esse triangulo é um equilatero'
    }else if(isosceles(a, b, c) == true) {
        return 'Esse triangulo é um isosceles'
    }else {
        return 'Esse triangulo é um escaleno'
    }

}

let exibir = triangulo(7, 8, 15)
console.log(exibir)
console.log("")
exibir = triangulo(7, 8, 7)
console.log(exibir)


