
const passwordInput = document.getElementById('password-input');
const togglePassword = document.getElementById('toggle-password');

// 2. Lắng nghe sự kiện "click" chuột vào con mắt
togglePassword.addEventListener('click', function () {
    
    // a. Kiểm tra xem ô input đang ẩn hay hiện
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});