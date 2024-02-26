const express = require('express'); // express
const debug = require('debug')('app'); // debugging
const path = require('path'); // path management
const bodyParser = require('body-parser'); // forms
const passport = require('passport'); // authentication
const app = express();
const port = process.env.PORT || 3000; // port to run on
const postRouter = require('./views/routes/postRoutes')(nav);
const homeRouter = require('./src/routes/homeRoutes');
app.use(express.static(path.join('public')));


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
