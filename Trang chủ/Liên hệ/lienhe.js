// Đợi trang web tải xong mới chạy code
document.addEventListener('DOMContentLoaded', function() {

    //  XỬ LÝ CHỌN SAO ( ---
    const stars = document.querySelectorAll('.stars i');
    let selectedRating = 0;

    stars.forEach((star, index) => {
        // (Hover)
        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(index);
        });

        // Hiệu ứng khi di chuột ra ngoài
        star.addEventListener('mouseout', () => {
            resetStars();
            if (selectedRating > 0) {
                highlightStars(selectedRating - 1);
            }
        });

        // Khi người dùng click chọn sao
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            console.log("Người dùng đánh giá: " + selectedRating + " sao");
        });
    });

    function highlightStars(idx) {
        for (let i = 0; i <= idx; i++) {
            stars[i].style.color = '#26e395';
            stars[i].style.textShadow = '0 0 10px #26e395';
        }
    }

    function resetStars() {
        stars.forEach(s => {
            s.style.color = '#555'; // Màu xám khi chưa chọn
            s.style.textShadow = 'none';
        });
    }


    // XỬ LÝ GỬI TIN NHẮN (FORM LIÊN HỆ) 
    const btnSend = document.querySelector('.btn-neon.full-width');
    
    btnSend.addEventListener('click', function(e) {
        e.preventDefault();

        // Lấy dữ liệu từ các ô input
        const inputs = document.querySelectorAll('.form-column input, .form-column textarea');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const message = inputs[3].value.trim();

        // Kiểm tra đơn giản
        if (name === "" || email === "" || message === "") {
            alert("Vui lòng điền đầy đủ các thông tin bắt buộc!");
            return;
        }

        // Giả lập gửi thành công
        btnSend.innerText = "Đang gửi...";
        btnSend.style.opacity = "0.7";

        setTimeout(() => {
            alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi đến GR3 Shop.`);
            btnSend.innerText = "Gửi tin nhắn";
            btnSend.style.opacity = "1";
            // Xóa sạch form sau khi gửi
            inputs.forEach(input => input.value = "");
        }, 1500);
    });


    // HIỆU ỨNG HEADER KHI CUỘN TRANG 
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(13, 22, 25, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.padding = '5px 0';
        } else {
            header.style.backgroundColor = '#0d1619';
            header.style.backdropFilter = 'none';
            header.style.padding = '10px 0';
        }
    });
});
