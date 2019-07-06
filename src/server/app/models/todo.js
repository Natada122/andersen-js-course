const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  title: {
    type: String,
    unique: true,
  },
  completed: {
    type: Boolean,
  },
});
module.exports = mongoose.model('Todo', todoSchema);
