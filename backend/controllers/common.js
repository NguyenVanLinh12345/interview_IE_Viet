const { getToken } = require("../services/authService");

function handlerSubmitEmailOrPhoneNumber(req, res) {
    const { phoneNumber, email } = req.body;
    let isValidate = false
    if (email) {
        console.log('email', email);
        isValidate = true;
    } else if (phoneNumber) {
        console.log('phoneNumber', phoneNumber)
        isValidate = true;
    }

    if (isValidate) {
        const randomCode = String(Math.round(Math.random() * 1000000)).padStart(6, '0');
        res.json({ accessCode: randomCode });
    }

    res.json({}).status(404);
}

// Lấy ra access token rồi so sánh xem có bằng nhau ko, nếu có thì gen ra token và value
function ValidateAccessCode(req, res) {
    try {
        const { phoneNumber, email, accessCode } = req.body;
        let isValidate = false
        if (email) {
            console.log('email', email, accessCode);
            isValidate = true;
        } else if (phoneNumber) {
            console.log('phoneNumber', phoneNumber, accessCode)
            isValidate = true;
        }

        if (isValidate) {
            const accessToken = getToken("1", "employee");
            res.json({ accessToken: accessToken, role: "employee", id: "1", name: "Nguyễn Thành Công" });
        }
    }
    catch (error) {
        console.log(error);
        res.json({}).status(401);
    }
}

module.exports = {
    ValidateAccessCode,
    handlerSubmitEmailOrPhoneNumber
}