const fs = require("fs"); //파일 입출력 모듈
const express = require("express");
const bodyParser = require("body-parser"); //req.body를 추출하기위해 필요
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //req를 json형식으로 리턴//
app.use(bodyParser.urlencoded({ extended: true })); //객체 안에 객체를 파싱 extend: true

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const multer = require("multer");
const upload = multer({ dest: "./upload" });

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password, //  mysql연동
  port: conf.port,
  database: conf.database,
});

connection.connect();

app.get("/api/board", (req, res) => {
  connection.query("select * from board", (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/board", upload.single(), (req, res) => {
  let name = req.body.name;
  let content = req.body.content;
  let sql = `INSERT INTO board VALUES (null, '${name}', '${content}', now())`;
  console.log(req.headers["x-forwarded-for"]);
  connection.query(sql, (err, rows, fields) => {
    res.send(rows);
  });
});

app.delete("/api/board/:id", (req, res) => {
  let sql = "DELETE FROM board WHERE id = ?";
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
