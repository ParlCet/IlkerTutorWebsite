document.addEventListener("DOMContentLoaded", function () {
    // Delay the fade-in effect slightly for a smoother transition
    setTimeout(function () {
        document.querySelector(".slideCall").classList.add("show");
        document.querySelector(".slideEmail").classList.add("show");
    }, 100);
});