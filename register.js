var regUsername = document.getElementById('register-username');
var regEmail = document.getElementById('register-email');
var regPassword = document.getElementById('register-password');
var regConfirm = document.getElementById('register-confirm');
var regButton = document.querySelector('button');
var regMessage = document.getElementById('register-message');
regButton.addEventListener('click', register);
function register() {
    var username = regUsername.value.trim();
    var email = regEmail.value.trim();
    var password = regPassword.value.trim();
    var confirm = regConfirm.value.trim();
    if (!username || !email || !password || !confirm) {
        regMessage.textContent = 'Zəhmət olmasa bütün sahələri doldurun!';
        regMessage.style.color = 'red';
        return;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        regMessage.textContent = 'Düzgün e-mail daxil edin!';
        regMessage.style.color = 'red';
        return;
    }
    if (password !== confirm) {
        regMessage.textContent = 'Şifrə təsdiqi ilə eyni deyil!';
        regMessage.style.color = 'red';
        return;
    }
    var user = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user));
    regMessage.textContent = 'Qeydiyyat uğurla tamamlandı!';
    regMessage.style.color = 'green';
}
