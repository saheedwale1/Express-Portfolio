const express = require("express");
const router = express.Router();

// Home Page
router.get("/", (req, res) => {
  res.render("home");
});

// About Page
router.get("/about", (req, res) => {
  res.render("about");
});

// Projects Page
router.get("/projects", (req, res) => {
  res.render("projects");
});

// Services Page
router.get("/services", (req, res) => {
  res.render("services");
});

// Contact Page
router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  res.redirect("/");
});

module.exports = router;
