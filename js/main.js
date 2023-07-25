//for active button
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.href;
  
    const navLinks = document.querySelectorAll('.nav-btn');
  
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
  
      if (currentPage.includes(linkHref)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });



  
  