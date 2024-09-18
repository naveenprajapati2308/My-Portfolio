

let home_button  = document.querySelector('#homebtn');
home_button.addEventListener('click',()=>{
    console.log("clicked");
    home_button.innerHTML = `Please mail me at <a href='mailto:naveenprajapati1312001@gmail.com' style="text-decoration: none;">naveenprajapati1312001@gmail.com</a>`;
    // home_button.innerHTML = `<a href="mailto:naveenprajapati1312001@gmail.com">Click here to compose an email</a>`;

});
let hello = document.querySelector('#helloTag');
function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // console.log("colorchangercalled");
            hello.style.color = color;
            resolve('colorChanged');
        }, delay);
    });
}

async function colorBlinker(){
    await changeColor('red');
    await changeColor('orange');
    await changeColor('green');
    await changeColor('blue');
    await changeColor('yellow',1000);
    await changeColor('purple',1000);
    // await changeColor('rgb(39, 39, 39)',1000);

}

async function infinite(){
    while(true){
        await colorBlinker();
    }
}
infinite();



