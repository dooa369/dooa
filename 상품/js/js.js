// 휴대폰 번호 입력 부분
function changePhone1(){
  const phone1 = document.getElementById("phone1").value // 010
  if(phone1.length === 3){
      document.getElementById("phone2").focus();
  }
}
function changePhone2(){
  const phone2 = document.getElementById("phone2").value // 010
  if(phone2.length === 4){
      document.getElementById("phone3").focus();
  }
}
function changePhone3(){
  const phone3 = document.getElementById("phone3").value // 010
  if(phone3.length === 4){
    document.getElementById("sendMessage").focus();
    document.getElementById("sendMessage").setAttribute("style","background-color:yellow;")
    document.getElementById("sendMessage").disabled = false;
  }
}
// 가입부분 체크

function signUpCheck(){

let name = document.getElementById("name").value
let area = document.getElementById("area").value
let check = true;

}


// 이름확인
if(name===""){
  document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
  check = false
}else{
  document.getElementById("nameError").innerHTML=""
}

// 지역선택 확인
if(area === "지역을 선택하세요."){
  document.getElementById("areaError").innerHTML="지역을 선택해주세요."
  check = false
}else{
  document.getElementById("areaError").innerHTML=""
}

// 성별체크확인
if(!gender_man && !gender_woman){
  document.getElementById("genderError").innerHTML="성별을 선택해주세요."
  check = false
}else{
  document.getElementById("genderError").innerHTML=""
}

if(check){
  document.getElementById("emailError").innerHTML=""
  document.getElementById("nameError").innerHTML=""
  document.getElementById("passwordError").innerHTML=""
  document.getElementById("passwordCheckError").innerHTML=""
  document.getElementById("areaError").innerHTML=""
  document.getElementById("genderError").innerHTML=""
  
  //비동기 처리이벤트
  setTimeout(function() {
    alert("가입이 완료되었습니다.")
    location.href ="로그인.html";
},0);
}
