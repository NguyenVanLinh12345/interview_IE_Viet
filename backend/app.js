require('dotenv').config();
const express = require('express');
const app = express();

// Import routers
const indexRoutes = require('./routes/index');
const ownerRoutes = require('./routes/owner');
const employeeRoutes = require('./routes/employee');

app.use(express.json());

app.use('/', indexRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/employee', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
