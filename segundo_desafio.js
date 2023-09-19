let precoGasolina = 5;
let precoEtanol = 5;
let percursoKm = 30;
let combustivelKm = 10;
let isEtanol = true;

if(isEtanol = true){
    let litrosConsumidos = percursoKm/combustivelKm;
    let valorGasto = litrosConsumidos*precoEtanol;
    console.log('O valor gasto da viagem vai ser de: '+ valorGasto.toFixed(2)+ 'R$');
}else if(isEtanol = false){
    let litrosConsumidos = percursoKm/combustivelKm;
    let valorGasto = litrosConsumidos*precoGasolina;
    console.log('O valor gasto da viagem vai ser de: '+ valorGasto.toFixed(2)+ 'R$');
}else{
    console.log('Escolha como vai abastecer seu carro');
}
