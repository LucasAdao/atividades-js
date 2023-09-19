function myName(nome){
    return nome;
}
function verificarIdade(idade){
    if(idade>=18){
        console.log(myName('Lucas')+' é maior de idade.')
    }else{
        console.log(myName('Lucas')+' É menor de idade')
    }
}


(function (){
    verificarIdade('23');
})();
