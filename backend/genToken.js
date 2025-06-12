const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { id: "user1", role: "owner" },
  "V3ry$ecr3tK3y!@#2x$gPq9L%vBcz1",
  { expiresIn: "1h" }
);

console.log("Token:", token);

// Authorization: Bearer <token>

// http://localhost:3000/api/owner/dashboard