function fizzBuzz(numero) {

    let divisaoPorTres = numero % 3 
    let divisaoPorCinco = numero % 5

    if (divisaoPorCinco === 0 && divisaoPorTres ===0) {
        return 'FizzBuzz'
    } else if (divisaoPorCinco !== 0 && divisaoPorTres !==0) {
        return numero

    } else if (divisaoPorCinco === 0 && divisaoPorTres !==0) {
        return 'Fizz'

    } else {return 'Buzz'}

}

let number =3

a = fizzBuzz(number)
console.log(a)