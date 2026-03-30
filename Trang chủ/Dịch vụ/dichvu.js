// 1. Khai báo các phần tử DOM
const colorItems = document.querySelectorAll('.color-item');
const hiddenInput = document.getElementById('selectedColor');
const fileInput = document.getElementById('file');
const previewContainer = document.getElementById('preview-container');
const previewImg = document.getElementById('preview-img');
const uploadText = document.getElementById('upload-text');
const removeBtn = document.getElementById('remove-btn');
const orderForm = document.getElementById('orderForm');

// 2. Xử lý chọn màu sắc
colorItems.forEach(item => {
    item.addEventListener('click', function() {
        // Xóa class active ở tất cả các nút màu
        colorItems.forEach(i => i.classList.remove('active'));
        // Thêm class active vào nút vừa chọn
        this.classList.add('active');
        // Lưu giá trị màu vào input ẩn
        hiddenInput.value = this.getAttribute('data-color');
    });
});

// 3. Xử lý Upload: Hiện ảnh NGAY LẬP TỨC khi chọn file
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    
    if (file) {
        // Hiển thị tên file và dấu tích xanh
        uploadText.innerText = "✅ " + file.name;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            // Gán dữ liệu ảnh vào thẻ img và hiển thị khung chứa
            previewImg.src = event.target.result;
            previewContainer.style.display = 'block'; 
        }
        reader.readAsDataURL(file);
    } else {
        // Nếu người dùng bấm cancel mà chưa có ảnh thì reset
        if (previewImg.src === "" || previewImg.src.includes('#')) {
            resetUpload();
        }
    }
});

// 4. Xử lý nút X để xóa ảnh
if (removeBtn) {
    removeBtn.addEventListener('click', function() {
        resetUpload();
    });
}

// Hàm hỗ trợ reset trạng thái upload
function resetUpload() {
    fileInput.value = ""; // Xóa dữ liệu file trong input
    previewImg.src = "#"; // Reset nguồn ảnh
    previewContainer.style.display = 'none'; // Ẩn khung chứa ảnh
    uploadText.innerText = "Nhấp vào đây để chọn ảnh mẫu"; // Reset dòng chữ thông báo
}

// 5. Xử lý gửi Form
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Thu thập thông tin (ví dụ)
        const selectedFabric = document.getElementById('fabric').value;
        const selectedSize = document.getElementById('size').value;
        const selectedColor = hiddenInput.value;

        console.log("Đã gửi đơn hàng:", {
            color: selectedColor,
            fabric: selectedFabric,
            size: selectedSize
        });

        alert("Yêu cầu thiết kế của bạn đã được gửi thành công!");
    });
}