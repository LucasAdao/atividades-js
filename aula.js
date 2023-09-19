/* let muda o valor, const continua */


/*faça um programa para calcular o valor de uma viagem.

Você tera 3 variavéis, sendo elas:

1 - preço do combustivel
2 - gasto medio do combustivel por km
3 - distância em km da viagem

*/

let precoCombustivel, combustivelKm, percursoKm;

let isEtanol = true;
let precoEtanol = 3;
precoCombustivel = 5;
combustivelKm = 5;
percursoKm = 60;

let litrosConsumidos =  percursoKm/combustivelKm;
let valorGasto= litrosConsumidos*precoCombustivel;

console.log("o preço do combustivel é:" + precoCombustivel);
console.log("o combustivem por km que meu carro consegue rodar é de:" + combustivelKm+ "l");
console.log("O percurso que vou fazer até miami beach é de:" + percursoKm + "km");
/*console.log("Logo irei gastar:"+ (precoCombustivel/combustivelKm)*percursoKm + "R$");*/
console.log("Logo irei gastar:"+ valorGasto.toFixed(2) + "R$");


const num = 12;
/*is é usado para operações boleanas*/
const isNumeroDivisivelPor5 = (numero%5) === 0;

/*const numeroDivisivelPor5 = (numero%5) == "0"; */
if(numero === 0){
    console.log("Número inválido!!!");
}else if(isNumeroDivisivelPor5){
    console.log("Sim.");
}else{
    console.log("Não!")
}




