const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

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

module.exports = router;