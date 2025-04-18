const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27018/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));
app.get('/', (req, res) => {
    res.send('Hello from Express + MongoDB!');
  });

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', UserSchema);
app.get('/create-user', async (req, res) => {
  const user = new User({ name: 'StackOverFlow', age: 99 });
  await user.save();
  res.send('User created');
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});