"use strict";

const id = document.querySelector("#id"),    //태그 내 id가 id인 것과 id가 psword인 것 가져오겠다
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");
//sign up 버튼을 눌러 클릭이라는 이벤트가 발생했을 때 register 함수 실행
registerBtn.addEventListener("click", register);

function register(){
    //아이디 입력 여부 확인
    if(!id.value)   return alert("아이디를 입력해주십시오.");

    //비밀번호 일치 확인
    if(psword.value !== confirmPsword.value)
        return alert("비밀번호가 일치하지 않습니다.");

    //console.log(id.value);  //태그의 값을 가져와 console 창에 출력
    //아이디와 비밀번호, 이름 가져와 객체 형태로 저장
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
    };
    //console.log(req); 값이 잘 담겼는지 확인
    //console.log(JSON.stringify(req));

    fetch("/register", {
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
            location.href="/login";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.log("회원가입 중 에러 발생");
    });
}