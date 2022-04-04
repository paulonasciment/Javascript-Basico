function exibirPropriedades(informacoesDoFilme) {
    for (prop in informacoesDoFilme)
        if (typeof(informacoesDoFilme[prop]) ==='string') {
            console.log(prop,informacoesDoFilme[prop])
        }
}

const filme = {

    titulo:'vingadores',
    ano:2018,
    diretor:'Robin',
    personagem:'Thor',
    pais:'Estados Unidos',
    bilheteria:1213131311
}


exibirPropriedades(filme)