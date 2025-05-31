const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))

  const exceriseRouter = require('./routes/exercise');
  app.use('/exercise', exceriseRouter);

  app.use('/excercises', exceriseRouter);
  app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`); 
});
