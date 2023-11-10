let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
// let lines = document.getElementById("lines");
let button0 = document.getElementById("button0");
let linemulti = document.getElementById("linemulti");
let multi = document.getElementById("multi");

let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let lightblue = document.getElementById("lightblue");

let bmulti = document.getElementById("bmulti");

let bgreen = document.getElementById("bgreen");
let bred = document.getElementById("bred");
let byellow = document.getElementById("byellow");
let bblue = document.getElementById("bblue");
let blightblue = document.getElementById("blightblue");
let bwhite = document.getElementById("bwhite");

let animate = document.getElementById("animate");


let black = document.getElementById("black");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");


let r = document.querySelector(":root");



let grid = document.getElementById("grid");

let squares = document.querySelectorAll(".square");

let letters = document.querySelectorAll(".letter");


let lines = document.querySelectorAll(".line");



let wOffset = 80;
let letterOffset = 0;

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

letterB.style.top = "12.5px";
letterL.style.top = "12.5px";








// letterM.style.background = "blue";
// letterM.style.left = "-50px";


let lineM = lines[0];

let lineA = lines[1];

let lineL = lines[2];

let lineB = lines[3];

let lineA2 = lines[4];

// lineM.style.zIndex = -1;




// let lineA = document.getElementById("line");

// for (let line of lines){
//   line.classList.add("arch");
//   line.classList.remove("line");};

//   for(let square of squares){
//     square.style.color = "var(--color)";
//   }





function randomAngle(){
  let max = Math.PI/2;
  let min = -Math.PI/2;
  return Math.random() * (max - min) + min;
};

function randomLength(){
  let max_length = 310;
  let min_length = 80;
  return  Math.random() * (max_length - min_length) + min_length;
};

function getValidPoint(posx, posy, ang0, xmax){
  let distP = randomLength(); 
  let angP = randomAngle() - ang0;

  let posyP = posy + (distP * Math.sin(ang0 + angP));
  let posxP = posx + (distP * Math.cos(ang0 + angP));
    
  while((posyP < 0) || (posyP > 540) || (posxP > xmax) || (posxP < 0) || Math.abs(2*ang0 + angP) < Math.PI/4) {
    
    angP = randomAngle() - ang0;
    distP = randomLength();
    
    posyP = posy + (distP * Math.sin(ang0 + angP));
    posxP = posx + (distP * Math.cos(ang0 + angP));
  };
  return [angP, distP, posxP, posyP]
}

randomPosition();

let myInterval;

animate.onclick = function(){if(!myInterval){
myInterval = setInterval(function(){
  randomPosition();
multiFunction();}, 2500);
animate.innerHTML = "Pause";}
else{
  clearInterval(myInterval);
myInterval = null;
animate.innerHTML = "Animate";
}
}







let palette = ["#AF3034", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9"];






// squareM.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA.style.fontSize = Math.random() * 50 + 60 + "px";
// squareL.style.fontSize = Math.random() * 50 + 60 + "px";
// squareB.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA2.style.fontSize = Math.random() * 50 + 60 + "px";



lineA2.classList.add("no");



multi.addEventListener("click", multiFunction);
bmulti.addEventListener("click", bmultiFunction);
bwhite.addEventListener("click", bwhiteFunction);
blightblue.addEventListener("click", blightblueFunction);
bblue.addEventListener("click", bblueFunction);
bgreen.addEventListener("click", bgreenFunction);
bred.addEventListener("click", bredFunction);
byellow.addEventListener("click", byellowFunction);


black.addEventListener("click", blackFunction);
linemulti.addEventListener("click", linemultiFunction);
lightblue.addEventListener("click", lightblueFunction);
blue.addEventListener("click", blueFunction);
green.addEventListener("click", greenFunction);
red.addEventListener("click", redFunction);
yellow.addEventListener("click", yellowFunction);


button0.addEventListener("click", randomPosition);

button7.addEventListener("click", multiFunction);
button7.addEventListener("click", randomPosition);










let randomColor = palette[Math.floor(Math.random() * palette.length)];





    


// button6.onclick = function width(){
//     lineA.style.height = Math.random() * 10 + 1 + "px";
// lineL.style.height = Math.random() * 10 + 1 + "px";
// lineB.style.height = Math.random() * 10 + 1 + "px";
// lineA2.style.height = Math.random() * 10 + 1 + "px";
// lineM.style.height = Math.random() * 10 + 1 + "px";}







function randomPosition(){
  let xM = Math.random() * 300;
  let yM = Math.random() * 450;
  let angT = 0;

  console.log("posxM: " + xM + " posyM:" + yM)

  squareM.style.left = xM + "px";
  squareM.style.top = yM + "px";
    
  let [angA, distA, posxA, posyA] = getValidPoint(xM, yM, angT, 300);

  console.log("posxA: " + posxA + " posyA:" + posyA)
  console.log("angA: " + angA*180/Math.PI + " distA:" + distA)
  let yA = 0;
  let xA = distA-letterOffset;
  angT += angA;

  letterA.style.transform = "rotate(" + (-angT) + "rad)";
  squareA.style.left = xA + "px";
  squareA.style.top = yA + "px";


  let [angL, distL, posxL, posyL] = getValidPoint(posxA, posyA, angT, 380);

  let yL = 0;
  let xL = distL-letterOffset;
  angT += angL;

  console.log("posxL: " + posxL + " posyL:" + posyL)
  console.log("angL: " + angL*180/Math.PI + " distL:" + distL)

  letterL.style.transform = "rotate(" + (-angT) + "rad)";
  squareL.style.left = xL + "px";
  squareL.style.top = yL + "px";

  let [angB, distB, posxB, posyB] = getValidPoint(posxL, posyL, angT, 460);

  
  let yB = 0;
  let xB = distB-letterOffset;
  angT += angB;
  
  letterB.style.transform = "rotate(" + (-angT) + "rad)";
  squareB.style.left = xB + "px";
  squareB.style.top = yB + "px";

  let [angA2, distA2, posxA2, posyA2] = getValidPoint(posxB, posyB, angT, 540);

  
  let yA2 = 0;
  let xA2 = distA2-letterOffset;
  angT += angA2;

  letterA2.style.transform = "rotate(" + (-angT) + "rad)";
  squareA2.style.left = xA2 + "px";
  squareA2.style.top = yA2 + "px";

  let angM = (xM - xA2 < 0) * Math.PI + Math.atan((yM - yA2)/(xM - xA2));
  let distM = (yM - yA2) / Math.sin(angM);
  
  lineM.style.transform = " rotate(" + angA + "rad)";
  lineM.style.width = distA + wOffset + "px";
  
  lineA.style.transform = " rotate(" + angL + "rad)";
  lineA.style.width = distL + wOffset + "px";
  
  lineL.style.transform = " rotate(" + angB + "rad)";
  lineL.style.width = distB + wOffset + "px";
  
  lineB.style.transform = " rotate(" + angA2 + "rad)";
  lineB.style.width = distA2 + wOffset + "px";
  
  lineA2.style.transform = " rotate(" + angM + "rad)";
  lineA2.style.width = distM + wOffset + "px";
  };



function linemultiFunction(){
  lineM.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineA.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineL.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineB.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineA2.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];

    };
  
function greenFunction(){

for(let line of lines){
  line.style.backgroundColor = "#036848";
    };


};


function redFunction(){
  for(let line of lines){
    line.style.backgroundColor = "#AF3034"
      };


};

function yellowFunction(){
  for(let line of lines){
    line.style.backgroundColor = "#EEBE46"
      };


};

function blueFunction(){
  for(let line of lines){
    line.style.backgroundColor = "#2B3C7E"
      };


};


function lightblueFunction(){
  for(let line of lines){
    line.style.backgroundColor = "#6CA8D9"
      };


};


function blackFunction(){


  for(let line of lines){
    line.style.backgroundColor = "black"
      };

};





function multiFunction(){
  squareM.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareA.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareL.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareB.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareA2.style.color = palette[Math.floor(Math.random() * palette.length)];
  lineM.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineA.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineL.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineB.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineA2.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  
  while(squareM.style.color == lineM.style.backgroundColor){
    squareM.style.color = palette[Math.floor(Math.random() * palette.length)];
    
    };
  
    while(squareA.style.color == lineA.style.backgroundColor){
    squareA.style.color = palette[Math.floor(Math.random() * palette.length)];
    };
    while(squareL.style.color == lineL.style.backgroundColor){
      squareL.style.color = palette[Math.floor(Math.random() * palette.length)];
      };
      while(squareB.style.color == lineB.style.backgroundColor){
        squareB.style.color = palette[Math.floor(Math.random() * palette.length)];
        };
  
        while(squareA2.style.color == lineB.style.backgroundColor){
          squareA2.style.color = palette[Math.floor(Math.random() * palette.length)];
          };
      
      };

function bmultiFunction(){
  squareM.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareA.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareL.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareB.style.color = palette[Math.floor(Math.random() * palette.length)];
  squareA2.style.color = palette[Math.floor(Math.random() * palette.length)];
  while(squareM.style.color == lineM.style.backgroundColor){
  squareM.style.color = palette[Math.floor(Math.random() * palette.length)];
  };
  while(squareA.style.color == lineA.style.backgroundColor){
    squareA.style.color = palette[Math.floor(Math.random() * palette.length)];
    };
    while(squareL.style.color == lineL.style.backgroundColor){
      squareL.style.color = palette[Math.floor(Math.random() * palette.length)];
      };
      while(squareB.style.color == lineB.style.backgroundColor){
        squareB.style.color = palette[Math.floor(Math.random() * palette.length)];
        };

};

function bwhiteFunction(){
  for(let square of squares){
    square.style.color = "white"
      }; 
    };

function blightblueFunction(){
for(let square of squares){
  square.style.color = "#6CA8D9"
    }; 
  };

function bgreenFunction(){
    for(let square of squares){
      square.style.color = "#036848"
        }; 
      };

function bblueFunction(){
for(let square of squares){
square.style.color = "#2B3C7E"
};
};

function byellowFunction(){
for(let square of squares){
square.style.color = "#EEBE46"
};
};

function bredFunction(){
for(let square of squares){
square.style.color = "#AF3034"
}; 
};

