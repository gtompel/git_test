const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Это мое первое Express-приложение.');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});