//Escreva uma funcao que usa dois numeros e retorna o maior entre eles:


function higherNumber(numberOne,numberTwo) {

    

    if (numberOne > numberTwo) {

        return numberOne    


    } else if (numberTwo > numberOne) {
        return numberTwo

    } else {

        console.log('Ambos são iguais');
        return numberOne
    }


}



let n1 = 202
let n2 = 31

n3 = higherNumber(n1,n2)

console.log(n3)

console.log(12%3)