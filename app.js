import 'colors';
import {inquirerMenu, pause, readInput} from './helpers/inquirer.js';
import Tareas from './models/tareas.js';

const main = async () => {
	let opt = '';
	const tareas = new Tareas();
	
	do {
		opt = await inquirerMenu();
		
		switch (opt) {
			case '1':
				const description = await readInput('Descripción:');
				tareas.crearTarea(description);
				break;
			case '2':
				console.log(tareas.arrayList);
				break;
			case '3':
				tareas.taskListCompleted(tareas.arrayList.filter(tarea => tarea.completed));
				break;
			case '4':
				tareas.pendingTask();
				break;
			case '5':
				tareas.completeTask();
				break;
			case '6':
				tareas.deleteTask();
				break;
			
		}
		
		await pause();
	} while (opt !== '0');
};

main();