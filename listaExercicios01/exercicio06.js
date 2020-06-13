/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function regSimples(capIni, txJ, tempApl) {
    let  j = capIni * txJ
    for(let i = 0; i < tempApl; i++) {
        capIni += j
    }

    return capIni
}

let reg = regSimples(100, 0.2, 10)

console.log(reg)

function regComposto(capIni, txJ, tempApl) {
    for(let i = 0; i < tempApl; i++) {
        capIni +=  capIni * txJ
    }
    return capIni
}

reg = regComposto(100, 0.2, 10)
console.log(reg)
