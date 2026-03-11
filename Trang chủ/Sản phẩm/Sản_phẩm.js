document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // LẤY PHẦN TỬ
    // ===============================
    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");
    const pagination = document.getElementById("pagination");

    const headerSearch = document.getElementById("input_search");
    const mainSearch = document.querySelector(".search_sp input");

    // ===============================
    // BIẾN TRẠNG THÁI
    // ===============================
    const productsPerPage = 16;
    let currentBrand = "all";
    let currentCategory = "all";
    let currentPage = 1;
    let currentKeyword = "";

    // ===============================
    // LỌC SẢN PHẨM
    // ===============================
    function getFilteredProducts() {
        return Array.from(products).filter(product => {

            const name = product.querySelector(".product-name")
                ?.innerText.toLowerCase() || "";

            const brandMatch =
                currentBrand === "all" ||
                product.dataset.brand === currentBrand;

            const categoryMatch =
                currentCategory === "all" ||
                product.dataset.category === currentCategory;

            const searchMatch =
                name.includes(currentKeyword.toLowerCase());

            return brandMatch && categoryMatch && searchMatch;
        });
    }

    // ===============================
    // HIỂN THỊ
    // ===============================
    function showProducts() {

        const filtered = getFilteredProducts();
        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;

        products.forEach(product => {
        product.parentElement.style.display = "none";
        });

        filtered.slice(start, end).forEach(product => {
        product.parentElement.style.display = "";
        });

        updatePagination(filtered.length);
    }

    // ===============================
    // PHÂN TRANG
    // ===============================
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

    // ===============================
    // FILTER
    // ===============================
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

    // ===============================
    // SEARCH
    // ===============================
    function handleSearch(value) {
        currentKeyword = value;
        currentPage = 1;
        showProducts();
    }

    if (headerSearch) {
        headerSearch.addEventListener("input", function () {
            handleSearch(this.value);
        });
    }

    if (mainSearch) {
        mainSearch.addEventListener("input", function () {
            handleSearch(this.value);
        });
    }

    // ===============================
    // CLICK PRODUCT -> LƯU DATA
    // ===============================

    products.forEach(product => {

    product.addEventListener("click", function(){

        const name = product.querySelector(".product-name")?.innerText || "";
        const price = product.querySelector(".product-price")?.innerText || "";
        const img = product.querySelector(".product-image img")?.src || "";
        const desc = product.querySelector(".desc")?.innerText || "";
        const brand = product.querySelector(".product-brand")?.innerText || "";

        const data = {
            name: name,
            price: price,
            img: img,
            desc: desc,
            brand: brand
        };

        localStorage.setItem("product", JSON.stringify(data));

        window.location.href = "product-detail.html";
    });

});


// ===============================

    showProducts();

});