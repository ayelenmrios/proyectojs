//ingrese nombre de la materia
//ingrese hasta cinco notas

alert("Calcule el promedio de su materia!");
let materia = prompt("Ingrese el nombre de la materia:");

let sumaNotas = 0;
for(i = 0; i < 5; i++){
    notas = parseInt(prompt("Ingrese hasta cinco notas:"));
    sumaNotas = sumaNotas + notas;
    console.log(notas);
}

promedio = sumaNotas / 5;

if(promedio >= 6){
    alert("Felicidades! El promedio de " + materia + " es: " + promedio);
} else{
    alert("Lo siento. Tu promedio de " + materia + " es: " + promedio + ". Boludeaste en semana santa.");
}

//Para comprobar las operaciones matematicas
console.log(sumaNotas);
console.log(promedio);


