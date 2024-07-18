import express from "express";
const app = express();
const port = 3000;

// const __dirname = dirname(fileURLtoPath(import.meta.url));
// const indexPath = join(__dirname, "index.ejs");
// const homePath = join(__dirname, "./views/partials/home.ejs");
// const blogDetailsPath = join(__dirname, "./views/partials/blogDetails.ejs");

let blogList = [];

function generateID() {
  return Math.floor(Math.random() * 1000000);
}
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/home", (req, res) => {
  const blogTitle = req.body.blogTitle;
  const blogDescription = req.body.blogDes;
  blogList.push({
    id: generateID(),
    title: blogTitle,
    description: blogDescription,
  });
  res.render("home.ejs", { blogList: blogList });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
