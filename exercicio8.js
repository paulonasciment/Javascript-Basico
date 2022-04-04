
function calculandoNotas(notas){
/*Funcao recebe no input uma lista com as notas e determina se o aluno tem a média suficiente pra passar, com base em uma tabela predefinida.
A tabela é a seguinte
0 - SR
0-3 -II
3-5 - MI
5-7 - MM
7-9 - MS
9-10 - SS
*/
    if (typeof(notas)!== 'object'){
        console.log('Por favor, passe um objeto como parâmetro')
        return null
    }
    for (let valor of notas) {
        if (typeof(valor) !== 'number') {
            console.log('Por favor, passe apenas números na lista')
            return null
        }
        if (valor > 10) {
            console.log('Por favor, coloque apenas valores menores que 10')
            return null
        }
        if (valor < 0) {
            console.log('Por favor, coloque apenas valores positivos')
            return null
        }
    }
    let denominador = notas.length
    let numerador = 0
    for (let nota of notas) {
        numerador += nota
    }
    let media = numerador / denominador
    if (media >= 9) {
        return 'SS'
    } else if (media >= 7){
        return 'MS'
    } else if (media >= 5) {
        return 'MM'
    } else if (media >= 3){
        return 'MI'
    } else if (media > 0) {
        return 'II'
    } else {
        return 'SR'
    }
}
const notas = [10,10,10,10,10]

media =calculandoNotas(notas)
console.log(media)