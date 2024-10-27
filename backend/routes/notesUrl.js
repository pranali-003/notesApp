const express = require('express');
const { createNote, getNote, getNoteById, updateNote, deleteNote } = require('../controller/notes.controller');
const router = express.Router();

router.post('/note', createNote);
router.get('/note', getNote);
router.get('/note/:id', getNoteById);
router.put('/note/:id', updateNote);
router.delete('/note/:id', deleteNote);


module.exports = router;
