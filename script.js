// =====================================================
// NOVA — INTERACTIVE NAVIGATION
// SkillCraft Technology - Task 1
// =====================================================

const header = document.querySelector(".header");
const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link");


// ================= SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================= MOBILE MENU =================

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// ================= CLOSE MENU AFTER CLICK =================

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");
        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);


// ================= CLOSE MENU ON OUTSIDE CLICK =================

document.addEventListener("click", (event) => {

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navMenu.classList.remove("open");
        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// ================= INITIAL STATE =================

updateActiveLink();