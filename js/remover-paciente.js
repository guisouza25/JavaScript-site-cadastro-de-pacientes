
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
        var targetEvent = event.target;
        var eventParent = targetEvent.parentNode;

        if(targetEvent.tagName == "TD") {
            eventParent.classList.add("fadeOut");
            //para aguardar 500 ms antes de remover que é o tempo do fadeOut
            setTimeout(function() {
                eventParent.remove();
            }, 500);
        }
    });
    

// var pacientes = document.querySelectorAll(".paciente");
    
// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove(); //this ligada a quem está atrelado ao evento - paciente
//     });
// });
