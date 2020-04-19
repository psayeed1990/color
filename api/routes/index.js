const router = require("express").Router();

//main color paletter page
router.get("/", (req, res) => res.render("index"));

module.exports = router;
