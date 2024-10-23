const toggleButton=document.querySelector('.toggle-button');
const navbar=document.querySelector('.nav-bar')
toggleButton.addEventListener('click',function(){
    navbar.classList.toggle('active')
    console.log("clicked ......")
})

  