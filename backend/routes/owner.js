const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

router.use(auth(["owner"]));

router.get("/dashboard", (req, res) => {
  res.json({ message: "Owner dashboard", user: req.user });
});

module.exports = router;
