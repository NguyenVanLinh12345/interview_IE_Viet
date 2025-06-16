const express = require("express");
const auth = require("../middleware/auth");
const { getListEmployee } = require("../controllers/employeeManage");
const router = express.Router();

router.use(auth(["owner"]));


router.get("/", (req, res) => {
  const listEmployee = getListEmployee();
  res.json({ listEmployee });
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