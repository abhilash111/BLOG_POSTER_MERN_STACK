const express = require('express');
const app = express();
const connectDB = require('./config/db')

// Connect Database
connectDB();

// GET API CALL
app.get('/', (req,res) => {
    res.send('API is Running');
})

// PORT NAME WHERE SERVER WILL RUN
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Express app Running at Port ${PORT}`);
})