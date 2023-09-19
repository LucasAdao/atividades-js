/*const pessoa = {
    nome: 'Lucas Adão Ferreira',
    idade: 25,
    
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
pessoa.descrever();*/

class Pessoa{
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(` ${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
    
}

const lucas = new Pessoa('Lucas', 22);
const claudia = new Pessoa('Claudia', 21);

compararPessoas(lucas,claudia);