const testimonials = [{
        image: "./images/image-tanya.jpg",
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now.
          I couldn’t recommend this course enough. I’m now in the job of my dreams and so
          excited about the future. ”`,
        name: 'Tanya Sinclair',
        occupation: 'UX Engineer'
    },
    {
        image: "./images/image-john.jpg",
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course.
      The depth the instructors go into is incredible. I now feel so confident about
      starting up as a professional developer. ”`,
        name: 'John Tarkpor',
        occupation: 'Junior Front-end Developer'
    }
];

const avatar = document.getElementById("avatar-img");
const quote = document.getElementById("quote");
const personName = document.getElementById("person-name");
const occupation = document.getElementById("occupation");
const prevBtn = document.getElementById("arrow-prev");
const nextBtn = document.getElementById("arrow-next");

let index = 0;

prevBtn.addEventListener('click', previousImage, false);
nextBtn.addEventListener('click', nextImage, false);

window.addEventListener('load', ()=>{
    setValues(index);
});

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowLeft') {
        previousImage();
    }
    else if(event.key == 'ArrowRight') {
        nextImage();
    }
});

function previousImage() {
    if (index !== 0) {
        index--;
    } else {
        index = testimonials.length - 1;
    }
    setValues(index);
    console.log(index);
}

function nextImage() {
    if (index !== testimonials.length - 1) {
        index++;
    } else {
        index = 0;
    }
    setValues(index);
    console.log(index);
}

function setValues(ind) {
    avatar.setAttribute('src', testimonials[ind].image);
    quote.textContent = testimonials[ind].quote;
    personName.textContent = testimonials[ind].name;
    occupation.textContent = testimonials[ind].occupation;
}
