import express from 'express';

const app = express(),  
  port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1><p> Gabriel</p>');
});

app.get('/contact', (req, res) => {
  res.send('h1>Contact</h1><p>myemai@gmial.com</p>');
});

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });