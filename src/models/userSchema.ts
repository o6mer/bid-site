import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: "string", unique: true },
    email: { type: "string", unique: true },
    password: String,
    role: String,
    id: { type: String, unique: true },
  },
  { collection: "data" }
);

const User = mongoose.model("User", userSchema);

export { User };
