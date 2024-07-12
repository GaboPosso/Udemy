import express from 'express';
import bodyParser from 'body-parser';


const app = express(),
  port = 3000;

 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  
  res.render('index.ejs', { posts: posts });
})

app.post('/submit', (req, res) => {
 
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})