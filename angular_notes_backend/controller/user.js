const model = require("../model/User");
const User = model.User;

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const saveUser = await user.save();
    console.log(saveUser);
    res.status(201).json(saveUser);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error });
  }
};
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
