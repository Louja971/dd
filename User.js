const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  role: { type: String, enum: ['candidat', 'recruteur'], required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  cv: String,
  skills: [String],
  experience: String
});

module.exports = mongoose.model('User', UserSchema);
