const jwt = require("jsonwebtoken");

function getToken(userId, userRole) {
    const token = jwt.sign(
        { id: userId, role: userRole },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    return token;
}

module.exports = {
    getToken
}