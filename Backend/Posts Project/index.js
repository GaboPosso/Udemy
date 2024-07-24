import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Configure Express middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

//Define paths to view files
const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, "index.ejs");
const homePath = join(__dirname, "./views/partials/home.ejs");
const blogDetailsPath = join(__dirname, "./views/partials/blogDetails.ejs");

//Initialize blog list
let blogList = [];

//Render index page
app.get("/", (req, res) => {
  res.render(indexPath);
});

//Render home page with blog list
app.get("/home", (req, res) => {
  res.render(homePath, { blogList: blogList });
});

//Add new blog
app.post("/home", (req, res) => {
  const blogTitle = req.body.blogTitle;
  const blogDescription = req.body.blogDes;
  blogList.push({
    id: generateID(),
    title: blogTitle,
    description: blogDescription,
  });
  res.render(homePath, { blogList: blogList });
});

//
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

//Render blog details page
app.get("/blogDetails/:id", (req, res) => {
  const blogId = req.params.id;
  const blogDetails = blogList.find((blog) => blog.id === parseInt(blogId));
  res.render(blogDetails, { blogDetails: blogDetails });
});

// Delete blog
app.post("/delete/:id", (req, res) => {
  const blogId = req.params.id;
  blogList = blogList.filter((blog) => blog.id !== parseInt(blogId));
  res.send(
    '<script>alert("Blog Deleted Succesfully"); window.location="/home";</script>'
  );
  res.redirect("/home");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Function to generate random ID
function generateID() {
  return Math.floor(Math.random() * 1000000);
}

