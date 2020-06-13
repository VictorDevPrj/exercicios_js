/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

function valor() {
    let jogadas, temp
    let recorde = [1, 1]

    let min = Math.floor(Math.random() * 30) + 1
    let max = Math.floor(Math.random() * 30) + 1

    jogadas = min.toString().concat(", ")
    jogadas += max.toString().concat(", ")

    for(i = 0; i < 20; i++){
        temp = Math.floor(Math.random() * 30) + 1
        if(temp > max){
            max = temp
            recorde[0]++
        }
        if(temp < min){
            min = temp
            recorde[1]=i
        }

        if(i < 19){
            jogadas += temp.toString().concat(", ")
        }else{
            jogadas += temp.toString()
        }
    }

    console.log(jogadas, "\n")
    console.log("Recordes --> ", recorde, "\n")
    console.log("Maximo -> ", max, " ---  Minimo -> ", min)

}

valor()