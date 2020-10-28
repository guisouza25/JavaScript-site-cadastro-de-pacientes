
var titulo = document.querySelector(".titulo");

console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    
    if(validaPesoEAltura(peso, altura)) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Peso e/ou altura inválidos!";
    }
}


//############## FUNÇÕES ############## 


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPesoEAltura(peso, altura) {
    valido = true;

    if( (peso < 0 || peso > 1000) || (altura < 0 || altura > 3.00 )) {
        valido = false;
        paciente.classList.add("paciente-invalido");
    }
    return valido;
} 


