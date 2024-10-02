//Verificar se é maior de idade
let idade = prompt ("Coloque sua idade")

if (idade >= 18) 
    { console.log ("Você é maior de idade");
} else {
    console.log ("Você é menor de idade.");
}

//Verificar se é par ou impar
function verificaParOuImpar(numero) {
    
if (numero % 2 === 0) {
    return "o numero é par";
} else {
    return "o numero é impar";
}
}
console.log(verificaParOuImpar(2));
console.log(verificaParOuImpar(3));
 
//Verificar se é numero negativo, positivo ou zero

let numero = prompt("Insira um número:");

numero = Number(numero);

if (numero > 0) {
    console.log("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("Zero");
}

//Tabuada
function tabuada(numero) {
    console.log("Tabuada do " + numero + ":");
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
tabuada(2);
