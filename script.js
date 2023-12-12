const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const gitHub = document.getElementsByClassName('fa-github')[0];
const linkedIn = document.getElementsByClassName('fa-linkedin')[0];
const primaryBtn = document.getElementsByClassName('outline')[0];
const secondaryBtn = document.getElementsByClassName('secondary outline')[0];

// Dark or Light Images
const imageMode = (color) => {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Icon Change
const iconMode = (mode) => {
    toggleIcon.children[0].textContent = `${mode} Mode`;
    if (mode === 'Dark') {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    } else if (mode === 'Light') {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    }
}

// Dark Mode Styles
const darkMode = () => {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    iconMode('Dark');
    imageMode('dark');
}

// Light Mode Styles
const lightMode = () => {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    iconMode('Light');
    imageMode('light');
}

// Switch Theme Dynamically
const switchTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Select Project View
const selectProject = (event) => {
    if (event.target.classList[0] === 'outline') {
        primaryBtn.disabled = true;
        secondaryBtn.disabled = false;
    } else if (event.target.classList[0] === 'secondary') {
        primaryBtn.disabled = false;
        secondaryBtn.disabled = true;
    }
    if (primaryBtn.disabled === true) {
        
    }
}

// Open Social Media Links
const openGit = () => {
    window.open('', '_blank').focus();
}
const openLinkedIn = () => {
    window.open('', '_blank').focus();
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
gitHub.addEventListener('click', openGit);
linkedIn.addEventListener('click', openLinkedIn);
primaryBtn.addEventListener('click', selectProject);
secondaryBtn.addEventListener('click', selectProject);


// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}

