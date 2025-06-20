//MENU HAMBURGER
const burger = document.querySelector(".nav_hamburger");
const menu = document.querySelector(".nav_interieur");
burger.addEventListener("click", function() {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
})

//DARK MODE
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
const img_nav = document.getElementById('img_header');
function store(value){
  localStorage.setItem('darkmode', value);
}
function load(){
  const darkmode = localStorage.getItem('darkmode');

  if(!darkmode){
    store(false);
    icon.textContent = "light";
  } else if( darkmode == 'true'){
    body.classList.add('darkmode');
    img_nav.src = "images/logo/entier/logo-violet.png";
    icon.textContent = "dark";
  } else if(darkmode == 'false'){
    icon.textContent = "light";
  }
}
load();
btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');

  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    img_nav.src = "images/logo/entier/logo-violet.png";
    icon.textContent = "dark";
  }else{
    img_nav.src = "images/logo/entier/logo-vert.png";
    icon.textContent = "light";
  }
  
})

//AVIS CLIENT
const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})

//FAQ
document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === 'none' || !answer.style.display) {
          answer.style.display = 'block';
        } else {
          answer.style.display = 'none';
        }
      });
    });
