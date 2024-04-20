//Sticky Header
const header = document.querySelector("header");

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky',this.window.scrollY>0)
});

const navMenuLinks = document.querySelectorAll('.navmenu a');
navMenuLinks.forEach(link =>{
    link.addEventListener('mouseover', function(){
      this.style.width = '100%';
    });
    link.addEventListener('mouseout', function(){
      this.style.width = 'auto';
    });
});

// SignUp Button
const navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener('mouseover', function(){
    navBtn.style.backgroundColor = '#1E2442';
    navBtn.style.color = '#DDDDDD';
});
navBtn.addEventListener('mouseout', function(){
    navBtn.style.backgroundColor = '';
    navBtn.style.color = '';
});

// Find Out More button
const btn1 = document.querySelector('.btn1');
btn1.onmouseover = function(){
    this.style.transform = 'translateY(-5px)';
};
btn1.onmouseout = function(){
    this.style.transform = 'translateY(0)';
};

// Play Button
const btns = document.querySelectorAll('.btn2');
btns.forEach(btn => {
    const span = btn.querySelector('span');
    const icon = span.querySelector('i');
    icon.addEventListener('mouseover', () => {
        icon.style.opacity = '0.9';
        icon.style.transform = 'translateY(-4px)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.opacity = '';
        icon.style.transform = '';
    });
});

// Services
document.addEventListener('DOMContentLoaded', function(){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-8px)';
        });
        row.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Destinations
document.addEventListener('DOMContentLoaded',function(){
    const hovImgs = document.querySelectorAll('.hov-img img');
    hovImgs.forEach(hovImg=>{
        hovImg.addEventListener('mouseover', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.1)';
            img.style.filter = 'brightness(50%) hue-rotate(45deg)';
        });
        hovImg.addEventListener('mouseout', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
            img.style.filter = 'brightness(100%) hue-rotate(0deg)';
        });
    });
});

// Socials
const iconElements = document.querySelectorAll('.fifth-info .icon a');
iconElements.forEach(iconElement=>{
    iconElement.addEventListener('mouseover', () => {
        iconElement.style.transform = 'scale(1.1)';
    });
    
    iconElement.addEventListener('mouseout', () => {
        iconElement.style.transform = 'scale(1)';
    });
});

// Toggle
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
let head = document.querySelector('header');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    navmenu.classList.remove('open');
    menu.classList.remove('bx-x');
  }
  
  navLink.forEach(n => n.addEventListener("click",linkAction));







