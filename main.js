//  change navbar styles on scroll

window.addEventListener('scroll', ()=>{
   document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
});

// SHOW/HIDE FAQ ANSWERS

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
   faq.addEventListener('click', () => {
      faq.classList.toggle('open');

      // change icon
      const icon = faq.querySelector('.faq__icon i');
      if(icon.className === 'uil uil-plus'){
         icon.className = "uil uil-minus"
      }else{
         icon.className = "uil uil-plus";
      }
   })
})

// SHOW/HIDE NAV MENU

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
   menu.style.display = "flex";
   closeBtn.style.display = "inline-block";
   menuBtn.style.display = "none";
});

// CLOSE NAV MENU
const closeNav = () =>{
   menu.style.display = "none";
   closeBtn.style.display = "none";
   menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav);


// COOKIES SETTINGS
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () =>{
   cookieContainer.classList.remove("active");
   localStorage.setItem("cookieBannerDisplayed", "true");
})

setTimeout( () =>{
   if(!localStorage.getItem("cookieBannerDisplayed"))
   cookieContainer.classList.add("active");
}, 2000);

// END OF COOKIES SETTINGS



// const removeHover = document.querySelector(".course");
// removeHover.addEventListener("mouseover", e =>{
//    removeHover.style.border= "none";
// })



// extra style
// const immg = document.querySelector(".image");
// const logo = document.querySelector(".txt");

// immg.addEventListener("mouseover", e =>{
//    immg.style.display= "flex";
// })

// const prtShow = document.querySelector(".partner-data");
// prtShow.addEventListener("mouseover", e =>{
//    logo.style.display="flex";
// })

// const prtHide = document.querySelector(".partner-data");
// prtHide.addEventListener("mouseout", e =>{
//    logo.style.display="none";
// })



// logo.addEventListener("mouseover", e =>{
//    logo.style.display="flex";
// })

