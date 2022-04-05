//Clonar elementos


const celular = {

    marcaCelular : 'Asus',
    tamanhoTela: {

        vertical:155,
        horizontal:75

    },
    ligar:function (){

        console.log("Ligando")


    }

}


const novoObjeto = Object.assign({
    bateria:5000}, celular);

console.log(novoObjeto)