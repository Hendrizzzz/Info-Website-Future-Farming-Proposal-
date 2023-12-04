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

function handleAboutNavClick(event) {
  hideNavbarLinks();
  showContent();
  event.preventDefault();

  // Scroll to the top with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Initialize the slider after making it visible
  initializeSlider1();
  initializeSlider2();
  initializeSlider3();
  initializeSlider4();
}

function hideNavbarLinks() {
  const navBarLinks = ['homeContent1', 'homeContent2', 'homeContent3', 'homeContent4', 'team', 'body2'];
  navBarLinks.forEach(linkId => {
    document.getElementById(linkId).style.display = 'none';
  });
}

function showContent() {
  const bodyElements = ['homeNav','aboutContent1', 'aboutContent2', 'aboutContent3', 'aboutContent4'];
  bodyElements.forEach(elementId => {
    document.getElementById(elementId).style.display = 'block';
  });
}

function initializeSlider1() {
  var s = $('.slider.one'),
      sWrapper = s.find('.slider-wrapper.one'),
      sItem = s.find('.slide.one'),
      btn = s.find('.slider-link.one'),
      sWidth = sItem.outerWidth(true), // Use outerWidth to include margins
      sCount = sItem.length,
      sTotalWidth = sCount * sWidth;

  sWrapper.css('width', sTotalWidth);

  var clickCount = 0;

  btn.on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('next')) {
      (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
    } else if ($(this).hasClass('prev')) {
      (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
    }

    TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) });
  });
}

function initializeSlider2() {
    var s = $('.slider.two'),
        sWrapper = s.find('.slider-wrapper.two'),
        sItem = s.find('.slide.two'),
        btn = s.find('.slider-link.two'),
        sWidth = sItem.outerWidth(true), // Use outerWidth to include margins
        sCount = sItem.length,
        sTotalWidth = sCount * sWidth;
  
    sWrapper.css('width', sTotalWidth);
  
    var clickCount = 0;
  
    btn.on('click', function (e) {
      e.preventDefault();
  
      if ($(this).hasClass('next')) {
        (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
      } else if ($(this).hasClass('prev')) {
        (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
      }
  
      TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) });
    });
  }

  function initializeSlider3() {
    var s = $('.slider.three'),
        sWrapper = s.find('.slider-wrapper.three'),
        sItem = s.find('.slide.three'),
        btn = s.find('.slider-link.three'),
        sWidth = sItem.outerWidth(true), // Use outerWidth to include margins
        sCount = sItem.length,
        sTotalWidth = sCount * sWidth;
  
    sWrapper.css('width', sTotalWidth);
  
    var clickCount = 0;
  
    btn.on('click', function (e) {
      e.preventDefault();
  
      if ($(this).hasClass('next')) {
        (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
      } else if ($(this).hasClass('prev')) {
        (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
      }
  
      TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) });
    });
  }


  function initializeSlider4() {
    var s = $('.slider.four'),
        sWrapper = s.find('.slider-wrapper.four'),
        sItem = s.find('.slide.four'),
        btn = s.find('.slider-link.four'),
        sWidth = sItem.outerWidth(true), // Use outerWidth to include margins
        sCount = sItem.length,
        sTotalWidth = sCount * sWidth;
  
    sWrapper.css('width', sTotalWidth);
  
    var clickCount = 0;
  
    btn.on('click', function (e) {
      e.preventDefault();
  
      if ($(this).hasClass('next')) {
        (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
      } else if ($(this).hasClass('prev')) {
        (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
      }
  
      TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) });
    });
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
  const bodyElements = ['homeNav','aboutContent1', 'aboutContent2', 'aboutContent3', 'aboutContent4', 'body2'];
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



// Event listener for the "titleButton" button click
document.getElementById('mock-upNav').addEventListener('click', handleMockupButtonClick);

function handleMockupButtonClick(event) {
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