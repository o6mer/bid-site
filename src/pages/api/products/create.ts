import { Product } from "@/models/productSchema";
import connectToDB from "@/utils/connectToDB";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description, price, owner, images } = req.body;

  if (!title || !price || !owner)
    return res.status(400).json({ message: "missing inputs" });

  try {
    connectToDB();

    const product = new Product({
      title,
      description,
      price,
      owner,
      images,
    });

    const newProduct = await product.save();
    return res.status(200).json({ ...newProduct });
  } catch (err) {
    console.log(err);
  }
};

export default handler;
