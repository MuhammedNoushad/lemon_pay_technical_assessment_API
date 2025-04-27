const mongoose = require("mongoose");

const taslSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", taslSchema);
