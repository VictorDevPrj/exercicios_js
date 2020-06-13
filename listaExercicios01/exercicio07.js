/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

const resultado = nota =>nota >= 7 ? 'Aprovado' : 'Reprovado'

*/

const dt = (ax2, bx, c) => Math.pow(bx, 2) -4 * ax2 * c

const validaDelta = function(ax2, bx, c, dell = dt){
    const resp = dell(ax2, bx, c)
    return resp <= -1 ? false : true
}



function bhaskara(a, b, c) {
    let raiz = Math.sqrt(dt(a, b, c))
    console.log('Raiz => ' + raiz)

    let xmais = (-(b) + raiz) / 2 * a
    console.log('X mais => ' + xmais)

    let xmenos = (-(b) - raiz) / 2 * a
    console.log('X menos => ' + xmenos)

    const resultado = [xmais.toFixed(2), xmenos.toFixed(2)]
    console.log('Resultado => ' + resultado)

    return resultado
}

function exibir(a, b, c){
    const d = validaDelta(a, b, c)

    if(d == true){
        bhaskara(a, b, c)
    }else{
        console.log('Delta Negativo')
    }
}

exibir(2, 12, 2)
