"use strict";

//UserStorage 파일로 이동해 UserStorage 클래스 받아오기
const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req, res) => {
        res.render("home/index");   //render("파일 경로")를 통해 렌더링
    },
    login : (req, res) =>{
        res.render("home/login");
    },
}

const users = {
    id:["김예서", "20214043"],      //김예서의 비밀번호 : 12345678,     20214043의 비밀번호 : 1234
    psword : ["12345678", "1234"],
}

//프론트가 전달한 데이터를 받아 로그인 기능 처리
const process ={
    login: (req, res) =>{
        const id = req.body.id,
        psword = req.body.psword;

        //static 변수이므로 클래스 명을 통해 접근 가능!
        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        // // console.log(id, psword);

        //등록된 유저의 아이디에 클라이언트가 입력한 아이디가 있다면
        if(users.id.includes(id)){
            //idx에 user id의 인덱스 가져오기
            const idx = users.id.indexOf(id);
            //입력한 유저의 id와 비밀번호가 일치하다면
            if(users.psword[idx] === psword){
                response.success = true;
                //클라이언트에게 json 형태로 응답 전송
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        //로그인에 실패했을 경우
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};