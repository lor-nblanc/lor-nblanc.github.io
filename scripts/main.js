let myImage = document.querySelector('img');

myImage.onclick = function() {
    
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox-icon1.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name, NOW!');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        setTitle(myName);
    }
    localStorage.setItem('name', myName);
    setTitle(myName);
}

myButton.onclick = function() {
    setUserName();
}

function setTitle(name) {
    myHeading.textContent = `Mozilla is cool unlike ${name}`;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    setTitle(storedName);
  }