// Mobile detection and email form display
document.addEventListener('DOMContentLoaded', function() {
    // Removed mobile CTA display logic as section is removed

    // Slideshow logic (Re-added)
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        initializeSlideshow();
    }

    // Intersection Observer for scroll animations (If needed - currently removed)
    /*
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const targets = document.querySelectorAll('.scroll-target');
    targets.forEach(target => observer.observe(target));
    */

    // FAQ Accordion Button Aria Handling Removed
});

// --- Slideshow (Re-added) --- 
let slideIndex = 1;
let slideInterval;
const AUTOPLAY_DELAY = 5000; // 5 seconds

function initializeSlideshow() {
    showSlides(slideIndex);
    startSlideInterval(); // Start autoplay
    
    const container = document.querySelector('.slideshow-container');
    if (container) {
        // Pause on hover
        container.addEventListener('mouseenter', pauseSlideInterval);
        // Resume on mouseleave
        container.addEventListener('mouseleave', startSlideInterval);
    }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideInterval();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideInterval();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (!slides || !dots || slides.length === 0 || dots.length === 0) return; 

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) { 
    dots[i].classList.remove("active");
  }
  
  if (slides[slideIndex-1]) { 
      slides[slideIndex-1].classList.add("active");
  }
  if (dots[slideIndex-1]) { 
       dots[slideIndex-1].classList.add("active");
   }
}

// Simplified Start/Restart autoplay interval
function startSlideInterval() {
  clearInterval(slideInterval); // Clear existing interval first
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, AUTOPLAY_DELAY); 
}

// Pause autoplay (used for hover)
function pauseSlideInterval() {
    clearInterval(slideInterval);
}

// Reset interval (called on manual navigation or mouseleave)
function resetSlideInterval() {
    clearInterval(slideInterval); 
    startSlideInterval(); // Simply restart
}

window.plusSlides = plusSlides;
window.currentSlide = currentSlide; 