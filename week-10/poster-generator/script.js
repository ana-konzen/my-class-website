let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
// let lines = document.getElementById("lines");
let button0 = document.getElementById("button0");
let linemulti = document.getElementById("linemulti");
let multi = document.getElementById("multi");

let bnone = document.getElementById("bnone");
// let lnone = document.getElementById("lnone");

let buttons = document.querySelectorAll("button");

let bfrida = document.getElementById("bfrida");
let bdiego = document.getElementById("bdiego");

let menu = document.getElementById("menu");

let frida = document.getElementById("frida");
let diego = document.getElementById("diego");


let bwhite = document.getElementById("bwhite");
let lwhite = document.getElementById("lwhite");

let transparent = document.getElementById("transparent");


let animate = document.getElementById("animate");

let bblack = document.getElementById("bblack");

let black = document.getElementById("black");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");

let image = document.querySelectorAll(".image");

let mySVG = document.getElementById("mySVG");

let pathM = document.getElementById("pathM");
let pathA = document.getElementById("pathA");
let pathL = document.getElementById("pathL");
let pathB = document.getElementById("pathB");
let pathA2 = document.getElementById("pathA2");

let paths = document.querySelectorAll("rect");


let r = document.querySelector(":root");

let tarsila = document.getElementById("tarsila");
let berni = document.getElementById("berni");
let lam = document.getElementById("lam");



let grid = document.getElementById("grid");

let squares = document.querySelectorAll(".square");

let letters = document.querySelectorAll(".letter");

let btarsila = document.getElementById("btarsila");

let bberni = document.getElementById("bberni");

let blam = document.getElementById("blam");


let art = document.querySelectorAll(".art");



let lines = document.querySelectorAll(".line");



let squareM = squares[0];
let squareA = squares[1];
let squareL = squares[2];
let squareB = squares[3];
let squareA2 = squares[4];


let letterM = letters[0];
let letterA = letters[1];
let letterL = letters[2];
let letterB = letters[3];
let letterA2 = letters[4];




let blue = "#2B3C7E";
let yellow = "#EEBE46";
let red = "#AF3034";
let green = "#036848";
let lightblue = "#6CA8D9";



let lineM = lines[0];

let lineA = lines[1];

let lineL = lines[2];

let lineB = lines[3];

let lineA2 = lines[4];





let maxDist = 200;
let minAng = Math.PI/3;
let maxY = grid.offsetHeight - squareM.offsetWidth - 100;
let maxX = grid.offsetWidth - squareM.offsetWidth;



let minWeight = 90;
let maxWeight = 120;

let lineWeight;
let minDist = lineWeight;
let wOffset = lineWeight;
let letterOffset = 0;


let palette = [blue, lightblue, red, yellow, green];


// for(let square of squares){
//   square.classList.add("no");
// }



randomPosition();
multiFunction();


let myInterval;

let linesBack = getComputedStyle(lineM);

console.log(linesBack.backgroundColor);

animate.onclick = function(){if(!myInterval){
  if(getComputedStyle(lineM).backgroundColor == "rgba(0, 0, 0, 0)"){
    myInterval = setInterval(function(){
      randomPosition();
    }, 1000);
    animate.innerHTML = "Pause";}
    else {myInterval = setInterval(function(){
      randomPosition();
      multiFunction();
    }, 1000);}

animate.innerHTML = "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='5' height='14' fill='black'/><rect x='9' width='5' height='14' fill='black'/></svg>";}
else{
  clearInterval(myInterval);
myInterval = null;
animate.innerHTML = "<svg width='14' height='16' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M14 8L0.5 15.7942L0.5 0.205771L14 8Z' fill='black'/> </svg>";
}
}












// squareM.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA.style.fontSize = Math.random() * 50 + 60 + "px";
// squareL.style.fontSize = Math.random() * 50 + 60 + "px";
// squareB.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA2.style.fontSize = Math.random() * 50 + 60 + "px";



// lineA2.classList.add("no");



multi.addEventListener("click", multiFunction);
bwhite.addEventListener("click", bwhiteFunction);

black.addEventListener("click", blackFunction);


bblack.addEventListener("click", bblackFunction);
lwhite.addEventListener("click", lwhiteFunction);

button0.addEventListener("click", randomPosition);


// transparent.addEventListener("click", transparentFunction);


btarsila.addEventListener("click", tarsilaFunction);
bberni.addEventListener("click", berniFunction);
blam.addEventListener("click", lamFunction);
bfrida.addEventListener("click", fridaFunction);
bdiego.addEventListener("click", diegoFunction);

bmask.addEventListener("click", unmaskFunction);

hide.addEventListener("click", hideFunction);


bnone.addEventListener("click", noneFunction);
// lnone.addEventListener("click", lnoneFunction);


for(let button of buttons){
button.addEventListener("click", randomPosition);


}

for(let arts of art){
  arts.classList.add("clippy");
}



// let randomColor = palette[Math.floor(Math.random() * palette.length)];





    


// button6.onclick = function width(){
//     lineA.style.height = Math.random() * 10 + 1 + "px";
// lineL.style.height = Math.random() * 10 + 1 + "px";
// lineB.style.height = Math.random() * 10 + 1 + "px";
// lineA2.style.height = Math.random() * 10 + 1 + "px";
// lineM.style.height = Math.random() * 10 + 1 + "px";}





function randomAngle(){
  let max = Math.PI/2;
  let min = -Math.PI/2;
  return Math.random() * (max - min) + min;
};

function randomLength(){
  let maxLength = maxDist;
  let minLength = minDist;
  return  Math.random() * (maxLength - minLength) + minLength;
};

function getValidPoint(posX, posY, ang0, limX){
  let distP = randomLength(); 
  let angP = randomAngle() - ang0; // Choose random rotation angle so that x increases

  let posyP = posY + (distP * Math.sin(angP + ang0));
  let posxP = posX + (distP * Math.cos(angP + ang0));
  
  // rotate keeping a 45 degree space
  while((posyP < 0) || (posyP > maxY) || (posxP > limX) || (posxP < 0) || Math.abs(angP) > Math.PI - minAng) {
    
    angP = randomAngle() - ang0;
    distP = randomLength();
    
    posyP = posY + (distP * Math.sin(angP + ang0));
    posxP = posX + (distP * Math.cos(angP + ang0));
  };
  return [angP, distP, posxP, posyP]
}

function randomPosition(){
lineWeight = Math.random() * (maxWeight - minWeight) + minWeight;
minDist = lineWeight;
wOffset = lineWeight;

r.style.setProperty("--lineWeight", lineWeight + "px");

for(let square of squares) {
  square.style.fontSize = lineWeight - (lineWeight / 6) + "px";
  }

  let xM = Math.random() * (maxX - 3*minDist);
  let yM = Math.random() * maxY;
  let angT = 0;

  console.log("posxM: " + xM + " posyM:" + yM)

  squareM.style.left = xM + "px";

  squareM.style.top = yM + "px";

    
  let [angA, distA, posxA, posyA] = getValidPoint(xM, yM, angT, maxX - 3*minDist);

  console.log("posxA: " + posxA + " posyA:" + posyA)
  console.log("angA: " + angA*180/Math.PI + " distA:" + distA)
  let yA = 0;
  let xA = distA-letterOffset;
  angT += angA;

  letterA.style.transform = "rotate(" + (-angT) + "rad)";
  squareA.style.left = xA + "px";
  squareA.style.top = yA + "px";

  // imageM.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-xM) + "px) translateY(" + (-yM) + "px)";
  // imageM.style.left = (100) + "px";
  // imageM.style.top = (50) + "px";





  let [angL, distL, posxL, posyL] = getValidPoint(posxA, posyA, angT, maxX - 2*minDist);

  let yL = 0;
  let xL = distL-letterOffset;
  angT += angL;

  console.log("posxL: " + posxL + " posyL:" + posyL)
  console.log("angL: " + angL*180/Math.PI + " distL:" + distL)

  letterL.style.transform = "rotate(" + (-angT) + "rad)";
  squareL.style.left = xL + "px";
  squareL.style.top = yL + "px";

  // imageA.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxA) + "px) translateY(" + (-posyA) + "px)";


  let [angB, distB, posxB, posyB] = getValidPoint(posxL, posyL, angT, maxX - 1*minDist);

  
  let yB = 0;
  let xB = distB-letterOffset;
  angT += angB;
  
  letterB.style.transform = "rotate(" + (-angT) + "rad)";
  squareB.style.left = xB + "px";
  squareB.style.top = yB + "px";

  // imageL.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxL) + "px) translateY(" + (-posyL) + "px)";


  let [angA2, distA2, posxA2, posyA2] = getValidPoint(posxB, posyB, angT, maxX - 0*minDist);

  
  let yA2 = 0;
  let xA2 = distA2-letterOffset;
  angT += angA2;

  letterA2.style.transform = "rotate(" + (-angT) + "rad)";
  squareA2.style.left = xA2 + "px";
  squareA2.style.top = yA2 + "px";

  // imageB.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxB) + "px) translateY(" + (-posyB) + "px)";


  let [angM, distM, posxM, posyM] = getValidPoint(posxA2, posyA2, angT, maxX + 1*minDist);


  angT += angM;

  // imageA2.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxA2) + "px) translateY(" + (-posyA2) + "px)";


  
  lineM.style.transform = "rotate(" + angA + "rad)";
  lineM.style.width = distA + wOffset + "px";


  
  lineA.style.transform = " rotate(" + angL + "rad)";
  lineA.style.width = distL + wOffset + "px";

  lineL.style.transform = " rotate(" + angB + "rad)";
  lineL.style.width = distB + wOffset + "px";
  
  lineB.style.transform = " rotate(" + angA2 + "rad)";
  lineB.style.width = distA2 + wOffset + "px";
  
  lineA2.style.transform = " rotate(" + angM + "rad)";
  lineA2.style.width = distM + wOffset + "px";



  let randomScale = Math.random() * 0.3 + 1;


// grid.style.transform = "scale(" + randomScale + ")";

  let widthM = distA + wOffset;
  let angleM = (lineWeight/2 + xM) + "px " + (lineWeight/2 + yM) + "px";
pathM.style.x = xM;
  pathM.style.y = yM;
  pathM.style.width =  widthM;
  pathM.style.transformOrigin = angleM;
  pathM.style.transform = " rotate(" + (angA) + "rad)";


  let widthA = distL + wOffset;
  let xpA = posxA;
  let ypA = posyA;
  let angleA = (lineWeight/2 + posxA) + "px " + (lineWeight/2 + posyA) + "px";

  pathA.style.x =  xpA;
  pathA.style.y =  ypA;
  pathA.style.width = widthA;
  pathA.style.transformOrigin = angleA;
  pathA.style.transform = " rotate(" + (angL + angA) + "rad)";


  let widthL = distB + wOffset;
  let xpL = posxL;
  let ypL = posyL;
  let angleL = (lineWeight/2 + xpL) + "px " + (lineWeight/2 + ypL) + "px";

  pathL.style.x =  xpL;
  pathL.style.y =  ypL;
  pathL.style.width =  widthL;
  pathL.style.transformOrigin =  angleL;
  pathL.style.transform = " rotate(" + (angL + angA + angB) + "rad)";


  let widthB = distA2 + wOffset;
  let xpB = posxB;
  let ypB = posyB;
  let angleB = (lineWeight/2 + xpB) + "px " + (lineWeight/2 + ypB) + "px";

  pathB.style.x =  xpB;
  pathB.style.y =  ypB;
  pathB.style.width =  widthB;
  pathB.style.transformOrigin =  angleB;
  pathB.style.transform = " rotate(" + (angL + angA + angB + angA2) + "rad)";


  let widthA2 = distM + wOffset;
  let xpA2 = posxA2;
  let ypA2 = posyA2;
  let angleA2 = (lineWeight/2 + xpA2) + "px " + (lineWeight/2 + ypA2) + "px";

  pathA2.style.x =  xpA2;
  pathA2.style.y =  ypA2;
  pathA2.style.width =  widthA2;
  pathA2.style.transformOrigin =  angleA2;
  pathA2.style.transform = " rotate(" + (angM + angL + angA + angB + angA2) + "rad)";

  // let initialX = 0;
  // let initialY = 0;
  // let moveElement = false;
  
  // let events = {
  //   mouse: {
  //     down: "mousedown",
  //     move: "mousemove",
  //     up: "mouseup",
  //   },
  //   touch: {
  //     down: "touchstart",
  //     move: "touchmove",
  //     up: "touchend",
  //   },
  // };
  
  
  
  
  // squareM.addEventListener("mousedown", (e) => {
  // //   e.preventDefault();
  //   initialX = e.clientX;
  //   initialY = e.clientY;
  //   squareM.style.zIndex = "3";
  //   moveElement = true;
  // });
  // squareM.addEventListener("mousemove", (e) => {
  //   if (moveElement) {
  //     // e.preventDefault();
  //   squareM.style.zIndex = "3";
  
  //     let newX = e.clientX;
  //     let newY = e.clientY;
  //     yM = squareM.offsetTop - (initialY - newY);
  //     xM = squareM.offsetLeft - (initialX - newX);
  //     newAng = (xA - xM < 0) * Math.PI + Math.atan((yA - yM)/(xA - xM));
  //     newAngm = (xM - xA2 < 0) * Math.PI + Math.atan((yA2 - yM)/(xA2 - xM));
  //     squareM.style.top = yM + "px";
  //     squareM.style.left = xM + "px";
  //     distA = (yA - yM) / Math.sin(newAng);
  //     lineM.style.transform = "rotate(" + newAng + "rad)"
  //     lineM.style.width = distA + "px";
  //     initialX = newX;
  //     initialY = newY;
  
  //     distM = (yM - yA2) / Math.sin(newAngm);
  //         lineA2.style.transform = "rotate(" + newAngm + "rad)"
  //         lineA2.style.width = distM + "px";
         
  //   }
  // });
  // squareM.addEventListener(
  //   "mouseup",
  //   (stopMovement = () => {
  //     moveElement = false;
  //   squareM.style.zIndex = "2";
  
  //   })
  // );
  // squareM.addEventListener("mouseleave", stopMovement);
  // squareM.addEventListener("mouseup", () => {
  //   moveElement = false;
  //   squareM.style.zIndex = "2";
  
  // });
  };





function blackFunction(){
  bmask.style.display = "none";


  for(let line of lines){
    line.style.backgroundColor = "black";
      };

};





function multiFunction(){
  bmask.style.display = "none";



  mySVG.style.opacity = 0;

  [squareM.style.color, lineM.style.backgroundColor] = randomColor();
  [squareA.style.color, lineA.style.backgroundColor] = randomColor();
  [squareL.style.color, lineL.style.backgroundColor] = randomColor();
  [squareB.style.color, lineB.style.backgroundColor] = randomColor();
  [squareA2.style.color, lineA2.style.backgroundColor] = randomColor();

      
      }



function bwhiteFunction(){
  for(let square of squares){
    square.style.color = "white";
      }; 
    };

    function bblackFunction(){
      for(let square of squares){
        square.style.color = "black";
          }; 
        };

    function lwhiteFunction(){
      for(let line of lines){
        line.style.backgroundColor = "white";
          }; 



        };




function hideFunction(){
  if(getComputedStyle(menu).display == "flex"){
  menu.style.display = "none";
hide.innerHTML = "Show Menu";
hide.style.top = "100px";
poster.style.top = "20px";
grid.style.top = "20px";

}
  else{
    menu.style.display = "flex";
    hide.innerHTML = "Hide Menu";
    hide.style.top = "220px";
poster.style.top = "250px";
grid.style.top = "250px";


  }
}

function unmaskFunction(){
  for(let arts of art){
    arts.classList.toggle("clippy");

  }
  
  if(art[0].classList.contains("clippy")
  ){
    for(let line of lines){
      line.style.backgroundColor = "transparent";
  
    }
    for(let line of squares){
      line.style.color = "white";
  
    }
    info.classList.remove("whitetext");
  }
else{
  for(let line of lines){
    line.style.backgroundColor = "black";

  }

  for(let line of squares){
    line.style.color = "white";

  }

  info.classList.add("whitetext");}
  
}


function transparentFunction() {
  for(let line of lines){
    line.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  for(let square of squares){
    square.style.color = "white";
      }; 

}

function tarsilaFunction () {
  for(let line of lines){
    line.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  for(let square of squares){
    square.style.color = "white";
      }; 
  berni.style.opacity = 0;
  lam.style.opacity = 0;
  diego.style.opacity = 0;
  frida.style.opacity = 0;

  tarsila.style.opacity = 100;
  bmask.style.display = "block";

  info.innerHTML = "tarsila <br> do amaral<br><span>11.10.2023</span>"

}

function berniFunction () {
  for(let line of lines){
    line.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  for(let square of squares){
    square.style.color = "white";
      }; 
  tarsila.style.opacity = 0;
  lam.style.opacity = 0;

  diego.style.opacity = 0;
  frida.style.opacity = 0;
  berni.style.opacity = 100;
  bmask.style.display = "block";
  info.innerHTML = "antonio <br> berni<br><span>11.10.2023</span>"

}

function lamFunction () {
  for(let line of lines){
    line.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  for(let square of squares){
    square.style.color = "white";
      }; 
  tarsila.style.opacity = 0;
  diego.style.opacity = 0;
  frida.style.opacity = 0;

  berni.style.opacity = 0;
  lam.style.opacity = 100;

  bmask.style.display = "block";

  info.innerHTML = "wifredo<br>lam<br><span>11.10.2023</span>"



}







function fridaFunction () {
  for(let line of lines){
    line.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  for(let square of squares){
    square.style.color = "white";
      }; 
  tarsila.style.opacity = 0;

  berni.style.opacity = 0;
  lam.style.opacity = 0;
  diego.style.opacity = 0;

  frida.style.opacity = 100;

  bmask.style.display = "block";

  info.innerHTML = "frida <br> kahlo<br><span>11.10.2023</span>"


}



function diegoFunction () {
  for(let line of lines){
    line.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  for(let square of squares){
    square.style.color = "white";
      }; 
  tarsila.style.opacity = 0;

  berni.style.opacity = 0;
  lam.style.opacity = 0;
  diego.style.opacity = 0;

  frida.style.opacity = 0;
  diego.style.opacity = 100;

  bmask.style.display = "block";

  info.innerHTML = "diego <br> rivera<br><span>11.10.2023</span>"



}

function noneFunction(){
  for(let square of squares){
    square.style.color = "transparent";
      }; 
}

function lnoneFunction(){
  for(let line of lines){
    line.style.backgroundColor = "transparent";
      }; 
}


function randomColor(){
  palette = [lightblue, yellow, red, green, blue];

  let index1 = Math.floor(Math.random() * palette.length);
  let index2;

  if (index1 > 1){
    index2 = Math.floor(Math.random() * 2);
  }
  else {
    index2 = Math.floor(Math.random() * palette.length); 
    while(index1==index2){
      index2 = Math.floor(Math.random() * palette.length); 
    };
  };

console.log([palette[index1], palette[index2]]);


  return[palette[index1], palette[index2]]

  
}


