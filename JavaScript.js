// Simple slideshow for header background with dedicated buttons for each image 1
const header = document.querySelector('header');
const images = [
     "./Images/pic/header.jpg",
     "./Images/pic/header02.jpg",
     "./Images/pic/header03.jpg",
     "./Images/pic/header04.jpg",
     "./Images/pic/header05.jpg",
     "./Images/pic/header01.jpg",
     "./Images/pic/header07.jpg",
     "./Images/pic/header08.jpg",
     "./Images/pic/header06.jpg"
];



let idx = 0; //2
header.style.transition = "background-image 1s ease-in-out, opacity 1s ease-in-out"; // Add transition effect
header.style.opacity = 0; // Start with opacity 0 for fade-in effect

setTimeout(() => {
     header.style.opacity = 1; // Fade in smoothly on entry
}, 100); // Small delay to ensure the transition is applied


//3 
const changeImage = (direction = 1) => {
     idx = (idx + direction + images.length) % images.length;
     header.style.opacity = 0; // Fade out before changing the image
     setTimeout(() => {
          header.style.backgroundImage =
               `linear-gradient(to bottom, rgba(245, 246, 252, 0), #121212), url('${images[idx]}')`;
          header.style.opacity = 1; // Fade in after changing the image
     }, 1000); // Match the fade-out duration
};

//4
setInterval(() => changeImage(1), 6000); // Change image every 6 seconds

// Change image when user clicks on img tag inside .button11  //5
document.querySelectorAll('.button11 img').forEach(img => {
     img.addEventListener('click', () => {
          changeImage(1);
     });
}); //6
     document.querySelectorAll('.arrow').forEach(arrow => {
         arrow.addEventListener('click', function () {
             const container = document.querySelector('.container22');
             const scrollAmount = container.offsetWidth;
             if (this.classList.contains('left-arrow')) {
                 container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
             } else if (this.classList.contains('right-arrow')) {
                 container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
             }
         });
     });

     // Make .header-menu fixed when user scrolls up
     let lastScrollTop = 0;
     const headerMenu = document.querySelector('.header-menu');

     window.addEventListener('scroll', () => {
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          if (currentScroll < lastScrollTop) {
               // Scrolling up
               headerMenu.style.position = 'fixed';
               headerMenu.style.top = '0';
               headerMenu.style.width = '100%';
               headerMenu.style.zIndex = '1000';
               headerMenu.style.backgroundColor = 'rgb(18, 18, 18)'; // Change background color
          } else {
               // Scrolling down
               headerMenu.style.position = 'static';
               headerMenu.style.backgroundColor = ''; // Reset background color
          }
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
     });

     window.addEventListener('scroll', () => {
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          if (currentScroll === 0) {
               // At the top of the page
               headerMenu.style.transition = 'background-color 0.3s ease'; // Add transition for smooth color change
               headerMenu.style.backgroundColor = 'transparent'; // Reset background color to transparent
          }
     });

window.addEventListener('beforeunload', () => {
     window.scrollTo(0, 0);
});