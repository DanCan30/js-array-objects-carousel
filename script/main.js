
const carousel = document.getElementById("carousel");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const thumbnailsContainer = document.getElementById("thumbnails-container");
const autoplay = document.getElementById("autoplay");
let activeIndex = 0;

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const slides = [];

const thumbnailsList = [];

images.forEach( (element) => {
    
    let slide = document.createElement("div");
    slide.classList.add("slide")
    carousel.append(slide);
  
    let thumbnailImg = document.createElement("img");
    thumbnailImg.setAttribute("src", element.url);

    let newImg = document.createElement("img");
    newImg.setAttribute("src", element.url);
    slide.append(newImg);
    
    const newTitle = document.createElement("h3");
    newTitle.innerHTML = element.title,
    slide.append(newTitle);
    
    const newDescription = document.createElement("p");
    newDescription.innerHTML = element.description,
    slide.append(newDescription);
    
    slides.push(slide);
    thumbnailsList.push(thumbnailImg);

});


slides[activeIndex].classList.add("active");
thumbnailsList[activeIndex].classList.add("active");



thumbnailsList.forEach( (element) => {
    element.classList.add("thumbnail");
    thumbnailsContainer.append(element);
} );



for ( let i = 0; i < thumbnailsList.length; i++) {

    thumbnailsList[i].addEventListener("click", function() {

        for ( let index = 0; index < thumbnailsList.length; index++){

            slides[index].classList.remove("active");
            thumbnailsList[index].classList.remove("active");
        };

        slides[i].classList.add("active");
        thumbnailsList[i].classList.add("active");

    });
}

let isAutoplayOn = true;
let clock;

if (isAutoplayOn === true) { 
    
    clock = setInterval(function() {

    slides[activeIndex].classList.remove("active");
    thumbnailsList[activeIndex].classList.remove("active");


    if (activeIndex === slides.length -1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }

    slides[activeIndex].classList.add("active");
    thumbnailsList[activeIndex].classList.add("active");

}, 1000);
};

autoplay.addEventListener("click", function () {

    if (isAutoplayOn === true) {
        clearInterval(clock);
        isAutoplayOn = false;
        autoplay.innerHTML = "Restart"
    } else {
        clock = setInterval(function() {
    
        slides[activeIndex].classList.remove("active");
        thumbnailsList[activeIndex].classList.remove("active");
    
    
        if (activeIndex === slides.length -1) {
            activeIndex = 0;
        } else {
            activeIndex++;
        }
    
        slides[activeIndex].classList.add("active");
        thumbnailsList[activeIndex].classList.add("active");
    
    }, 1000);
        isAutoplayOn = true;
        autoplay.innerHTML = "Stop";
    }
})




nextButton.addEventListener("click", function() {

    slides[activeIndex].classList.remove("active");
    thumbnailsList[activeIndex].classList.remove("active");


    if (activeIndex === slides.length -1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }

    slides[activeIndex].classList.add("active");
    thumbnailsList[activeIndex].classList.add("active");

});

prevButton.addEventListener("click", function() {

    slides[activeIndex].classList.remove("active");
    thumbnailsList[activeIndex].classList.remove("active");


    if (activeIndex === 0) {
        activeIndex = slides.length -1;
    } else {
        activeIndex--;
    }

    slides[activeIndex].classList.add("active");
    thumbnailsList[activeIndex].classList.add("active");

})
