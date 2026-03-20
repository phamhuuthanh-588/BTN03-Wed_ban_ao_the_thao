document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-btn");
    const groups = document.querySelectorAll(".review-group");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
           
            tabs.forEach(t => t.classList.remove("active"));
            
            tab.classList.add("active");

            const target = tab.getAttribute("data-target");

           
            groups.forEach(group => {
                const starLevel = group.getAttribute("data-star");
                
                if (target === "all") {
                    group.style.display = "block"; 
                } else if (target === starLevel) {
                    group.style.display = "block"; 
                } else {
                    group.style.display = "none";  
                }
            });
        });
    });
});
