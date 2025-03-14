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