const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db_connection = require('./utility/db_connect')

dotenv.config();

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

db_connection().then(() => {
    app.listen(5000, () => {
        console.log("Server is running PORT 5000");
    })
})