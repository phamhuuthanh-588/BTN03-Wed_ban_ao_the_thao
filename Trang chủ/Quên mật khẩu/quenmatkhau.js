
const emailEl = document.getElementById('email-quen-mk');
const loiEmailEl = document.getElementById('loi-email');
const btnGui = document.getElementById('btn-gui-mk');

// 2. Chuẩn bị "Khuôn đúc" Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailEl.addEventListener('input', function() {
    const emailGiaTri = emailEl.value;

    if (emailGiaTri.length > 0) {
        
        // Dùng .test() để dập khuôn kiểm tra
        if (emailRegex.test(emailGiaTri)) {
            
            loiEmailEl.style.display = 'none';
            emailEl.style.border = '2px solid #00d293';
            
            btnGui.disabled = false;
            btnGui.style.opacity = '1';
        } else {
            
            loiEmailEl.style.display = 'block';
            emailEl.style.border = '2px solid #ff4d4d';
            
            btnGui.disabled = true;
            btnGui.style.opacity = '0.5';
        }
        
    } else {
       
        loiEmailEl.style.display = 'none';
        emailEl.style.border = ''; 
        btnGui.disabled = true;
        btnGui.style.opacity = '0.5';
    }
});