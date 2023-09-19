let peso, altura, imc;
peso = 86.00;
altura = 1.74;
imc = peso / Math.pow(altura, 2);

if(imc < 18.5){
    console.log(imc.toFixed(2)+' abaixo do peso');
}else if(imc>=18.5 && imc<=25){
    console.log(imc.toFixed(2) +' peso normal')
}else if(imc>25 && imc<=30){
    console.log(imc.toFixed(2) + ' acima do peso')
}else if(imc>30 && imc <=40){
    console.log(imc.toFixed(2)+' obeso')
}else{
    console.log(imc.toFixed(2)+' obesidade grave')
}
