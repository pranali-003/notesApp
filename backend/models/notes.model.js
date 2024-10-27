const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    isImportant: Boolean,
    uploadedBy: String,
    date:{
      type: Date,
      default: Date.now
    }
  });
  
const Note = mongoose.model('Note', notesSchema);
module.exports = Note;