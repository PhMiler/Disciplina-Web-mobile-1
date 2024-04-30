let nome = prompt("Qual é o seu nome?");
console.log("Olá," + nome + "!");


// 1) Escreva um programa em JavaScript que exiba na tela o maior número
// entre dois números fornecidos pelo usuário.

let num1 = +prompt("Digete um número:");
let num2 = +prompt("Digite mais um número:")
if(num1 > num2){
    console.log('O número maior é:', num1);  
}else{
    console.log('O número maior é:', num2);
}

// 2) Escreva um programa em JavaScript que exiba na tela o maior número
// entre dois números fornecidos pelo usuário.


// 3) Escreva um programa em JavaScript que exiba na tela uma mensagem
// de acordo com a nota do usuário. Se a nota for menor do que 6, exiba
// "Reprovado". Se a nota for maior ou igual a 6 e menor do que 8, exiba
// "Aprovado". Se a nota for maior ou igual a 8, exiba "Aprovado com louvor".


var nota = parseFloat(prompt("Digite a nota:"));

if (nota < 6) {
    console.log("Reprovado");
} else if (nota >= 6 && nota < 8) {
    console.log("Aprovado");
} else {
    console.log("Aprovado com louvor");
}


// 4) Escreva um programa em JavaScript que exiba na tela a média dos
// números de um vetor.

function calcularMedia(vetor) {
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    let media = soma / vetor.length;

    console.log("A média dos números no vetor é: " + media);
}

let vetor = [10, 20, 30, 40, 50];
calcularMedia(vetor);

// 5) Escreva um programa em JavaScript que exiba na tela uma mensagem
// de acordo com o valor de uma variável. Se a variável for igual a "a", exiba
// "A". Se a variável for igual a "b", exiba "B". Se a variável não for nem "a"
// nem "b", exiba "Outra letra".

function verificarValor(valor) {
 
    if (valor === "a") {
        console.log("A");
    } else if (valor === "b") {
        console.log("B");
    } else {
        console.log("Outra letra");
    }
}

let valor = "a";
verificarValor(valor); 

valor = "b";
verificarValor(valor);  

valor = "c";
verificarValor(valor);  


// 6) Escreva um programa em JavaScript que exiba na tela a soma dos
// elementos de uma matriz.

function somarMatriz(matriz) {
    let soma = 0;
    
    
    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; 
        }
    }
    
    
    console.log("A soma dos elementos da matriz é:", soma);
}


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
somarMatriz(matriz);


// 7) Escreva um programa em JavaScript que exiba na tela o fatorial de um
// número fornecido pelo usuário.

function calcularFatorial(numero) {
   
    let fatorial = 1;
    
    
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    
    
    return fatorial;
}

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));


if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro não negativo.");
} else {

    let fatorial = calcularFatorial(numero);
    console.log("O fatorial de " + numero + " é: " + fatorial);
}

// 8) Escreva um programa em JavaScript que exiba na tela uma mensagem
// de acordo com a escolha do usuário em um menu de opções. O menu
// deve ter as opções "1. Opção 1", "2. Opção 2" e "3. Opção 3". Se o usuário
// escolher a opção 1, exiba "Opção 1 escolhida". Se o usuário escolher a
// opção 2, exiba "Opção 2 escolhida". Se o usuário escolher a opção 3,
// exiba "Opção 3 escolhida". Se o usuário escolher uma opção inválida,
// exiba "Opção inválida".
// Solicita a escolha do usuário através de um prompt

let escolha = prompt("Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3");

if (escolha === "1") {
    console.log("Opção 1 escolhida");
} else if (escolha === "2") {
    console.log("Opção 2 escolhida");
} else if (escolha === "3") {
    console.log("Opção 3 escolhida");
} else {
    console.log("Opção inválida");
}


// 9) Escreva um programa em JavaScript que exiba na tela o maior número
// de um vetor.

function encontrarMaiorNumero(vetor) {
  
    let maiorNumero = vetor[0];


    for (let i = 1; i < vetor.length; i++) {
 
        if (vetor[i] > maiorNumero) {
            maiorNumero = vetor[i];
        }
    }

    console.log("O maior número do vetor é:", maiorNumero);
}

let vetor = [1, 5, 3, 9, 2, 8];
encontrarMaiorNumero(vetor);


// 10)Escreva um programa em JavaScript que exiba na tela a média dos
// elementos de uma matriz.

function somarMatriz(matriz) {
    let soma = 0;
    
    
    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; 
        }
    }
    
    
    console.log("A soma dos elementos da matriz é:", soma);
}


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
somarMatriz(matriz);
