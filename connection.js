const mysql = require('mysql')

const db = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
    port: 3306,
    connectionLimit: 10
})

module.exports = db