const express = require("express");
const noteController = require("../controller/notes");
const router = express.Router();

router
  .get("/", noteController.getNotes)
  .post("/", noteController.createNotes)
  .delete("/:id", noteController.deleteNote)
  .put("/:id", noteController.updateNote)
  .patch("/:id", noteController.updateNote)
  .get("/:id", noteController.getNoteById);

exports.noteRouter = router;
