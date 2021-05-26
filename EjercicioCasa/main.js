class Actividades {
    constructor(tarea){
        this.tarea = tarea;
    }
}
class operacion{    
    addTarea(actividad){
        const listaActivi = document.getElementById("Lista-Actividad");
        const element = document.createElement("div");
        element.innerHTML = `
           <div class="card text-center mb-4">
           <div class="card-body">
                <input type="checkbox" value="" id="prueba">
           		<strong>Tarea</strong>: ${actividad.tarea}
           		<a href="#" class"btn btn-danger" name="delete">Delete</a>
           </div>
           </div>
        `;
        listaActivi.appendChild(element);
    }

    resetForm(){
        document.getElementById("formulario").reset();
    }
    eliminaTarea(element){
        //let borrar = 0;  
        /*if (element.checkValidity() === true){ 
            borrar = 1; 
        }*/    
        if (element.name === 'delete'){
                element.parentElement.parentElement.parentElement.remove();
        }
    }
}
document.getElementById("formulario")
     .addEventListener('submit', function(e) {
    //alert('Aqui Ingreso');
    //console.log(document.getElementById("tarea").value)
    const tarea = document.getElementById("tarea").value;
    
    const actividad = new Actividades(tarea);

    const listaActividad = new operacion();
    listaActividad.addTarea(actividad);
    listaActividad.resetForm();
    
    e.preventDefault();
});

document.getElementById("Lista-Actividad")
     .addEventListener('click', function(e) {
        const borrar = new operacion();
        borrar.eliminaTarea(e.target);
     }
);