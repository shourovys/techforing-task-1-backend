import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import User from '../models/User';
import generateToken from '../utils/generateToken';

const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log('🚀 ~ registerUser ~  email, password :', email, password);

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    email,
    password: await bcrypt.hash(password, 10),
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id as string),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id as string),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

export { authUser, registerUser };
