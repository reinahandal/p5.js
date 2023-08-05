function setup(){
    // Creates a canvas with 800px width and 600px height
    createCanvas(500,500);
    frameRate(80)
}

function draw(){
    // Loops infinitely after setup() is run
    background('purple');

    for(let lineX = 0; lineX < 130; lineX++){
        stroke('black')
        line(4 + lineX * 4, 0, 4 + lineX * 4, height);
    }

    for(let i = 1; i < 255; i++){
        stroke(i);
        circle(frameCount, frameCount, 255-i);
    }
}