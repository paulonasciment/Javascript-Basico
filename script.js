let a = "Testes"

console.log(a)
console.log("Al")

let horas = 19


if (horas > 6 && horas < 12) {
    console.log("Manhã")
} else if (horas >= 12 && horas <18) {
    console.log("Tarde")
} else {
    console.log("Noite")
}


// Switch

let permissao = 'comum';

switch (permissao) {

    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log("usuario especial");
    break;

    case 'diretor':
    console.log('usuario master');
    break;

    default:
    console.log("Nao reconhecido")

}