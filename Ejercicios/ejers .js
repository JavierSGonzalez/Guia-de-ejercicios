//Ejercicio 1.1

let num = "";  
for (let i = 1; i < 11; i++) {
    num += i+"<br>";  
}

document.getElementById("ej1_1").innerHTML = num;

//Ejercicio 1.2

let par = "";  
for (let a = 0; a < 21; a++) {
    if (a % 2 == 0){
        par += a+"<br>";   
    }
}

document.getElementById("ej1_2").innerHTML = par;

//Ejercicio 1.3

let tri = ""; 

for (let t = 1; t < 6; t++) { 
    for (let j = 1; j <= t; j++) {  
        tri += "*";  
    }
    tri += "<br>"; 
}


document.getElementById("ej1_3").innerHTML = tri;

//Ejercicio 2.1

let sum = [3, 7, 2, 9, 5]
let suma = 0
for (let nume of sum) {
    suma += nume;
}

document.getElementById("ej2_1").innerHTML = suma;

//Ejercicio 2.2

let may = [12, 45, 6, 89, 23]
let mayor = may[0];
for (let mao = 1; mao< may.length; mao++){
    if (may[mao]> mayor){
        mayor = may[mao]
    }
}

document.getElementById("ej2_2").innerHTML = mayor

//Ejercicio 2.3

let men = [15, 3, 8, 12, 1]
let menor = [];
for (let mer = 0; mer < men.length; mer++){
    if (men[mer]< 10){
        menor.push(men[mer])
    }
}

document.getElementById("ej2_3").innerHTML = menor

//Ejercicio 3.1

const sumar = (a,b) => a+b;

document.getElementById("ej3_1").innerHTML = sumar

//Ejercicio 3.2

const cua = (j) => j*j

document.getElementById("ej3_2").innerHTML = cua

//Ejercicio 3.3

const dup = [2, 4, 6]
const duplicados = dup.map(dupli => dupli * 2);

document.getElementById("ej3_3").innerHTML = duplicados