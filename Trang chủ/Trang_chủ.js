// ====== CONFIG ======
const list = document.getElementById("reviewList");
const form = document.getElementById("reviewForm");
const nameInput = document.getElementById("nameInput");
const ratingInput = document.getElementById("ratingInput");
const commentInput = document.getElementById("commentInput");

let reviewsData = [];
let page = 0;
const perPage = 3; // mỗi lần load thêm 3 review



// ====== TẠO HTML REVIEW ======
function createReviewHTML(r){
    return `
    <div class="review-card">
        <div class="review-head">
            <img src="${r.avatar}" class="avatar">
            <div>
                <b>${r.name}</b>
                <div class="stars">${"⭐".repeat(r.rating)}</div>
            </div>
        </div>
        <p class="comment">${r.comment}</p>
    </div>`;
}



// ====== RENDER THEO TRANG ======
function renderNextPage(){
    const start = page * perPage;
    const end = start + perPage;

    const slice = reviewsData.slice(start, end);

    slice.forEach(r => {
        list.insertAdjacentHTML("beforeend", createReviewHTML(r));
    });

    page++;
}



// ====== LOAD FILE JSON ======
fetch("reviews.json")
.then(res => res.json())
.then(data => {
    reviewsData = data;
    renderNextPage(); // load lần đầu
});



// ====== SCROLL LOAD THÊM ======
list.addEventListener("scroll", () => {

    const nearBottom =
        list.scrollTop + list.clientHeight >= list.scrollHeight - 5;

    if(nearBottom){
        renderNextPage();
    }

});



// ====== THÊM REVIEW MỚI (GIẢ LẬP DATABASE) ======
form.addEventListener("submit", function(e){
    e.preventDefault();

    const newReview = {
        name: nameInput.value,
        rating: parseInt(ratingInput.value),
        comment: commentInput.value,
        avatar: "default-avatar.png"
    };

    // thêm vào data
    reviewsData.unshift(newReview);

    // thêm lên đầu giao diện
    list.insertAdjacentHTML("afterbegin", createReviewHTML(newReview));

    // reset form
    form.reset();
});



// ====== AUTO SCROLL MƯỢT ======
let isDown = false;
let startY;
let scrollTop;

list.addEventListener("mousedown", e=>{
    isDown = true;
    startY = e.pageY - list.offsetTop;
    scrollTop = list.scrollTop;
});

list.addEventListener("mouseleave", ()=> isDown=false);
list.addEventListener("mouseup", ()=> isDown=false);

list.addEventListener("mousemove", e=>{
    if(!isDown) return;
    e.preventDefault();

    const y = e.pageY - list.offsetTop;
    const walk = (y - startY) * 1.5;
    list.scrollTop = scrollTop - walk;
});
