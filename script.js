document.querySelector('a[href="#contact_us"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contact_us').scrollIntoView({ behavior: 'smooth' });
});


function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const hamburger = document.querySelector('.hamburger');


  sidebar.classList.toggle('active');
  
  hamburger.classList.toggle('active');
}



// ----------------- OUR STORY -------------------



  function adjustImageSize() {
    const screenWidth = window.innerWidth; 
    const bannerImg = document.querySelector(".banner_img img");

    if (screenWidth <= 576) { 
      const width70Percent = screenWidth * 0.7; 
      bannerImg.style.width = width70Percent + "px"; 
      bannerImg.style.height = "auto"; 
    } else {
      bannerImg.style.width = ""; 
    }
  }

  
  window.addEventListener("load", adjustImageSize);
  window.addEventListener("resize", adjustImageSize);



document.addEventListener("DOMContentLoaded", function () {
  const ourStorySection = document.querySelector(".our_story");
  const storyImg = ourStorySection.querySelector(".story_img");
  const storyText = ourStorySection.querySelector(".story_text");
  const mission = ourStorySection.querySelector(".mission");
  const vission = ourStorySection.querySelector(".vission");
  const since = ourStorySection.querySelector(".since");


  const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && ourStorySection.dataset.animated === "false") {
              storyImg.classList.add("animated");
              storyText.classList.add("animated");

              mission.style.transform = "translateX(0)";
              vission.style.transform = "translateX(0)";

              setTimeout(() => {
                  mission.classList.add("animated");
                  vission.classList.add("animated");
              }, 400);

              setTimeout(() => {
                  since.classList.add("animated");
              }, 800);

              ourStorySection.dataset.animated = "true";

             
              observer.unobserve(ourStorySection);
          }
      });
  };


  const observer = new IntersectionObserver(animateOnScroll, {
      root: null, 
      threshold: 0.5 
  });


  observer.observe(ourStorySection);
});


// ----------------- OUR IMPACT -------------------


document.addEventListener('DOMContentLoaded', () => {

  function triggerImpactAnimation() {
    const impactLine = document.querySelector(".impact_line");
    const group1 = document.querySelector(".impact_gruop1");
    const group2 = document.querySelector(".impact_gruop2");
    const group3 = document.querySelector(".impact_gruop3");

    impactLine.style.height = "0";
    group1.style.opacity = "0";
    group2.style.opacity = "0";
    group3.style.opacity = "0";


    setTimeout(() => {
      impactLine.style.height = "33.33%";
      group1.style.opacity = "1";
    }, 500);

    setTimeout(() => {
      impactLine.style.height = "67%";
      group2.style.opacity = "1";
    }, 1500);

    setTimeout(() => {
      impactLine.style.height = "100%";
      group3.style.opacity = "1";
    }, 2500);
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerImpactAnimation();
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.5 
  });

  const ourImpactsSection = document.querySelector(".our_impacts");
  if (ourImpactsSection) {
    observer.observe(ourImpactsSection);
  }
});

  
  // ----------------- NUMBER COUNTER -------------------


  document.addEventListener("DOMContentLoaded", () => {
  
    const numSpeaksContainer = document.querySelector(".num_speaks");

    function startCounterAnimation() {
      const counters = [
        { id: "members", target: 1000 },  
        { id: "fund", target: 300000 },  
        { id: "women", target: 9000 },   
        { id: "food", target: 50000 }    
      ];
  
      counters.forEach(counter => {
        const element = document.getElementById(counter.id);
  
        element.classList.add("active");
  
        let currentValue = 0;
        const increment = Math.ceil(counter.target / 100); 
        const duration = 1000; 
        const interval = duration / (counter.target / increment);
  
        const counterInterval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= counter.target) {
            currentValue = counter.target; 
            clearInterval(counterInterval);
          }
          element.textContent = formatNumber(currentValue); 
        }, interval);
      });
    }
  
    function formatNumber(value) {
      if (value >= 1000) {
        return Math.floor(value / 1000) + "k+";
      }
      return value;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
       
          startCounterAnimation();
  
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.5 
    });
  
    if (numSpeaksContainer) {
      observer.observe(numSpeaksContainer);
    }
  });
  
  
// ----------------- EVENTS -------------------
function applyResponsiveStyles() {

  if (window.matchMedia('(min-width: 300px) and (max-width: 768px)').matches) {
    return; 
  }

  const images = document.querySelectorAll('.event img');
  const event3Img = document.querySelector('.event3 img');


  const uniformWidth = `calc(100vw / 3 - 10px)`; 

  images.forEach((img) => {
    img.style.objectFit = 'cover';
    img.style.width = uniformWidth; 
  });

  if (window.matchMedia('(min-width: 1200px) and (max-width: 1336px)').matches) {
    images.forEach((img) => img.style.height = '200px');
    if (event3Img) event3Img.style.height = '420px';
  } else if (window.matchMedia('(min-width: 1337px) and (max-width: 1600px)').matches) {
    images.forEach((img) => img.style.height = '230px');
    if (event3Img) event3Img.style.height = '480px';
  } else if (window.matchMedia('(min-width: 1601px) and (max-width: 1920px)').matches) {
    images.forEach((img) => img.style.height = '300px');
    if (event3Img) event3Img.style.height = '620px';
  }
  else if (window.matchMedia('(min-width: 993px) and (max-width: 1199px)').matches) {
    images.forEach((img) => img.style.height = '210px');
    if (event3Img) event3Img.style.height = '440px';
  }
}

applyResponsiveStyles();


window.addEventListener('resize', applyResponsiveStyles);

const event1 = document.querySelector('.event.event1');
const event2 = document.querySelector('.event.event2');
const event3 = document.querySelector('.event.event3');
const event4 = document.querySelector('.event.event4');
const event5 = document.querySelector('.event.event5');

const event1Text = event1.querySelector('p');
const event2Text = event2.querySelector('p');
const event4Text = event4.querySelector('p');
const event5Text = event5.querySelector('p');



function applyEventListeners() {

  if (window.matchMedia('(min-width: 300px) and (max-width: 768px)').matches) {
    return; 
  }
  
  if (window.matchMedia('(min-width: 1601px) and (max-width: 1920px)').matches) {
    event1.addEventListener('mouseenter', () => {
      const event1Img = event1.querySelector('img');
      event1Img.style.height = '501px';
      img.style.maxWidth = '100%';

      const event2Img = event2.querySelector('img');
      event2Img.style.height = '100px';
      img.style.maxWidth = '100%';

      event2Text.style.opacity = '0';
    });

    event2.addEventListener('mouseenter', () => {
      const event2Img = event2.querySelector('img');
      event2Img.style.height = '501px';
      img.style.maxWidth = '100%';

      const event1Img = event1.querySelector('img');
      event1Img.style.height = '100px';
      img.style.maxWidth = '100%';

      event1Text.style.opacity = '0';
    });

    event4.addEventListener('mouseenter', () => {
      const event4Img = event4.querySelector('img');
      event4Img.style.height = '501px';
      img.style.maxWidth = '100%';

      const event5Img = event5.querySelector('img');
      event5Img.style.height = '100px';
      img.style.maxWidth = '100%';

      event5Text.style.opacity = '0';
    });

    event5.addEventListener('mouseenter', () => {
      const event5Img = event5.querySelector('img');
      event5Img.style.height = '501px';
      img.style.maxWidth = '100%';

      const event4Img = event4.querySelector('img');
      event4Img.style.height = '100px';

      event4Text.style.opacity = '0';
    });

    event1.addEventListener('mouseleave', () => {
      const event1Img = event1.querySelector('img');
      const event2Img = event2.querySelector('img');

      event1Img.style.height = '300px';
      event2Img.style.height = '300px';

      event2Text.style.opacity = '1';
    });

    event2.addEventListener('mouseleave', () => {
      const event2Img = event2.querySelector('img');
      const event1Img = event1.querySelector('img');

      event2Img.style.height = '300px';
      event1Img.style.height = '300px';

      event1Text.style.opacity = '1';
    });

    event4.addEventListener('mouseleave', () => {
      const event4Img = event4.querySelector('img');
      const event5Img = event5.querySelector('img');

      event4Img.style.height = '300px';
      event5Img.style.height = '300px';

      event5Text.style.opacity = '1';
    });

    event5.addEventListener('mouseleave', () => {
      const event5Img = event5.querySelector('img');
      const event4Img = event4.querySelector('img');

      event5Img.style.height = '300px';
      event4Img.style.height = '300px';

      event4Text.style.opacity = '1';
    });

  } else if (window.matchMedia('(min-width: 1337px) and (max-width: 1600px)').matches) {
    event1.addEventListener('mouseenter', () => {
      const event1Img = event1.querySelector('img');
      event1Img.style.height = '366px';

      const event2Img = event2.querySelector('img');
      event2Img.style.height = '95px';

      event2Text.style.opacity = '0';
    });

    event2.addEventListener('mouseenter', () => {
      const event2Img = event2.querySelector('img');
      event2Img.style.height = '366px';

      const event1Img = event1.querySelector('img');
      event1Img.style.height = '95px';

      event1Text.style.opacity = '0';
    });

    event4.addEventListener('mouseenter', () => {
      const event4Img = event4.querySelector('img');
      event4Img.style.height = '366px';

      const event5Img = event5.querySelector('img');
      event5Img.style.height = '95px';

      event5Text.style.opacity = '0';
    });

    event5.addEventListener('mouseenter', () => {
      const event5Img = event5.querySelector('img');
      event5Img.style.height = '366px';

      const event4Img = event4.querySelector('img');
      event4Img.style.height = '95px';

      event4Text.style.opacity = '0';
    });

    event1.addEventListener('mouseleave', () => {
      const event1Img = event1.querySelector('img');
      const event2Img = event2.querySelector('img');

      event1Img.style.height = '230px';
      event2Img.style.height = '230px';

      event2Text.style.opacity = '1';
    });

    event2.addEventListener('mouseleave', () => {
      const event2Img = event2.querySelector('img');
      const event1Img = event1.querySelector('img');

      event2Img.style.height = '230px';
      event1Img.style.height = '230px';

      event1Text.style.opacity = '1';
    });

    event4.addEventListener('mouseleave', () => {
      const event4Img = event4.querySelector('img');
      const event5Img = event5.querySelector('img');

      event4Img.style.height = '230px';
      event5Img.style.height = '230px';

      event5Text.style.opacity = '1';
    });

    event5.addEventListener('mouseleave', () => {
      const event5Img = event5.querySelector('img');
      const event4Img = event4.querySelector('img');

      event5Img.style.height = '230px';
      event4Img.style.height = '230px';

      event4Text.style.opacity = '1';
    });

  } else if (window.matchMedia('(min-width: 1200px) and (max-width: 1336px)').matches) {
    // For screens between 1200px and 1336px
    event1.addEventListener('mouseenter', () => {
      const event1Img = event1.querySelector('img');
      event1Img.style.height = '330px';

      const event2Img = event2.querySelector('img');
      event2Img.style.height = '71px';

      event2Text.style.opacity = '0';
    });

    event2.addEventListener('mouseenter', () => {
      const event2Img = event2.querySelector('img');
      event2Img.style.height = '330px';

      const event1Img = event1.querySelector('img');
      event1Img.style.height = '71px';

      event1Text.style.opacity = '0';
    });

    event4.addEventListener('mouseenter', () => {
      const event4Img = event4.querySelector('img');
      event4Img.style.height = '330px';

      const event5Img = event5.querySelector('img');
      event5Img.style.height = '71px';

      event5Text.style.opacity = '0';
    });

    event5.addEventListener('mouseenter', () => {
      const event5Img = event5.querySelector('img');
      event5Img.style.height = '330px';

      const event4Img = event4.querySelector('img');
      event4Img.style.height = '71px';

      event4Text.style.opacity = '0';
    });

    event1.addEventListener('mouseleave', () => {
      const event1Img = event1.querySelector('img');
      const event2Img = event2.querySelector('img');

      event1Img.style.height = '200px';
      event2Img.style.height = '200px';

      event2Text.style.opacity = '1';
    });

    event2.addEventListener('mouseleave', () => {
      const event2Img = event2.querySelector('img');
      const event1Img = event1.querySelector('img');

      event2Img.style.height = '200px';
      event1Img.style.height = '200px';

      event1Text.style.opacity = '1';
    });

    event4.addEventListener('mouseleave', () => {
      const event4Img = event4.querySelector('img');
      const event5Img = event5.querySelector('img');

      event4Img.style.height = '200px';
      event5Img.style.height = '200px';

      event5Text.style.opacity = '1';
    });

    event5.addEventListener('mouseleave', () => {
      const event5Img = event5.querySelector('img');
      const event4Img = event4.querySelector('img');

      event5Img.style.height = '200px';
      event4Img.style.height = '200px';

      event4Text.style.opacity = '1';
    });
  } else if (window.matchMedia('(min-width: 993px) and (max-width: 1199px)').matches) {
    event1.addEventListener('mouseenter', () => {
      const event1Img = event1.querySelector('img');
      event1Img.style.height = '360px';

      const event2Img = event2.querySelector('img');
      event2Img.style.height = '60px';

      event2Text.style.opacity = '0';
    });

    event2.addEventListener('mouseenter', () => {
      const event2Img = event2.querySelector('img');
      event2Img.style.height = '360px';

      const event1Img = event1.querySelector('img');
      event1Img.style.height = '60px';

      event1Text.style.opacity = '0';
    });

    event4.addEventListener('mouseenter', () => {
      const event4Img = event4.querySelector('img');
      event4Img.style.height = '360px';

      const event5Img = event5.querySelector('img');
      event5Img.style.height = '60px';

      event5Text.style.opacity = '0';
    });

    event5.addEventListener('mouseenter', () => {
      const event5Img = event5.querySelector('img');
      event5Img.style.height = '360px';

      const event4Img = event4.querySelector('img');
      event4Img.style.height = '60px';

      event4Text.style.opacity = '0';
    });

    event1.addEventListener('mouseleave', () => {
      const event1Img = event1.querySelector('img');
      const event2Img = event2.querySelector('img');

      event1Img.style.height = '210px';
      event2Img.style.height = '210px';

      event2Text.style.opacity = '1';
    });

    event2.addEventListener('mouseleave', () => {
      const event2Img = event2.querySelector('img');
      const event1Img = event1.querySelector('img');

      event2Img.style.height = '210px';
      event1Img.style.height = '210px';

      event1Text.style.opacity = '1';
    });

    event4.addEventListener('mouseleave', () => {
      const event4Img = event4.querySelector('img');
      const event5Img = event5.querySelector('img');

      event4Img.style.height = '210px';
      event5Img.style.height = '210px';

      event5Text.style.opacity = '1';
    });

    event5.addEventListener('mouseleave', () => {
      const event5Img = event5.querySelector('img');
      const event4Img = event4.querySelector('img');

      event5Img.style.height = '210px';
      event4Img.style.height = '210px';

      event4Text.style.opacity = '1';
    });
  }
}

applyEventListeners();
window.addEventListener('resize', applyEventListeners);



event3.addEventListener('mouseenter', () => {
  const event3Img = event3.querySelector('img');
  event3Img.style.transition = 'transform 0.3s ease';  
  event3Img.style.transform = 'scale(1.2)'; 
});


event3.addEventListener('mouseleave', () => {
  const event3Img = event3.querySelector('img');
  event3Img.style.transition = 'transform 0.3s ease';  
  event3Img.style.transform = 'scale(1)';  
});



// ----------------- GALLERY -------------------

const gallery = document.querySelector('.gallery_img');
const images = Array.from(gallery.children);

images.forEach(image => {
  const clone = image.cloneNode(true);
  gallery.appendChild(clone);
});

let scrollAmount = 0;
let scrollSpeed = 1;
let isPaused = false;

const scrollLimit = gallery.scrollWidth / 2;

const startScrolling = () => {
  setInterval(() => {
    if (!isPaused) {
      scrollAmount += scrollSpeed;
      gallery.scrollLeft = scrollAmount;

      if (scrollAmount >= scrollLimit) {
        scrollAmount = 0;
      }
    }
  }, 10);
};

gallery.addEventListener('mousedown', () => {
  isPaused = true;
});

gallery.addEventListener('touchstart', () => {
  isPaused = true;
});

gallery.addEventListener('mouseup', () => {
  isPaused = false;
});

gallery.addEventListener('touchend', () => {
  isPaused = false;
});

startScrolling();



