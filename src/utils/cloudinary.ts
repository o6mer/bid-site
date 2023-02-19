import axios from "axios";

export const search = async (options: any = {}) => {
  const params = {
    ...options,
  };

  if (options.nextCursor) {
    params.next_cursor = options.nextCursor;
    delete params.nextCursor;
  }

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const res = await axios.get(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  );
  return res.data;
};

export const getFolders = async () => {
  const res = await axios.get(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/folders`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  );
  return res.data;
};

export const mapImageResources = (resources: Array<any>) => {
  const images = resources.map((resource: any) => {
    const { asset_id, public_id, secure_url, width, height } = resource;

    return {
      id: asset_id,
      title: public_id,
      image: secure_url,
      width,
      height,
    };
  });

  return images;
};
