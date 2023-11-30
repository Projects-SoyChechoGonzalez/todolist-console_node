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
		this.arrayList.forEach((tarea, index) => {
			console.log(`${index + 1}.`.green, tarea.description, ':', !tarea.completed && 'Pending'.red);
		});
	}
	
	deleteTask(id = '') {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}
}

export default Tareas;