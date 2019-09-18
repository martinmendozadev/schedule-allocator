//La verdad no te odio, pero si esperaba más de ti. 0809 
// Variables y declaracion de Arreglos.
const listaNombres = document.getElementById('lista-nombres');
const listaActividades = document.getElementById('lista-actividades');
const ArrayNombres = [
    { nombre: 'Leila', flag: false },
    { nombre: 'Laura', flag: false },
    { nombre: 'Fernanda', flag: false }/*,
    { nombre: 'Diana', flag: false },
    { nombre: 'Paola', flag: false },
    { nombre: 'Magnolia', flag: false },
    { nombre: 'Alejandra', flag: false },
    { nombre: 'Abigail', flag: false },
    { nombre: 'Enya', flag: false },
    { nombre: 'Gloria', flag: false }*/
];
const ArrayActividades = [
    { tarea: 'Barrer pasillos', hrs: 1, flag: false },
    { tarea: 'Trapear pasillos', hrs: 2, flag: false },
    { tarea: 'Limpiar pizarrones', hrs: 3, flag: false },
    { tarea: 'Limpiar ventanas', hrs: 4, flag: false },
    { tarea: 'Sacar la basura de los salones', hrs: 2, flag: false },
    { tarea: 'Acomodar butacas', hrs: 4, flag: false },
    { tarea: 'Limpiar barandal', hrs: 1, flag: false },
    { tarea: 'Barrer cubos de los maestros', hrs: 2, flag: false },
    { tarea: 'Trapear cubos de los maestros', hrs: 3, flag: false },
    { tarea: 'Colocar papel de baño', hrs: 5, flag: false },
    { tarea: 'Quitar telarañas', hrs: 2, flag: false },
    { tarea: 'Limpiar puertas', hrs: 3, flag: false },
    { tarea: 'Barrer lobby', hrs: 1, flag: false },
    { tarea: 'Trapear lobby', hrs: 2, flag: false },
    { tarea: 'Barrer el laboratorio de robotica', hrs: 5, flag: false },
    { tarea: 'Trapear el laboratorio de robotica', hrs: 8, flag: false },
    { tarea: 'Limpiar baño de las niñas superior', hrs: 1, flag: false },
    { tarea: 'Limpiar baño de las niñas inferior', hrs: 2, flag: false },
    { tarea: 'Limpiar baño de los niños superior', hrs: 1, flag: false },
    { tarea: 'Limpiar baño de los niños inferior', hrs: 4, flag: false },
    { tarea: 'Limpiar espejos de baños', hrs: 2, flag: false },
    { tarea: 'Rellenar jabón de manos', hrs: 8, flag: false },
    { tarea: 'Barrer escaleras', hrs: 1, flag: false },
    { tarea: 'Trapear las escaleras', hrs: 2, flag: false },
    { tarea: 'Reportar daños a mantenimiento', hrs: 3, flag: false },
    { tarea: 'Levar al deposito la basura del edificio', hrs: 4, flag: false },
    { tarea: 'Limpiar mesas de lobby', hrs: 5, flag: false },
    { tarea: 'Limpiar asientos del lobby', hrs: 3, flag: false },
    { tarea: 'Recojer la basura de los contenedores de los pasillos', hrs: 1, flag: false },
    { tarea: 'Limpiar su material de trabajo', hrs: 2, flag: false }
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

    //Dentro de la fila de encabezado agrego 6 columnas y sus nombres
    const columna1 = document.createElement('th');
    columna1.innerText = 'Nombre';

    const columna2 = document.createElement('th');
    columna2.innerText = 'Lunes';

    const columna3 = document.createElement('th');
    columna3.innerText = 'Martes';

    const columna4 = document.createElement('th');
    columna4.innerText = 'Miercoles';

    const columna5 = document.createElement('th');
    columna5.innerText = 'Jueves';

    const columna6 = document.createElement('th');
    columna6.innerText = 'Viernes';

    //Contruyo el cuerpo de la tabla con otra fila
    const contenido = document.createElement('tbody');
    contenido.classList = 'thead-light';

    for (let i = 0; i < ArrayNombres.length; i++) {
        //Por cada nombre agrego una fila
        const fila2 = document.createElement('tr');

        //Imprimo el nombre de un empelado en la primera columna
        const col1 = document.createElement('td');
        col1.innerText = nombreAleatorio();
        fila2.appendChild(col1);

        //Para imprimir las actividades agrego otra columna y dentro las imprimo con una lista
        const col2 = document.createElement('td');

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

        //
        //Aqui INICIA la posible integrecion de los demás diías.
        //
        //MARTES//

        resetTareas();

        //Para imprimir las actividades agrego otra columna y dentro las imprimo con una lista
        const col21 = document.createElement('td');

        //Inicio la contruccion de la lista.
        const lista1 = document.createElement('ul');
        lista1.classList = 'list-group list-group-flush';

        //Por cada gloque de actividades genero una fila y lo agrego a la columna 2
        let bloque1 = verificaTarea();

        for (let ind1 = 0; ind1 < bloque1.length; ind1++) {
            const elemento1 = document.createElement('li');
            elemento1.classList = 'list-group-item d-flex justify-content-between align-items-center list-group-flush text-dark';
            elemento1.innerText = bloque1[ind1].tarea;

            const horas1 = document.createElement('span');
            horas1.classList = 'badge badge-primary badge-pill';
            horas1.innerText = 'hrs: ' + bloque1[ind1].hrs;

            elemento1.appendChild(horas1);
            lista1.appendChild(elemento1);
        }

        col21.appendChild(lista1);
        fila2.appendChild(col21);
        contenido.appendChild(fila2);


        //MIERCOLES//
        resetTareas();
        //Para imprimir las actividades agrego otra columna y dentro las imprimo con una lista
        const col22 = document.createElement('td');

        //Inicio la contruccion de la lista.
        const lista2 = document.createElement('ul');
        lista2.classList = 'list-group list-group-flush';

        //Por cada gloque de actividades genero una fila y lo agrego a la columna 2
        let bloque2 = verificaTarea();

        for (let ind2 = 0; ind2 < bloque2.length; ind2++) {
            const elemento2 = document.createElement('li');
            elemento2.classList = 'list-group-item d-flex justify-content-between align-items-center list-group-flush text-dark';
            elemento2.innerText = bloque2[ind2].tarea;

            const horas2 = document.createElement('span');
            horas2.classList = 'badge badge-primary badge-pill';
            horas2.innerText = 'hrs: ' + bloque2[ind2].hrs;

            elemento2.appendChild(horas2);
            lista2.appendChild(elemento2);
        }

        col22.appendChild(lista2);
        fila2.appendChild(col22);
        contenido.appendChild(fila2);


        //JUEVES//
        resetTareas();
        //Para imprimir las actividades agrego otra columna y dentro las imprimo con una lista
        const col23 = document.createElement('td');

        //Inicio la contruccion de la lista.
        const lista3 = document.createElement('ul');
        lista3.classList = 'list-group list-group-flush';

        //Por cada gloque de actividades genero una fila y lo agrego a la columna 2
        let bloque3 = verificaTarea();

        for (let ind3 = 0; ind3 < bloque3.length; ind3++) {
            const elemento3 = document.createElement('li');
            elemento3.classList = 'list-group-item d-flex justify-content-between align-items-center list-group-flush text-dark';
            elemento3.innerText = bloque3[ind3].tarea;

            const horas3 = document.createElement('span');
            horas3.classList = 'badge badge-primary badge-pill';
            horas3.innerText = 'hrs: ' + bloque3[ind3].hrs;

            elemento3.appendChild(horas3);
            lista3.appendChild(elemento3);
        }

        col23.appendChild(lista3);
        fila2.appendChild(col23);
        contenido.appendChild(fila2);


        //VIERNES//
        resetTareas();
        //Para imprimir las actividades agrego otra columna y dentro las imprimo con una lista
        const col24 = document.createElement('td');

        //Inicio la contruccion de la lista.
        const lista4 = document.createElement('ul');
        lista4.classList = 'list-group list-group-flush';

        //Por cada gloque de actividades genero una fila y lo agrego a la columna 2
        let bloque4 = verificaTarea();

        for (let ind4 = 0; ind4 < bloque4.length; ind4++) {
            const elemento4 = document.createElement('li');
            elemento4.classList = 'list-group-item d-flex justify-content-between align-items-center list-group-flush text-dark';
            elemento4.innerText = bloque4[ind4].tarea;

            const horas4 = document.createElement('span');
            horas4.classList = 'badge badge-primary badge-pill';
            horas4.innerText = 'hrs: ' + bloque4[ind4].hrs;

            elemento4.appendChild(horas4);
            lista4.appendChild(elemento4);
        }

        col24.appendChild(lista4);
        fila2.appendChild(col24);
        contenido.appendChild(fila2);


        //
        //Aqui TERMINA la posible integrecion de los demás días.
        //

        col2.appendChild(lista);
        fila2.appendChild(col2);
        contenido.appendChild(fila2);
    }



    //Agrego cada elemento a la tabala
    encabezado.appendChild(columna1);
    encabezado.appendChild(columna2);
    encabezado.appendChild(columna3);
    encabezado.appendChild(columna4);
    encabezado.appendChild(columna5);
    encabezado.appendChild(columna6);

    fila1.appendChild(encabezado);
    tabla.appendChild(encabezado);
    tabla.appendChild(contenido);
    cronograma.appendChild(tabla);
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
        console.log('No se pudieron acompelar las horas del empleado ->'+ aux);
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

function resetTareas() {
    ArrayActividades.forEach(function (disponible) {
        disponible.flag=false;
    });
}