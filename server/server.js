const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

// unknown/catch-all route handler
app.get('*', (req, res) => {
  res.status(404).send("This page doesn't exist. Either you fucked up, or I did.")
})

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server successfully connected. I love you port ${PORT}.`);
});