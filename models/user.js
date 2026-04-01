import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Create and export the model as the default export
const User = mongoose.model("User", UserSchema);
export default User;