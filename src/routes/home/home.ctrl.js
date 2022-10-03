"use strict";

const home = (req, res) => {
    res.render("home/index");   //render("파일 경로")를 통해 렌더링
};

const login = (req, res) =>{
    res.render("home/login");
};

module.exports = {
    home,
    login,
};