"use strict"

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home");  //index.js를 home에 저장

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express)

app.use("/", home);  //use : 미들 웨어 등록해주는 메소드
                     //루트 경로로 오면 홈으로 이동

module.exports = app;

