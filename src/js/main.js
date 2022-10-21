/**
 * Dropdown scripts
 */
const dropdown = document.querySelector(".dropdown");
const item = document.querySelector(".dropdown__list");
let dropdownImage = document.querySelector(".dropdown-box img");
let dropdownSpan = document.querySelector(".dropdown-box span");

dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

item.addEventListener("click", (e) => {
    if (e.target.closest(".dropdown__item")) {
        const { option } = e.target.dataset;
        if (option) {
            dropdownImage.setAttribute("src", `images/icons/lang-${option.toLowerCase()}.svg`);
            dropdownSpan.textContent = option;
        }
    }
});

/**
 * Slider scripts
 */
$(".slider__list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".slider__arrow-left",
    nextArrow: ".slider__arrow-right",
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

/**
 * Service tabs scripts
 */
const tabsContainer = document.querySelector("[data-tab-container]");
const tabs = document.querySelectorAll("[data-tab]");
const tabContent = document.querySelectorAll("[data-tab-content]");
const nextBtn = document.querySelectorAll("[data-btn]");

tabsContainer.addEventListener("click", (e) => {
    const clicked = e.target.closest("[data-tab]");

    if (!clicked) return;

    tabs.forEach((t) => t.classList.remove("is--active"));
    clicked.classList.add("is--active");

    tabContent.forEach((t) => t.classList.remove("is--active"));
    document.querySelector(`[data-tab-content="${clicked.dataset.tab}"]`).classList.add("is--active");
});

/**
 * Burger menu scripts
 */
const menuTrigger = document.querySelector("[data-menu]");
const closeMenu = document.querySelector("[data-menu-close]");
const mobile = document.querySelector(".mobile");
const menuLinks = document.querySelectorAll(".mobile__nav-item");

menuTrigger.addEventListener("click", () => {
    mobile.classList.add("is--active");
});

closeMenu.addEventListener("click", () => {
    mobile.classList.remove("is--active");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobile.classList.remove("is--active");
    });
});

/**
 * Accordion scripts
 */
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(el => {
    el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const control = self.querySelector(".accordion__control");
        const content = self.querySelector(".accordion__content");

        self.classList.toggle("open");

        // if open
        if (self.classList.contains("open")) {
            control.setAttribute("aria-expanded", true);
            content.setAttribute("aria-hidden", false);
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            control.setAttribute("aria-expanded", false);
            content.setAttribute("aria-hidden", true);
            content.style.maxHeight = null;
        }
    });
});

/**
 * Header sticky & back to top btn active
 */
const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function() {
    if (window.scrollY > 250) {
        header.classList.add("active");
        // backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        // backTopBtn.classList.remove("active");
    }
};

headerActive();

window.addEventListener("scroll", headerActive);
