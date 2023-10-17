import express from 'express';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB(); //connect to MongoDB

const app = express();
app.get('/api', (req, res) => {
  res.send('API is running..');
});

app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`Server running on port 5000`));
