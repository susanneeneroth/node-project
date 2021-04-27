const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


const app = express();

// 1) middlewares
app.use(morgan('dev')); // till loggning

app.use(express.json()); // middleware for POST requests


app.use((req, res, next) => {
  console.log('Hello from the middleware 🦊');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;