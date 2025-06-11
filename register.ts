const regUsername = document.getElementById('register-username') as HTMLInputElement;
const regEmail = document.getElementById('register-email') as HTMLInputElement;
const regPassword = document.getElementById('register-password') as HTMLInputElement;
const regConfirm = document.getElementById('register-confirm') as HTMLInputElement;
const regButton = document.querySelector('button') as HTMLButtonElement;
const regMessage = document.getElementById('register-message') as HTMLElement;

regButton.addEventListener('click', register);

function register(): void {
    const username = regUsername.value.trim();
    const email = regEmail.value.trim();
    const password = regPassword.value.trim();
    const confirm = regConfirm.value.trim();

    if (!username || !email || !password || !confirm) {
        regMessage.textContent = 'Zəhmət olmasa bütün sahələri doldurun!';
        regMessage.style.color = 'red';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    regMessage.textContent = 'Qeydiyyat uğurla tamamlandı!';
    regMessage.style.color = 'green';
}