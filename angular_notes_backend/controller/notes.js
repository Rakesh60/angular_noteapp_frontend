const model = require("../model/Notes");
const Notes = model.Note;

exports.createNotes = async (req, res) => {
  const note = new Notes(req.body);
  try {
    const savedNote = await note.save();
    console.log(savedNote);
    res.status(201).json(savedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.getNotes = async (req, res) => {
  const notes = await Notes.find();
  res.json(notes)
};
//
exports.getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Notes.findById(id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//* DEliting notes
exports.deleteNote = async (req, res) => {
  const noteId = req.params.id;
  try {
    const deletedNote = await Notes.findByIdAndDelete(noteId);
    if (!deletedNote) {
      // If the note with the provided ID is not found, return a 404 Not Found error
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: `${deletedNote.title} Note deleted successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

//* Updating

exports.updateNote = async (req, res) => {
  const noteId = req.params.id;
  const updates = req.body;

  try {
    const updatedNote = await Notes.findByIdAndUpdate(noteId, updates, { new: true });

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(updatedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};