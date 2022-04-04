function somaMultiplos(limite) {
    if (typeof(limite) !== 'number') {
        console.log("It's note a number. Please, rewrite your script")
        return null
    }
    const multiplosDeCinco = []
    const multiplosDeTres = []
    for (let i = 0; i<=limite;i++){
        if (i % 5 === 0) {
            multiplosDeCinco.push(i)
        }
        if (i % 3 === 0) {
            multiplosDeTres.push(i)
        }
    }
    let somarMultiplosDeCinco = 0
    for (let numero of multiplosDeCinco){
        somarMultiplosDeCinco += numero
    }
    let somarMultiplosDeTres = 0
    for (let numero of multiplosDeTres) {
        somarMultiplosDeTres += numero
    }
    console.log(somarMultiplosDeCinco,somarMultiplosDeTres)
}   


somaMultiplos(10)