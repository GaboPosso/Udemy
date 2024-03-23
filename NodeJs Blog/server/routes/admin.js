const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * GET /
 * Post - searchTerm
 *
 */

router.get("/admin", async (req, res) => {
  const locals = {
    title: "Admin ",
    description: "Simple Blog created with NodeJS Express and Mongo DB.",
  };

  try {
    const data = await Post.find();
    res.render('index', { locals, data});
  } catch (error) {
    console.log(error);
  }
  res.render("index", { locals });
});

module.exports = router;