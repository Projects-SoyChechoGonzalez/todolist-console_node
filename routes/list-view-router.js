import express from 'express';
import {loadDB} from '../app.js';

const router = express.Router();

router.get('/completas', (req, res) => {
	const tareas = loadDB();
	res.json(tareas.filter(tarea => tarea.completed));
});

router.get('/pendientes', (req, res) => {
	const tareas = loadDB();
	res.json(tareas.filter(tarea => !tarea.completed));
});

export default router;