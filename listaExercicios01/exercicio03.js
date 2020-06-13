/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function expo(exp, base) {
    let result = base

    if(base <= 1 || exp <= 1){
        console.log(base)
    }else{
        for (let i = 0; i < exp - 1; i++){
        
            result *= base
            console.log(`Base => ${result} || expoente => ${exp} ==  valor do i ${i} \n `)
        }
    }
}

expo(2, 2)

