"use strict";

const UserStorage = require("./UserStorage");

class User{
    //생성자
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        //console.log(id, psword);
        const {id, psword} = UserStorage.getUserInfo(body.id);
        //console.log(a);
        
        //저장소에 저장된 아이디와 클라이언트가 입력한 body id가 같고
        if(id){
            //psword가 같다면
            if(id === body.id && psword === body.psword){
                return {success : true};
            }
            //id는 같지만 psword가 다르다면
            return {success:false, msg: "비밀번호가 틀렸습니다."}
        }
        //id도 틀렸을 경우
        return {success:false, msg: "존재하지 않는 아이디입니다."}
    }
}
module.exports = User;