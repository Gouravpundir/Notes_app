const notesModel = require('../models/notesModel');

exports.getAllNotes = async (req, res) => {
    try {
      const results = await notesModel.getNotes();
      if (results[0].length === 0) {
        res.status(404).send({status:false,message:`Notes does not exist.`});
      } else {
        res.status(200).send({status:true,message:`Success`,data:results[0]});
      }
    } catch (error) {
      res.sendStatus(500);
    }
  };
  

exports.addNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).send({ message: `Title and content are required.` });
    }
    const results = await notesModel.addNote({ title, content });
    res.status(201).send({status:true, id: results[0].insertId, title, content });
  } catch (error) {
    res.status(500).send({status:false,error:error.message});
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await notesModel.deleteNoteById(id);
    if (results[0].affectedRows === 0) {
      return res.status(404).send({status:false, message: `No such data found.` });
    }
    res.status(200).send({status:true,message:`Date deleted successfully`});
  } catch (error) {
    res.status(500).send({status:false,error:error.message});
  }
};
