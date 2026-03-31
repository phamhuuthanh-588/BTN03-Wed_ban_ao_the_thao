// Sử dụng lại hàm của thầy ở các project trong bài giảng , thêm vào 1 input box, thay đổi class và các id
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
function checkPhone(elmtPhone) {
    if (elmtPhone.value === '') {
        errorMessage(elmtPhone, "This field is required.");
    } else {
        successMessage(elmtPhone);
    }
}

function checkname(elmtname) {
    if (elmtname.value === '') {
        errorMessage(elmtname, "This field is required.");
    } else {
        successMessage(elmtname);
    }
}
function checkPass1(elmtpass) {
    if (elmtpass.value === '') {
        errorMessage(elmtpass, "This field is required.");
    } else {
        successMessage(elmtpass);
    }
}
function checkpass2(elmtcheckpass) {
    if (elmtcheckpass.value === '') {
        errorMessage(elmtcheckpass, "This field is required.");
    
    } else if(elmtcheckpass.value !== elpass.value ) {
        errorMessage(elmtcheckpass, "Wrong Password.");
    
    } else{
        successMessage(elmtcheckpass);
    }
}



// 4. Bắt các sự kiện khi người dùng gõ/rời khỏi ô (blur)
const elPhone = document.getElementById('phone');
const elName = document.getElementById('name');
const elpass = document.getElementById('mat-khau');
const elpass2 = document.getElementById('nhap-lai-mat-khau');

elPhone.addEventListener('blur', function() {
    checkPhone(elPhone);
}, false);

elName.addEventListener('blur', () => {
    checkname(elName);
}, false);

elpass.addEventListener('blur', () => {
    checkPass1(elpass);
}, false);
elpass2.addEventListener('blur', () => {
    checkpass2(elpass2);
},false); 

// 5. Kiểm tra chốt chặn toàn bộ Form khi bấm nút Submit
const elForm = document.getElementById('theone');
const container = document.querySelector('.login-container');

elForm.addEventListener('submit', (evt) => {
    // Ngăn chặn hành động tải lại trang mặc định
    evt.preventDefault(); 
    
    const inputbox = document.querySelectorAll('.input-box'); 
    let arrinputbox = Array.from(inputbox); 
    
    
    let isValid = true;
    arrinputbox.forEach(item => {
        if (!item.classList.contains('success')) {
            isValid = false;
        }
    });

    if (isValid) {
        container.classList.add('complete');
        alert("You have submitted successfully. Thank you.");
    } else {
        container.classList.remove('complete');
    }
}, false);
