const jwt = require("jsonwebtoken");

const auth = (roles = []) => {
  return (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "No token" });

    const token = header.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ error: "Access denied" });
      }

      next();
    } catch (err) {
        console.log(err)
      return res.status(401).json({ error: "Invalid token" });
    }
  };
};

module.exports = auth;
