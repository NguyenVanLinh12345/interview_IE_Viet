const listEmployee = {
    '0': {
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: true,
        phoneNumber: "3232",
        role: 'employee', // Cái này có khi trả về cũng đc, hoặc là để nghĩ cách
        accessCode: '' // Cái này là chỉ server biết, phải qua dto để đến client
    },
    '1': {
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: false,
        phoneNumber: "3232",
        role: 'owner',
        accessCode: ''
    },
    '2': {
        name: "Nguyễn Tiến Công",
        email: "ntcong@gmail.com",
        address: "Việt Nam",
        enable: true,
        phoneNumber: "0123456789",
        role: 'owner',
        accessCode: ''
    },
};

function getListEmployee() {
    return listEmployee;
}


function getEmployeeById(employeeId) {
    return listEmployee[employeeId] ?? {};

}

function updateEmployeeById(employeeId, newData = {}) {
    listEmployee[employeeId] = { ...listEmployee[employeeId], ...newData }
}

function deleteEmployeeById(employeeId) {
    listEmployee[employeeId] = null;
}

module.exports = {
    getListEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
}