var loginUsername = document.getElementById('login-username');
var loginPassword = document.getElementById('login-password');
var loginButton = document.querySelector('button');
var loginMessage = document.getElementById('login-message');
loginButton.addEventListener('click', login);
function login() {
    var username = loginUsername.value.trim();
    var password = loginPassword.value.trim();
    if (!username || !password) {
        loginMessage.textContent = 'Zəhmət olmasa bütün sahələri doldurun!';
        loginMessage.style.color = 'red';
        return;
    }
    var savedUser = localStorage.getItem('user');
    if (!savedUser) {
        loginMessage.textContent = 'Qeydiyyatdan keçmiş istifadəçi tapılmadı!';
        loginMessage.style.color = 'red';
        return;
    }
    var user = JSON.parse(savedUser);
    if (username === user.username && password === user.password) {
        loginMessage.textContent = "Xo\u015F g\u0259ldin, ".concat(username, "!");
        loginMessage.style.color = 'green';
    }
    else {
        loginMessage.textContent = 'İstifadəçi adı və ya şifrə yanlışdır!';
        loginMessage.style.color = 'red';
    }
}
