// import 'colors';
// import readline from 'readline';
//
// export const mostrarMenu = () => {
// 	return new Promise(resolve => {
// 		console.clear();
//
// 		console.log('==========================='.green);
// 		console.log('   Seleccione una opción   '.green);
// 		console.log('===========================\n'.green);
//
// 		console.log(`${'1.'.green} Crear tarea`);
// 		console.log(`${'2.'.green} Listar tareas`);
// 		console.log(`${'3.'.green} Listar tareas completadas`);
// 		console.log(`${'4.'.green} Listar tareas pendientes`);
// 		console.log(`${'5.'.green} Completar tarea(s)`);
// 		console.log(`${'6.'.green} Borrar tarea`);
// 		console.log(`${'0.'.green} Salir\n`);
//
// 		const read = readline.createInterface({
// 			input: process.stdin,
// 			output: process.stdout
// 		});
//
// 		read.question('Seleccione una opción:', (option) => {
// 			read.close();
// 			resolve(option);
// 		});
// 	});
// };
//
// export const pausa = () => {
// 	return new Promise(resolve => {
// 		const read = readline.createInterface({
// 			input: process.stdin,
// 			output: process.stdout
// 		});
//
// 		read.question(`\nPresione ${'ENTER'.green} para continuar\n`, (option) => {
// 			read.close();
// 			resolve();
// 		});
// 	});
//
// };