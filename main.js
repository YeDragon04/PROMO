const getStarted2 = document.getElementById("getStarted2");
const websiteDescription2 = document.getElementById("websiteDescription2");
const aligner2 = document.getElementById("aligner2");
const footer = document.getElementById('footer');
const numberList = document.getElementById("winningNumbers");
const winnerList = document.getElementById("winners");
const description = document.getElementById("description");
const carouselSize = document.getElementById("carousel");
const carouselBackground = document.getElementById("carouselBackground");
const menu = document.getElementById("menu");
const tagLine = document.getElementById("tagLine");
const how = document.getElementById("how")
const graphicDesign = document.getElementById("graphicDesign")
const getStarted1 = document.getElementById("getStarted1");
const websiteDescription1= document.getElementById("websiteDescription1");
const aligner1 = document.getElementById("aligner1");


const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");

const fontTimer = setInterval(sizeResponsive, 10);
let fontSize;

function sizeResponsive() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  /*allSections*/
  console.log(width);
  fontSize = width / 9;
  fontSize = fontSize * 16;
  fontSize = fontSize / 16;
  fontSize = fontSize * 1.25;
  section1.style.height = fontSize + "rem";
  section2.style.height = fontSize + "rem";
  section3.style.height = fontSize + "rem";
  section4.style.height = fontSize + "rem";
  /*section1*/
  fontSize = width * .05;
  fontSize = fontSize / 16;
  tagLine.style.fontSize = fontSize + "rem";
  /*header*/
  fontSize = width * .02;
  fontSize = fontSize / 16;
  menu.style.fontSize = fontSize + "rem";
  fontSize = width * .05;
  fontSize = fontSize / 16;
  menu.style.height = fontSize + "rem";
  /*tagline*/
  fontSize = width * .04;
  fontSize = fontSize / 16;
  tagLine.style.fontSize = fontSize + "rem";
  /*carousel*/
  fontSize = width * .87;
  fontSize = fontSize / 16;
  carouselSize.style.width = fontSize + "rem";
  carouselBackground.style.height = carouselSize.clientHeight / 16 + "rem";
  /*introduction*/
  /*websiteDescription*/
  fontSize = width * .03;
  fontSize = fontSize / 16;
  websiteDescription1.style.fontSize = fontSize + "rem";
  /*getStarted*/
  fontSize = width * .25;
  fontSize = fontSize / 16;
  getStarted1.style.width = fontSize + "rem";
  fontSize = width * .03;
  fontSize = fontSize / 16;
  getStarted1.style.fontSize = fontSize + "rem";
  fontSize = width * .0375;
  fontSize = fontSize / 16;
  getStarted1.style.borderRadius = fontSize + "rem";
  /*aligner*/
  fontSize = width * .04;
  fontSize = fontSize / 16;
  aligner1.style.fontSize = fontSize + "rem";
  /*section2*/
  /*how*/
  fontSize = width * .075;
  fontSize = fontSize / 16;
  how.style.fontSize = fontSize + "rem";
  /*graphicDesign*/
  fontSize = width * .075;
  fontSize = fontSize / 16;
  graphicDesign.style.fontSize = fontSize + "rem";
  fontSize = width * .7;
  fontSize = fontSize / 16;
  graphicDesign.style.width = fontSize + "rem";
  /*section3*/
  /*description*/
  fontSize = width * .03;
  fontSize = fontSize / 16;
  description.style.fontSize = fontSize + "rem";
  /*numberList*/
  fontSize = width * .04;
  fontSize = fontSize / 16;
  numberList.style.fontSize = fontSize + "rem";
  /*winnerList*/
  fontSize = width * .04;
  fontSize = fontSize / 16;
  winnerList.style.fontSize = fontSize + "rem";
  /*section4*/
  /*conclusion*/
  /*websiteDescription*/
  fontSize = width * .03;
  fontSize = fontSize / 16;
  websiteDescription2.style.fontSize = fontSize + "rem";
  /*getStarted*/
  fontSize = width * .25;
  fontSize = fontSize / 16;
  getStarted2.style.width = fontSize + "rem";
  fontSize = width * .03;
  fontSize = fontSize / 16;
  getStarted2.style.fontSize = fontSize + "rem";
  fontSize = width * .0375;
  fontSize = fontSize / 16;
  getStarted2.style.borderRadius = fontSize + "rem";
  /*aligner*/
  fontSize = width * .04;
  fontSize = fontSize / 16;
  aligner2.style.fontSize = fontSize + "rem";
  /*footer*/
  fontSize = width * .02;
  fontSize = fontSize / 16;
  footer.style.fontSize = fontSize + "rem";
}

/*The reason the carousel is moving*/
const timer = setInterval(carousel, 2000);
let phase = 1

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");

function carousel() {
  if (phase == 1) {
    box1.style.width = "20%";
    box1.style.left = "12.5%";
    box1.style.top = "23%";
    box1.style.borderRadius = "20%";
    box1.style.zIndex = "3";
    box2.style.width = "25%";
    box2.style.left = "22.5%";
    box2.style.top = "16.5%";
    box2.style.borderRadius = "15%";
    box2.style.zIndex = "4";
    box3.style.width = "30%";
    box3.style.left = "35%";
    box3.style.top = "10%";
    box3.style.borderRadius = "10%";
    box3.style.zIndex = "5";
    box4.style.width = "25%";
    box4.style.left = "52.5%";
    box4.style.top = "16.5%";
    box4.style.borderRadius = "15%";
    box4.style.zIndex = "4";
    box5.style.width = "20%";
    box5.style.left = "67.5%";
    box5.style.top = "23%";
    box5.style.borderRadius = "20%";
    box5.style.zIndex = "3";
    box6.style.width = "15%";
    box6.style.left = "80%";
    box6.style.top = "29.5%";
    box6.style.borderRadius = "25%";
    box6.style.zIndex = "2";
    box7.style.width = "15%";
    box7.style.left = "5%";
    box7.style.top = "29.5%";
    box7.style.borderRadius = "25%";
    box7.style.zIndex = "1";
  } else if (phase == 2) {
    box1.style.width = "25%";
    box1.style.left = "22.5%";
    box1.style.top = "16.5%";
    box1.style.borderRadius = "15%";
    box1.style.zIndex = "4";
    box2.style.width = "30%";
    box2.style.left = "35%";
    box2.style.top = "10%";
    box2.style.borderRadius = "10%";
    box2.style.zIndex = "5";
    box3.style.width = "25%";
    box3.style.left = "52.5%";
    box3.style.top = "16.5%";
    box3.style.borderRadius = "15%";
    box3.style.zIndex = "4";
    box4.style.width = "20%";
    box4.style.left = "67.5%";
    box4.style.top = "23%";
    box4.style.borderRadius = "20%";
    box4.style.zIndex = "3";
    box5.style.width = "15%";
    box5.style.left = "80%";
    box5.style.top = "29.5%";
    box5.style.borderRadius = "25%";
    box5.style.zIndex = "2";
    box6.style.width = "15%";
    box6.style.left = "5%";
    box6.style.top = "29.5%";
    box6.style.borderRadius = "25%";
    box6.style.zIndex = "1";
    box7.style.width = "20%";
    box7.style.left = "12.5%";
    box7.style.top = "23%";
    box7.style.borderRadius = "20%";
    box7.style.zIndex = "3";
  } else if (phase == 3) {
    box1.style.width = "30%";
    box1.style.left = "35%";
    box1.style.top = "10%";
    box1.style.borderRadius = "10%";
    box1.style.zIndex = "5";
    box2.style.width = "25%";
    box2.style.left = "52.5%";
    box2.style.top = "16.5%";
    box2.style.borderRadius = "15%";
    box2.style.zIndex = "4";
    box3.style.width = "20%";
    box3.style.left = "67.5%";
    box3.style.top = "23%";
    box3.style.borderRadius = "20%";
    box3.style.zIndex = "3";
    box4.style.width = "15%";
    box4.style.left = "80%";
    box4.style.top = "29.5%";
    box4.style.borderRadius = "25%";
    box4.style.zIndex = "2";
    box5.style.width = "15%";
    box5.style.left = "5%";
    box5.style.top = "29.5%";
    box5.style.borderRadius = "25%";
    box5.style.zIndex = "1";
    box6.style.width = "20%";
    box6.style.left = "12.5%";
    box6.style.top = "23%";
    box6.style.borderRadius = "20%";
    box6.style.zIndex = "3";
    box7.style.width = "25%";
    box7.style.left = "22.5%";
    box7.style.top = "16.5%";
    box7.style.borderRadius = "15%";
    box7.style.zIndex = "4";
  } else if (phase == 4) {
    box1.style.width = "25%";
    box1.style.left = "52.5%";
    box1.style.top = "16.5%";
    box1.style.borderRadius = "15%";
    box1.style.zIndex = "4";
    box2.style.width = "20%";
    box2.style.left = "67.5%";
    box2.style.top = "23%";
    box2.style.borderRadius = "20%";
    box2.style.zIndex = "3";
    box3.style.width = "15%";
    box3.style.left = "80%";
    box3.style.top = "29.5%";
    box3.style.borderRadius = "25%";
    box3.style.zIndex = "2";
    box4.style.width = "15%";
    box4.style.left = "5%";
    box4.style.top = "29.5%";
    box4.style.borderRadius = "25%";
    box4.style.zIndex = "1";
    box5.style.width = "20%";
    box5.style.left = "12.5%";
    box5.style.top = "23%";
    box5.style.borderRadius = "20%";
    box5.style.zIndex = "3";
    box6.style.width = "25%";
    box6.style.left = "22.5%";
    box6.style.top = "16.5%";
    box6.style.borderRadius = "15%";
    box6.style.zIndex = "4";
    box7.style.width = "30%";
    box7.style.left = "35%";
    box7.style.top = "10%";
    box7.style.borderRadius = "10%";
    box7.style.zIndex = "5";
  } else if (phase == 5) {
    box1.style.width = "20%";
    box1.style.left = "67.5%";
    box1.style.top = "23%";
    box1.style.borderRadius = "20%";
    box1.style.zIndex = "3";
    box2.style.width = "15%";
    box2.style.left = "80%";
    box2.style.top = "29.5%";
    box2.style.borderRadius = "25%";
    box2.style.zIndex = "2";
    box3.style.width = "15%";
    box3.style.left = "5%";
    box3.style.top = "29.5%";
    box3.style.borderRadius = "25%";
    box3.style.zIndex = "1";
    box4.style.width = "20%";
    box4.style.left = "12.5%";
    box4.style.top = "23%";
    box4.style.borderRadius = "20%";
    box4.style.zIndex = "3";
    box5.style.width = "25%";
    box5.style.left = "22.5%";
    box5.style.top = "16.5%";
    box5.style.borderRadius = "15%";
    box5.style.zIndex = "4";
    box6.style.width = "30%";
    box6.style.left = "35%";
    box6.style.top = "10%";
    box6.style.borderRadius = "10%";
    box6.style.zIndex = "5";
    box7.style.width = "25%";
    box7.style.left = "52.5%";
    box7.style.top = "16.5%";
    box7.style.borderRadius = "15%";
    box7.style.zIndex = "4";
  } else if (phase == 6) {
    box1.style.width = "15%";
    box1.style.left = "80%";
    box1.style.top = "29.5%";
    box1.style.borderRadius = "25%";
    box1.style.zIndex = "2";
    box2.style.width = "15%";
    box2.style.left = "5%";
    box2.style.top = "29.5%";
    box2.style.borderRadius = "25%";
    box2.style.zIndex = "1";
    box3.style.width = "20%";
    box3.style.left = "12.5%";
    box3.style.top = "23%";
    box3.style.borderRadius = "20%";
    box3.style.zIndex = "3";
    box4.style.width = "25%";
    box4.style.left = "22.5%";
    box4.style.top = "16.5%";
    box4.style.borderRadius = "15%";
    box4.style.zIndex = "4";
    box5.style.width = "30%";
    box5.style.left = "35%";
    box5.style.top = "10%";
    box5.style.borderRadius = "10%";
    box5.style.zIndex = "5";
    box6.style.width = "25%";
    box6.style.left = "52.5%";
    box6.style.top = "16.5%";
    box6.style.borderRadius = "15%";
    box6.style.zIndex = "4";
    box7.style.width = "20%";
    box7.style.left = "67.5%";
    box7.style.top = "23%";
    box7.style.borderRadius = "20%";
    box7.style.zIndex = "3";
  } else if (phase == 7) {
    box1.style.width = "15%";
    box1.style.left = "5%";
    box1.style.top = "29.5%";
    box1.style.borderRadius = "25%";
    box1.style.zIndex = "1";
    box2.style.width = "20%";
    box2.style.left = "12.5%";
    box2.style.top = "23%";
    box2.style.borderRadius = "20%";
    box2.style.zIndex = "3";
    box3.style.width = "25%";
    box3.style.left = "22.5%";
    box3.style.top = "16.5%";
    box3.style.borderRadius = "15%";
    box3.style.zIndex = "4";
    box4.style.width = "30%";
    box4.style.left = "35%";
    box4.style.top = "10%";
    box4.style.borderRadius = "10%";
    box4.style.zIndex = "5";
    box5.style.width = "25%";
    box5.style.left = "52.5%";
    box5.style.top = "16.5%";
    box5.style.borderRadius = "15%";
    box5.style.zIndex = "4";
    box6.style.width = "20%";
    box6.style.left = "67.5%";
    box6.style.top = "23%";
    box6.style.borderRadius = "20%";
    box6.style.zIndex = "3";
    box7.style.width = "15%";
    box7.style.left = "80%";
    box7.style.top = "29.5%";
    box7.style.borderRadius = "25%";
    box7.style.zIndex = "2";
  }

  phase++
  if (phase == 8)
    phase = 1
}

let winners = ["Rad", "Dave", "Diana", "May"];
let winnerNumbers = ["1", "2", "3", "4"];

for (i = 0; i < winners.length; ++i) {
  var li = document.createElement("li");
  li.innerText = winners[i];
  winnerList.appendChild(li);
}
for (i = 0; i < winnerNumbers.length; ++i) {
  var li = document.createElement("li");
  li.innerText = winnerNumbers[i];
  numberList.appendChild(li);
}