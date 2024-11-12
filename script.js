/*  pagedrop */

const dropDown=document.querySelector('.dropdown');
const optionsMenu = dropDown.querySelector('.options');
dropDown.addEventListener('click', () => {
    if (optionsMenu.style.display === 'block') {
        optionsMenu.style.display = 'none';
    } else {
        optionsMenu.style.display = 'block';
    }
});
const pagesDrop=document.querySelector('.pages');
const pagesMenu=document.querySelector('.pagemenu');
pagesDrop.addEventListener('mouseover',()=>{
    if (pagesMenu.style.display === 'block') {
        pagesMenu.style.display = 'none';
    } else {
        pagesMenu.style.display = 'block';
    }
});
window.addEventListener('click',()=>{
    if (pagesMenu.style.display === 'block') {
        pagesMenu.style.display = 'none';
    } 
});

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
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1;}
            if (n < 1) {slideIndex = slides.length;}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
            slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
        }



const boxitems = [
{ img: 'img/offer-1.jpg',
  h1: 'The stock market provides a venue...',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?',
},
{ img: 'img/offer-2.jpg',
  h1: 'The stock market provides a venue...',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?',
},
{ img: 'img/offer-3.jpg',
  h1: 'The stock market provides a venue...',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?',
},
{ img: 'img/offer-4.jpg',
  h1: 'The stock market provides a venue...',
  p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?',
}
]; 

const buttons = document.getElementsByClassName('offerlink');
const image = document.querySelector('.box-img');
const offerbox = document.querySelector('.box2');
const heading = document.querySelector('.heading');
const paragraph = document.querySelector('.para');

for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener('click', function() {
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].style.backgroundColor = '';
    }
    buttons[i].style.backgroundColor = '#00d084';
    offerbox.classList.add('fade-out');

    setTimeout(() => {
        image.src = boxitems[i].img;
        heading.innerHTML = boxitems[i].h1;
        paragraph.innerHTML = boxitems[i].p;

        offerbox.classList.remove('fade-out');
    }, 200);
});
}



var questions = document.getElementsByClassName("question");
var i;

for (i = 0; i < questions.length; i++) {
questions[i].addEventListener("click", function() {
    var answer = this.nextElementSibling;
    var allAnswers = document.getElementsByClassName("answer");
    var allQuestions = document.getElementsByClassName("question");
    for (var j = 0; j < allAnswers.length; j++) {
        if (allQuestions[j] !== this) {  
            allAnswers[j].style.display = "none";
            allQuestions[j].classList.remove("active");
        }
    }
    if (!this.classList.contains("active")) {
        this.classList.add("active");
        answer.style.display = "block";
    } else {
        this.classList.remove("active");
        answer.style.display = "none";
    }
});
}
var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,
spaceBetween: 30,
loop: true,
speed: 1000,
/*autoplay: {
    delay: 2000,
},*/
navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
},
breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },

});

window.addEventListener('DOMContentLoaded',function(){
 const hometext=this.document.querySelector('.content-carousel');
 hometext.classList.add('content-animation');
});



window.addEventListener('scroll', function () {
    var faq_content = document.querySelector('.FAQ-content');
    var questPanel = document.querySelectorAll('.question'); 
    var sideImage = document.querySelector('.sideImg');
    var windowHeight = window.innerHeight;
    var revealTop = faq_content.getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
        faq_content.classList.add('make-FAQ-active');
        questPanel.forEach(function(question) {
            question.classList.add('make-question-active');
        });

        sideImage.classList.add('make-Sim-active');
    } else {
        faq_content.classList.remove('make-FAQ-active');
        questPanel.forEach(function(question) {
            question.classList.remove('make-question-active');
        });

        sideImage.classList.remove('make-Sim-active');
    }
});

window.addEventListener('scroll', function () {
    const ourteam = document.querySelector('.Team-content');
    const TeamCards=document.querySelectorAll('.card');
    var windowheight = window.innerHeight;
    var revealtop = ourteam.getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
        ourteam.classList.add('make-teamcont-active');
    } else {
        ourteam.classList.remove('make-teamcont-active');
    }
    for(let i=0;i<TeamCards.length;i++){
        if (revealtop < windowheight - revealpoint) {
            TeamCards[i].classList.add('make-card-active');
        }
        else{
            TeamCards[i].classList.remove('make-card-active');
        }

    }
});

window.addEventListener('scroll', function () {
    const servicecontent = document.querySelector('.sercontent');
    const SerCards = document.querySelectorAll('.serCard');
    var windowheight = window.innerHeight;
    var revealtop = servicecontent.getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
        servicecontent.classList.add('make-sercont-active');
    } else {
        servicecontent.classList.remove('make-sercont-active');
    }

    for (let i = 0; i < SerCards.length; i++) {
        if (revealtop < windowheight - revealpoint) {
            SerCards[i].classList.add('make-ser-card-active');
        } else {
            SerCards[i].classList.remove('make-ser-card-active');
        }
    }
});