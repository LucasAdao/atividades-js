/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    kmPorLitro;

    constructor(marca,cor,kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }
}
function compararGastoGasolina(carro1,carro2){
    const precoGasolina = 5.79;
    const valorPorLitro = precoGasolina/carro1.kmPorLitro;
    const valorPorLitroDois = precoGasolina/carro2.kmPorLitro;

    if(valorPorLitro < valorPorLitroDois){
        console.log(`o ${carro1.marca} gasta menos gasolina que o ${carro2.marca}`);
    }
    else if (valorPorLitroDois < valorPorLitro){
        console.log(`o ${carro2.marca} gasta menos gasolina que o ${carro1.marca}`);
    }else{
        console.log(`o ${carro1.marca} gasta a mesma quanditadade de gasolina que o ${carro2.marca}`);
    }
}

const supra = new Carro('Supra','vermelho', 5);
const ferrari = new Carro('Ferrari','vermelho', 6);

compararGastoGasolina(supra,ferrari);