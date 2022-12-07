const express = require('express');
const path = require('path')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5001;

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});