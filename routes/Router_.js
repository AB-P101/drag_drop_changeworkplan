const express = require("express");
const router = express.Router();
const sql = require("mssql");

//let txt = [{name:"po",io:"555"},{name:"oo",io:"666"}]

var config = {
  user: "sa", // Database username
  password: "1234", // Database password
  server: "127.0.0.1", // Server IP address
  database: "FlexSim", // Database name
  options: {
    encrypt: false, // Disable encryption
  },
};
sql.connect(config, (err) => {
  if (err) {
    throw err;
  }
  console.log("Connection Successful!");
  sql.query("SELECT * FROM FlowGantt order by StartTime", (err, resule) => {
    if (err) {
      throw err;
    } 
    console.log(resule.recordset); 
    }); 
});

router.get("/", (req, res) => {
  sql.query("SELECT * FROM FlowGantt", function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {

      }
      dataFlex_o = results.recordset
  });
  sql.query("SELECT * FROM FlowPlane where id = 1", function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {

      }
      dataPlane_o = results.recordset
  });
  res.render("index", {
    dataFlex: dataFlex_o,
    dataPlane : dataPlane_o
  });
});

router.post('/insertData', (req, res) => {
  const position_ = req.body.position;
  console.log('ข้อมูลที่รับมาจากเว็บ:', position_);
  // ส่งข้อความยืนยันกลับไปยังเว็บ
  res.send('ข้อมูลได้รับแล้ว');

  const query = "update FlowPlane set "+
          "p_1L="+position_[0]+
          ", p_1R="+position_[1]+
          ", p_2="+position_[2]+
          ", p_3="+position_[3]+
          ", p_6_1LR="+position_[4]+
          ", p_6_2LR="+position_[5]+
          ", p_6_3LR="+position_[6]+
          ", p_6_4LR="+position_[7]+ 
          ", p_7_1="+position_[8]+
          ", p_7_2="+position_[9]+
          ", p_8="+position_[10]+ 
          " where id=1;";
      console.log(query)
      sql.query(query, function (err, results, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log("insert succ.")
          }
      });
});

module.exports = router;
