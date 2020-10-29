
//############# Adcionar novo paciente #############


var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-paciente");
    var paciente = criaPaciente(form);
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibeMsgErros(erros);
        return;
    }

    addPacienteNatabela(paciente);    

    form.reset();
    var ul = document.querySelector(".mensagem-erro");
    ul.innerHTML = "";
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

function validaPaciente(paciente) {

    erros = []

    if(paciente.nome.length == 0) {
        erros.push("O campo nome não pode ficar em branco.");
    }
    if(paciente.gordura.length == 0) {
        erros.push("O campo % de gordura não pode ficar em branco.");
    }
    if(!validaPeso(paciente.peso) || paciente.peso.length == 0) {
        erros.push("O peso é inválido.")
    }
    if(!validaAltura(paciente.altura) || paciente.altura.length == 0) {
        erros.push("A altura é inválida.")
    }
    return erros;
}

function exibeMsgErros(erros) {
    var ul = document.querySelector(".mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        erros = [];
    });
}

function addPacienteNatabela(paciente) {
    var pacienteTr = criaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}