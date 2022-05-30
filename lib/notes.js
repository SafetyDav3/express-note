const fs = require("fs");
const path = require("path");

function findById(id, notesAry) {
  const result = notesAry.filter((note) => noteId === id)[0];
  return result;
}



function createNote(body, notesAry) {
  const note = body;
  notesAry.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesAry }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}

module.exports = {
  filterByQuery,
  findById,
  createNote,
  validateNote,
};
