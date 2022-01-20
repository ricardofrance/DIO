
/*
var nome = "Ricardo Francé";
var idade = 43;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo...";

//alert("Bem vindo " + nome + "." + " Você tem " + idade + " anos.");

console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));

console.log(frase.toUpperCase());

*/

/*
var lista = ["maçã", "pêra", "laranja"];
console.log(lista[1]);
lista.push("uva");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));
*/
/*
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
*/

/*
//var idade = 13;
var idade = prompt("Qual a sua idade?")
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
*/

/*
var count = 0;
while (count <= 20){
    console.log(count);
    //count = count + 1;
    count++
};


var count;
for(count=0; count <= 5; count++){
    alert(count);
}

*/
/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
function soma (n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(22, 45));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
function soma (n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));
*/
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar(){
   // window.open("https://www.globallabs.net/");
   window.location.href = "https://www.globallabs.net/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por obedecer!";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load (){
        alert("Página Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

for (var i = 0; i < 5; i++) {
  const valorInformadoPeloUsuario = parseInt(gets());

  //  Criar a condição adequada para verificar se o "valorInformadoPeloUsuario" é par.
  if (valorInformadoPeloUsuario % 2 === 0) {
    valoresPares++;
  } else {
    valoresImpares++;
  }

  if (valorInformadoPeloUsuario > 0) {
    valoresPositivos++;
  } else if (valorInformadoPeloUsuario < 0) {
    valoresNegativos++;
  }

}

console.log(`${valoresPares} par(es)`);
console.log(`${valoresImpares} impar(es)`);
console.log(`${valoresPositivos} positivo(s)`);
console.log(`${valoresNegativos} negativo(s)`);
*/