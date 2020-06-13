/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/


let aleatorio = () => Math.floor(Math.random() * 100) + 1 

let notas = function(){
    let nota = []
    for(i = 0; i < 30; i++){
        nota[i] = aleatorio()
    }
    return nota
}

notas().forEach(function(a, b){
    console.log("Nota -->", a, "\n\n")

    console.log("Nota -->", a, "\n")
    console.log("Indice -->", b, "\n\n")
})

//  matriz.forEach(function(valor, chave){
//      console.log(chave, valor);
//  });

function exibir(){
    let nota = []

    notas().forEach(function(valor, chave){
        console.log("============================\n")
        console.log("Valor --> ", valor, " Chave --> ", chave, "\n\n")
        if((valor + 1)% 5 == 0 && (valor + 1)> 39){
            console.log("Nota aumentada pelo sistema + 1 ponto!!!\n")
            console.log("Nota", valor)
            nota[chave] = valor + 1
            console.log("Nota aumentada -> ", nota[chave])
        }else if((valor + 2) % 5 == 0 && (valor + 2) > 39){
            console.log("Nota aumentada pelo sistema + 2 ponto!!!\n")
            console.log("Nota", valor, "\n")
            nota[chave] = valor + 2
            console.log("Nota aumentada -> ", nota[chave], "\n")
        }else if(valor > 39){
            nota[chave] = valor + 1
            console.log("Nota maior que 40 aumentada pelo sistema")
        }else{
            console.log("Aluno reprovador diretor nota menor que 40 -->", valor, "\n\n")
        }
        console.log("***************************************************\n")
    })

}

exibir()