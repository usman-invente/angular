const mongoose = require('mongoose');

const User = mongoose.Schema({
  email: { type: String },
  password: { type: Number}
});

module.exports = mongoose.model('users', User);

