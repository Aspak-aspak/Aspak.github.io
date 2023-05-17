const carouselSlide= document.querySelector('.carousel-slide');
const carouselimages= document.querySelectorAll('.carousel-slide>img');

const prevBtn= document.querySelector('#prev-btn');
const nextBtn= document.querySelector('#nxt-btn');

var counter=1;
const size= carouselimages[0].clientWidth;

carouselSlide.style.transform= 'translateX('+(-size*counter)+ 'px)';

nextBtn.addEventListener('click',()=> {
    if(counter>=carouselimages.length-1)return;
    carouselSlide.style.transition="transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform= 'translateX('+(-size*counter)+ 'px)';
});

prevBtn.addEventListener('click',()=> {
    if(counter<=0)return;
    carouselSlide.style.transition="transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform= 'translateX('+(-size*counter)+ 'px)';
});

carouselSlide.addEventListener('transitionend', () =>{
    if(carouselimages[counter].id==='last-clone'){
        carouselSlide.style.transition="none";
        counter=carouselimages.length -2;
        carouselSlide.style.transform= 'translateX('+(-size*counter)+ 'px)'; 
    }
    if(carouselimages[counter].id==='first-clone'){
        carouselSlide.style.transition="none";
        counter=carouselimages.length -counter;
        carouselSlide.style.transform= 'translateX('+(-size*counter)+ 'px)'; 
    }
    

});