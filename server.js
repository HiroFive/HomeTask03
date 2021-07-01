import express from 'express';
import bodyParser from 'body-parser';
import notesRoutes from './routers/notes.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/notes', notesRoutes);

app.get('/', (req, res) => {
	res.send(`Hello it's home page`);
});

app.listen(PORT, () =>
	console.log(`Server running on port : http://localhost:${PORT}`)
);
