import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

// Middleware para permitir o uso de JSON no req.body
app.use(express.json());
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});
