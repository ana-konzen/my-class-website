let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
// let lines = document.getElementById("lines");
let button0 = document.getElementById("button0");
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");

let r = document.querySelector(':root');



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



// squareM.style.zIndex = "2";
// squareA.style.zIndex = "2";
// squareL.style.zIndex = "2";
// squareB.style.zIndex = "2";
// squareA2.style.zIndex = "2";




let lineM = lines[0];

let lineA = lines[1];

let lineL = lines[2];

let lineB = lines[3];

let lineA2 = lines[4];






// let lineA = document.getElementById("line");



// squareM.classList.add("m");
// squareA.classList.add("a");
// squareB.classList.add("b");
// squareA2.classList.add("a2");

let xM = Math.random() * 300 - 60;

console.log( xM );

let yM = Math.random() * 450; 


let distA = Math.random() * 300 + 60; 


let max = Math.PI/2;

let min = -Math.PI/2;

let angA = Math.random() * (max - min) + min;

// angA = Math.PI/6;

console.log(max);
console.log(min);
console.log(distA);
console.log(distA / 2);


console.log(Math.sin(angA));

console.log(angA);

let yA = yM + (distA * Math.sin(angA));
let xA = xM + (distA * Math.cos(angA));

while((yA < 0) || (yA > 600) || (xA > 420)) {

    angA = Math.random() * (max - min) + min;
distA = Math.random() * 300 + 60; 

yA = yM + (distA * Math.sin(angA));
xA = xM + (distA * Math.cos(angA));
 
   };





squareM.style.left = xM + "px";
squareM.style.top = yM + "px";

squareA.style.left = xA + "px";
squareA.style.top = yA + "px";

let distL = Math.random() * 300 + 60; 

let angL = Math.random() * max + min;

let yL = yA + (distL * Math.sin(angL));
let xL = xA + (distL * Math.cos(angL));


while((yL < 0) || (yL > 600) || (xL > 480)) {

    angL = Math.random() * (max - min) + min;
distL = Math.random() * 300 + 60; 

    yL = yA + (distL * Math.sin(angL));
   xL = xA + (distL * Math.cos(angL));

 
   };



squareL.style.left = xL + "px";
squareL.style.top = yL + "px";


let distB = Math.random() * 300 + 60; 

let angB = Math.random() * max + min;

let yB = yL + (distB * Math.sin(angB));
let xB = xL + (distB* Math.cos(angB));


while((yB < 0) || (yB > 600) || (xB > 540)) {

    angB = Math.random() * max + min;
distB = Math.random() * 300 + 60; 

     yB = yL + (distB * Math.sin(angB));
   xB = xL + (distB* Math.cos(angB));

   };


   squareB.style.left = xB + "px";
   squareB.style.top = yB + "px";

   let distA2 = Math.random() * 300 + 60; 

   let angA2 = Math.random() * max + min;
   
   let yA2 = yB + (distA2 * Math.sin(angA2));
   let xA2 = xB + (distA2* Math.cos(angA2));


   
   while((yA2 < 0) || (yA2 > 600) || (xA2 > 600)) {
   
    angA2 = Math.random() * max + min;
distA2 = Math.random() * 300 + 60; 

    xA2 = xB + (distA2* Math.cos(angA2));


    yA2 = yB + (distA2 * Math.sin(angA2));

      };
   
     
      
      squareA2.style.left = xA2 + "px";
   
      squareA2.style.top = yA2 + "px";



let angM =  newAng = (xM - xA2 < 0) * Math.PI + Math.atan((yM - yA2)/(xM - xA2));
let distM = (yM - yA2) / Math.sin(angM);


lineM.style.transform = " rotate(" + angA + "rad)";
lineM.style.width = distA + "px";



lineA.style.transform = " rotate(" + angL + "rad)";
lineA.style.width = distL + "px";


lineL.style.transform = " rotate(" + angB + "rad)";
lineL.style.width = distB + "px";
// lineL.style.left = "20px";

lineB.style.transform = " rotate(" + angA2 + "rad)";
lineB.style.width = distA2 + "px";


lineA2.style.transform = " rotate(" + angM + "rad)";
lineA2.style.width = distM + "px";










let palette = ["#AF3034", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9"];




// squareM.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA.style.fontSize = Math.random() * 50 + 60 + "px";
// squareL.style.fontSize = Math.random() * 50 + 60 + "px";
// squareB.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA2.style.fontSize = Math.random() * 50 + 60 + "px";



lineA2.classList.add("no");

button0.onclick = function(){
    let xM = Math.random() * 300 - 60;

console.log( xM );

let yM = Math.random() * 450; 


let distA = Math.random() * 300 + 60; 


let max = Math.PI/2;

let min = -Math.PI/2;

let angA = Math.random() * (max - min) + min;

// angA = Math.PI/6;

console.log(max);
console.log(min);
console.log(distA);
console.log(distA / 2);


console.log(Math.sin(angA));

console.log(angA);

let yA = yM + (distA * Math.sin(angA));
let xA = xM + (distA * Math.cos(angA));

while((yA < 0) || (yA > 600) || (xA > 420)) {

    angA = Math.random() * (max - min) + min;
distA = Math.random() * 300 + 60; 

yA = yM + (distA * Math.sin(angA));
xA = xM + (distA * Math.cos(angA));
 
   };





squareM.style.left = xM + "px";
squareM.style.top = yM + "px";

squareA.style.left = xA + "px";
squareA.style.top = yA + "px";

let distL = Math.random() * 300 + 60; 

let angL = Math.random() * max + min;

let yL = yA + (distL * Math.sin(angL));
let xL = xA + (distL * Math.cos(angL));


while((yL < 0) || (yL > 600) || (xL > 480)) {

    angL = Math.random() * (max - min) + min;
distL = Math.random() * 300 + 60; 

    yL = yA + (distL * Math.sin(angL));
   xL = xA + (distL * Math.cos(angL));

 
   };



squareL.style.left = xL + "px";
squareL.style.top = yL + "px";


let distB = Math.random() * 300 + 60; 

let angB = Math.random() * max + min;

let yB = yL + (distB * Math.sin(angB));
let xB = xL + (distB* Math.cos(angB));


while((yB < 0) || (yB > 600) || (xB > 540)) {

    angB = Math.random() * max + min;
distB = Math.random() * 300 + 60; 

     yB = yL + (distB * Math.sin(angB));
   xB = xL + (distB* Math.cos(angB));

   };


   squareB.style.left = xB + "px";
   squareB.style.top = yB + "px";

   let distA2 = Math.random() * 300 + 60; 

   let angA2 = Math.random() * max + min;
   
   let yA2 = yB + (distA2 * Math.sin(angA2));
   let xA2 = xB + (distA2* Math.cos(angA2));


   
   while((yA2 < 0) || (yA2 > 600) || (xA2 > 600)) {
   
    angA2 = Math.random() * max + min;
distA2 = Math.random() * 300 + 60; 

    xA2 = xB + (distA2* Math.cos(angA2));


    yA2 = yB + (distA2 * Math.sin(angA2));

      };
   
     
      
      squareA2.style.left = xA2 + "px";
   
      squareA2.style.top = yA2 + "px";



let angM = (xM - xA2 < 0) * Math.PI + Math.atan((yM - yA2)/(xM - xA2));
let distM = (yM - yA2) / Math.sin(angM);


lineM.style.transform = " rotate(" + angA + "rad)";
lineM.style.width = distA + "px";



lineA.style.transform = " rotate(" + angL + "rad)";
lineA.style.width = distL + "px";


lineL.style.transform = " rotate(" + angB + "rad)";
lineL.style.width = distB + "px";
// lineL.style.left = "20px";

lineB.style.transform = " rotate(" + angA2 + "rad)";
lineB.style.width = distA2 + "px";


lineA2.style.transform = " rotate(" + angM + "rad)";
lineA2.style.width = distM + "px";



};



button.onclick = function multi(){
squareM.style.color = palette[Math.floor(Math.random() * palette.length)];
squareA.style.color = palette[Math.floor(Math.random() * palette.length)];
squareL.style.color = palette[Math.floor(Math.random() * palette.length)];
squareB.style.color = palette[Math.floor(Math.random() * palette.length)];
squareA2.style.color = palette[Math.floor(Math.random() * palette.length)];
lineM.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineA.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineL.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineB.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineA2.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];}

let randomColor = palette[Math.floor(Math.random() * palette.length)];

button2.onclick = function single(){
randomColor = palette[Math.floor(Math.random() * palette.length)];

squareM.style.color = randomColor;
squareA.style.color = randomColor;
squareL.style.color = randomColor;
squareB.style.color = randomColor;
squareA2.style.color = randomColor;
lineM.style.backgroundColor = randomColor;
lineA.style.backgroundColor = randomColor;
lineL.style.backgroundColor = randomColor;
lineB.style.backgroundColor = randomColor;
lineA2.style.backgroundColor = randomColor;


};

button3.onclick = function red(){
randomColor = null;
    squareM.style.color = randomColor;
squareA.style.color = randomColor;
squareL.style.color = randomColor;
squareB.style.color = randomColor;
squareA2.style.color = randomColor;
lineM.style.backgroundColor = randomColor;
lineA.style.backgroundColor = randomColor;
lineL.style.backgroundColor = randomColor;
lineB.style.backgroundColor = randomColor;
lineA2.style.backgroundColor = randomColor;

};


button4.onclick = function black(){
    randomColor = "#000";
        squareM.style.color = randomColor;
    squareA.style.color = randomColor;
    squareL.style.color = randomColor;
    squareB.style.color = randomColor;
    squareA2.style.color = randomColor;
    lineM.style.backgroundColor = randomColor;
    lineA.style.backgroundColor = randomColor;
    lineL.style.backgroundColor = randomColor;
    lineB.style.backgroundColor = randomColor;
    lineA2.style.backgroundColor = randomColor;
    
    };

    button5.onclick = function polygon(){

        lineA2.classList.toggle("no");}
    


button6.onclick = function width(){
    lineA.style.height = Math.random() * 9 + 1 + "px";
lineL.style.height = Math.random() * 9 + 1 + "px";
lineB.style.height = Math.random() * 9 + 1 + "px";
lineA2.style.height = Math.random() * 9 + 1 + "px";
lineM.style.height = Math.random() * 9 + 1 + "px";}



button7.onclick = function(){
    let xM = Math.random() * 300 - 60;

console.log( xM );

let yM = Math.random() * 450; 


let distA = Math.random() * 300 + 60; 


let max = Math.PI/2;

let min = -Math.PI/2;

let angA = Math.random() * (max - min) + min;

// angA = Math.PI/6;

console.log(max);
console.log(min);
console.log(distA);
console.log(distA / 2);


console.log(Math.sin(angA));

console.log(angA);

let yA = yM + (distA * Math.sin(angA));
let xA = xM + (distA * Math.cos(angA));

while((yA < 0) || (yA > 600) || (xA > 420)) {

    angA = Math.random() * (max - min) + min;
distA = Math.random() * 300 + 60; 

yA = yM + (distA * Math.sin(angA));
xA = xM + (distA * Math.cos(angA));
 
   };





squareM.style.left = xM + "px";
squareM.style.top = yM + "px";

squareA.style.left = xA + "px";
squareA.style.top = yA + "px";

let distL = Math.random() * 300 + 60; 

let angL = Math.random() * max + min;

let yL = yA + (distL * Math.sin(angL));
let xL = xA + (distL * Math.cos(angL));


while((yL < 0) || (yL > 600) || (xL > 480)) {

    angL = Math.random() * (max - min) + min;
distL = Math.random() * 300 + 60; 

    yL = yA + (distL * Math.sin(angL));
   xL = xA + (distL * Math.cos(angL));

 
   };



squareL.style.left = xL + "px";
squareL.style.top = yL + "px";


let distB = Math.random() * 300 + 60; 

let angB = Math.random() * max + min;

let yB = yL + (distB * Math.sin(angB));
let xB = xL + (distB* Math.cos(angB));


while((yB < 0) || (yB > 600) || (xB > 540)) {

    angB = Math.random() * max + min;
distB = Math.random() * 300 + 60; 

     yB = yL + (distB * Math.sin(angB));
   xB = xL + (distB* Math.cos(angB));

   };


   squareB.style.left = xB + "px";
   squareB.style.top = yB + "px";

   let distA2 = Math.random() * 300 + 60; 

   let angA2 = Math.random() * max + min;
   
   let yA2 = yB + (distA2 * Math.sin(angA2));
   let xA2 = xB + (distA2 * Math.cos(angA2));


   
   while((yA2 < 0) || (yA2 > 600) || (xA2 > 600)) {
   
    angA2 = Math.random() * max + min;
distA2 = Math.random() * 300 + 60; 

    xA2 = xB + (distA2 * Math.cos(angA2));

    yA2 = yB + (distA2 * Math.sin(angA2));

      };
   
      squareA2.style.left = xA2 + "px";
   
      squareA2.style.top = yA2 + "px";



let angM =  newAng = (xM - xA2 < 0) * Math.PI + Math.atan((yM - yA2)/(xM - xA2));
let distM = (yM - yA2) / Math.sin(angM);


lineM.style.transform = " rotate(" + angA + "rad)";
lineM.style.width = distA + "px";



lineA.style.transform = " rotate(" + angL + "rad)";
lineA.style.width = distL + "px";


lineL.style.transform = " rotate(" + angB + "rad)";
lineL.style.width = distB + "px";
// lineL.style.left = "20px";

lineB.style.transform = " rotate(" + angA2 + "rad)";
lineB.style.width = distA2 + "px";


lineA2.style.transform = " rotate(" + angM + "rad)";
lineA2.style.width = distM + "px";

    lineA.style.height = Math.random() * 9 + 1 + "px";
    lineL.style.height = Math.random() * 9 + 1 + "px";
    lineB.style.height = Math.random() * 9 + 1 + "px";
    lineA2.style.height = Math.random() * 9 + 1 + "px";
    lineM.style.height = Math.random() * 9 + 1 + "px";
squareM.style.color = palette[Math.floor(Math.random() * palette.length)];
squareA.style.color = palette[Math.floor(Math.random() * palette.length)];
squareL.style.color = palette[Math.floor(Math.random() * palette.length)];
squareB.style.color = palette[Math.floor(Math.random() * palette.length)];
squareA2.style.color = palette[Math.floor(Math.random() * palette.length)];
lineM.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineA.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineL.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineB.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
lineA2.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];};





let initialX = 0;
let initialY = 0;
let moveElement = false;

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};




squareM.addEventListener("mousedown", (e) => {
//   e.preventDefault();
  initialX = e.clientX;
  initialY = e.clientY;
  squareM.style.zIndex = "3";
  moveElement = true;
});
squareM.addEventListener("mousemove", (e) => {
  if (moveElement) {
    // e.preventDefault();
  squareM.style.zIndex = "3";

    let newX = e.clientX;
    let newY = e.clientY;
    yM = squareM.offsetTop - (initialY - newY);
    xM = squareM.offsetLeft - (initialX - newX);
    newAng = (xA - xM < 0) * Math.PI + Math.atan((yA - yM)/(xA - xM));
    newAngm = (xM - xA2 < 0) * Math.PI + Math.atan((yA2 - yM)/(xA2 - xM));
    squareM.style.top = yM + "px";
    squareM.style.left = xM + "px";
    distA = (yA - yM) / Math.sin(newAng);
    lineM.style.transform = "rotate(" + newAng + "rad)"
    lineM.style.width = distA + "px";
    initialX = newX;
    initialY = newY;

    distM = (yM - yA2) / Math.sin(newAngm);
        lineA2.style.transform = "rotate(" + newAngm + "rad)"
        lineA2.style.width = distM + "px";
       
  }
});
squareM.addEventListener(
  "mouseup",
  (stopMovement = () => {
    moveElement = false;
  squareM.style.zIndex = "2";

  })
);
squareM.addEventListener("mouseleave", stopMovement);
squareM.addEventListener("mouseup", () => {
  moveElement = false;
  squareM.style.zIndex = "2";

});

squareA.addEventListener("mousedown", (e) => {
    //   e.preventDefault();
      initialX = e.clientX;
      initialY = e.clientY;
      squareA.style.zIndex = "3";
      moveElement = true;
    });
    squareA.addEventListener("mousemove", (e) => {
      if (moveElement) {
        // e.preventDefault();
      squareA.style.zIndex = "3";
    
        let newX = e.clientX;
        let newY = e.clientY;
        yA = squareA.offsetTop - (initialY - newY);
        xA = squareA.offsetLeft - (initialX - newX);
        newAng = (xL - xA < 0) * Math.PI + Math.atan((yL - yA)/(xL - xA));
        newAngm = (xA - xM < 0) * Math.PI + Math.atan((yA - yM)/(xA - xM));
        squareA.style.top = yA + "px";
        squareA.style.left = xA + "px";
        distL = (yL - yA) / Math.sin(newAng);
        distA = (yA - yM) / Math.sin(newAngm);
        lineA.style.transform = "rotate(" + newAng + "rad)"
        lineA.style.width = distL + "px";
        lineM.style.transform = "rotate(" + newAngm + "rad)"
    lineM.style.width = distA + "px";
        initialX = newX;
        initialY = newY;
    
      }
    });
  
    squareA.addEventListener(
      "mouseup",
      (stopMovement = () => {
        moveElement = false;
  squareA.style.zIndex = "2";

      })
    );
    squareA.addEventListener("mouseleave", stopMovement);
    squareA.addEventListener("mouseup", () => {
      moveElement = false;
  squareA.style.zIndex = "2";

    });



  
squareL.addEventListener("mousedown", (e) => {
    //   e.preventDefault();

      initialX = e.clientX;
      initialY = e.clientY;
      squareL.style.zIndex = "3";
    
      moveElement = true;
    });
 
    squareL.addEventListener("mousemove", (e) => {
     
      if (moveElement) {
       
      squareL.style.zIndex = "3";
    
        let newX = e.clientX;
        let newY = e.clientY;
        yL = squareL.offsetTop - (initialY - newY);
        xL = squareL.offsetLeft - (initialX - newX);
        newAng = (xB - xL < 0) * Math.PI + Math.atan((yB - yL)/(xB - xL));
        newAngm = (xL - xA < 0) * Math.PI + Math.atan((yL - yA)/(xL - xA));
        squareL.style.top = yL + "px";
        squareL.style.left = xL + "px";
        distB = (yB - yL) / Math.sin(newAng);
        distL = (yL - yA) / Math.sin(newAngm);
        lineL.style.transform = "rotate(" + newAng + "rad)"
        lineL.style.width = distB + "px";
        lineA.style.transform = "rotate(" + newAngm + "rad)"
    lineA.style.width = distL + "px";
        initialX = newX;
        initialY = newY;
    
      }
    });
  
    squareB.addEventListener(
      "mouseup",
      (stopMovement = () => {
        moveElement = false;
  squareL.style.zIndex = "2";

      })
    );
    squareL.addEventListener("mouseleave", stopMovement);
    squareL.addEventListener("mouseup", () => {
      moveElement = false;
  squareL.style.zIndex = "2";

    });

   
    squareB.addEventListener("mousedown", (e) => {
    
          initialX = e.clientX;
          initialY = e.clientY;
          squareB.style.zIndex = "3";
    
          moveElement = true;
        });
       
        squareB.addEventListener("mousemove", (e) => {
         
          if (moveElement) {
           
          squareB.style.zIndex = "3";
        
            let newX = e.clientX;
            let newY = e.clientY;
            yB = squareB.offsetTop - (initialY - newY);
            xB = squareB.offsetLeft - (initialX - newX);
            newAng = (xA2 - xB < 0) * Math.PI + Math.atan((yA2 - yB)/(xA2 - xB));
            newAngm = (xB - xL < 0) * Math.PI + Math.atan((yB - yL)/(xB - xL));
            squareB.style.top = yB + "px";
            squareB.style.left = xB + "px";
            distA2 = (yA2 - yB) / Math.sin(newAng);
            distB = (yB - yL) / Math.sin(newAngm);
            lineB.style.transform = "rotate(" + newAng + "rad)"
            lineB.style.width = distA2 + "px";
            lineL.style.transform = "rotate(" + newAngm + "rad)"
        lineL.style.width = distB + "px";
            initialX = newX;
            initialY = newY;
        
          }
        });
      
        squareB.addEventListener(
          "mouseup",
          (stopMovement = () => {
            moveElement = false;
      squareB.style.zIndex = "2";
    
          })
        );
        squareB.addEventListener("mouseleave", stopMovement);
        squareB.addEventListener("mouseup", () => {
          moveElement = false;
      squareB.style.zIndex = "2";
    
        });

        squareA2.addEventListener("mousedown", (e) => {
            //   e.preventDefault();
   
              initialX = e.clientX;
              initialY = e.clientY;
              squareB.style.zIndex = "3";
            
              moveElement = true;
            });
            squareA2.addEventListener("mousemove", (e) => {
              if (moveElement) {
                // e.preventDefault();
              squareA2.style.zIndex = "3";
            
                let newX = e.clientX;
                let newY = e.clientY;
                yA2 = squareA2.offsetTop - (initialY - newY);
                xA2 = squareA2.offsetLeft - (initialX - newX);
                newAng = (xM - xA2 < 0) * Math.PI + Math.atan((yM - yA2)/(xM - xA2));
                newAngm = (xA2 - xB < 0) * Math.PI + Math.atan((yA2 - yB)/(xA2 - xB));
                squareA2.style.top = yA2 + "px";
                squareA2.style.left = xA2 + "px";
                distA2 = (yA2 - yB) / Math.sin(newAngm);
                distM = (yM - yA2) / Math.sin(newAng);
                lineB.style.transform = "rotate(" + newAngm + "rad)"
                lineB.style.width = distA2 + "px";
                lineA2.style.transform = "rotate(" + newAng + "rad)"
            lineA2.style.width = distM + "px";
                initialX = newX;
                initialY = newY;
            
              }
            });
          
            squareA2.addEventListener(
              "mouseup",
              (stopMovement = () => {
                moveElement = false;
          squareA2.style.zIndex = "2";
        
              })
            );
            squareA2.addEventListener("mouseleave", stopMovement);
            squareA2.addEventListener("mouseup", () => {
              moveElement = false;
          squareA2.style.zIndex = "2";
        
            });



console.log(yM);
  



// lineM.style.left = 22.5 + "px";
// lineM.style.right = 22.5 + "px";

// lineA.style.width = distA + "px";
// lineA.style.transform = " rotate(" + angA + "rad)";
// lineA.style.transform = " rotate(" + angA + "rad)"




// Math.sin(radians)
// Math.cos(radians)

// let distL = Math.random() * 300 + 60; 


// let angL = Math.random() * max + min;

// console.log(max);
// console.log(min);

// console.log(Math.sin(angL));


// let xL = xA + distL * Math.cos(angL);
// let yL = yA + distL *Math.sin(angL);

// while((yL < 0) || (yL > 500)) {

//     angL = Math.random() * (max - min) + min;
//     yL = yA + distL * Math.sin(angL);
 
//    };

squareL.style.left = xL + "px";
squareL.style.top = yL + "px";

console.log("xM: " + xM);
console.log("xA: " + xA);
console.log("xL: " + xL);



console.log("yM: " + yM);
console.log("yA: " + yA);
console.log("yL: " + yL);












// min: 7, increments 15, max 82; ; 

// console.log(Math.floor(Math.random() * 10) * 19 + 9);

// let squarem = squares[Math.floor(Math.random() * 3) * 2];

// let squarea = squares[Math.floor(Math.random() * 3) * 2 + 2];

// let squarel = squares[Math.floor(Math.random() * 3) * 2 + 4];

// let squareb = squares[Math.floor(Math.random() * 3) * 2 + 6];

// let squarea2 = squares[Math.floor(Math.random() * 3) * 2 + 8];

// let square = squares[Math.floor(Math.random() * squares.length)];




// let linemh = squares[18];
// let linemv = squares[3];

// let posM = Math.floor(Math.random() * 10) * 10;



// let posA = [posM + 20, posM + 2, posM - 20];

// let randomA = posA[Math.floor(Math.random() * posA.length)];

// if(posM < 20){
//     randomA = posA[Math.floor(Math.random() * 2)];   
//     }
// else if (posM > 70) {
//     randomA = posA[Math.floor(Math.random() * 2 + 1)];    
// }


// while ((randomA < 0) || (randomA > 100))
// {randomA = posA[Math.floor(Math.random() * posA.length)];};


// let posL = [randomA + 2];

// let randomL = posL[Math.floor(Math.random() * posL.length)];

// while((randomL == posM) || (randomL < 0) || (randomL > 100)) {
//     randomL = posL[Math.floor(Math.random() * posL.length)];
    
//     };


// if(randomL == posM && randomA < 20){
//     randomL = posL[1];

// }
// else if (randomL == posM && randomA > 80){
//     randomL = posL[1];

// };

// while(randomL == posM) {
//     randomL = posL[Math.floor(Math.random() * posL.length)];
//     };

//     while(randomL < 0 || randomL > 100) {
//         randomL = posL[Math.floor(Math.random() * posL.length)];
//         };

// while(randomL < 0 || randomL > 100) {
//     randomL = posL[Math.floor(Math.random() * posL.length)];
//     };

// if(randomA < 20){
//     randomL = posL[Math.floor(Math.random() * 2)];   
//     }
// else if (randomA > 70) {
//     randomL = posL[Math.floor(Math.random() * 2 + 1)];    
// }

// if(randomA <= 12 && posM >= 0) {
//     randomL = posL[1]; 
// }
// else if(randomA > 12 && randomA < 22 && posM < 68) {
//     randomL = posL[Math.floor(Math.random() * 2)];   
//     }
// else if(randomA < 22 && posM >= 68) {
//     randomL = posL[Math.floor(Math.random() * 2)];   
//     }
// else if(randomA >= 22 && posM > 68) {
//     randomL = posL[Math.floor(Math.random() * 2 + 1)];
// }
// else if(randomA >= 22 && randomA < 70 && posM < 68) {
//     randomL = posL[Math.floor(Math.random() * 2)];
// }
// else if(randomA >= 70 && posM <= 68) {
//     randomL = posL[1];   };


// let posB = [randomL + 20, randomL + 2, randomL - 20];


// let randomB = posB[Math.floor(Math.random() * posB.length)];

// while((randomB == randomA) || (randomB < 0) || (randomB > 100)) {
//     randomB = posB[Math.floor(Math.random() * posB.length)];
    
//     };

// while(randomB === randomA) {
//     randomB = posB[Math.floor(Math.random() * posB.length)];
    
//     };

//     while(randomB < 0 || randomB > 100) {
//         randomB = posB[Math.floor(Math.random() * posB.length)];
//         };

// if(randomL < 20){
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if (randomL > 70) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];    
// }

// if(randomL <= 12 && randomA >= 0) {
//     randomB = posB[1]; 
// }
// else if(randomL > 12 && randomL < 24 && randomA < 70) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL < 24 && randomA >= 70) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL >= 24 && randomA > 70) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];
// }
// else if(randomL >= 24 && randomL < 42 && randomA < 70) {
//     randomB = posB[Math.floor(Math.random() * 2)];
// }
// else if(randomL >= 42 && randomA <= 70) {
//     randomB = posB[1];   };


// if(randomL < 68){
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if (randomL > 54) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];    
// };


// let posA2 = [randomB + 20, randomB + 2, randomB - 20];
// let randomA2 = posA2[Math.floor(Math.random() * posA2.length)];

// while((randomA2 == randomL) || (randomA2 < 0) || (randomA2 > 100)) {
//     randomA2 = posA2[Math.floor(Math.random() * posA2.length)];
    
//     };

// if(randomB <= 14 && randomL >= 2) {
//     randomA2 = posA2[1]; 
// }
// else if(randomB > 12 && randomB < 22 && randomL < 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2)];   
//     }
// else if(randomB < 22 && randomL > 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2)];   
//     }
// else if(randomB >= 22 && randomL > 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2 + 1)];
// }

// else if(randomB >= 22 && randomB <= 42 && randomL < 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2)];
// }
// else if(randomB > 42 && randomL <= 70) {
//     randomA2 = posA2[1]; };



// let aPosition = [aVert, aHor];






// else if(randomA > 52) {
//     randomL = posL[Math.floor(Math.random() * 2 + 1)];    
// }



// let squarem = squares[posM];
// let squarea = squares[randomA];
// let squarel = squares[randomL];
// let squareb = squares[randomB];
// let squarea2 = squares[randomA2];

// console.log("posM " + posM);


// console.log("randomA " + randomA);


// console.log("randomL " + randomL);

// console.log("randomB " + randomB);

// console.log("randomA2 " + randomA2);



// squarem.innerHTML = "M";
// squarea.innerHTML = "A";
// squarel.innerHTML = "L";
// squareb.innerHTML = "B";
// squarea2.innerHTML = "A";


// linemh.classList.add("line");
// linemv.classList.add("line", "rotate");



// let lineA = squares[posA[0] - 10];
// let lineL = squares[posL[0] - 10];
// let lineB = squares[posB[0] - 10];
// let lineA2 = squares[posA2[0] - 10];





// if(squarea===squares[posA[1]]){
//      lineA = squares[posA[1] - 1];
// lineA.classList.add("line", "rotate");
// squarem.style.marginLeft = "-5px";
// squarem.style.marginRight = "5px";

// }

// else if(squarea===squares[posA[2]]){
//     lineA = squares[posA[2] + 10];
//     lineA.classList.add("line");

//     }
// else {
//     lineA.classList.add("line");
// }

// if(squarel===squares[posL[1]]){
//     lineL = squares[posL[1] - 1];
// lineL.classList.add("line", "rotate");


// }

// else if(squarel===squares[posL[2]]){
//    lineL = squares[posL[2] + 10];
//    lineL.classList.add("line");
//    squarel.style.marginLeft = "8px";
// squarel.style.marginRight = "-8px";

//    }
// else {
//    lineL.classList.add("line");
//    squarel.style.marginLeft = "8px";
// squarel.style.marginRight = "-8px";
// }



// if(squareb===squares[posB[1]]){
//     lineB = squares[posB[1] - 1];
// lineB.classList.add("line", "rotate");


// }

// else if(squareb===squares[posB[2]]){
//    lineB = squares[posB[2] + 10];
//    lineB.classList.add("line");
//    squarel.style.marginLeft = "8px";
//    squarel.style.marginRight = "-8px";
   
//    }
// else {
//    lineB.classList.add("line");
//    squarel.style.marginLeft = "8px";
//    squarel.style.marginRight = "-8px";
   
// };

// if(squarea2===squares[posA2[1]]){
//     lineA2 = squares[posA2[1] - 1];
// lineA2.classList.add("line", "rotate");

// }
// else if(squarea2===squares[posA2[2]]){
//    lineA2 = squares[posA2[2] + 10];
//    lineA2.classList.add("line");
//    }
// else {
//    lineA2.classList.add("line");};

// let palette = ["#C93635", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9"];


// button0.onclick = function(){
//     randomB = posB[Math.floor(Math.random() * posB.length)];

// if(randomL <= 18 && randomA >= 2) {
//     randomB = posB[1]; 
// }
// else if(randomL > 18 && randomL < 36 && randomA < 52) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL < 36 && randomA >= 52) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL >= 36 && randomA > 52) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];
// }
// else if(randomL >= 36 && randomL < 54 && randomA < 52) {
//     randomB = posB[Math.floor(Math.random() * 2)];
// }
// else if(randomL >= 54 && randomA <= 52) {
//     randomB = posB[1];   };

// squareb = squares[randomB];


// squareb.innerHTML = "B";


// };








// setInterval(function(){
//     let squarem = squares[Math.floor(Math.random() * 6) * 15 + 7];

// let squarea = squares[Math.floor(Math.random() * 6) * 15 + 9];

// let squarel = squares[Math.floor(Math.random() * 6) * 15 + 11];

// let squareb = squares[Math.floor(Math.random() * 6) * 15 + 13];

// let squarea2 = squares[Math.floor(Math.random() * 6) * 15 + 15];


//     squarem.innerHTML = "M";
//     squarea.innerHTML = "A";
//     squarel.innerHTML = "L";
//     squareb.innerHTML = "B";
//     squarea2.innerHTML = "A";

// }, 2000);







// m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";



// while (lines.style.left === m.style.left) {
//     m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a.style.left) {
//     a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === l.style.left) {
//     l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === b.style.left) {
//     b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a2.style.left) {
//     a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }


// setInterval(function(){
   
// m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";



// while (lines.style.left === m.style.left) {
//     m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a.style.left) {
//     a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === l.style.left) {
//     l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === b.style.left) {
//     b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a2.style.left) {
//     a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
// }, 2000);


// // button.onclick = multiColors;

// function multi () {
    
//     timeValue = setInterval(function(){
// m.style.color = palette[Math.floor(Math.random() * palette.length)];
//     a.style.color = palette[Math.floor(Math.random() * palette.length)];
//     l.style.color = palette[Math.floor(Math.random() * palette.length)];
//     b.style.color = palette[Math.floor(Math.random() * palette.length)];
//     a2.style.color = palette[Math.floor(Math.random() * palette.length)];
    
//     lines.style.color = palette[Math.floor(Math.random() * palette.length)];}, 2000);
// }

// function rando () {
//     clearTimeout(timeValue);
//     timeRando = setInterval(function(){
// let randomColor = palette[Math.floor(Math.random() * palette.length)];

//     m.style.color = randomColor;
//     a.style.color = randomColor;
//     l.style.color = randomColor;
//     b.style.color = randomColor;
//     a2.style.color = randomColor;
//     lines.style.color = randomColor;}, 2000);



// }

// function red () {
//     clearTimeout(timeValue);
//     clearTimeout(timeRando);
// m.style.color = null;
// a.style.color = null;
// l.style.color = null;
// b.style.color = null;
// a2.style.color = null;
// lines.style.color = null;
  
// }

// function black () {
//     clearTimeout(timeValue);
//     clearTimeout(timeRando);

//     m.style.color = "black";
//     a.style.color = "black";
//     l.style.color = "black";
//     b.style.color = "black";
//     a2.style.color = "black";
//     lines.style.color = "black";

// }

// let randomColor = palette[Math.floor(Math.random() * palette.length)];



// button.addEventListener("click", multi);

// button2.addEventListener("click", red);

// button3.addEventListener("click", black);

// button4.addEventListener("click", rando);






   


// // m.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // a.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // l.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // b.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // a2.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";


