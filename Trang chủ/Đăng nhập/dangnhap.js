// Sử dụng lại hàm của thầy ở các project trong bài giảng , thêm vào 1 input box, thay đổi class và các id
// thêm animation che password
const passwordInput = document.getElementById('password-input');
const togglePassword = document.getElementById('toggle-password');

// 2. Lắng nghe sự kiện "click" chuột vào con mắt
togglePassword.addEventListener('click', function () {
    
    //  Kiểm tra xem ô input đang ẩn hay hiện
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
// Sử dụng lại bài của thầy ở project 3, thêm vào 1 input box và thay đổi các id, class
// 1. Hàm hiển thị lỗi
function errorMessage(elmt, message) {
    const inputbox = elmt.parentElement; 
    
    if (inputbox.classList.contains('success')) {
        inputbox.classList.remove('success');
        inputbox.classList.add('error');
    } else {
        inputbox.classList.add('error');
    }
    inputbox.querySelector('.message').textContent = message;
}

// 2. Hàm hiển thị thành công
function successMessage(elmt) {
    const inputbox= elmt.parentElement; 
    
    if (inputbox.classList.contains('error')) {
        inputbox.classList.remove('error');
        inputbox.classList.add('success');
    } else {
        inputbox.classList.add('success');
    }
}

// 3. Các hàm kiểm tra từng loại dữ liệu
function checkEmpty(elmt) {
    if (elmt.value.trim() === '') {
        errorMessage(elmt, "This field is required.");
    } else {
        successMessage(elmt);
    }
}




// 4. Bắt các sự kiện khi người dùng gõ/rời khỏi ô (blur)
const elForm = document.getElementById('theone');
const elpass = document.getElementById('loginname');
const elpass2 = document.getElementById('password-input');
elpass.addEventListener('blur', () => checkEmpty(elpass));
elpass2.addEventListener('blur', () => checkEmpty(elpass2));

// 5. Kiểm tra chốt chặn toàn bộ Form khi bấm nút Submit
const container = document.querySelector('.login-container');

elForm.addEventListener('submit', (evt) => {
    // Ngăn chặn hành động tải lại trang mặc định
    evt.preventDefault(); 
    checkEmpty(elpass);
    checkEmpty(elpass2);
    
    const inputbox = document.querySelectorAll('.input-box');      
    let isValid = true;
    inputbox.forEach(box => {
        if (box.classList.contains('error')){ 
            isValid = false;
        } 
        if (isValid) {
        alert("Đăng nhập thành công!");
        window.location.href = "/Trang chủ/Giới thiệu/gioithieu.html"; 
    }
        }
            )
                }
                    );
