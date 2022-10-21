"use strict";var dropdown=document.querySelector(".dropdown"),item=document.querySelector(".dropdown__list"),dropdownImage=document.querySelector(".dropdown-box img"),dropdownSpan=document.querySelector(".dropdown-box span"),tabsContainer=(dropdown.addEventListener("click",function(){dropdown.classList.toggle("active")}),item.addEventListener("click",function(e){e.target.closest(".dropdown__item")&&(e=e.target.dataset.option)&&(dropdownImage.setAttribute("src","images/icons/lang-".concat(e.toLowerCase(),".svg")),dropdownSpan.textContent=e)}),$(".slider__list").slick({slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,prevArrow:".slider__arrow-left",nextArrow:".slider__arrow-right",responsive:[{breakpoint:1300,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1100,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),document.querySelector("[data-tab-container]")),tabs=document.querySelectorAll("[data-tab]"),tabContent=document.querySelectorAll("[data-tab-content]"),nextBtn=document.querySelectorAll("[data-btn]"),menuTrigger=(tabsContainer.addEventListener("click",function(e){e=e.target.closest("[data-tab]");e&&(tabs.forEach(function(e){return e.classList.remove("is--active")}),e.classList.add("is--active"),tabContent.forEach(function(e){return e.classList.remove("is--active")}),document.querySelector('[data-tab-content="'.concat(e.dataset.tab,'"]')).classList.add("is--active"))}),document.querySelector("[data-menu]")),closeMenu=document.querySelector("[data-menu-close]"),mobile=document.querySelector(".mobile"),menuLinks=document.querySelectorAll(".mobile__nav-item"),accordions=(menuTrigger.addEventListener("click",function(){mobile.classList.add("is--active")}),closeMenu.addEventListener("click",function(){mobile.classList.remove("is--active")}),menuLinks.forEach(function(e){e.addEventListener("click",function(){mobile.classList.remove("is--active")})}),document.querySelectorAll(".accordion")),header=(accordions.forEach(function(e){e.addEventListener("click",function(e){var e=e.currentTarget,t=e.querySelector(".accordion__control"),o=e.querySelector(".accordion__content");e.classList.toggle("open"),e.classList.contains("open")?(t.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!1),o.style.maxHeight=o.scrollHeight+"px"):(t.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),o.style.maxHeight=null)})}),document.querySelector("[data-header]")),headerActive=function(){250<window.scrollY?header.classList.add("active"):header.classList.remove("active")};headerActive(),window.addEventListener("scroll",headerActive);
//# sourceMappingURL=main.js.map
