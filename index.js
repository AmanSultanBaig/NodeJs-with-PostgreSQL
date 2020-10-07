const express = require('express');
require('dotenv').config()
const app = express();

app.get('*', (req, res) => {
    res.send("Node With PostgreSQL Using Sequelize (ORM)")
})

let PORT = process.env.PORT

app.listen(PORT, console.log(`App is Running on port ${PORT}`))