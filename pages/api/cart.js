import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export default async function handle(req, res) {
  await connectToDB();
  const ids = req.body.ids;
  res.json(await Product.find({ _id: ids }));
}
