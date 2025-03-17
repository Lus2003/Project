document.addEventListener("DOMContentLoaded", function () {
    let heartCount = localStorage.getItem("heartCount") ? parseInt(localStorage.getItem("heartCount")) : 0;
    let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;

    const heartBadge = document.querySelector(".heart-zero");
    const cartBadge = document.querySelector(".cart-zero");

    function updateBadgeColor(element) {
        element.style.backgroundColor = element.innerText.trim() === "0" ? "gray" : "black";
    }

    function updateLocalStorage() {
        localStorage.setItem("heartCount", heartCount);
        localStorage.setItem("cartCount", cartCount);
    }

    function resetHeart() {
        heartCount = 0; 
        heartBadge.innerText = heartCount;
        updateBadgeColor(heartBadge);
        updateLocalStorage();
    }

    function incrementCart() {
        cartCount++;
        cartBadge.innerText = cartCount;
        updateBadgeColor(cartBadge);
        updateLocalStorage();
    }

    document.querySelector(".favorites").addEventListener("click", resetHeart);

    document.querySelector(".cart").addEventListener("click", incrementCart);

    heartBadge.innerText = heartCount;
    cartBadge.innerText = cartCount;

    updateBadgeColor(heartBadge);
    updateBadgeColor(cartBadge);
});