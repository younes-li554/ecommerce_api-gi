require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

(async () => {
  const adminExists = await User.findOne({ email: 'admin@test.com' });
  if (adminExists) {
    console.log('Admin already exists');
    mongoose.connection.close();
    return;
  }

  const admin = new User({
    name: 'Admin',
    email: 'admin@test.com',
    password: '123456',
    role: 'admin'
  });

  await admin.save();
  console.log('Admin created successfully');
  mongoose.connection.close();
})();