import express from "express";
import bodyParser from "body-parser"; //forms
import debug from "debug"; //debugging 
import path from "path"; // path management
import passport from "passport" //authentication


const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, '/public/')));

const postRouter = require('./views/routes/postRoutes')(nav);
const homeRouter = require('./src/routes/homeRoutes');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/post', postRouter);
app.use('/', homeRouter)
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {});

app.listen(port, () => {
  console.log(`Listening on port ${chalk.green(port)}`);
});
