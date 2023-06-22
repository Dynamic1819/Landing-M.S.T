function openMenu(menus) {
    let menusItems = ['.ddops', '.ddops2', '.ddops3'];
    menusItems = menusItems.filter(item => item !== menus)
    menusItems.forEach((item) => {
        const menuItem = document.querySelector(item);
        if (!menuItem.classList.contains('hidden')) {
            menuItem.classList.add('hidden');
        }
    });

    const menu = document.querySelector(menus);

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// Click To The Top
let TopButton = document.getElementById("ToTop");
window.onscroll = function () { scrolls() };

function scrolls() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        TopButton.style.display = "block";
    }
    else {
        TopButton.style.display = "none";
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// sidemenu
const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');
const cross = document.querySelector('#cross');

function showMenu() {
    if (menu.classList.contains('translate-x-52')) {
        menu.classList.remove('translate-x-52');
        menu.classList.add('right-0');
        burger.classList.add('hidden');
        cross.classList.remove('hidden');
    }
    else {
        menu.classList.add('translate-x-52');
        menu.classList.remove('right-0');
        burger.classList.remove('hidden');
        cross.classList.add('hidden');
    }
}


// counting
const displayNum = document.querySelectorAll('.nums');
displayNum.forEach(nums => {
    const updateCounter = () => {
        const target = nums.getAttribute('data-target');
        const c = +nums.innerText;

        const incresing = target / 9000;

        if (c < target) {
            nums.innerText = `${Math.ceil(c + incresing)}`;
            setTimeout(updateCounter, 1);
        }
        else {
            nums.innerText = target;
        }
    };
    updateCounter();
});

//loading
document.addEventListener("DOMContentLoaded", function() {
    // Show the loading animation
    document.getElementById("loading-animation").style.display = "block";
  });
  
  window.addEventListener("load", function() {
    // Get the loading animation element
    var loadingAnimation = document.getElementById("loading-animation");
  
    // Set the initial opacity to 1 (fully opaque)
    loadingAnimation.style.opacity = 1;
  
    // Create a function to gradually decrease the opacity
    var fadeOutAnimation = function() {
      // Get the current opacity value
      var currentOpacity = Number(loadingAnimation.style.opacity);
  
      // Decrease the opacity by a small amount
      var newOpacity = currentOpacity - 0.1;
  
      // Set the new opacity value
      loadingAnimation.style.opacity = newOpacity;
  
      // If the animation is not yet complete, schedule the next frame
      if (newOpacity > 0) {
        requestAnimationFrame(fadeOutAnimation);
      } else {
        // Hide the loading animation when it becomes transparent
        loadingAnimation.style.display = "none";
      }
    };
  
    // Start the fade-out animation after a delay of 2 seconds (2000 milliseconds)
    setTimeout(fadeOutAnimation, 1500);
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Set the initial opacity of the content to 0
    document.getElementById("content").style.opacity = 0;
  });

  window.addEventListener("load", function() {
    // Get the content element
    var content = document.getElementById("content");

    // Create a function to gradually increase the opacity
    var fadeInAnimation = function() {
      // Get the current opacity value
      var currentOpacity = Number(content.style.opacity);

      // Increase the opacity by a small amount
      var newOpacity = currentOpacity + 0.01;

      // Set the new opacity value
      content.style.opacity = newOpacity;

      // If the animation is not yet complete, schedule the next frame
      if (newOpacity < 1) {
        requestAnimationFrame(fadeInAnimation);
      }
    };

    // Start the fade-in animation
    fadeInAnimation();
  });
  
  
