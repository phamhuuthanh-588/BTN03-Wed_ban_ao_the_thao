document.addEventListener("DOMContentLoaded", function () {

    //lấy phần tử
    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");
    const pagination = document.getElementById("pagination");

    const headerSearch = document.getElementById("input_search");
    const mainSearch = document.querySelector(".search_sp input");

    //biến trạng thái
    const productsPerPage = 16; //số sản phẩm hiện thị trong 1 trang
    let currentBrand = "all";
    let currentCategory = "all";
    let currentPage = 1;
    let currentKeyword = "";

    //lọc sản phẩm
    function getFilteredProducts() {
        return Array.from(products).filter(product => {

            const name = product.querySelector(".product-name")
                ?.innerText.toLowerCase() || ""; //lấy tên

            const brandMatch =
            currentBrand === "all" ||
            product.dataset.brand.toLowerCase() === currentBrand; //kiểm tra brand

            const categoryMatch =
            currentCategory === "all" ||
            product.dataset.category.toLowerCase() === currentCategory; //kiểm tra category

            const searchMatch =
                name.includes(currentKeyword.toLowerCase()); //kiểm tra tên

            return brandMatch && categoryMatch && searchMatch;
        });
    }

    //hiển thị sản phẩm đã lọc
    function showProducts() {

        const filtered = getFilteredProducts();
        const start = (currentPage - 1) * productsPerPage; //vị trí bắt đầu
        const end = start + productsPerPage; //vị trí kết thúc

        products.forEach(product => {
        product.style.display = "none"; //ẩn hết
        });

        filtered.slice(start, end).forEach(product => {
        product.style.display = ""; //hiển thị những sản phẩm đã lọc
        });

        updatePagination(filtered.length); //cập nhật phân trang
    }

    //phân trang
    function updatePagination(totalProducts) {

        if (!pagination) return;

        pagination.innerHTML = "";

        const pageCount = Math.ceil(totalProducts / productsPerPage);
        if (pageCount <= 1) return;

        for (let i = 1; i <= pageCount; i++) {

            const btn = document.createElement("button");
            btn.innerText = i;

            if (i === currentPage) {
                btn.style.background = "#41DC9C";
                btn.style.color = "black";
            }

            btn.addEventListener("click", function () {
                currentPage = i;
                showProducts();
            });

            pagination.appendChild(btn);
        }
    }

    // FILTER
    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const type = this.dataset.type;
            const value = this.dataset.value;

            if (type === "all") {
                currentBrand = "all";
                currentCategory = "all";
            }

            if (type === "brand") {
                currentBrand = value;
                currentCategory = "all";
            }

            if (type === "category") {
                currentCategory = value;
                currentBrand = "all";
            }

            currentPage = 1;
            showProducts();
        });
    });

    //tìm kiếm
    function handleSearch(value) {
        currentKeyword = value;
        currentPage = 1;
        showProducts();
    }

    if (headerSearch) {
        headerSearch.addEventListener("input", function () {
            handleSearch(this.value);
        });
    } //tìm kiếm ở header

    if (mainSearch) {
        mainSearch.addEventListener("input", function () {
            handleSearch(this.value);
        });
    } //tìm kiếm ở main

    //nhấn sản phẩm

    products.forEach(product => {

    product.addEventListener("click", function(){

        //lấy thông tin sản phẩm
        const name = product.querySelector(".product-name")?.innerText || "";
        const price = product.querySelector(".product-price")?.innerText || "";
        const img = product.querySelector(".product-image img")?.src || "";
        const desc = product.querySelector(".desc")?.innerText || "";
        const brand = product.querySelector(".product-brand")?.innerText || "";

        //lưu vào localStorage
        const data = {
            name: name,
            price: price,
            img: img,
            desc: desc,
            brand: brand
        };

        localStorage.setItem("product", JSON.stringify(data));

        //chuyển sang trang chi tiết sản phẩm
        window.location.href = "product-detail.html";
    });
});

    showProducts();

});
