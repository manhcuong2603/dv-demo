var bar = document.querySelector('.btn')
menu_bar = document.querySelector('.mid-menu')
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section')
var main_left = document.querySelector('.main-left')
var main_right = document.querySelector('.main-right')

let close_mobile = document.querySelector('.fa-times')
let nav_menu = document.querySelector('.fa-bars')
form_menu=document.querySelector('.navbar-mobile');
form_darck=document.querySelector('.nav_overlay');

nav_menu.onclick=function(){  
  form_menu.classList.add('hien');
  form_darck.classList.add('hien')
}
close_mobile.onclick=function(){  
  form_menu.classList.remove('hien');
  form_darck.classList.remove('hien')
}

window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next")
  const prevBtn = document.querySelector(".slider-prev")
  const dotItems = document.querySelectorAll(".slider-dot-item")
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  let postionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", function () {
    hanlechangeSlide(1);
  });

  prevBtn.addEventListener("click", function () {
    hanlechangeSlide(-1);
  });


  

  [...dotItems].forEach(item => item.addEventListener("click", function (e) {
    [...dotItems].forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    const slideIndex = parseInt((e).target.dataset.index);
    index = slideIndex;
    postionX = -1 * index * sliderItemWidth;
    sliderMain.style = `transform: translateX(${-1 * index * sliderItemWidth}px)`;

  }));
  function hanlechangeSlide(direction) {
    if (direction == 1) {

      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      postionX = postionX - sliderItemWidth;

      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;
    } else if (direction == -1) {

      if (index <= 0) {
        index = 0;
        return;
      }
      postionX = postionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");

  }
});


window.addEventListener('scroll',function(){
  if(this.window.pageYOffset>80){
      main_left.classList.add('active');
  }
  else{
      main_left.classList.remove('active');
  }
})

window.addEventListener('scroll',function(){
  if(this.window.pageYOffset>80){
      main_right.classList.add('codinh');
  }
  else{
    main_right.classList.remove('codinh');
  }
})


window.addEventListener('scroll',function(){
  if(this.window.pageYOffset>2100){
      main_left.classList.remove('active');
      main_right.classList.remove('codinh')
  }
  
})



