"use strict"

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");  //index.js를 home에 저장

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);

//미들 웨어 등록
app.use(express.static(`${__dirname}/src/public`));   //현재 디렉터리 app.js 경로 가져와서 /src/public 아래에 있는 정적 경로를 추가
app.use(express.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended: true}));

app.use("/", home);  //use : 미들 웨어 등록해주는 메소드 루트 경로로 오면 홈으로 이동

module.exports = app;

