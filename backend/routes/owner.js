const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

router.use(auth(["owner"]));


router.get("/dashboard", (req, res) => {
  res.json({ message: "Owner dashboard", user: req.user });
});

module.exports = router;

/*

(POST) GetEmployee
Parameters: employeeId
Return: Employee object

(POST) CreateEmployee
Parameters: name, email, department
Return: { success: true, employeeId: "generated_id" }

(POST) DeleteEmployee
Parameters: employeeId
Return: { success: true }
*/