const fs = require("fs");
const path = require("path");
const router = require("express").Router();
// const { filterByQuery, findById, createNote, validateNote } = req(
//   path.join(__dirname, "../lib/notes.js")
// );
// const { notes } = require(path.join(__dirname, "../db/db.json"));
let notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  results = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(results);
});

// router.get("/notes:id", (req, res) => {
//   const result = findById(req.params.id, notes);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

router.post("/notes", (req, res) => {
  let noteModel = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 1000),
  };
  notes.push(noteModel);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  
  res.json(notes);

  // req.body.id = notes.length.toString();

  // if (!validateNote(req.body)) {
  //   res.status(400).send("Note not formatted correctly...");
  // } else {
  //   const note = createNote(req.body, notes);
  //   res.json(note);
  // }
});

module.exports = router;
