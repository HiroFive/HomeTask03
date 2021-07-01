import express from 'express';

import {
	createNewNotes,
	getNotes,
	getNote,
	deleteNote,
	editNote,
	getStatistics,
} from '../repositories/notes.js';

import {notesSchema, createNewNotesSchema} from '../validations/notesValidation.js';
import validation from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.get('/stats', getStatistics);

router.get('/', getNotes);

router.post('/', validation(createNewNotesSchema), createNewNotes);

router.get('/:id', getNote);

router.delete('/:id', deleteNote);

router.patch('/:id', validation(notesSchema), editNote);

export default router;
