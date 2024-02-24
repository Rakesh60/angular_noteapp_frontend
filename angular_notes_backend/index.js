require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const noteRouter = require("./routes/notes");
const userRouter = require("./routes/user");
const cors = require("cors");

const server = express();
//cross origin

//*Body parser
server.use(express.json());
server.use(cors());
server.use("/notes", noteRouter.noteRouter);
server.use("/user", userRouter.userRouter);

//* db connection
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
}

main();

server.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
