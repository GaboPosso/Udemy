const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

const adminLayout = "../views/layouts/admin";
/**
 * GET /
 * Admin  - Login Page
 *
 */

router.get("/admin", async (req, res) => {
  const locals = {
    title: "Admin ",
    description: "Simple Blog created with NodeJS Express and Mongo DB.",
  };

  try {
    const data = await Post.find();
    res.render('admin/index', { locals, layout: adminLayout});
  } catch (error) {
    console.log(error);
  }
  res.render("index", { locals });
});

/**
 * POST /
 * Admin  - Check Login
 */


router.post('/admin', async(req, res) => {
  try {

    const { username, password } = req.body;
    // console.log(req.body)

    if(req.body.username === 'admin' && req.body.password === 'password') {
      res.send("You are logged in")
    }
    else {
      res.send("Wrong username or password")
    }
    res.redirect('/admin')


    res.render('admin/index', { locals, layout: adminLayout });
  } catch {
    console.log(error)
  }
});

module.exports = router;