function exibirTipo(numero) {

    if (typeof(numero) !== 'number') {

        console.log('Coloque um numero válido')
    };
    
    for (let i = 0; i<=numero; i++) {

        if (i % 2 === 0) {

                console.log('é par ' + i);
                
        } else {
            console.log("é impar " + i);

        }
    }
}

    

exibirTipo(12)


    