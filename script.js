//====================================Scroll section active link=================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-superscript');
    navbar.classList.toggle('active');

};

    //====================================Scroll section active link=================================
let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    //====================================Sticky navbar=================================
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    //==================================== remove toogle icon and navbar when click navbar link(scroll)=================================
        menuIcon.classList.remove('ri-superscript');
        navbar.classList.remove('active');
          
};
    //====================================Scroll reavel=================================
    ScrollReveal({ 
        //reset: true,
        distance: '80px',
        duration: 2000,
        Delay: 200 
    });
    ScrollReveal().reveal('.home-details, .heading' ,{ origin:'top' });
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form' ,{ origin:'bottom' });
    ScrollReveal().reveal('.home-details h1, .about-img' ,{ origin:'left' });
    ScrollReveal().reveal('.home-details p, .about-content' ,{ origin:'rigth' });

    //padding:15px 30px; for btn
    //====================================Cerficate x button script=================================
   // Get the modal element
const modal1 = document.getElementById('certificate-modal(1)');
const modal2 = document.getElementById('certificate-modal(2)');
const modal3 = document.getElementById('certificate-modal(3)');
const modal4 = document.getElementById('certificate-modal(4)');


// Function to show the modal
function showCertificate1() {
    modal1.style.display = 'flex'; // Use flex to center content
}
function showCertificate2() {
    modal2.style.display = 'flex'; // Use flex to center content
}
function showCertificate3() {
    modal3.style.display = 'flex'; // Use flex to center content
}
function showCertificate4() {
    modal4.style.display = 'flex'; // Use flex to center content
}

// Function to hide the modal
function hideCertificate1() {
    modal1.style.display = 'none';
}
function hideCertificate2() {
    modal2.style.display = 'none';
}
function hideCertificate3() {
    modal3.style.display = 'none';
}
function hideCertificate4() {
    modal4.style.display = 'none';
}