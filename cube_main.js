var canvas;
var rotationSpeed = 0.005;

// Resize the canvas everytime users resize the window
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function setup() {
    max_distance = dist(0, 0, width, height); // distance from top left to bottom right of the canvas
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style('z-index','-2');
}
  
  function draw() {    
    background(23,24,25);
    noFill();
    stroke(34,195,145);
    translate(-windowWidth/2 + 50, -windowHeight/2 + 70, 0); // reposition the matrix
    // reset the paddings of the matrix to 90
    for (let i = 90; i <= windowWidth - 90; i += 90){
       for(let j = 90; j <= windowHeight - 90; j += 90){           
            let size = dist(mouseX, mouseY, i, j);
            size = 28 - size / max_distance * 2;
            push(); // Start a new drawing state
            translate(i,j);

            let m = i / 90;
            let n = j / 90;
         
            if(m % 3 === 0){
                if(n % 3 === 0){
                    rotateZ(frameCount * rotationSpeed);
                    rotateX(frameCount * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
                if(n % 3 === 1){
                    rotateZ(frameCount * -1 * rotationSpeed);
                    rotateX(frameCount * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
                else{
                    rotateZ(frameCount * -1 * rotationSpeed);
                    rotateX(frameCount * -1 * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
            }
            else if(m % 3 === 1){
                if(n % 3 === 1){
                    rotateZ(frameCount * rotationSpeed);
                    rotateX(frameCount * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
                if(n % 3 === 2){
                    rotateZ(frameCount * -rotationSpeed);
                    rotateX(frameCount * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
                else{
                    rotateZ(frameCount * -1 * rotationSpeed);
                    rotateX(frameCount * -1 * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
            }
            else{
                if(n % 3 === 2){
                    rotateZ(frameCount * rotationSpeed);
                    rotateX(frameCount * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
                if(n % 3 === 0){
                    rotateZ(frameCount * -rotationSpeed);
                    rotateX(frameCount * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
                else{
                    rotateZ(frameCount * -1 * rotationSpeed);
                    rotateX(frameCount * -1 * rotationSpeed);
                    rotateY(frameCount * rotationSpeed);
                }
            }      
            
            box(size,size,size);
            pop(); // Restore original state
        }
        
    } 
    push();

    if (windowWidth >= 450){
        translate(windowWidth * 0.03,0);
        rotateX(5);
        rotateY(5);
        rotateZ(5);
    }else{
        // moble version
        translate(windowWidth * 0.03 - 10,0);
        rotateX(0);
        rotateY(0);
        rotateZ(-6);
    }

    let distance = dist(mouseX, mouseY, 90, 70);
    if (distance < 40) {
        rotateZ(frameCount * rotationSpeed * 1.5);
        rotateX(frameCount * rotationSpeed * 1.5);
        rotateY(frameCount * rotationSpeed * 1.5);
    }
    let bigBox = box(25,25,25);
    pop();
  }