/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

/*
var data = new Date ();
var dia = data.getDay();
setFullYear(1995,02,17)
*/

let dia = 5

switch(dia){

    case 0:
        console.log("Hoje é domingo")
    break
    case 1:
        console.log("Hoje é segunda-feira")
    break
    case 2:
        console.log("Hoje é terca-feira")
    break
    case 3:
        console.log("Hoje é quarta-feira")
    break
    case 4:
        console.log("Hoje é quinta-feira")
    break
    case 5:
        console.log("Hoje é sexta-feira")
    break
    case 6:
        console.log("Hoje é sábado")
    break
    default:
        console.log("DATA INVALIDA")
    break
}