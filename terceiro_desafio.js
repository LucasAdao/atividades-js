let nota1,nota2,nota3;
let media;

nota1 = 4;
nota2 = 4;
nota3 = 4;
media = (nota1+nota2+nota3)/3;

if(media<5){
    console.log('Reprovação')
}else if(media>=5 && media<=7){
    console.log('Recuperação')
}else{
    console.log('Aprovado')
}
