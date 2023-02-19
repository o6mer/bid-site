import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: "string", unique: true },
  email: { type: "string", unique: true },
  password: String,
  role: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User };
