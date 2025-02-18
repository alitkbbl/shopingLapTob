import { Schema, model, Document } from 'mongoose';

interface ILaptop {
  name: string;
  brand: string;
  model: string;
  price: string;
  processor: string;
  description?: string;
  category?: string;
  image: string;
  image2: string;
  usageType: string;  
}

const laptopSchema = new Schema<ILaptop>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: String, required: true },
  processor: { type: String, required: true },
  description: { type: String, default: '' },
  category: { type: String, default: 'Laptop' },
  image: { type: String, required: true },
  image2: { type: String, required: true },
  usageType: { type: String, required: true } 
});

const Laptop = model<ILaptop>('Laptop', laptopSchema);

export default Laptop;
