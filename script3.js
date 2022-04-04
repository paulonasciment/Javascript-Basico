//Factory Functions = Funções de Fábrica
function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
    }
}
//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){

    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function(){
        console.log('Ligando')
    }
}
motorola = criarCelular('Motorola',400,5000)
apple = Celular('Apple',400,10000)
const celular = new Celular('a',5,5);
celular.ligar()

