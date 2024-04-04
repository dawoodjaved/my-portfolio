/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== Download Resume Button =====*/

// Select the button element by its id
const downloadBtn = document.getElementById('download_resume_button');

// Add event listener to the button for click event
downloadBtn.addEventListener('click', () => {
    // Path to your local PDF file (replace 'path/to/your/pdf/file.pdf' with the actual path)
    const pdfPath = './resume.pdf';

    // Function to trigger the download
    downloadPDF(pdfPath);
});

// Function to download the PDF file
function downloadPDF(path) {
    // Create a new anchor element (invisible)
    const link = document.createElement('a');
    link.style.display = 'none';

    // Set the href attribute to the path of the PDF file
    link.href = path;

    // Set the download attribute with the desired filename (e.g., 'myfile.pdf')
    link.download = 'Dawood-Resume.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger the click event on the anchor element
    link.click();

    // Clean up: remove the anchor element from the DOM
    document.body.removeChild(link);
}