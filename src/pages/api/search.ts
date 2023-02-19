import { search } from "@/utils/cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const params = JSON.parse(req.body.params);
  const data = await search(params);

  res.status(200).json({ ...data });
};

export default handler;
