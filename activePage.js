document.addEventListener('DOMContentLoaded', function () {
  // Function to handle dropdown behavior
  function handleDropdown(link) {
    var siblingDropdown = link.nextElementSibling;
    if (siblingDropdown) {
      if (siblingDropdown.style.display === 'block') {
        siblingDropdown.style.display = 'none';
      } else {
        siblingDropdown.style.display = 'block';
      }

      // Close other dropdowns when selecting another
      var allDropdowns = document.querySelectorAll('.nav-dropdown');
      allDropdowns.forEach(function (dropdown) {
        if (dropdown !== siblingDropdown) {
          dropdown.style.display = 'none';
        }
      });
    }
  }

  // If a link has a dropdown, add sub-menu toggle.
  var navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      handleDropdown(this);
      e.stopPropagation();
    });
  });

  // Clicking away from dropdown will remove the dropdown class
  document.addEventListener('click', function () {
    var allDropdowns = document.querySelectorAll('.nav-dropdown');
    allDropdowns.forEach(function (dropdown) {
      dropdown.style.display = 'none';
    });
  });

const mainMenu = document.querySelector('.nav-list');
const openMenu = document.querySelector('.nav-mobile');
const closeMenu = document.querySelector('.mobile-close')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%'; 
}
});
  const swiper = new Swiper('.swiper', {
    autoplay: {
       delay: 3000,
       disableOnInteraction: false,
    },
    
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
