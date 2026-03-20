//  lấy các phần tử cần thiết
const matKhauEl = document.getElementById('mat-khau');
const nhapLaiEl = document.getElementById('nhap-lai-mat-khau');
const loiEl = document.getElementById('loi-mat-khau');
const btnDangKy = document.getElementById('btn-dang-ky'); 
// nghe mỗi khi gõ phím vào ô "Nhập lại"
nhapLaiEl.addEventListener('input', function() {
    
    const giaTri1 = matKhauEl.value;
    const giaTri2 = nhapLaiEl.value;

    if (giaTri2.length > 0) {
        
        // So sánh tuyệt đối ===
        if (giaTri1 === giaTri2) {
            // ĐÚNG: Giấu chữ lỗi, viền xanh, MỞ KHÓA nút đăng ký
            loiEl.style.display = 'none';
            nhapLaiEl.style.border = '2px solid #00d293'; 
            
            btnDangKy.disabled = false; 
            btnDangKy.style.opacity = '1'; 
        } else {
            // SAI: Hiện chữ lỗi, viền đỏ, KHÓA CHẶT nút đăng ký
            loiEl.style.display = 'block';
            nhapLaiEl.style.border = '2px solid #ff4d4d'; 
            
            btnDangKy.disabled = true; 
            btnDangKy.style.opacity = '0.5'; 
        }
        
    } else {
        // Xóa trắng ô thì dọn dẹp trả về như cũ
        loiEl.style.display = 'none';
        nhapLaiEl.style.border = ''; 
        btnDangKy.disabled = false;
        btnDangKy.style.opacity = '1';
    }
});