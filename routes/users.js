const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost:27017/socialmediaapp");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  profileImage: String,
  posts:[{type:mongoose.Schema.Types.ObjectId, ref: "post"}]
});

userSchema.plugin(plm);

module.exports = mongoose.model("users", userSchema);