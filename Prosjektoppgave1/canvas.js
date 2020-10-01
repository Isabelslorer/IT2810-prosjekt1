var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');

let animation = null;
const width = 500;
const height = 500;

let click = false;
let hover = false;

const mouse = {
    x: undefined,
    y: undefined
};

canvas.addEventListener('mouseenter', function(event){
    hover = true; 
    makeBubbles();
    animate();
});

canvas.addEventListener('mouseleave', function(e){
    hover = false;
    click = false;
    mouseLeave();
    bubbleArray = [];
});

canvas.addEventListener('click', function(event){
    click = true;
})


function drawFish(){

    c.fillStyle = 'rgba(255,0,0,0.5)'
    //hode
    c.beginPath();
    c.moveTo(350, 200);
    c.lineTo(398.08, 248.52);
    c.lineTo(350, 300);
    c.fill();

    //kropp
    c.beginPath();
    c.moveTo(250, 200);
    c.lineTo(250, 300);
    c.lineTo(350, 300);
    c.lineTo(350, 200);
    c.lineTo(250, 200);
    c.fill();

    //hale
    c.beginPath();
    c.moveTo(250, 248.52);
    c.lineTo(200, 200);
    c.lineTo(200, 300);
    c.lineTo(250, 248.52);
    c.fill();

    //øye                                                  
    c.beginPath();                                                              
    c.arc(365, 235, 4, Math.PI * 2, false);   
    c.strokeStyle = "white";                
    c.stroke(); 
    c.fillStyle = 'black'; 
    c.fill();
                                                            

    //gress
    c.beginPath();
    c.moveTo(50, 500);
    c.lineTo(20, 450);
    c.lineTo(60, 400);
    c.lineTo(30, 300);
    c.lineTo(50, 250);
    c.strokeStyle = "green";
    c.stroke();

    //gress
    c.beginPath();
    c.moveTo(130, 500);
    c.lineTo(150, 450);
    c.lineTo(110, 400);
    c.lineTo(140, 300);
    c.lineTo(120, 200);
    c.strokeStyle = "green";
    c.stroke();

    //gress
    c.beginPath();
    c.moveTo(230, 500);
    c.lineTo(250, 450);
    c.lineTo(210, 400);
    c.strokeStyle = "green";
    c.stroke();
};


function Bubble(x, y){
    this.x = x;
    this.y = y;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, 10, Math.PI * 2, false);
        c.strokeStyle = 'lightblue';
        c.lineWidth = 2;
        c.stroke();
    };

    this.move = function(){
        this.y -=3;
        this.draw();
    };
}


var bubbleArray = [];

function makeBubbles(){
    for(var i = 0; i<20; i++) {
        var x = Math.random()*500;
        var y = Math.random()*400 + 510;
    
        bubbleArray.push(new Bubble(x, y));
    };
};


//farge fisken
function color(){
    c.fillStyle = "#FA3301";
    //hode
    c.beginPath();
    c.moveTo(350, 200);
    c.lineTo(398.08, 248.52);
    c.lineTo(350, 300);
    c.fill();


    //hale
    c.beginPath();
    c.moveTo(250, 248.52);
    c.lineTo(200, 200);
    c.lineTo(200, 300);
    c.lineTo(250, 248.52);
    c.fill();

    c.beginPath();
    c.moveTo(250, 200);
    c.lineTo(250, 300);
    c.lineTo(350, 300);
    c.lineTo(350, 200);
    c.lineTo(250, 200);      
    c.fill();

    //øye                                                
    c.beginPath();                                                              
    c.arc(365, 235, 4, Math.PI * 2, false);   
    c.strokeStyle = "white";                
    c.stroke(); 
    c.fillStyle = 'black'; 
    c.fill();

    c.beginPath();
    c.moveTo(270, 200);
    c.lineTo(270, 300);
    c.lineTo(290, 300);
    c.lineTo(290, 200);
    c.lineTo(270, 200);
    c.strokeStyle = "black";        
    c.stroke(); 
    c.fillStyle = "white";
    c.fill();

    c.beginPath();
    c.moveTo(310, 200);
    c.lineTo(310, 300);
    c.lineTo(330, 300);
    c.lineTo(330, 200);
    c.lineTo(300, 200);   
    c.strokeStyle = "black";     
    c.stroke(); 
    c.fillStyle = "white";
    c.fill();
};


function clear(){
    c.beginPath();
    c.clearRect(0,0, width, height) ;
};

function reload(){
    drawFish();
};

function animate(){
    animation = requestAnimationFrame(animate);
    c.clearRect(0,0, width, height);
    reload();
    if (animation){
        if(hover){
            for(let i = 0; i < bubbleArray.length; i++){
                bubbleArray[i].move();
            }
        }
        if(click){
            color();
        } 
        else {
            drawFish();
        };
    }    
}

function mouseLeave(){
    cancelAnimationFrame(animation);
    animation = null;
    clear();
    reload();
}

reload();