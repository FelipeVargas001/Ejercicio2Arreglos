let arrayPunto1=[];
for (var i = 0; i < 10; i++) {  
    let numeroAleatorio = parseInt(prompt("Ingrese 10 numeros:"));
    if (!isNaN(numeroAleatorio)){ 
    arrayPunto1.push(numeroAleatorio);}  else {
    alert("Solo ingresa números, por favor.");
    i--;
}
}
console.log(arrayPunto1);

let stringAleatorio = prompt("Ingrese varias palabras separadas por coma(,):");
let arrayPunto2= stringAleatorio.split(",");
console.log(arrayPunto2);

let arreglo3=[10,40,30,20,15,5];
arreglo3Ordenado= arreglo3.sort(function(a, b) {
    return a - b;
  });
console.log(arreglo3Ordenado);
arreglo3NumeroMayor=arreglo3Ordenado.pop();
arreglo3NumeroMenor=arreglo3Ordenado.shift();
console.log(arreglo3NumeroMenor);
console.log(arreglo3NumeroMayor);

