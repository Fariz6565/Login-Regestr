const loginUsername = document.getElementById('login-username') as HTMLInputElement;
const loginPassword = document.getElementById('login-password') as HTMLInputElement;
const loginButton = document.querySelector('button') as HTMLButtonElement;
const loginMessage = document.getElementById('login-message') as HTMLElement;

loginButton.addEventListener('click', login);

function login(): void {
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    if (!username || !password) {
        loginMessage.textContent = 'Zəhmət olmasa bütün sahələri doldurun!';
        loginMessage.style.color = 'red';
        return;
    }

    const savedUser = localStorage.getItem('user');
    
    if (!savedUser) {
        loginMessage.textContent = 'Qeydiyyatdan keçmiş istifadəçi tapılmadı!';
        loginMessage.style.color = 'red';
        return;
    }

    const user = JSON.parse(savedUser) as { username: string; password: string };

    if (username === user.username && password === user.password) {
        loginMessage.textContent = `Xoş gəldin, ${username}!`;
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = 'İstifadəçi adı və ya şifrə yanlışdır!';
        loginMessage.style.color = 'red';
    }
}
