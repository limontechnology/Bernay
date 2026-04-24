// Show Slides

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('slide-active');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('slide-active');
}

setInterval(() => {
  plusSlides(1);
}, 8000);

// Top ProgressBar 

window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Dark-Mode & Light-Mode Theme-Btn

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

// footer-panel

var animatedAccordion = document.getElementsByClassName('accordion');

for (var i = 0; i < animatedAccordion.length; i++) {
  animatedAccordion[i].addEventListener('click', function() {
    this.classList.toggle('accordion-active'); 
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

//Mobile Menu Sidenav 

const toggleNavMenu = document.getElementById('toggleNav');
const sidenavMenu = document.getElementById('mySidenav');

toggleNavMenu.addEventListener('change', () => {
  if (toggleNavMenu.checked) {
    sidenavMenu.style.width = '250px';
  } else {
    sidenavMenu.style.width = '0';
  }
})