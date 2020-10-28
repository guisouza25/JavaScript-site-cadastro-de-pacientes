
var campoFiltrar = document.querySelector("#filtrar-tabela");

campoFiltrar.addEventListener("input", function() {

    var input = this.value
    
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente) {
        var nome = paciente.querySelector(".info-nome").textContent;
        
        var expressao = new RegExp(input, "i"); //i - case insensitive

        if(!expressao.test(nome) && input.length > 0) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel")
        }

    });
})


