//La verdad no te odio, pero si esperaba más de ti. 0809 
// Variables y declaracion de Arreglos.
let fila2, contenido;
const listaNombres = document.getElementById('lista-nombres');
const listaActividades = document.getElementById('lista-actividades');
const ArrayCabeceras = [
    { titulo: 'Nombre' }, { titulo: 'Lunes' }, { titulo: 'Martes' }, { titulo: 'Miércoles' }, { titulo: 'Jueves' }, { titulo: 'Viernes' }
];
const ArrayNombres = [
    { nombre: 'Leila', flag: false },
    { nombre: 'Laura', flag: false },
    { nombre: 'Fernanda', flag: false },
    { nombre: 'Diana', flag: false },
    { nombre: 'Paola', flag: false }/*,
    { nombre: 'Magnolia', flag: false },
    { nombre: 'Alejandra', flag: false },
    { nombre: 'Abigail', flag: false },
    { nombre: 'Enya', flag: false },
    { nombre: 'Gloria', flag: false }*/
];
const ArrayActividades = [
    { tarea: 'Cita para limpieza 1', hrs: 1, flag: false },
    { tarea: 'Cita para extracción 1', hrs: 2, flag: false },
    { tarea: 'Cita para revisión 1', hrs: 3, flag: false },
    { tarea: 'Cita para colocación de brackets 1', hrs: 4, flag: false },
    { tarea: 'Cita para colocación de prótesis 1', hrs: 2, flag: false },
    { tarea: 'Cita para sacar radiografía 1', hrs: 4, flag: false },
    { tarea: 'Cita para remover brackets 1', hrs: 1, flag: false },
    { tarea: 'Cita para sacar molde de dientes 1', hrs: 2, flag: false },
    { tarea: 'Cita para curación 1', hrs: 3, flag: false },
    { tarea: 'Cita para restaruación de placa 1', hrs: 5, flag: false },
    { tarea: 'Cita para orientación de cuidados 1', hrs: 2, flag: false },
    { tarea: 'Cita para colocación de coronas 1', hrs: 3, flag: false },
    { tarea: 'Cita para limpieza 2', hrs: 1, flag: false },
    { tarea: 'Cita para extracción 2', hrs: 2, flag: false },
    { tarea: 'Cita para revisión 2', hrs: 3, flag: false },
    { tarea: 'Cita para colocación de brackets 2', hrs: 4, flag: false },
    { tarea: 'Cita para colocación de prótesis 2', hrs: 2, flag: false },
    { tarea: 'Cita para sacar radiografía 2', hrs: 4, flag: false },
    { tarea: 'Cita para remover brackets 2', hrs: 1, flag: false },
    { tarea: 'Cita para sacar molde de dientes 2', hrs: 2, flag: false },
    { tarea: 'Cita para curación 2', hrs: 3, flag: false },
    { tarea: 'Cita para restaruación de placa 2', hrs: 5, flag: false },
    { tarea: 'Cita para orientación de cuidados 2', hrs: 2, flag: false },
    { tarea: 'Cita para colocación de coronas 2', hrs: 3, flag: false },
    { tarea: 'Cita para limpieza 3', hrs: 1, flag: false },
    { tarea: 'Cita para extracción 3', hrs: 2, flag: false },
    { tarea: 'Cita para revisión 3', hrs: 3, flag: false },
    { tarea: 'Cita para colocación de brackets 3', hrs: 4, flag: false },
    { tarea: 'Cita para colocación de prótesis 3', hrs: 2, flag: false },
    { tarea: 'Cita para sacar radiografía 3', hrs: 4, flag: false },
    { tarea: 'Cita para remover brackets 3', hrs: 1, flag: false },
    { tarea: 'Cita para sacar molde de dientes 3', hrs: 2, flag: false },
    { tarea: 'Cita para curación 3', hrs: 3, flag: false },
    { tarea: 'Cita para restaruación de placa 3', hrs: 5, flag: false },
    { tarea: 'Cita para orientación de cuidados 3', hrs: 2, flag: false },
    { tarea: 'Cita para colocación de coronas 3', hrs: 3, flag: false },
];

//Funciones que cargan al iniciar la pagina.
window.onload = function () {
    //funciones a ejecutar
    imprimirNombres();
    imprimirActividades();
};

//Funcion que genera nuemeros aleatorios con intervalo.
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
    ArrayActividades.forEach(function (actividad) {
        // crear la pill para horas
        const horas = document.createElement('span');
        horas.classList = 'badge badge-primary badge-pill';
        horas.innerText = 'hrs: ' + actividad.hrs;

        const li = document.createElement('li');
        li.classList = 'list-group-item-action list-group-item d-flex justify-content-between align-items-center list-group-flush';
        li.innerText = actividad.tarea;
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
function generarHorario() {
    //Limpio el div cronograma y cambio el estado de las acciones
    const reinicio = document.getElementById('reiniciar').disabled;

    //Dependiendo del botón que precionen hace una opcion.
    if (reinicio) {
        document.getElementById('reiniciar').disabled = false;
        document.getElementById('generar').disabled = true;

        generarTabla();
    } else {
        location.reload();
    }
}

//Genero una card para cada empleado y dentro le integro sus actividades
function generarTabla() {
    //Contruyo la tabla
    const tabla = document.createElement('table');
    tabla.classList = 'table table-hover table-dark table-bordered';

    //Construyo el encabezado de la tabla y con una fila
    const encabezado = document.createElement('thead');
    const fila1 = document.createElement('tr');

    //Inserto la cabeza de la tabla.
    ArrayCabeceras.forEach(element => {
        encabezado.appendChild(cabezaTabala(element.titulo));
    });

    //Contruyo el cuerpo de la tabla con otra fila
    contenido = document.createElement('tbody');
    contenido.classList = 'thead-light';

    for (let i = 0; i < ArrayNombres.length; i++) {
        //Por cada nombre agrego una fila
        fila2 = document.createElement('tr');

        //Imprimo el nombre de un empelado en la primera columna
        const col1 = document.createElement('td');
        col1.innerText = nombreAleatorio();
        fila2.appendChild(col1);

        //Inicio la contruccion de la lista.
        const lista = document.createElement('ul');
        lista.classList = 'list-group list-group-flush';

        //Imprimo los 5 días de la semana con un método
        for (let index = 0; index < 5; index++) {
            bloqueDias();
        }
    }

    //Agrego cada elemento a la tabala
    fila1.appendChild(encabezado);
    tabla.appendChild(encabezado);
    tabla.appendChild(contenido);
    cronograma.appendChild(tabla);
}

//Leo y envio las cabeceras de la tabla.
function cabezaTabala(titulo) {
    let columna = document.createElement('th');
    columna.innerText = titulo;

    return columna;
}

function bloqueDias() {
    //Reinicio el estado del Arreglo Actividades.
    resetTareas();
    //Para imprimir las actividades agrego otra columna y dentro las imprimo con una lista
    const col = document.createElement('td');

    //Inicio la contruccion de la lista.
    const lista = document.createElement('ul');
    lista.classList = 'list-group list-group-flush';

    //Por cada gloque de actividades genero una fila y lo agrego a la columna 2
    let bloque = verificaTarea();

    for (let ind = 0; ind < bloque.length; ind++) {
        const elemento = document.createElement('li');
        elemento.classList = 'list-group-item d-flex justify-content-between align-items-center list-group-flush text-dark';
        elemento.innerText = bloque[ind].tarea;

        const horas = document.createElement('span');
        horas.classList = 'badge badge-primary badge-pill';
        horas.innerText = 'hrs: ' + bloque[ind].hrs;

        elemento.appendChild(horas);
        lista.appendChild(elemento);
    }

    col.appendChild(lista);
    fila2.appendChild(col);
    contenido.appendChild(fila2);
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
        console.log('No se pudieron acompelar las horas del empleado ->' + aux);
    }

    return ArrayAsignacion;
}

function nombreAleatorio() {
    let numero = numeroAleatorio(0, ArrayNombres.length - 1);
    let desocupado = false;
    let trabajador = 'No existen más trabajadores';

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
    let asignada = false, actividad;

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

function resetTareas() {
    ArrayActividades.forEach(function (disponible) {
        disponible.flag = false;
    });
}