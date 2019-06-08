const fs = require('fs')
estudiantes = [];

const create_estudiante = estudiante => {
    listar_estudiantes();
    let obj = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    }
    let duplicado = estudiantes.find(nom => nom.nombre == estudiante.nombre)
    if (!duplicado) {
        estudiantes.push(obj);
        guardar_estudiante();
    } else {
        console.log('Ya existe un estudiante con ese nombre');

    }
}

const guardar_estudiante = () => {
    let datos_estudiante = JSON.stringify(estudiantes)
    fs.writeFile('estudiantes.json', datos_estudiante, (err) => {
        if (err) throw err;
        console.log('Estudiante creado correctamente');
    })
}

const listar_estudiantes = () => {
    try {
        estudiantes = require('./estudiantes.json')
    } catch (error) {
        estudiantes = [];
    }
}

const mostrar_estudiantes = () => {
    listar_estudiantes();
    console.log('Notas de los estudiantes');
    estudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log(`Matematicas: ${estudiante.matematicas}`);
        console.log(`Ingles: ${estudiante.ingles}`);
        console.log(`Programación: ${estudiante.programacion}`);
        console.log(' ');
    });
}

const mostrar_estudiante = (nombre) => {
    listar_estudiantes();
    let estudiante = estudiantes.find(buscar => buscar.nombre == nombre)
    if (!estudiante) {
        console.log('Estudiante no existe');
    } else {
        console.log(' Notas del estudiante');
        console.log(estudiante.nombre);
        console.log(`Matematicas: ${estudiante.matematicas}`);
        console.log(`Ingles: ${estudiante.ingles}`);
        console.log(`Programación: ${estudiante.programacion}`);
    }
}

const mostrar_matematicas = () => {
    listar_estudiantes();
    let ganan = estudiantes.filter(gana => gana.matematicas >= 3)
    if (ganan.length === 0) {
        console.log('Ningún estudiante gano matematicas');
    } else {
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log(`Matematicas: ${estudiante.matematicas}`);
            console.log(' ');
        });
    }
}

const promedio = (estud) => {
    let promed = (estud.matematicas + estud.ingles + estud.programacion) / 3;
    return promed;
}

const promedio_estudiante = (nombre) => {
    listar_estudiantes();
    let estud = estudiantes.find(promed => promed.nombre == nombre)
    if (!estud) {
        console.log('El estudiante ingresado no existe en la base de datos');
    } else {
        let promed = promedio(estud);
        console.log(`El estudiante ${estud.nombre} tiene un promedio de ${promed}`);
    }
}

const promedio_ganan = () =>{
    listar_estudiantes();
    let ganan = estudiantes.filter(gana => promedio(gana) >= 3)
    if (ganan.length === 0) {
        console.log('Ningún estudiante tiene un promedio mayor a 3');
    } else {
        ganan.forEach(estudiante => {
            let promed = promedio(estudiante);
            console.log(`El estudiante ${estudiante.nombre} gana con un promedio de ${promed}`);
        });
    }
}

const actualizar_nota = (nombre,asignatura,calificacion) =>{
    listar_estudiantes();
    let estudiante = estudiantes.find(actualizar => nombre == actualizar.nombre);
    if(estudiante){
        estudiante[asignatura] = calificacion;
        guardar_estudiante();
    }else{
        console.log('El estudiante no existe');
        
    }
}

const eliminar_estudiante = (nombre) =>{
    listar_estudiantes();
    let nuevos_estudiante = estudiantes.filter(eliminar => nombre != eliminar.nombre);
    if(nuevos_estudiante.length == estudiantes.length){
        console.log('Ningún estudiante tiene el nombre a eliminar');
    }else{
        estudiantes = nuevos_estudiante;
        guardar_estudiante();
        console.log('El estudiante eliminado correctamente');
        
    }
}

module.exports = {
    create_estudiante,
    mostrar_estudiantes,
    mostrar_estudiante,
    mostrar_matematicas,
    promedio_estudiante,
    promedio_ganan,
    actualizar_nota,
    eliminar_estudiante
}