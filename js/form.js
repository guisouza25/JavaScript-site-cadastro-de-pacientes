
//############# Adcionar novo paciente #############


var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-paciente");

    var paciente = criaPaciente(form);
    var pacienteTr = criaTr(paciente);
   
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
}); 


//############## FUNÇÕES ############## 


function criaPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    
    var nomeTd = criaTd(paciente.nome, "info-nome");
    var pesoTd = criaTd(paciente.peso, "info-peso");
    var alturaTd = criaTd(paciente.altura, "info-altura");
    var gorduraTd = criaTd(paciente.gordura, "info-gordura");
    var imcTd = criaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}



