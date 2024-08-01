var cursos = [{
    nombre: 'Matematicas',
    area: 'Logica',
    duracion: 60,
    profesor: 'Juan Pablo',
    descripcion: 'Matematicas basicas para sumar y restar'
},{
    nombre: 'Geometria',
    area: 'Logica',
    duracion: 45,
    profesor: 'Antonio Lopez',
    descripcion: 'Que es un circulo y un triangulo'
},{
    nombre: 'Estadistica',
    area: 'Logica',
    duracion: 90,
    profesor: 'Jose Maria',
    descripcion: 'Calcular promedios y varianzas'
},{
    nombre: 'Biologia',
    area: 'Ciencia',
    duracion: 75,
    profesor: 'Maria Elena',
    descripcion: 'Conocer las plantas y animales'
},{
    nombre: 'Quimica',
    area: 'Ciencia',
    duracion: 80,
    profesor: 'Pedro Perez',
    descripcion: 'Conocer las molécules y las reacciones químicas'
}]

const waiting = async (datos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 1000)
    })
}

var crear = document.getElementById('crearArea')
var editar = document.getElementById('editarArea')
var eliminar = document.getElementById('eliminarArea')

function crearCurso(cursos){
    cursos.push({
        nombre: prompt("Ingrese el nombre del curso"),
        area: prompt("Ingrese el area del curso"),
        duracion: parseInt(prompt("Ingrese la duracion del curso")),
        profesor: prompt("Ingrese el profesor a cargo"),
        descripcion: prompt("Ingrese la descripcion del curso")
    })
    return cursos;
}

function eliminarCurso(cursos){
    let nombreCurso = prompt("Ingrese el nombre del curso a eliminar");
    cursos.forEach(curso => {
        if (curso.nombre === nombreCurso){
            cursos.splice(cursos.indexOf(curso), 1);
        }
    });
    return cursos;
}

function editarCurso(cursos){
    let nombreCurso = prompt("Ingrese el nombre del curso a editar");
    cursos.forEach(curso => {
        if (curso.nombre === nombreCurso){
            nombre = prompt("Ingrese el nuevo nombre del curso");
            let area = prompt("Ingrese el nuevo area del curso");
            let duracion = prompt("Ingrese la nueva duracion del curso");
            let profesor = prompt("Ingrese el nuevo profesor a cargo");
            let descripcion = prompt("Ingrese la nueva descripcion del curso");

            console.log(nombre, area, duracion, profesor, descripcion);

            if(nombre !== "") {cursos[cursos.indexOf(curso)].nombre = nombre;}
            if(area !== "") {cursos[cursos.indexOf(curso)].area = area;}
            if(duracion != "") {cursos[cursos.indexOf(curso)].duracion = parseInt(duracion);}
            if(profesor !== "") {cursos[cursos.indexOf(curso)].profesor = profesor;}
            if(descripcion !== "") {cursos[cursos.indexOf(curso)].descripcion = descripcion;}
        }
    });
    return cursos;
}

const load = async() => {
    const datos = await waiting(cursos);

    let areas = ""
    datos.forEach(area => {
        areas += `<div>
    <h2>${area.nombre}</h2>
    <p>Area: ${area.area}</p>
    <p>Duracion: ${area.duracion} horas</p>
    <p>Profesor: ${area.profesor}</p>
    <p>Descripcion: ${area.descripcion}</p>
    <br>
</div>
`
        document.getElementById("areas").innerHTML = areas;
    });
}
crear.addEventListener('click', () => {
    cursos = crearCurso(cursos);
    localStorage.setItem('cursos', JSON.stringify(cursos));
    load();
})

eliminar.addEventListener('click', () => {
    cursos = eliminarCurso(cursos);
    localStorage.setItem('cursos', JSON.stringify(cursos));
    load();
});

editar.addEventListener('click', () => {
    cursos = editarCurso(cursos);
    localStorage.setItem('cursos', JSON.stringify(cursos));
    load();
});

if(localStorage.getItem('cursos') != undefined){
    cursos = JSON.parse(localStorage.getItem('cursos'));
}
load();