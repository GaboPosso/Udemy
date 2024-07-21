import express from "express";
const app = express();
const port = 3000;

// const __dirname = dirname(fileURLtoPath(import.meta.url));
// const indexPath = join(__dirname, "index.ejs");
// const homePath = join(__dirname, "./views/partials/home.ejs");
// const blogDetailsPath = join(__dirname, "./views/partials/blogDetails.ejs");

let blogList = [];


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
  res.render("./views/partials/home.ejs", { blogList: blogList });
});
function generateID() {
  return Math.floor(Math.random() * 1000000);
}

app.post("/edit/:id", (req, res) => {
  const blogId = req.params.id;
  const editBlog = blogList.findIndex((blog) => blog.id === parseInt(blogId));
  if (editBlog === -1) {
    res.send("<h1> Something went wrong</h1>");
  }
  const updateTitle = req.body.blogTitle;
  const updatedDescription = req.body.blogDes;

  const blogTitle = (blogList[editBlog].title = updatedTitle);
  const blogDescription = (blogList[editBlog].description = updatedDescription);
  [...blogList, { blogTitle: blogTitle, blogDescription: blogDescription }];

  res.render("home.ejs", { isEdit: true, blogList: blogList });
});

app.post('/delete/:id')

app.get("/blogDetails/:id", (req, res) => {
  const blogId = req.params.id;
  const blogDetails = blogList.find((blog) => blog.id === parseInt(blogId));
  res.render(blogDetails, { blogDetails: blogDetails });
});

app.post('/delete/:id', (req, res) => {
  const blogId = req.params.id;
  blogList = blogList.filter((blog) => blog.id !== parseInt(blogId));
  res.send('<script>alert("Blog Deleted Succesfully"); window.location="/home";</script>');
  res.redirect('/home');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
