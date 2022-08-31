let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                document
                    .querySelector("nav ul li a[href *=" + id + "]")
                    .classList.add("active");
            });
            if (id == "skills") {
                let progress = document.querySelectorAll(".progress span");
                progress.forEach((e) => {
                    e.style.width = e.dataset.width;
                });
            }
        }
    });
});
// change theme
const darkMOdeToggle = document.getElementById("icon");
let darkMode = localStorage.getItem("darkMode"),
    changeIcone = localStorage.getItem("change-icon");
// enabled dark mode
const enableDarkMode = () => {
    // add darkMode class to body
    document.body.classList.add("darkMode");
    // add to local storage
    localStorage.setItem("darkMode", "enabled");
    // toggle icone
    darkMOdeToggle.classList.remove("fa-moon");
    darkMOdeToggle.classList.add("fa-sun");
    //add icon to localstorage
    localStorage.setItem("change-icon", "fa-sun");
};
// disabled dark mode
const disableDarkMode = () => {
    // add darkMode class to body
    document.body.classList.remove("darkMode");
    // add to local storage
    localStorage.setItem("darkMode", null);
    // toggle icone
    darkMOdeToggle.classList.add("fa-moon");
    darkMOdeToggle.classList.remove("fa-sun");
    //add icon to localstorage
    localStorage.setItem("change-icon", "fa-moon");
};
// to updated local storage after reload
if (darkMode === "enabled") {
    enableDarkMode();
}
darkMOdeToggle.addEventListener("click", () => {
    // to update dark mode in local storage
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// show menue in small screen
let open = document.getElementById("show-btn");
let close = document.getElementById("close-btn");
let ul = document.querySelector("nav .list");
open.addEventListener("click", () => {
    ul.classList.add("collapse");
    open.style.opacity = "0";
});
document.addEventListener("click", (e) => {
    if (
        e.target.id !== "show-btn" &&
        e.target.parentElement.id !== "show-btn" &&
        !e.target.classList.contains("list")
    ) {
        ul.classList.remove("collapse");
        open.style.opacity = "1";
    }
});
