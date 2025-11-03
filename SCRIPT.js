// Tab functionality for Skills, Experience, AND Education sections/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    // Removes active class from all tabs
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    // Adds active class to clicked tab
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu functionality
var sidemenu = document.getElementById("sidemenu");
var menuIcon = document.querySelector('.menu-icon');

function openmenu(){
    sidemenu.style.right = "0";
    sidemenu.classList.add('show');
}

function closemenu(){
    sidemenu.style.right = "-200px";
    sidemenu.classList.remove('show');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closemenu();
        }
    });
});
//  Close menu when clicking outside on mobile to adapt to different screen size i.e mobile, desktop etc
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 900) {
        const isClickInsideMenu = sidemenu.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnMenuIcon && sidemenu.classList.contains('show')) {
            closemenu();
        }
    }
});

// Form submission handler
document.querySelector('form[name="contact-form"]').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Functionality to Get form values
    const name = this.Name.value;
    const email = this.Email.value;
    const message = this.Message.value;
    
    //  An alert shows and the form is reset 
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Adds scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if(window.scrollY > 100) {
        header.style.opacity = '0.9';
    } else {
        header.style.opacity = '1';
    }
});