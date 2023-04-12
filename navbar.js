let toggle = document.getElementById('toggle');
let menu = document.getElementById('menu');

toggle.addEventListener("click", () => {
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});