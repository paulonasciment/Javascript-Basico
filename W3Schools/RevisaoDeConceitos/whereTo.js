function primeiraFuncao(novoTexto){
    document.getElementById("title").innerHTML = novoTexto;
}

function reescrevendoDocumento(novoTexto) {

    document.write(novoTexto)


}

function mostrandoAlerta(textoDoAlerta) {


    //window. é o default de objeto ao chamar um método, então pode-se só ignorar e escrever alert() em vez de window.alert()
    alert(textoDoAlerta)
    


}


function imprimir()

    window.print()

//Basicamente eu coloco um doc javascript e determino as funções dele. Ao criar o documento html, chamo as funções na tag html correspondente


function adicionandoTexto(textoAdicional){
    //Vai ficar em stand by, por enquanto. Basicamente, vai pegar um documento HTML e vai manter o atual e incrementar o do texto adicional


    //Só pra relembrar, temos que criar uma array com a declaracao const array = [] e pra adicionar elementos é só dar um array.push(item);


}


/*

how to display data js

innerHTML - muda só o elemento
document.write - muda todo o texto html da pagina
window.alert
console.log
print no js serve pra imprimir mesmo

*/

function criandoCarro(nome,ano,motor){

    const novoCarro = {

        nome,
        ano,
        motor,
        andar:function(){
            console.log('Andando')

        },
        abastecer:function(){
            console.log('Andando')
        }
    }
    return novoCarro
}
