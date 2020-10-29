
var campoFiltrar = document.querySelector("#filtrar-tabela");

campoFiltrar.addEventListener("input", function() {

    var input = this.value
    
    var pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(function(paciente) {
        console.log(paciente)
        var nome = paciente.querySelector(".info-nome").textContent;
        
        var expressao = new RegExp(input, "i"); //i - case insensitive

        if(!expressao.test(nome) && input.length > 0) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel")
        }

        // var comparavel = nome.substr(0, input.length);
        // var comparavelMinusculo = comparavel.toLowerCase();
        // var valorDigitadoMinusculo = input.toLowerCase();

        // if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
        //     paciente.classList.add("invisivel");
        // } else{
        //     paciente.classList.remove("invisivel");
        // }

    });
})


