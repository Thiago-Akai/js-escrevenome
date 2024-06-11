function setup() {
    createCanvas(600, 600);
    background("White");
  }
  
  function draw() {
  
    stroke("blue");
    fill("Red");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  