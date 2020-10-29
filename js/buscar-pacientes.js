
var botaoBuscaPaciente = document.querySelector("#buscar-pacientes");

botaoBuscaPaciente.addEventListener("click", function() {
    
    var url = "https://api-pacientes.herokuapp.com/pacientes";

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("get", url);

    xmlHttpRequest.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if(xmlHttpRequest.status == 200) {
            erroAjax.classList.add("invisivel");
            var response = xmlHttpRequest.responseText;
            var pacientes = JSON.parse(response);
    
            pacientes.forEach(function(paciente){
                addPacienteNatabela(paciente)
            });
        } else {
            erroAjax.classList.remove("invisivel");
            erroAjax.style.color = "red";
        }
    });

    xmlHttpRequest.send();

}); 

