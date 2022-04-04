//Loops 
//For, While, Do.. While, For.. In, For..of

//For

/*
for (let i = 0;i <5;i++) {

    if (i % 2 !== 0){
        console.log(i + ' é impar')

    }

    console.log("lets go",i)


};



for (let t = 0;t < 5; t++) {

    for (let v = 0;v <5;v++) {
        
    console.log(t,v)


    }


}


let i = 5;

while (i>=1){

    if (i % 2 !== 0) {

        console.log(i);

    }

    i--;
}

i = 1
do {

    console.log('a' + i)
    i++;
} while (i < 10)

*/


const pessoa = {

    nome: 'Jhonatan',
    idade: 25

};

for (let info in pessoa) {

    console.log(info,pessoa.idade,pessoa['nome']);


} 


const cores = ['Vermelho','Azul','Verde']


for (let cor in cores) {

    console.log(cores[cor])

}

for (let cor of cores){

    console.log(cor)
}