const menuLinks = document.querySelectorAll(".menu a");
const pages = document.querySelectorAll(".page");

menuLinks.forEach(link => {

link.addEventListener("click", function(){

const pageId = this.getAttribute("data-page");

pages.forEach(page=>{
page.classList.remove("active");
});

menuLinks.forEach(menu=>{
menu.classList.remove("active-menu");
});

document.getElementById(pageId).classList.add("active");

this.classList.add("active-menu");

});

});
const element = document.querySelector('.typing');
const text = element.innerText;
element.innerText = '';

// Memecah teks jadi huruf agar bisa dikontrol satu-satu
text.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.className = 'char';
  span.innerText = char === ' ' ? '\u00A0' : char;
  element.appendChild(span);

  // Munculkan setiap huruf dengan delay bertahap
  setTimeout(() => {
    span.classList.add('active');
  }, i * 100); // 100ms adalah kecepatan ketik
});




