function exibirNumerosPrimos(teto){
/* Numeros primos são divisiveis apenas por 1 e por eles mesmos */

    for (let numerador = 1; numerador <=teto;numerador++){
        const divisores = []
        for (let divisor = 1; divisor <= numerador; divisor++){

            let divisao = numerador % divisor
            if (divisao === 0) {
                divisores.push(divisao)
            }
        }
        if (divisores.length === 2) {

            console.log(numerador + ' É primo')
        }
        console.log('Proximo numero')



        }
    }

exibirNumerosPrimos(17)