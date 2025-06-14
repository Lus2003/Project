document.addEventListener("DOMContentLoaded", function () {
    let activeHearts = JSON.parse(localStorage.getItem("activeHearts")) || [];
    let heartCount = activeHearts.length; 
    let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;

    const heartBadge = document.querySelector(".heart-zero");
    const cartBadge = document.querySelector(".cart-zero");

    function updateBadgeColor(element) {
        if (element.innerText.trim() === "0") {
            element.classList.remove("active");
        } else {
            element.classList.add("active");
        }
    }

    function updateLocalStorage() {
        if (activeHearts.length === 0) {
            localStorage.removeItem("heartCount");
            localStorage.removeItem("activeHearts");
        } else {
            localStorage.setItem("heartCount", activeHearts.length);
            localStorage.setItem("activeHearts", JSON.stringify(activeHearts));
        }
        localStorage.setItem("cartCount", cartCount);
    }

    function updateBadges() {
        heartBadge.innerText = activeHearts.length;
        cartBadge.innerText = cartCount;
        updateBadgeColor(heartBadge);
        updateBadgeColor(cartBadge);
    }

    function incrementCart() {
        cartCount++;
        updateBadges();
        updateLocalStorage();
    }

    document.querySelector(".cart")?.addEventListener("click", incrementCart);

    const productHearts = document.querySelectorAll(".trend-container .heart");

    productHearts.forEach((heart, index) => {
        const heartId = `heart-${index}`;

        if (!heart.hasAttribute("data-id")) {
            heart.setAttribute("data-id", heartId);
        }

        if (activeHearts.includes(heartId)) {
            heart.classList.add("active");
        }

        heart.addEventListener("click", function (event) {
            event.stopPropagation();
            const isActive = heart.classList.contains("active");

            heart.classList.toggle("active");

            if (!isActive) {
                activeHearts.push(heartId);
            } else {
                activeHearts = activeHearts.filter(id => id !== heartId);
            }

            updateBadges();
            updateLocalStorage();
        });
    });

    updateBadges();
});

document.addEventListener("DOMContentLoaded", function () {
    fetch(window.location.href)
        .then(response => {
            if (!response.ok) {
                window.location.href = "404.html";
            }
        })
        .catch(() => {
            window.location.href = "404.html";
        });
});
