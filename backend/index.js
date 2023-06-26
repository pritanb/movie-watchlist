// create application
const express = require('express');
const cors = require('cors');
const app = express();
// create mongoDB connection
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// create router
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

// Allow requests from the specified frontend domain
app.use(cors({
  origin: 'http://192.168.0.12:3000',
}));

dotenv.config();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(console.log("DB connection successful"));
}

app.use(express.json());
app.use('/backend/auth', authRoute);
app.use('/backend/users', userRoute);
app.use('/backend/movies', movieRoute);
app.use('/backend/lists', listRoute);

app.listen((8800), () => {
  console.log("backend server is up");
});
