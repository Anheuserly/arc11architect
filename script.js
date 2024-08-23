// Toggle Navigation Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Smooth Scroll to Section
  function scrollToSection(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Handle Contact Form Submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Here, you would typically send the form data to a server
    // For now, we'll just log it
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
    alert('Thank you for your message!');
  });
  
  // Scroll Effects
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 1.5;
    sections.forEach(section => {
      if (scrollPos > section.offsetTop) {
        section.classList.add('visible');
      }
    });
  });
  