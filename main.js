// სერჩი 
document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("search-button");
    var searchBox = document.getElementById("search-box");

    searchButton.addEventListener("click", function () {
        searchBox.classList.toggle("active"); 
    });
});

// ბურგერ მენიუ

document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".hamburger-menu i");
    var navMenu = document.querySelector(".nav-content");
    var searchButton = document.querySelector(".nav-actions");

    menuButton.addEventListener("click", function () {
        if (navMenu.classList.contains("active")) {
            // მენიუს დახურვისას
            navMenu.style.opacity = "1";
            navMenu.style.transition = "opacity 0.5s ease-out";
            navMenu.style.opacity = "0";
            
            setTimeout(() => {
                navMenu.classList.remove("active");
                navMenu.style.opacity = "";
                menuButton.classList.remove("fa-xmark"); 
                menuButton.classList.add("fa-bars");
                menuButton.style.transform = "rotate(0deg)";
                searchButton.style.display = "flex";
            }, 500);
        } else {
            // მენიუს გახსნისას
            navMenu.classList.add("active");
            navMenu.style.opacity = "0";
            navMenu.style.transition = "opacity 0.5s ease-in";
            
            setTimeout(() => {
                navMenu.style.opacity = "1";
                menuButton.classList.remove("fa-bars"); 
                menuButton.classList.add("fa-xmark");
                menuButton.style.transform = "rotate(180deg)";
                searchButton.style.display = "none";
            }, 10);
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1024) {
            navMenu.classList.remove("active");
            navMenu.style.opacity = "";
            menuButton.classList.remove("fa-xmark");
            menuButton.classList.add("fa-bars");
            menuButton.style.transform = "rotate(0deg)";
            searchButton.style.display = "flex";
        }
    });
});
