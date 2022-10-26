"use strict";

const UserStorage = require("./UserStorage");

class User{
    //생성자
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        //console.log(id, psword);
       const {id, psword} = await UserStorage.getUserInfo(client.id);
        //console.log(a);
        
        //저장소에 저장된 아이디와 클라이언트가 입력한 client id가 같고
        if(id){
            //psword가 같다면
            if(id === client.id && psword === client.psword){
                return {success : true};
            }
            //id는 같지만 psword가 다르다면
            return {success:false, msg: "비밀번호가 틀렸습니다."};
        }
        //id도 틀렸을 경우
        return {success:false, msg: "존재하지 않는 아이디입니다."};
    }

    register(){
        const client = this.body;
        //save 메소드 호출을 통해 회원가입한 유저 데이터 저장
        const response = UserStorage.save(client);
        return response;
    }
}
module.exports = User;