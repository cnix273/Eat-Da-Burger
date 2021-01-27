// Dependencies.
const express = require("express");

const router = express.Router();

// Import the model to use its database functions.
const burgers = require("../models/burger.js");

// Create all routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burgers.select((data) => {                
    var hbsObject = {
        burgers: data
    };
    res.render("index", hbsObject)
  });
});

router.post("/insert", (req, res) => {
  burgers.insert(req.body.burger_name, () => {
    res.redirect("/");
  });
});

router.post("/update/:id", (req, res) => {
  burgers.update(req.params.id, () => {
      res.redirect("/");
  });
});

router.post("/delete/:id", (req, res) => {
  burgers.delete(req.params.id, () => {
      res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;