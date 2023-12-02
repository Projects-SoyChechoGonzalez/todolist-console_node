import express from 'express';
import Tareas from '../models/tareas.js';
import {loadDB, saveDB} from '../app.js';

const router = express.Router();
router.use(express.json());

router.post('/tareas', (req, res) => {
	const tareas = new Tareas(loadDB());
	const {description} = req.body;
	tareas.crearTarea(description);
	saveDB(tareas.arrayList);
	res.json(tareas.arrayList);
});


export default router;
