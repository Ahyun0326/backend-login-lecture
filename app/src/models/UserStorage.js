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

    static getUsers(...fields){     //...변수명 -> 변수명에 parameter로 넘긴 애들이 배열 형태로 들어옴!!!
        // const users = this.#users; //은닉화된 데이터에 접근할 수 있음
        //reduce : 반복문 => fields에 대한 원소가 하나씩 순회 됨
        //newUsers : fields 배열의 초기값이 들어 감
        //field : 다음 변수들의 초기값
        const newUsers = fields.reduce((newUsers, field) =>{
            //console.log(newUsers, field);
            //users에 해당하는 키 값이 있는지 판단
            if(users.hasOwnProperty(field)) { 
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); //{} : 객체가 newUsers로 들어가 빈 객체 생성
        //console.log(newUsers);
        return newUsers;
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

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        return {success : true};
    }
}

module.exports = UserStorage;