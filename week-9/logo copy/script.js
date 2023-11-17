let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
// let lines = document.getElementById("lines");
let button0 = document.getElementById("button0");
let linemulti = document.getElementById("linemulti");
let multi = document.getElementById("multi");

let lgreen = document.getElementById("lgreen");
let lred = document.getElementById("lred");
let lyellow = document.getElementById("lyellow");
let lblue = document.getElementById("lblue");
let llightblue = document.getElementById("llightblue");

let bmulti = document.getElementById("bmulti");

let bgreen = document.getElementById("bgreen");
let bred = document.getElementById("bred");
let byellow = document.getElementById("byellow");
let bblue = document.getElementById("bblue");
let blightblue = document.getElementById("blightblue");
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


let r = document.querySelector(":root");



let grid = document.getElementById("grid");

let squares = document.querySelectorAll(".square");

let letters = document.querySelectorAll(".letter");


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


// letterM.style.left = "5px";
// letterM.style.top = "5px";

// letterB.style.top = "6px";
// letterB.style.left = "6px";

// letterL.style.top = "12.5px";



let blue = "#2B3C7E";
let yellow = "#EEBE46";
let red = "#AF3034";
let green = "#036848";
let lightblue = "#6CA8D9";


let imageM = image[0];
let imageA = image[1];
let imageL = image[2];
let imageB = image[3];
let imageA2 = image[4];

// imageM.style.background = "none";
// imageA.style.background = "none";
// imageL.style.background = "none";
// imageB.style.background = "none";
// imageA2.style.background = "none";








// letterM.style.background = "lblue";
// letterM.style.left = "-50px";


let lineM = lines[0];

let lineA = lines[1];

let lineL = lines[2];

let lineB = lines[3];

let lineA2 = lines[4];



// lineM.style.zIndex = -1;


// lineM.style.top = "-12.5px";
// lineM.style.left = "-12.5px";


// letterA.style.top = "12.5px";
// letterA.style.left = "12.5px";

// letterL.style.top = "12.5px";
// letterL.style.left = "12.5px";

// letterB.style.top = "12.5px";
// letterB.style.left = "12.5px";

// letterA2.style.top = "12.5px";
// letterA2.style.left = "12.5px";


// let lineA = document.getElementById("line");

// for (let line of lines){
//   line.classList.add("arch");
//   line.classList.remove("line");};

//   for(let square of squares){
//     square.style.color = "var(--color)";
//   }

let minDist = 80;
let maxDist = 200;
let minAng = Math.PI/3;
let maxY = grid.offsetHeight - squareM.offsetWidth;
let maxX = grid.offsetWidth - squareM.offsetWidth;

let lineWeight = 80;
let wOffset = lineWeight;
let letterOffset = 0;


r.style.setProperty("--lineWeight", lineWeight + "px");





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







let palette = [blue, lightblue, red, yellow, green];






// squareM.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA.style.fontSize = Math.random() * 50 + 60 + "px";
// squareL.style.fontSize = Math.random() * 50 + 60 + "px";
// squareB.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA2.style.fontSize = Math.random() * 50 + 60 + "px";



// lineA2.classList.add("no");



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
llightblue.addEventListener("click", llightblueFunction);
lblue.addEventListener("click", lblueFunction);
lgreen.addEventListener("click", lgreenFunction);
lred.addEventListener("click", lredFunction);
lyellow.addEventListener("click", lyellowFunction);


button0.addEventListener("click", randomPosition);

button7.addEventListener("click", multiFunction);
button7.addEventListener("click", randomPosition);



bblack.addEventListener("click", bblackFunction);
lwhite.addEventListener("click", lwhiteFunction);

transparent.addEventListener("click", transparentFunction);








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

let locM = imageM.getBoundingClientRect();

  console.log(locM.top);

  imageM.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-locM.left) + "px) translateY(" + (-locM.top) + "px)";
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

  let locA = imageA.getBoundingClientRect();

  imageA.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-locA.left) + "px) translateY(" + (-locA.top) + "px)";


  let [angB, distB, posxB, posyB] = getValidPoint(posxL, posyL, angT, maxX - 1*minDist);

  
  let yB = 0;
  let xB = distB-letterOffset;
  angT += angB;
  
  letterB.style.transform = "rotate(" + (-angT) + "rad)";
  squareB.style.left = xB + "px";
  squareB.style.top = yB + "px";

  let locL = imageL.getBoundingClientRect();

  imageL.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-locL.left) + "px) translateY(" + (-locL.top) + "px)";


  let [angA2, distA2, posxA2, posyA2] = getValidPoint(posxB, posyB, angT, maxX - 0*minDist);

  
  let yA2 = 0;
  let xA2 = distA2-letterOffset;
  angT += angA2;

  letterA2.style.transform = "rotate(" + (-angT) + "rad)";
  squareA2.style.left = xA2 + "px";
  squareA2.style.top = yA2 + "px";


let locB = imageB.getBoundingClientRect();

  imageB.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-locB.left) + "px) translateY(" + (-locB.top) + "px)";


  let [angM, distM, posxM, posyM] = getValidPoint(posxA2, posyA2, angT, maxX + 1*minDist);


  angT += angM;

let locA2 = imageA2.getBoundingClientRect();


  imageA2.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-locA2.left) + "px) translateY(" + (-locA2.top) + "px)";


  
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
  
function lgreenFunction(){

for(let line of lines){
  line.style.backgroundColor = green;
    };


};


function lredFunction(){
  for(let line of lines){
    line.style.backgroundColor = red;
      };


};

function lyellowFunction(){
  for(let line of lines){
    line.style.backgroundColor = yellow;
      };


};

function lblueFunction(){
  for(let line of lines){
    line.style.backgroundColor = blue;
      };


};


function llightblueFunction(){
  for(let line of lines){
    line.style.backgroundColor = lightblue;
      };


};


function blackFunction(){


  for(let line of lines){
    line.style.backgroundColor = "black";
      };

};





function multiFunction(){



  [squareM.style.color, lineM.style.backgroundColor] = randomColor();
  [squareA.style.color, lineA.style.backgroundColor] = randomColor();
  [squareL.style.color, lineL.style.backgroundColor] = randomColor();
  [squareB.style.color, lineB.style.backgroundColor] = randomColor();
  [squareA2.style.color, lineA2.style.backgroundColor] = randomColor();

      
      }

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

function blightblueFunction(){
for(let square of squares){
  square.style.color = lightblue;
    }; 
  };

function bgreenFunction(){
    for(let square of squares){
      square.style.color = green;
        }; 
      };

function bblueFunction(){
for(let square of squares){
square.style.color = blue;
};
};

function byellowFunction(){
for(let square of squares){
square.style.color = yellow;
};
};

function bredFunction(){
for(let square of squares){
square.style.color = red;
}; 
};


function transparentFunction() {
  for(let line of lines){
    line.style.backgroundColor = "transparent";
  }
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






