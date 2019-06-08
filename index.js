const { argv } = require('./yargs')
const funciones = require('./funciones')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        funciones.create_estudiante(argv);
        break;

    case 'mostrar':
        funciones.mostrar_estudiantes(argv);
        break;

    case 'mostrarEstud':
        funciones.mostrar_estudiante(argv.nombre);
        break;

    case 'mostrarMat':
        funciones.mostrar_matematicas();
        break;

    case 'promedio':
        funciones.promedio_estudiante(argv.nombre);
        break;

    case 'promedioGanan':
        funciones.promedio_ganan();
        break;

    case 'actualizar':
        funciones.actualizar_nota(argv.nombre,argv.asignatura,argv.calificacion);
        break;

    case 'eliminar':
        funciones.eliminar_estudiante(argv.nombre);
        break;

    default:
    console.log('Debes agregar un comando correcto');
        break;
}