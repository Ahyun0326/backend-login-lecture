"use strict";

const id = document.querySelector("#id"),    //태그 내 id가 id인 것과 id가 psword인 것 가져오겠다
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

//로그인 버튼을 눌러 클릭이라는 이벤트가 발생했을 때 login 함수 실행
loginBtn.addEventListener("click", login);

function login(){
    //console.log(id.value);  //태그의 값을 가져와 console 창에 출력
    //아이디와 비밀번호 가져와 객체 형태로 저장
    const req = {
        id : id.value,
        psword : psword.value,
    };
    //console.log(req);
    //console.log(JSON.stringify(req));

    fetch("/login", {
        method : "POST",
        //이러한 타입으로 JSON 데이터를 전송하겠다.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
     .then((res) => res.json())
     .then((res) => {
        if(res.success){
            location.href="/";
        } else{
            alert(res.msg);
        }
    });
}