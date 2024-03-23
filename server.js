const express = require('express')
const route = require("./routes")
const path = require('path')
const app = express()
const port = 80
const db = require("./config/db");  
const bodyParser = require('body-parser');
db.connect();
app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
}
)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
