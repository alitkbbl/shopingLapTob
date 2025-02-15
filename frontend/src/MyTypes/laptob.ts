export default interface Laptop {
    _id: string;
    name: string;
    brand: string;
    model: string;
    price: number;
    processor?: string;
    description?: string;
    category?: string;
    image?: string;
    usageType?: string;
  }