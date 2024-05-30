const express = require("express");
const sql = require("mssql");

const app = express();

// SQL Server configuration
var config = {
    "user": "sa", // Database username
    "password": "1234", // Database password
    "server": "127.0.0.1", // Server IP address
    "database": "FlexSim", // Database name
    "options": {
        "encrypt": false // Disable encryption
    }
}

// Connect to SQL Server
sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
    sql.query("SELECT * FROM FlowGantt", (err,res) =>{
        if (err) {
            throw err;
        }
        console.log(res);
    });
    
});


// Define route for fetching data from SQL Server
/*app.get("/", (request, response) => {
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM FlowGantt", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } 
        else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});*/