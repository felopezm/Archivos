const nombre = {
    alias: 'n',
    demand: true
}

const matematicas = {
    alias: 'm',
    demand: true
}

const ingles = {
    alias: 'i',
    demand: true
}

const programacion = {
    alias: 'p',
    demand: true
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const mostrarEstud = {
    nombre
}

const actualiza = {
    nombre,
    asignatura : {
        alias:'a',
        demand:true,
      
    },
    calificacion : {
        alias:'c',
        demand:true,
        
    }
}

const argv = require('yargs')
    .command('crear', 'crear un estudiante', creacion)
    .command('mostrar', 'mostrar los estudiantes y sus notas')
    .command('mostrarEstud', 'mostrar un estudiante y sus notas', mostrarEstud)
    .command('mostrarMat', 'mostrar los estudiante y sus notas de matematicas')
    .command('promedio', 'ver el promedio por estudiante', mostrarEstud)
    .command('promedioGanan', 'ver los estudiantes que ganan con un promedio mayor a 3')
    .command('actualizar', 'actualizar la nota de un estudiante', actualiza)
    .command('eliminar', 'elimina a un estudiante', mostrarEstud)
    .argv

module.exports = {
    argv
}