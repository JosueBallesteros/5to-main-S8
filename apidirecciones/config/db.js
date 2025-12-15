const mysql = require("mysql");

const cn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "direcciones"
});

cn.connect((err)=>{
    if(err){
        console.log("Error de conexion a la base de datos", err);
        return;
    }
    console.log("Base de datos conectada")
});

module.exports = cn;