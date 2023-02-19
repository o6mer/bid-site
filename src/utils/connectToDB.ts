import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL || "");
    console.log("====================================");
    console.log("connected to db");
    console.log("====================================");
  } catch (err) {
    console.log(err);
    return;
  }
};

export default connectToDB;
