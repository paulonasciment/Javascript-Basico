//Criar um objeto endereço que contem: Rua, Cidade, CEP e crie a funcao que exiba


function montarEndereco(rua, cidade,cep) {
    return {
        rua,
        cidade,
        cep,
    }
}
function validaCep(cep) {   
    let tamanhoCep = cep.length
    if (tamanhoCep === 8) {
        console.log(typeof(cep))
        if (typeof(cep) !== 'number') {
            console.log('digite um CEP válido')
            return null
        }
    } else if (tamanhoCep === 9) {
        cep = cep.replace("-","")
        let newCep = parseInt(cep)
        let newCepString = newCep.toString()
        console.log(newCepString)
        console.log(newCep)
        if (typeof(newCep) !=='number' || newCepString.length ===8) {
            console.log('Digite um CEP válido')
            return null  
        } 
    } else {
        console.log('Digite um CEP válido')
        return null
    }
    console.log('Cep Válido');
    return true
}

function exibirEndereco(endereço) {

    for (let info in endereço) {


        console.log(info + " : " +  endereço[info])
    }

}

let rua = 'Rua 24 norte'
let cidade = 'Aguas Claras'
let cep = '71516-750'
let meuEndereco = montarEndereco(rua,cidade,cep)
console.log(meuEndereco)
//console.log(cep[5])
//console.log(validaCep('71555750'))

exibirEndereco(meuEndereco)
