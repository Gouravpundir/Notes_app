const db = require("../database");

function getNotes() {
  return db.query('SELECT * FROM notes ORDER BY date DESC');
}

function addNote({ title, content }) {
  return db.query(
    'INSERT INTO notes (title, content) VALUES (?, ?)',
    [title, content]
  );
}

function deleteNoteById(id) {
  return db.query('DELETE FROM notes WHERE id = ?', [id]);
}

module.exports = {
  getNotes,
  addNote,
  deleteNoteById,
};
