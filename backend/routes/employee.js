const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

router.use(auth(["employee"]));

router.get("/tasks", (req, res) => {
  res.json({ message: "Employee tasks", user: req.user });
});

module.exports = router;
