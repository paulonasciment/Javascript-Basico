function verificarVelocidade (velocidadeAtual,velocidadeMaximaPermitida) {
    //Verifica se o usuario está dentro da velocidade permitida e retorna o numero de pontos na carteira q ele recebeu
    let diferencaDeVelocidade = velocidadeMaximaPermitida - velocidadeAtual

    if (diferencaDeVelocidade >=0) {
        console.log('Usuário dentro da velocidade permitida, sem pontos adicionais na carteira')
        return 'Carteira Válida'
    }
    let pontosNaCarteira  = diferencaDeVelocidade / 5
    if (Math.abs(pontosNaCarteira) >12) {
        console.log('Carteira Suspensa')
        return 'Carteira suspensa'
    } else {
        console.log('Você ganhou ' + Math.abs(pontosNaCarteira) + ' pontos na carteira, mas não foi suspensa')
        return 'Carteira Válida'
    }
}



ba = verificarVelocidade(100,70)

console.log(ba)