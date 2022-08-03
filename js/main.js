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
const darkMOdeToggle = document.getElementById("icon"),
    landingPicture = document.querySelector(".landing_pic"),
    skellsPicture = document.querySelector(".skills_picture"),
    formPicture = document.querySelector(".form_picture");
let darkMode = localStorage.getItem("darkMode"),
    changeIcone = localStorage.getItem("change-icon"),
    changeLanding = localStorage.getItem("change-lnading-picture"),
    changeSkills = localStorage.getItem("change-skills-picture"),
    changeFormPicture = localStorage.getItem("change-form-picture");
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
    // change landing picture
    landingPicture.src = "images/landing_dark.svg";
    // add to local storage
    localStorage.setItem("change-lnading-picture", "images/landing_dark.svg");
    // change skills picture
    skellsPicture.src = "images/skills_dark.svg";
    // add local storage
    localStorage.setItem("change-skills-picture", "images/skills_dark.svg");
    // change picture in form section
    formPicture.src = "images/contact_dark.svg";
    // add local storage
    localStorage.setItem("change-form-picture", "images/contact_dark.svg");
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
    // change picture
    landingPicture.src = "images/landing_light.svg";
    // add to local storage
    localStorage.setItem("change-lnading-picture", "images/landing_light.svg");
    // change skills picture
    skellsPicture.src = "images/skills_light.svg";
    // add local storage
    localStorage.setItem("change-skills-picture", "images/skils_light.svg");
    // change picture in form section
    formPicture.src = "images/contact_light.svg";
    // add local storage
    localStorage.setItem("change-form-picture", "images/contact_light.svg");
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
