const Note = require('../models/notes.model');



const createNote = async(req,res)=>{
    try{
        const {title, description, content, isImportant,uploadedBy}= req.body;
        const newNote = new Note({
            title,
            description,
            content,
            isImportant,
            uploadedBy
        });
        let NoteExists = await Note.findOne({ title, uploadedBy });
        if (NoteExists) {
          return res.status(400).json({ message: 'Note with the same title already exists for this user' });
        }
        

        const savedNote = await newNote.save();
        res.status(201).json({
            message: 'Note Created Successfully !',
            note : savedNote
        });
        // if(savedNote){
        //   return res.status(500).json({message:'Note already Exists.'})
        // }
    }catch(error){
        console.log('Error Creating Note, Please try Again.')
        res.status(500).json({message: error.message});
    }
}


const getNote = async(req,res)=>{
  try{
    const note = await Note.find({});
    res.status(200).json(note);
    console.log('note found');
  }catch(error){
    res.status(404).json({message:'note not found'})
  }
}


const getNoteById = async(req,res)=>{
  try{
    const {id} = req.params;
    const note = await Note.findById(id);
    if(!note){
      return res.send(404).json({message: "Note not found!"});
    }
    res.json(note);
    console.log(`Note found with id : ${id}`);
  }catch(error){
    res.send(500).json({message:error.message})
  }
}

const updateNote = async(req,res)=>{
  try{
    const {id}  = req.params;
    const note  = await Note.findByIdAndUpdate(id,req.body);
    if(!note){
      return res.status(404).json({message:'Note not found'});
    }
    const updatedNote = await Note.findById(id);
    res.status(200).json(updatedNote);
  }catch(error){
    res.send(500).json({message: error.message});
  }
}

const deleteNote = async(req,res)=>{
  try{
    const {id} = req.params;
    const note = await Note.findByIdAndDelete(id);
    if(!note){
      return res.status(404).json({message: 'Note not found!'});
    }
    res.json({message:'Note deleted Suucessfully !'});
  }catch(error){
    res.status(500).json({message: error.message});
  }
}


module.exports ={
  createNote,
  getNote,
  getNoteById,
  updateNote,
  deleteNote
}