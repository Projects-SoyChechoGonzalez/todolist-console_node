import Tarea from './tarea.js';
import inquirer from 'inquirer';

class Tareas {
	_listado = {};
	
	get arrayList() {
		const list = [];
		
		Object.keys(this._listado).forEach(key => {
			const tarea = this._listado[key];
			list.push(tarea);
		});
		
		return list;
	}
	
	constructor() {
		this._listado = {};
	}
	
	crearTarea(description = '', completed = false) {
		const tarea = new Tarea(description);
		this._listado[tarea.id] = tarea;
		this._listado[tarea.id].completed = completed;
	}
	
	taskListCompleted(list = []) {
		list.forEach((tarea, index) => {
			if (tarea.completed) {
				console.log(`${index + 1}.`.green, tarea.description, ':', tarea.completed && 'Completed'.green);
			}
		});
	}
	
	pendingTask() {
		this.arrayList.forEach((tarea, index) => {
			if (!tarea.completed) {
				console.log(`${index + 1}.`.green, tarea.description, ':', !tarea.completed && 'Pending'.red);
			}
		});
	}
	
	completeTask() {
		const pendingTasks = this.arrayList.filter(tarea => !tarea.completed);
		
		if (pendingTasks.length === 0) {
			console.log('No hay tareas pendientes para marcar como completadas.');
			return;
		}
		
		const choices = pendingTasks.map((tarea, index) => ({
			name: `${index + 1}. ${tarea.description}`,
			value: tarea.id,
		}));
		
		this.pendingTask();
		
		inquirer
			.prompt([
				{
					type: 'list',
					name: 'selectedTask',
					message: 'Seleccionar una tarea para marcar como completada',
					choices,
				},
			])
			.then(answers => {
				const selectedTaskId = answers.selectedTask;
				const selectedTask = this._listado[selectedTaskId];
				
				if (selectedTask) {
					selectedTask.completed = true;
					console.log('Tarea marcada como completada:', selectedTask.description);
				}
				
				if (!selectedTask) {
					console.log('Tarea no encontrada');
				}
			});
	}
	
	deleteTask(id = '') {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}
}

export default Tareas;