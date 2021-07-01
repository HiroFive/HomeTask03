import notes from '../notesData.js';
import { v4 as uuidv4 } from 'uuid';
import { finedEditRow } from '../helpers/notes.js';

export const createNewNotes = (req, res) => {
	const newNote = req.body;
	notes.push({ ...newNote, id: uuidv4() });
	res.send('Note has been added');
};

export const getNote = (req, res) => {
	const { id } = req.params;
	const foundNote = notes.find((note) => note.id === id);
	res.send(foundNote);
};
export const getNotes = (req, res) => {
	res.send(notes);
};
export const deleteNote = (req, res) => {
	const { id } = req.params;
	notes.splice(
		notes.findIndex((note) => {
			return note.id == id;
		}),
		1
	);
	res.send(`Note with the id#${id} has been deleted`);
};
export const editNote = (req, res) => {
	const { id } = req.params;
	const currentNote = notes.find((note) => note.id == id);
	finedEditRow(currentNote, req.body);
	res.send(`Note with the id${id} has been updated`);
};
export const getStatistics = (req, res) => {
	const stats = {
		title: 'Current statistics',
		active: 0,
		archived: 0,
	};
	notes.forEach((noteItem) => {
		noteItem.status === 'Active' ? stats.active++ : stats.archived++;
	});

	res.send(stats);
};
