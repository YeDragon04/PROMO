// const getStarted2 = document.getElementById("getStarted2");
// const websiteDescription2 = document.getElementById("websiteDescription2");
// const aligner2 = document.getElementById("aligner2");
// const footer = document.getElementById('footer');
// const numberList = document.getElementById("winningNumbers");
// const winnerList = document.getElementById("winners");
// const description = document.getElementById("description");
// const carouselSize = document.getElementById("carousel");
// const carouselBackground = document.getElementById("carouselBackground");
// const menu = document.getElementById("menu");
// const tagLine = document.getElementById("tagLine");
// const how = document.getElementById("how")
// const graphicDesign = document.getElementById("graphicDesign")
// const getStarted1 = document.getElementById("getStarted1");
// const websiteDescription1= document.getElementById("websiteDescription1");
// const aligner1 = document.getElementById("aligner1");


// const section1 = document.getElementById("section1");
// const section2 = document.getElementById("section2");
// const section3 = document.getElementById("section3");
// const section4 = document.getElementById("section4");

// const fontTimer = setInterval(sizeResponsive, 10);
// let fontSize;

// function sizeResponsive() {
//   let width = window.innerWidth;

//   /*allSections*/
//   console.log(width);
//   fontSize = width / 9;
//   fontSize = fontSize * 16;
//   fontSize = fontSize / 16;
//   fontSize = fontSize * 1.25;
//   section1.style.aspectRatio = 4 + "/" + .000001;
//   section2.style.aspectRatio = 1 + "/" + .75;
//   section4.style.aspectRatio = 1 + "/" + .75;
//   section3.style.aspectRatio = 1 + "/" + .75;


//   /*section1*/
//   fontSize = width * .05;
//   fontSize = fontSize / 16;
//   tagLine.style.fontSize = fontSize + "rem";

//   /*header*/
//   fontSize = width * .02;
//   fontSize = fontSize / 16;
//   menu.style.fontSize = fontSize + "rem";
//   fontSize = width * .05;
//   fontSize = fontSize / 16;
//   menu.style.height = fontSize + "rem";

//   /*tagline*/
//   fontSize = width * .04;
//   fontSize = fontSize / 16;
//   tagLine.style.fontSize = fontSize + "rem";

//   /*carousel*/
//   fontSize = width * .87;
//   fontSize = fontSize / 16;
//   carouselSize.style.width = fontSize + "rem";
//   carouselBackground.style.height = carouselSize.clientHeight / 16 + "rem";

//   /*introduction*/

//   /*websiteDescription*/
//   fontSize = width * .03;
//   fontSize = fontSize / 16;
//   websiteDescription1.style.fontSize = fontSize + "rem";

//   /*getStarted*/
//   fontSize = width * .25;
//   fontSize = fontSize / 16;
//   getStarted1.style.width = fontSize + "rem";
//   fontSize = width * .03;
//   fontSize = fontSize / 16;
//   getStarted1.style.fontSize = fontSize + "rem";
//   fontSize = width * .0375;
//   fontSize = fontSize / 16;
//   getStarted1.style.borderRadius = fontSize + "rem";

//   /*aligner*/
//   fontSize = width * .04;
//   fontSize = fontSize / 16;
//   aligner1.style.fontSize = fontSize + "rem";

//   /*section2*/

//   /*how*/
//   fontSize = width * .075;
//   fontSize = fontSize / 16;
//   how.style.fontSize = fontSize + "rem";

//   /*graphicDesign*/
//   fontSize = width * .075;
//   fontSize = fontSize / 16;
//   graphicDesign.style.fontSize = fontSize + "rem";
//   fontSize = width * .7;
//   fontSize = fontSize / 16;
//   graphicDesign.style.width = fontSize + "rem";

//   /*section3*/

//   /*description*/
//   fontSize = width * .03;
//   fontSize = fontSize / 16;
//   description.style.fontSize = fontSize + "rem";

//   /*numberList*/
//   fontSize = width * .04;
//   fontSize = fontSize / 16;
//   numberList.style.fontSize = fontSize + "rem";

//   /*winnerList*/
//   fontSize = width * .04;
//   fontSize = fontSize / 16;
//   winnerList.style.fontSize = fontSize + "rem";

//   /*section4*/

//   /*conclusion*/

//   /*websiteDescription*/
//   fontSize = width * .03;
//   fontSize = fontSize / 16;
//   websiteDescription2.style.fontSize = fontSize + "rem";

//   /*getStarted*/
//   fontSize = width * .25;
//   fontSize = fontSize / 16;
//   getStarted2.style.width = fontSize + "rem";
//   fontSize = width * .03;
//   fontSize = fontSize / 16;
//   getStarted2.style.fontSize = fontSize + "rem";
//   fontSize = width * .0375;
//   fontSize = fontSize / 16;
//   getStarted2.style.borderRadius = fontSize + "rem";

//   /*aligner*/
//   fontSize = width * .04;
//   fontSize = fontSize / 16;
//   aligner2.style.fontSize = fontSize + "rem";

//   /*footer*/
//   fontSize = width * .02;
//   fontSize = fontSize / 16;
//   footer.style.fontSize = fontSize + "rem";
// }

/*The reason the carousel is moving*/
let images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg", "images/food9.jpg"]
const timer = setInterval(carousel, 2000);
let var1 = 1,
  var2 = 2,
  var3 = 3,
  var4 = 4,
  var5 = 5,
  imagesNum = 0;
box = "box";

function carousel() {
  document.getElementById("box" + var1).style.width = "40%";
  document.getElementById("box" + var1).style.height = "80%";
  document.getElementById("box" + var1).style.left = "10%";
  document.getElementById("box" + var1).style.top = "10%";
  document.getElementById("box" + var1).style.zIndex = "3";

  document.getElementById("box" + var2).style.width = "50%";
  document.getElementById("box" + var2).style.height = "100%";
  document.getElementById("box" + var2).style.left = "25%";
  document.getElementById("box" + var2).style.top = "0%";
  document.getElementById("box" + var2).style.zIndex = "4";

  document.getElementById("box" + var3).style.width = "40%";
  document.getElementById("box" + var3).style.height = "80%";
  document.getElementById("box" + var3).style.left = "50%";
  document.getElementById("box" + var3).style.top = "10%";
  document.getElementById("box" + var3).style.zIndex = "3";

  document.getElementById("box" + var4).style.width = "30%";
  document.getElementById("box" + var4).style.height = "60%";
  document.getElementById("box" + var4).style.left = "70%";
  document.getElementById("box" + var4).style.top = "20%";
  document.getElementById("box" + var4).style.zIndex = "2";

  document.getElementById("box" + var5).style.width = "30%";
  document.getElementById("box" + var5).style.height = "60%";
  document.getElementById("box" + var5).style.left = "0%";
  document.getElementById("box" + var5).style.top = "20%";
  document.getElementById("box" + var5).style.zIndex = "1";
  document.getElementById("box" + var5).style.backgroundImage = "url("+images[imagesNum]+")";

  if (var1 == 1)
    var1 = 6
  if (var2 == 1)
    var2 = 6
  if (var3 == 1)
    var3 = 6
  if (var4 == 1)
    var4 = 6
  if (var5 == 1)
    var5 = 6
  if (imagesNum == 8)
    imagesNum = 0

  var1--
  var2--
  var3--
  var4--
  var5--
  imagesNum++

}
const menu = document.getElementById("menu")
const menuButton = document.getElementById("menuButton")
var menuState = false;

function menuAction() {

  if (menuState) {
    menuButton.innerHTML = "≡"
    menuButton.style.rotate = "360deg";
    menuButton.style.top = "1%"
    menu.style.top = "-10%"
    menuState = false
  } else {
    menuButton.innerHTML = "x"
    menuButton.style.rotate = "180deg";
    menuButton.style.top = "6%"
    menu.style.top = "0%"
    menuState = true
  }
}
console.log(menuButton.innerHTML)

// let winners = ["Rad", "Dave", "Diana", "May"];
// let winnerNumbers = ["1", "2", "3", "4"];

// for (i = 0; i < winners.length; ++i) {
//   var li = document.createElement("li");
//   li.innerText = winners[i];
//   winnerList.appendChild(li);
// }
// for (i = 0; i < winnerNumbers.length; ++i) {
//   var li = document.createElement("li");
//   li.innerText = winnerNumbers[i];
//   numberList.appendChild(li);
// }