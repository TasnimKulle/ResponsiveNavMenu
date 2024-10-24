const toggleButton=document.querySelector('.toggle-button');
const navbar=document.querySelector('.nav-bar')
const navLinks = document.querySelectorAll('.navbar-link a');
toggleButton.addEventListener('click',function(){
    navbar.classList.toggle('active')
    console.log("clicked ......")
})

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});