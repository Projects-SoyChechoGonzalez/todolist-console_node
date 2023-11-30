import 'colors';
import inquirer from 'inquirer';

const questions = [
	{
		type: 'list',
		name: 'option',
		message: '¿Que desea hacer?',
		choices: [
			{
				value: '1',
				name: `${'1.'.green} Crear tarea`
			},
			{
				value: '2',
				name: `${'2.'.green} Listar tareas`
			},
			{
				value: '3',
				name: `${'3.'.green} Listar tareas completadas`
			},
			{
				value: '4',
				name: `${'4.'.green} Listar tareas pendientes`
			},
			{
				value: '5',
				name: `${'5.'.green} Completar tarea(s)`
			},
			{
				value: '6',
				name: `${'6.'.green} Borrar tarea`
			},
			{
				value: '0',
				name: `${'0.'.green} Salir`
			}
		]
	}
];

export const inquirerMenu = async () => {
	console.log('==========================='.green);
	console.log('   Seleccione una opción   '.green);
	console.log('===========================\n'.green);
	
	const {option} = await inquirer.prompt(questions);
	return option;
};

export const inquirerTaskList = async (taskListChoices) => {
	console.log('==========================='.green);
	console.log('   Seleccione una opción   '.green);
	console.log('===========================\n'.green);
	
	const questions = [
		{
			type: 'list',
			name: 'option',
			message: 'Seleccione una opción:',
			choices: taskListChoices.map((tarea, index) => ({
				value: tarea.id,
				name: `${index + 1}. ${tarea.description}`,
			})),
		},
	];
	
	const {option} = await inquirer.prompt(questions);
	return option;
};

export const pause = async () => {
	const question = [
		{
			type: 'input',
			name: 'enter',
			message: `\nPresione ${'ENTER'.green} para continuar`
		}
	];
	
	await inquirer.prompt(question);
};

export const readInput = async (message) => {
	const question = [
		{
			type: 'input',
			name: 'description',
			message,
			validate(value) {
				if (value.length === 0) {
					return 'Por favor ingrese un valor';
				}
				return true;
			}
		}
	];
	
	const {description} = await inquirer.prompt(question);
	return description;
};