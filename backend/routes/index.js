const express = require("express");
const { handlerSubmitEmailOrPhoneNumber, ValidateAccessCode } = require("../controllers/common");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello: world");
});


// Không cần auth của owner
// Người gửi post số điện thoại lên -> tạo một mã 6 số và gửi về cho người dùng, đồng thời lưu nó vào db
// (POST) CreateNewAccessCode
router.post("/create-new-access-code", handlerSubmitEmailOrPhoneNumber)
router.post("/validate-access-code", ValidateAccessCode)


// Không cần auth của employee
module.exports = router;
