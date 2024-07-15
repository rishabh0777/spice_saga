let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const rootElement = document.documentElement;
const background = document.getElementById('background')
const orangeBtn = document.getElementById('orangebtn')
const slateBtn = document.getElementById('slatebtn')

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});



darkModeToggle.addEventListener('click', () => {
  if(rootElement.classList.contains('dark')){
    rootElement.classList.remove('dark')
    background.classList.add('lightMode')
    background.classList.remove('darkMode')
    darkModeToggle.classList.add('ri-moon-fill')
    darkModeToggle.classList.remove('ri-sun-fill')
  }
  else{
    rootElement.classList.add('dark')
    background.classList.remove('lightMode')
    background.classList.add('darkMode')
    darkModeToggle.classList.remove('ri-moon-fill')
    darkModeToggle.classList.add('ri-sun-fill')


  }
});




