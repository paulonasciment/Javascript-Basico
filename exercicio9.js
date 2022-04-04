function exibirAsterisco(qtd) {
    for (let i = 0; i<=qtd; i++){
        console.log('*'.repeat(i))
    }
}

function exibirAsteriscoTwo(qtd){
    for (let i = 1;i<=qtd;i++){
        let texto = ''
        for (let v = 0;v<=i;v++){
            texto += "*"
        }
        console.log(texto)
    }
}
exibirAsterisco(8)
exibirAsteriscoTwo(8)