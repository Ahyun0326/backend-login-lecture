"use strict";

const User = require("../../models/User");
//UserStorage 파일로 이동해 UserStorage 클래스 받아오기

const output = {
    home : (req, res) => {
        res.render("home/index");   //render("파일 경로")를 통해 렌더링
    },
    login : (req, res) =>{
        res.render("home/login");
    },
    register : (req, res) => {
        //클라이언트의 요청이 들어오면 register 화면 응답
        res.render("home/register");
    }
}

const users = {
    id:["김예서", "20214043"],      //김예서의 비밀번호 : 12345678,     20214043의 비밀번호 : 1234
    psword : ["12345678", "1234"],
}

//프론트가 전달한 데이터를 받아 로그인 기능 처리
const process ={
    login: (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};