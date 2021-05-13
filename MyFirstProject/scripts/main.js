let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myIMG = document.querySelector("img");

myIMG.onclick = function () {
    let mySrc = myIMG.getAttribute("src");
    if (mySrc === "images/me.png") {
        myIMG.setAttribute("src", "images/you.png");
    } else {
        myIMG.setAttribute("src", "images/me.png");
    }
}

let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}