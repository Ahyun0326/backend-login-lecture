"use strict";

//유저 정보를 담고 있는 class
class UserStorage{
    static #users = {   //# = private : 데이터를 은닉화!!!
        id:["kimyeseo", "20214043"],      //김예서의 비밀번호 : 12345678,     20214043의 비밀번호 : 1234
        psword : ["12345678", "1234"],
        name: ["김예서", "홍길동"],
    };
    static getUsers(...fields){     //...변수명 -> 변수명에 parameter로 넘긴 애들이 배열 형태로 들어옴!!!
        const users = this.#users; //은닉화된 데이터에 접근할 수 있음
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
}

module.exports = UserStorage;