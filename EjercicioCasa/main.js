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
           <div class="card text-center mb-8">
           <div class="card-body">
                <input type="checkbox" value="">
           		<strong>Actividad Pendiente</strong>: ${actividad.tarea}
                <input type="button" class="bt3 btg" name="delete" value="Delete" ></input>   
                
           </div>
           </div>
        `;
        listaActivi.appendChild(element);
    }
/*<a href="#" class="bt1 btr" name="delete">Delete</a>  */
    resetForm(){
        document.getElementById("formulario").reset();
    }

    eliminaTarea(element){
        if (element.name === 'delete'){
                element.parentElement.parentElement.parentElement.remove();
        }
    }

    SeguirTarea(actividad){
        const listaActivi = document.getElementById("Seguir-Actividad");
        const element = document.createElement("div");
        element.innerHTML = `
           <div class="card text-center mb-8">
           <div class="card-body">
               <input type="checkbox" value="" checked> <s> ${actividad.tarea}
           </div>
           </div>
        `;
        listaActivi.appendChild(element);
    }
}
document.getElementById("formulario")
     .addEventListener('submit', function(e) {
    //alert('Aqui Ingreso');
    //console.log(document.getElementById("tarea").value)
    const tarea = document.getElementById("tarea").value;
    if (tarea == ""){
        document.getElementById("tarea").focus();
    }
    else{
        const actividad = new Actividades(tarea);

        const listaActividad = new operacion();
        listaActividad.addTarea(actividad);
        listaActividad.resetForm();
        
    }
    e.preventDefault();
});

document.getElementById("Lista-Actividad")
     .addEventListener('click', function(e) {
        const borrar = new operacion();
        borrar.eliminaTarea(e.target);


        /*const listaActividad = new operacion();
        listaActividad.SeguirTarea(borrar);
        e.preventDefault();*/
     }
);

document.getElementById("Seguir-Actividad")
.addEventListener('submit', function(e) {
    //alert('Aqui Ingreso');
    //console.log(document.getElementById("tarea").value)
    const tarea = document.getElementById("tarea").value;
    if (tarea == ""){
        document.getElementById("tarea").focus();
    }
    else{
        const actividad = new Actividades(tarea);

        const listaActividad = new operacion();
        listaActividad.addTarea(actividad);
        listaActividad.resetForm();
    }
    e.preventDefault();
}
);