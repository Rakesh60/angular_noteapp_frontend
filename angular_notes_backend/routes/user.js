const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

// router
//   .get("/", userController.getNotes)
//   .post("/", userController.createNotes)
  // .delete("/:id", userController.deleteNote)
  // .put("/:id", userController.updateNote)
  // .patch("/:id", userController.updateNote)
  // .get("/:id", userController.getNoteById);

exports.userRouter = router;
