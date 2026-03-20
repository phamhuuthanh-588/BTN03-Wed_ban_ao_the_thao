document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-btn");
    const groups = document.querySelectorAll(".review-group");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // 1. Xóa class active ở tất cả các nút
            tabs.forEach(t => t.classList.remove("active"));
            // 2. Thêm class active vào nút vừa bấm
            tab.classList.add("active");

            const target = tab.getAttribute("data-target");

            // 3. Hiển thị nhóm đánh giá tương ứng
            groups.forEach(group => {
                const starLevel = group.getAttribute("data-star");
                
                if (target === "all") {
                    group.style.display = "block"; // Hiện tất cả
                } else if (target === starLevel) {
                    group.style.display = "block"; // Hiện đúng nhóm sao
                } else {
                    group.style.display = "none";  // Ẩn các nhóm khác
                }
            });
        });
    });
});
