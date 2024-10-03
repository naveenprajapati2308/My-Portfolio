// Handling Home Button Click
let home_button = document.querySelector('#homebtn');
home_button.addEventListener('click', () => {
    console.log("clicked");
    home_button.innerHTML = `Please mail me at <a href='mailto:naveenprajapati1312001@gmail.com' style="text-decoration: none;">naveenprajapati1312001@gmail.com</a>`;
});

// Blinking "Hello" Tag
let hello = document.querySelector('#helloTag');

function changeColor(color, delay = 1000) {
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

// Circular Progress Bar Handling for Skills
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        let percentage = circle.getAttribute("data-percent");
        let progress = (percentage / 100) * 360; // Converts percentage to degrees
        circle.style.setProperty("--progress", `${progress}deg`); // Updates the --progress variable for conic-gradient
    });
});
var typed = new Typed(".text-three",  {
    strings: [
        "Software Developer",
        "Full-stack developer",
        "Emerging coder"
    ],
    typeSpeed: 110,
    backSpeed: 110,
    backDelay: 990,
    loop: true
})
