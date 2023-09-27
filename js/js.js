const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "홍길동" && password === "1234") {
        location.reload();
        location.href ="https://dooa369.github.io/Gentle-Wardrobe/%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%EB%90%9C%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});