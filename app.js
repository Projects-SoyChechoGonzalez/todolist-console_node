import 'colors';
import {inquirerMenu, inquirerTaskList, pause, readInput} from './helpers/inquirer.js';
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
				const pendingTasks = tareas.arrayList.filter(tarea => !tarea.completed);
				
				if (pendingTasks.length === 0) {
					console.log('No hay tareas pendientes para marcar como completadas.');
					break;
				}
				
				const selectedTaskId = await inquirerTaskList(pendingTasks);
				
				const selectedTask = tareas.arrayList.find(tarea => tarea.id === selectedTaskId);
				if (selectedTask) {
					selectedTask.completed = true;
					console.log('Tarea marcada como completada:', selectedTask.description);
				}
				break;
			case '6':
				const tasksToDelete = tareas.arrayList.map((tarea) => ({
					id: tarea.id,
					description: tarea.description,
				}));
				
				if (tasksToDelete.length === 0) {
					console.log('No hay tareas para borrar.');
					break;
				}
				
				const selectedTaskIdToDelete = await inquirerTaskList(tasksToDelete);
				
				if (selectedTaskIdToDelete) {
					tareas.deleteTask(selectedTaskIdToDelete);
					console.log('La Tarea eliminada');
				}
				break;
		}
		
		await pause();
	} while (opt !== '0');
};

main();