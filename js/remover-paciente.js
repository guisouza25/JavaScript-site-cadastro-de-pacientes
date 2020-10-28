
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
        var targetEvent = event.target;
        var eventParent = targetEvent.parentNode;
        eventParent.remove();
    });
    


// var pacientes = document.querySelectorAll(".paciente");
    
// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove(); //this ligada a quem está atrelado ao evento - paciente
//     });
// });
