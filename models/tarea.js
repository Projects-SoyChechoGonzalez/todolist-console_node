class Tarea {
	id = '';
	description = '';
	completed = null;
	
	constructor(description) {
		this.id = new Date().getTime();
		this.description = description;
		this.completed = null;
	}
}

export default Tarea;