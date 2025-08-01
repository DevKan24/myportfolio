const scrollBtn = document.getElementById('scroll-btn');
const projectSection = document.getElementById('projects');
const themeSwitch = document.getElementById('theme-switch');
let savedTheme = localStorage.getItem('lightmode');

const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if (savedTheme === 'active') {
    enableLightmode()
}

themeSwitch.addEventListener('click', () => {
    savedTheme = localStorage.getItem('lightmode')
    if (savedTheme !== 'active') {
        enableLightmode()
    } else {
        disableLightmode()
    }
})

scrollBtn.addEventListener("click", function() {
    projectSection.scrollIntoView({ behavior: "smooth" });
});

