// backend/controllers/categoryController.js
const Category = require('../models/Category');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching categories' });
  }
};

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ msg: 'Category already exists' });

    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating category' });
  }
};

module.exports = { getCategories, createCategory };
