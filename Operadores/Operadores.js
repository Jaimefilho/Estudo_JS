function comparaNumeros(num1, num2){
    if(!num1 || !num2) return 'Defina os dois numeros'
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);


    return primeiraFrase + segundaFrase
    //console.log(primeiraFrase);
}



function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'nao';
    }

    return 'Os números ' +num1+ ' e ' +num2+ '  '+ saoIguais +' são iguais.'
};


function criaSegundaFrase(num1 , num2){
    const soma = num1+ num2;
    let  resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'Maior';
    }
    if(compara20){
        resultado20 = 'Maior';
    }

    return ' Sua soma é ' +soma+ ' eque é ' +resultado10+ ' que 10 e '+ resultado20 +' que 20.  '

}

//console.log(comparaNumeros(n1, n2));
console.log(comparaNumeros(20, 3));
console.log(comparaNumeros(10, 2));