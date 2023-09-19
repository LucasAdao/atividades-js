class Pessoa{
    nome;
    idade;
    altura;
    peso;
    imc;
    constructor(nome, idade, altura , peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    calcularImc(){
        this.imc = this.peso / Math.pow(this.altura, 2);
        if(this.imc <18.5){
            console.log('o imc de ' + this.nome + ' é ' + this.imc.toFixed(2) +' e ele está abaixo do peso');
        }else if(this.imc>=18.5 && this.imc<=25){
            console.log('o imc de ' + this.nome + ' é ' + this.imc.toFixed(2) +' e ele possui um peso normal.');
        }else if(this.imc>25 && this.imc<=30){
            console.log('o imc de ' + this.nome + ' é ' + this.imc.toFixed(2) +' e ele está acima do peso.');
        }else if(this.imc>30 && this.imc <=40){
            console.log('o imc de ' + this.nome + ' é ' + this.imc.toFixed(2) +' e ele possui obesidade.');
        }else{
            console.log('o imc de ' + this.nome + ' é ' + this.imc.toFixed(2) +' e ele possui obesidade grave.');
        }

    }
}
const lucas = new Pessoa('Lucas','22', 1.74, 84);
lucas.calcularImc();