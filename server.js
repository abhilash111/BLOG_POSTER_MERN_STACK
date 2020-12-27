const express = require('express');
const app = express();
const connectDB = require('./config/db')


// Connect Database
connectDB();

// INIT Body Parser
app.use(express.json({ extended: false}));

// GET API CALL
app.get('/', (req,res) => {
    res.send('API is Running');
})

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


// PORT NAME WHERE SERVER WILL RUN
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Express app Running at Port ${PORT}`);
})