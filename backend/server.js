import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // Opcional, mas útil para formulários

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log("🚀 Server started at http://localhost:" + PORT);
});
