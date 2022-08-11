let icons = document.querySelectorAll(".menu-item li");
let bar = document.querySelector('.bar i');
let header = document.querySelector('.menu-item');
let message_btn = document.querySelector(".message-btn");
let pop_up_box = document.querySelector(".pop-up-box");

// ------- bar js-----
bar.addEventListener("click", () => {
  header.classList.toggle("active");
  bar.classList.toggle("bx-x");
});

// ------- bar js end -------


// ------- pop_up_box js ------
message_btn.addEventListener("click", (e) => {
  e.preventDefault();
  pop_up_box.classList.add("active");

});

setInterval(() => {
  pop_up_box.classList.remove("active");
}, 3000);


// ------- pop_up_box js end ------


for (const icon of icons) {
  icon.addEventListener("click", () => {
    document.querySelector(".menu-item .active").classList.remove("active");
    icon.classList.add("active");
  });
}


document.querySelector(".Download_Cv").addEventListener("click", () => {
  let aTag = document.createElement("a");
  aTag.href = "img/abhishek.pdf";
  aTag.download = "img/abhishek.pdf";
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
});


// ------- onscroll js ----
window.onscroll = (() => {
  header.classList.remove("active");
  bar.classList.remove("bx-x");
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});