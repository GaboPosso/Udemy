import express from 'express';
const app = express();
const port = 3000;

// const __dirname = dirname(fileURLtoPath(import.meta.url));
// const indexPath = join(__dirname, "index.ejs");
// const homePath = join(__dirname, "./views/partials/home.ejs");
// const blogDetailsPath = join(__dirname, "./views/partials/blogDetails.ejs");

app.get('/', (req, res) => {
 res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});