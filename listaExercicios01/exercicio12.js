/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/
/*
const fatorial = function (num) {
    let aux = 1
    for (i = 1; i <= num; i++) {
        temp = aux
        aux *= i
        console.log("FATORIAL ", temp, " x ", i, " = ", aux, "\n")
        console.log("==========================================\n")
    }
}

fatorial(6) */

const fat = (num) => {let aux = 1; for (i = 1; i <= num; i++) { temp = aux; aux *= i; console.log("FATORIAL ", temp, " x ", i, " = ", aux, "\n"); console.log("==========================================\n") } }

fat(4)