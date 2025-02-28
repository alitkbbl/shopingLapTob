import { Router } from 'express';
import Laptop from '../models/laptobs';

const router = Router();

// مسیر برای دریافت اطلاعات کامل یک لپ‌تاپ بر اساس ID
router.get('/:id', async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (laptop) {
      res.json(laptop);
    } else {
      res.status(404).send('Laptop not found');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// مسیر برای دریافت برخی مشخصات خاص یک لپ‌تاپ بر اساس ID
router.get('/:id/summary', async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id, 'image brand name processor price');
    if (laptop) {
      res.json(laptop);
    } else {
      res.status(404).send('Laptop not found');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// مسیر برای اضافه کردن یک لپ‌تاپ جدید
router.post('/', async (req, res) => {
  try {
    const newLaptop = new Laptop(req.body);
    await newLaptop.save();
    res.status(201).json(newLaptop);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// مسیر برای دریافت همه لپ‌تاپ‌ها
router.get('/', async (req, res) => {
  try {
    const laptops = await Laptop.find({});
    res.json(laptops);
  } catch (error) {
    res.status(500).send('Server error');
  }
});





export default router;
