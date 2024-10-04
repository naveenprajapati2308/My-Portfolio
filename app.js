// Handling Home Button Click
let home_button = document.querySelector('#homebtn');
home_button.addEventListener('click', () => {
    console.log("clicked");
    home_button.innerHTML = `Please mail me at <a href='mailto:naveenprajapati1312001@gmail.com' style="text-decoration: none;">naveenprajapati1312001@gmail.com</a>`;
});

// Blinking "Hello" Tag
let hello = document.querySelector('#helloTag');

function changeColor(color, delay = 400) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hello.style.color = color;
            resolve('colorChanged');
        }, delay);
    });
}

async function colorBlinker() {
    await changeColor('white');
    await changeColor('orange');
    await changeColor('aqua');
    await changeColor('green');
    await changeColor('blue');
    await changeColor('aqua');
    await changeColor('purple', 1000);
    await changeColor('aqua');
}

async function infinite() {
    while (true) {
        await colorBlinker();
    }
}
infinite();

// Typing Effect for Skills Section
var typed = new Typed(".text-three", {
    strings: ["Full-stack developer", "Software Engineer", "Emerging coder"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    fadeOut: true, /* Ensures smooth fade out when typing ends */
    showCursor: true
  });

// Handling Navbar Hamburger Button Toggle (if needed)
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
    menuBtn.style.display = 'none';  // Hide the menu button
    cancelBtn.style.display = 'block'; // Show the cancel button
});

cancelBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.style.display = 'block';  // Show the menu button
    cancelBtn.style.display = 'none'; // Hide the cancel button
});
