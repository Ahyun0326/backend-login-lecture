"use strict";

//파일 시스템 이용
const fs = require("fs").promises;

//유저 정보를 담고 있는 class
class UserStorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;      
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse((data));   //버퍼 데이터를 받을 수 있도록 parsing
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            //console.log(newUsers, field);
            //users에 해당하는 키 값이 있는지 판단
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); //{} : 객체가 newUsers로 들어가 빈 객체 생성
        //console.log(newUsers);
        return newUsers;
    }

    static getUsers(isAll, ...fields){     //...변수명 -> 변수명에 parameter로 넘긴 애들이 배열 형태로 들어옴!!!
        return fs
         .readFile("./src/databases/users.json")
         .then((data) => {  //해당 로직이 성공했을 경우 실패
            return this.#getUsers(data, isAll, fields);
         })    
         .catch(console.error);  //실패했을 경우 실행, 프로미스 반환에 대한 오류 처리
    }

    static getUserInfo(id){
        // const users = this.#users;
        //app.js를 기준으로한 경로
        return fs
         .readFile("./src/databases/users.json")
         .then((data) => {  //해당 로직이 성공했을 경우 실패
            return this.#getUserInfo(data, id);
         })    
         .catch(console.error);  //실패했을 경우 실행, 프로미스 반환에 대한 오류 처리
    }

    static async save(userInfo){
        //현재 파일에 있는 데이터 가져오기
        const users = await this.getUsers(true);
        //console.log(users);
        //클라이언트가 입력한 유저 정보의 아이디가 존재한다면
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        //존재하지 않는다면
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        //데이터 추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;