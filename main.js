// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.product-card, .benefit-card, .value-item');
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// Hero buttons functionality
document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.querySelector('.hero-buttons .btn-primary');
  const learnBtn = document.querySelector('.hero-buttons .btn-secondary');
  
  exploreBtn.addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
  
  learnBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
});

// Newsletter signup
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('.email-input');
  const signupBtn = document.querySelector('.contact-form .btn-primary');
  
  signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
      // Simulate signup process
      signupBtn.textContent = 'Thank You!';
      signupBtn.style.background = '#4A7C23';
      emailInput.value = '';
      
      setTimeout(() => {
        signupBtn.textContent = 'Get Updates';
        signupBtn.style.background = '';
      }, 3000);
    } else {
      emailInput.style.border = '2px solid #FF6B35';
      setTimeout(() => {
        emailInput.style.border = '';
      }, 2000);
    }
  });
  
  // Enter key support for email signup
  emailInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      signupBtn.click();
    }
  });
});

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Product card hover effects
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const bottle = card.querySelector('.product-bottle');
      bottle.style.transform = 'scale(1.05) rotateY(15deg)';
      bottle.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      const bottle = card.querySelector('.product-bottle');
      bottle.style.transform = 'scale(1) rotateY(0deg)';
    });
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Dynamic counter for social proof
document.addEventListener('DOMContentLoaded', () => {
  const socialProofText = document.querySelector('.social-proof strong');
  if (socialProofText) {
    let count = 0;
    const target = 1000;
    const increment = target / 100;
    
    const updateCounter = () => {
      count += increment;
      if (count < target) {
        socialProofText.textContent = Math.floor(count) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        socialProofText.textContent = target + '+';
      }
    };
    
    // Start counter when element is visible
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          counterObserver.disconnect();
        }
      });
    });
    
    counterObserver.observe(socialProofText);
  }
});

// Loading state for buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Add loading state visual feedback
      const originalText = this.textContent;
      this.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
});