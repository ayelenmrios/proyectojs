
alert("Calcule el promedio de su materia!");
let materia = prompt("Ingrese el nombre de la materia:");

function cuenta(){
    let sumaNotas = 0;

    for(i = 0; i < 5; i++){
        notas = parseInt(prompt("Ingrese hasta cinco notas:"));

        sumaNotas = sumaNotas + notas;
    }

    return total = sumaNotas / 5;
}

let promedio = cuenta();

if(promedio >= 6){
    alert("Felicidades! El promedio de " + materia + " es: " + promedio);
} else{
    alert("Lo siento. Tu promedio de " + materia + " es: " + promedio + ". Boludeaste en semana santa.");
}
