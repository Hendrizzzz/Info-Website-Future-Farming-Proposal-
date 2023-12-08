const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("navbar--hidden");
  } else {
    nav.classList.remove("navbar--hidden");
  }

  lastScrollY = window.scrollY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});

document.addEventListener('DOMContentLoaded', function () {
    initializeTyped();
    console.log("hi");
});

function initializeTyped() {
    var typed = new Typed(".typewriter", {
        strings: ["of Farming", "Greens with Greenhouses", "Grows in Greenhouses"],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 1900,
        loop: true
    });
}




// Event listener for the "about" button click
document.getElementById('aboutNav').addEventListener('click', handleAboutNavClick);

// Add event listener for window resize
window.addEventListener('resize', handleResize);

function handleAboutNavClick(event) {
  hideNavbarLinks();
  showContent();
  event.preventDefault();

  // Scroll to the top with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Initialize the sliders after making them visible
  initializeSlider('.slider.one');
  initializeSlider('.slider.two');
  initializeSlider('.slider.three');
  initializeSlider('.slider.four');
}

function hideNavbarLinks() {
  const navBarLinks = ['homeContent1', 'homeContent2', 'homeContent3', 'homeContent4', 'team', 'body2'];
  navBarLinks.forEach(linkId => {
    document.getElementById(linkId).style.display = 'none';
  });
}

function showContent() {
  const bodyElements = ['aboutContent1', 'aboutContent2', 'aboutContent3', 'aboutContent4'];
  bodyElements.forEach(elementId => {
    document.getElementById(elementId).style.display = 'block';
  });
}

function initializeSlider(sliderSelector) {
  var s = $(sliderSelector),
      sWrapper = s.find('.slider-wrapper'),
      sItem = s.find('.slide'),
      btn = s.find('.slider-link'),
      sCount = sItem.length;

  function setSliderWidth() {
    var sWidth = sItem.outerWidth(true),
        sTotalWidth = sCount * sWidth;

    sWrapper.css('width', sTotalWidth);
  }

  // Set initial slider width
  setSliderWidth();

  // Update slider width on window resize
  window.addEventListener('resize', setSliderWidth);

  var clickCount = 0;

  btn.on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('next')) {
      (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
    } else if ($(this).hasClass('prev')) {
      (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
    }

    TweenMax.to(sWrapper, 0.6, { x: '-' + (sItem.outerWidth(true) * clickCount) });
  });
}

// Function to handle window resize
function handleResize() {
  // Recalculate and update the sliders on window resize
  initializeSlider('.slider.one');
  initializeSlider('.slider.two');
  initializeSlider('.slider.three');
  initializeSlider('.slider.four');
}





// Event listener for the "titleButton" button click
document.getElementById('title-button').addEventListener('click', handleTitleButtonClick);
document.getElementById('homeNav').addEventListener('click', handleTitleButtonClick);

function handleTitleButtonClick(event) {
  hideNavbarLinks1();
  showContents1();
  event.preventDefault(); // Corrected this line


  // Scroll to the top with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function showContents1() {
  const navBarLinks = ['homeContent1', 'homeContent2', 'homeContent3', 'homeContent4', 'team'];
  navBarLinks.forEach(linkId => {
    document.getElementById(linkId).style.display = 'block';
  });
}

function hideNavbarLinks1() {
  const bodyElements = ['aboutContent1', 'aboutContent2', 'aboutContent3', 'aboutContent4', 'body2'];
  bodyElements.forEach(elementId => {
    document.getElementById(elementId).style.display = 'none';
  });
}



$(document).ready(function () {
  // Event listener for document clicks
  $(document).on('click', function (e) {
      // Check if the clicked element is not part of the navbar
      if (!$(e.target).closest('.navbar').length) {
          // Close the navbar by removing the 'show' class
          $('.navbar-collapse').removeClass('show');
      }
  });

  // Event listener for clicks on navbar toggler button
  $('.navbar-toggler').on('click', function (e) {
      // Prevent the document click event from triggering immediately
      e.stopPropagation();
  });

  // Event listener for clicks on navigation links
  $('.navbar-nav a').on('click', function () {
      // Close the navbar by removing the 'show' class
      $('.navbar-collapse').removeClass('show');
  });
});
//comment



// Event listener for the "MockUpButton" button click
document.getElementById('mock-upNav').addEventListener('click', handleMockUpButtonClick);

function handleMockUpButtonClick(event) {
  hideNavbarLinks2();
  showContents2();
  event.preventDefault(); 


  // Scroll to the top with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


function showContents2() {
  const navBarLinks = ['body2'];
  navBarLinks.forEach(linkId => {
    document.getElementById(linkId).style.display = 'block';
  });
}

function hideNavbarLinks2() {
  const bodyElements = [
                        'homeContent1', 'homeContent2', 'homeContent3', 
                        'homeContent4', 'team', 'aboutContent1', 
                        'aboutContent2', 'aboutContent3', 'aboutContent4'
                      ];
  bodyElements.forEach(elementId => {
    document.getElementById(elementId).style.display = 'none';
  });
}



document.addEventListener('DOMContentLoaded', function () {
  // Get all the nav links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove 'active' class from all nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked nav link
      this.classList.add('active');
    });
  });
});
