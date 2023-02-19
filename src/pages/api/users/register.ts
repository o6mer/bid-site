import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/models/userSchema";
import bcrypt from "bcrypt";
import connectToDB from "@/utils/connectToDB";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ message: "missing inputs" });

  try {
    connectToDB();

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });

    await user.save();
    return res.status(200).json({ user, message: "user created" });
  } catch (err) {
    console.log(err);
  }
};

export default handler;
