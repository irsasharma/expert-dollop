let currentSlide = 0;
let slides;

document.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('.slide');
  showSlide(currentSlide);

setInterval(nextSlide, 2000);
});


function showSlide(index) {
  
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
 
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function toggleAnswer(index) {
  let answers = document.querySelectorAll('.answer');

  if (answers[index].style.display === "block") {
      answers[index].style.display = "none";
  } else {
      answers[index].style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("startSpeech");
  const textarea = document.getElementById("feedback");

  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech recognition is not supported in this browser. Try a different browser!");
  } else {
    const recognition = new webkitSpeechRecognition(); 
    recognition.continuous = false; 
    recognition.interimResults = false; 
    recognition.lang = "en-US";

    
    button.addEventListener("click", () => {
      recognition.start();
    });

    
    recognition.onresult = (event) => {
      textarea.value = event.results[0][0].transcript; 
    };

 
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission (which reloads the page)

    const feedback = document.getElementById("feedback").value.trim();

    if (feedback === "") {
      alert("Please enter your feedback before submitting!");
      return;
    }
  });
});

