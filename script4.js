// Javascript Aula 36 - Natureza dinâmica de Objetos

const mouse = {

    cor: 'red',
    marcar:'dazz'

}

mouse.velocidade = 5000;
mouse.trocarDpi =  function() {

    console.log('Mudando DPI')

}

delete mouse.velocidade;
delete mouse.trocarDpi;
console.log(mouse);