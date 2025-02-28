import express, { Request, Response } from 'express';
import User from '../models/user'
import bodyParser from 'body-parser';
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(bodyParser.json());


// GET /api/users
router.get('/', async (req: Request, res: Response) => {
    try {
        // واکشی تمام کاربران
        const users = await User.find();
        
        // برگرداندن لیست کاربران به صورت JSON
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
});


router.post('/login', async (req: Request, res: Response) => {

    const { email } = req.body;
    
    const user = await User.findOne({ email });
    
    try {

        let user = await User.findOne({ email });

        if (user) {
             res.status(200).json({ message: 'User exists', user });
        } else {

            const token = jwt.sign({ email: email }, 'your_secret_key', { expiresIn: '1h' });

            const newUser = new User({
                name: '#',  
                userName: '#',  
                password: '#',  
                email: email,
                buyList: { product: [] }, 
                token: token,
            });

            await newUser.save();

            res.status(201).json({ message: 'New user created', newUser });
        }
    } catch (err) {
         res.status(500).json({ message: 'Server error' });
    }

});




export default router;
