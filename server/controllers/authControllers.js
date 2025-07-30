const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { registerSchema, loginSchema } = require('../validations/userValidation');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;


exports.register = async (req, res) => {
  try {
    const validated = await registerSchema.validate(req.body, { abortEarly: false });

    const { username, email, password } = validated;

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }]
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const validated = await loginSchema.validate(req.body, { abortEarly: false });
    const { email, password } = validated;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '5d' });
    const { password: _pw, ...safeUser } = user.get({ plain: true });
    res.json({ token, safeUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};