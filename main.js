function preload(){
    
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
 
 fill(255,0,0);
 stroke(255,0,0);
 rect(0,150,240,200);

 fill(255,0,0);
 stroke(255,0,0);
 rect(430,150,240,200);

 fill(255,0,0);
 stroke(255,0,0);
 rect(200,0,240,180);

 fill(255,0,0);
 stroke(255,0,0);
 rect(200,340,240,180);

image(video,210,150,220,200);
}