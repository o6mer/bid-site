import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    descripition: { type: String, default: "Product Description" },
    price: Number,
    owner: mongoose.SchemaTypes.ObjectId,
    images: {
      type: Array<String>,
      default: [
        "https://res.cloudinary.com/dhtjiomvi/image/upload/v1675926093/cld-sample-5.jpg",
      ],
    },
  },
  { collection: "data" }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export { Product };
