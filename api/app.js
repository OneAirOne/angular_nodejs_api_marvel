const express = require('express');
const app = express();
const cors = require('cors');
const charactersRoutes = require('./routes/character');

app.use(cors());

// provide response for thes OPTIONS browsers requests
app.all('/*', function (req, res, next) {
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/characters', charactersRoutes);

// errors
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      debug: 'API error',
    },
  });
});

module.exports = app;