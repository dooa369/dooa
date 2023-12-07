const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "홍길동" && password === "1234") {
        location.reload();
        location.href ="홈페이지0.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}); 