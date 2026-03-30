document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cart-items-container');

    function renderCart() {
        // Lấy mảng 'cart' từ localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        container.innerHTML = ''; 

        if (cart.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:50px; color:#94a3b8;">Giỏ hàng của bạn đang trống.</div>`;
            updateSummary();
            return;
        }

        cart.forEach((item, index) => {
            // Đảm bảo giá là số để tính toán
            let price = typeof item.price === 'string' ? parseInt(item.price.replace(/\D/g, '')) : item.price;
            let total = price * item.quantity;

            const html = `
                <div class="cart-item">
                    <div class="col-check"><input type="checkbox" checked></div>
                    <div class="product-cell">
                        <img src="${item.img}" alt="">
                        <span>${item.name}</span>
                    </div>
                    <div><span class="size-box">${item.size || 'S'}</span></div>
                    <div>${price.toLocaleString()}đ</div>
                    <div class="qty-control">
                        <button onclick="updateQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQty(${index}, 1)">+</button>
                    </div>
                    <div class="item-total-val">${total.toLocaleString()}đ</div>
                    <button class="btn-delete" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });

        updateSummary();
    }

    // Hàm tăng giảm số lượng
    window.updateQty = (index, delta) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity += delta;
        if (cart[index].quantity < 1) cart[index].quantity = 1;
        
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    // Hàm xóa sản phẩm
    window.removeItem = (index) => {
        if(confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    };

    // Cập nhật tổng tiền và số lượng
    function updateSummary() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        let totalPrice = cart.reduce((sum, item) => {
            let p = typeof item.price === 'string' ? parseInt(item.price.replace(/\D/g, '')) : item.price;
            return sum + (p * item.quantity);
        }, 0);

        document.getElementById('selected-count').innerText = totalQty;
        document.getElementById('total-price').innerText = totalPrice.toLocaleString() + 'đ';
    }

    // Hàm mua hàng (giả lập)
    window.checkout = () => {
        alert("Cảm ơn bạn đã mua hàng! Đơn hàng đang được xử lý.");
        localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi mua
        renderCart();
    };

    // Chạy render lần đầu
    renderCart();
});