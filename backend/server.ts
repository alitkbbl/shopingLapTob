import express from 'express';
import mongoose from 'mongoose';
const cors = require("cors")
import laptopRoutes from './routers/getLApTob';
import userRoutes from './routers/getUser';

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/products').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

// استفاده از میانی‌افزار cors
app.use(cors());
app.use(express.json());

// استفاده از مسیرهای مربوط به لپ‌تاپ‌ها
app.use('/api/laptops', laptopRoutes);

app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
