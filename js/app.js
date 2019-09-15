//La verdad no te odio, pero si esperaba más de ti. 0809 
// Variables
const listaNombres = document.getElementById('lista-nombres');
const listaActividades = document.getElementById('lista-actividades');
const ArrayNombres = [
    { nombre: 'Leila', flag: false },
    { nombre: 'Laura', flag: false },
    { nombre: 'Fernanda', flag: false },
    { nombre: 'Diana', flag: false },
    { nombre: 'Paola', flag: false },
    { nombre: 'Magnolia', flag: false },
    { nombre: 'Alejandra', flag: false },
    { nombre: 'Abigail', flag: false },
    { nombre: 'Enya', flag: false },
    { nombre: 'Gloria', flag: false }
];
const ArrayActividades = [
    { tarea: 'Barrer pasillos', hrs: 1, flag: false },
    { tarea: 'Trapear pasillos', hrs: 2, flag: false },
    { tarea: 'Limpiar pizarrones', hrs: 3, flag: false },
    { tarea: 'Limpiar ventanas', hrs: 4, flag: false },
    { tarea: 'Sacar la basura de los salones', hrs: 5, flag: false },
    { tarea: 'Acomodar butacas', hrs: 4, flag: false },
    { tarea: 'Limpiar barandal', hrs: 1, flag: false },
    { tarea: 'Barrer cubos de los maestros', hrs: 2, flag: false },
    { tarea: 'Barrer pasillos 2', hrs: 3, flag: false },
    { tarea: 'Trapear pasillos 2', hrs: 5, flag: false },
    { tarea: 'Limpiar pizarrones 2', hrs: 2, flag: false },
    { tarea: 'Limpiar ventanas 2', hrs: 3, flag: false },
    { tarea: 'Sacar la basura de los salones 2', hrs: 1, flag: false },
    { tarea: 'Acomodar butacas 2', hrs: 4, flag: false },
    { tarea: 'Limpiar barandal 2', hrs: 5, flag: false },
    { tarea: 'Barrer cubos de los maestros 2', hrs: 8, flag: false },
    { tarea: 'Barrer pasillos 3', hrs: 1, flag: false },
    { tarea: 'Trapear pasillos 3', hrs: 2, flag: false },
    { tarea: 'Limpiar pizarrones 3', hrs: 3, flag: false },
    { tarea: 'Limpiar ventanas 3', hrs: 4, flag: false },
    { tarea: 'Sacar la basura de los salones 3', hrs: 5, flag: false },
    { tarea: 'Acomodar butacas 3', hrs: 8, flag: false },
    { tarea: 'Limpiar barandal 3', hrs: 1, flag: false },
    { tarea: 'Barrer cubos de los maestros 3', hrs: 2, flag: false },
    { tarea: 'Limpiar pizarrones 4', hrs: 3, flag: false },
    { tarea: 'Limpiar ventanas 4', hrs: 4, flag: false },
    { tarea: 'Sacar la basura de los salones 4', hrs: 5, flag: false },
    { tarea: 'Acomodar butacas 4', hrs: 3, flag: false },
    { tarea: 'Limpiar barandal 4', hrs: 1, flag: false },
    { tarea: 'Barrer cubos de los maestros 4', hrs: 2, flag: false }
];

//Funciones que cargan al iniciar la pagina.
window.onload = function () {
    //funciones a ejecutar
    imprimirNombres();
    imprimirActividades();
};

//Funcion que genera nuemeros aleatorios.
function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Funcion para imprimir los Nombres en el Div Lista-Nombres
function imprimirNombres() {
    // leer el Array
    ArrayNombres.forEach(function (nombre) {
        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        // Asigna una clase al li
        li.classList = "list-group-item list-group-item-action";
        // Añade valor de texto al li
        li.innerText = nombre.nombre;
        // añade el nombre a la lista
        listaNombres.appendChild(li);
    });
}

//Funcion para imprimir las Actividades en el Div Lista-Actividades
function imprimirActividades() {
    ArrayActividades.forEach(function (actividad, index) {
        // crear la pill para horas
        const horas = document.createElement('span');
        horas.classList = 'badge badge-primary badge-pill';
        horas.innerText = 'hrs: ' + ArrayActividades[index].hrs;

        const li = document.createElement('li');
        li.classList = 'list-group-item-action list-group-item d-flex justify-content-between align-items-center list-group-flush';
        li.innerText = ArrayActividades[index].tarea;
        // añade pill al li
        li.appendChild(horas);
        // añade el li al dom
        listaActividades.appendChild(li);
    });
}


// Event Listeners
eventListener();

function eventListener() {
    //Cuando se envia a formulario
    document.querySelector('#formulario').addEventListener('submit', generarHorario);
    document.querySelector('#formulario2').addEventListener('submit', generarHorario);
}

//Cambia de estado lso botones (disable) e inicia a generar las cards
function generarHorario(e) {
    //Limpio el div cronograma y cambio el estado de las acciones
    const reinicio = document.getElementById('reiniciar').disabled;

    if (reinicio) {
        document.getElementById('reiniciar').disabled = false;
        document.getElementById('generar').disabled = true;

        generarCard();
    } else {
        document.getElementById('reiniciar').disabled = true;
        document.getElementById('generar').disabled = false;
        location.reload();
    }
}

//Genero una card para cada empleado y dentro le integro sus actividades
function generarCard() {
    for (let i = 0; i < ArrayNombres.length; i++) {
        // Crear todos los elementos del card.
        const card = document.createElement('div');
        card.classList = 'card shadow bg-white rounded m-3 float-right';
        card.style.width = '20rem';

        const head = document.createElement('div');
        head.classList = 'card-header';

        const titulo = document.createElement('h5');
        titulo.classList = 'card-title text-center';
        titulo.innerText = nombreAleatorio();

        const body = document.createElement('div');
        body.classList = 'card-body';

        const lista = document.createElement('ul');
        lista.classList = 'list-group list-group-flush';

        //Por cada actividad genero un li y lo agrego a su respectiva card
        let bloque = verificaTarea();
        let ahrs = 0;
        for (let i = 0; i < bloque.length; i++) {
            const elemento = document.createElement('li');
            elemento.classList = 'list-group-item d-flex justify-content-between align-items-center list-group-flush';
            elemento.innerText = bloque[i].tarea;

            const horas = document.createElement('span');
            horas.classList = 'badge badge-primary badge-pill';
            horas.innerText = 'hrs: ' + bloque[i].hrs;

            ahrs += bloque[i].hrs;

            elemento.appendChild(horas);
            lista.appendChild(elemento);
        }

        const footer = document.createElement('div');

        if (ahrs == 8) {
            footer.classList = 'card-footer text-muted';
        } else {
            footer.classList = 'card-footer text-muted border-danger';
        }

        footer.innerText = 'Total de horas: ' + ahrs + '\nTotal de actividades: ' + bloque.length;

        body.appendChild(lista);
        head.appendChild(titulo);
        card.appendChild(head);
        card.appendChild(body);
        card.appendChild(footer);
        cronograma.appendChild(card);
    }
}

function verificaTarea() {
    let thoras = 0, actividad, aux = 0, proximasuma = 0;
    const ArrayAsignacion = [];

    try {
        for (let i = 0; i < 101; i++) {
            actividad = tareaAleatoria();
            proximasuma = thoras + actividad.hrs;

            if (proximasuma < 9) {
                ArrayAsignacion[aux] = { tarea: actividad.actividad, hrs: actividad.hrs };
                thoras += actividad.hrs;
                aux++;

                ArrayActividades.forEach(element => {
                    if (element.tarea === actividad.actividad) {
                        element.flag = true;
                    }
                });
            }

        }
    } catch (error) {
        console.log('Error con horas');
    }

    if (thoras < 8) {
        alert('No se pudieron acompelar las horas del empleado');
    }

    return ArrayAsignacion;
}

function nombreAleatorio() {
    let numero = numeroAleatorio(0, ArrayNombres.length - 1);
    let desocupado = false;
    let trabajador = 'No se Encontro';

    ArrayNombres.forEach(disponible => {
        if (!disponible.flag) {
            desocupado = true;
        }
    });

    if (desocupado) {
        for (let i = 0; i < 101; i++) {
            if (!ArrayNombres[numero].flag) {
                trabajador = ArrayNombres[numero].nombre;
                ArrayNombres[numero].flag = true;
                break;
            } else {
                numero = numeroAleatorio(0, ArrayNombres.length - 1);
            }
        }
    }

    return trabajador;
}

function tareaAleatoria() {
    let numero = numeroAleatorio(0, ArrayActividades.length - 1);
    let asignada = false;
    let actividad;

    ArrayActividades.forEach(function (disponible) {
        if (!disponible.flag) {
            asignada = true;
        }
    });

    if (asignada) {
        for (let i = 0; i < 101; i++) {
            if (!ArrayActividades[numero].flag) {
                actividad = { actividad: ArrayActividades[numero].tarea, hrs: ArrayActividades[numero].hrs };
                break;
            } else {
                numero = numeroAleatorio(0, ArrayActividades.length - 1);
            }
        }
    }

    return actividad;
}