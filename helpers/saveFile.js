import fs from 'fs';

export const saveDB = (data) => {
	const file = './db/data.json';
	fs.writeFileSync(file, JSON.stringify(data));
};