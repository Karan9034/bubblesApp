var canvas = document.getElementById("bubbleCanvas");
var ctx = canvas.getContext("2d");
let raf;
const cursor = {
    x: 0,
    y: 0,
};
var arrowsPos = {
    yellowX: 1000,
    blueX: 1000,
    redX: 1000,
    greenX: 1000,
    yellowY: 80,
    blueY: 220,
    redY: 360,
    greenY: 500,
}


const arrow = {
    draw(x, y){
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+15, y-15);
        ctx.lineTo(x+15, y-5);
        ctx.lineTo(x+100, y-5);
        ctx.lineTo(x+100, y+5);
        ctx.lineTo(x+15, y+5);
        ctx.lineTo(x+15, y+15);
        ctx.lineTo(x, y);
        ctx.fill();
    }
}

canvas.addEventListener("mousedown", (e) => {
    cursor.x = e.offsetX;
    cursor.y = e.offsetY;
        raf = window.requestAnimationFrame(animate);
});

function clear() {
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    window.cancelAnimationFrame(raf)
}

function animate(){
    clear();
    if(cursor.x>=90 && cursor.x<=210 && cursor.y>=20 && cursor.y<=140 && arrowsPos.yellowX>210){
        arrowsPos.yellowX -= 5;
        draw()
        raf = window.requestAnimationFrame(animate)
    }
    else if(cursor.x>=90 && cursor.x<=210 && cursor.y>=160 && cursor.y<=280 && arrowsPos.blueX>210){
        arrowsPos.blueX -= 5;
        draw()
        raf = window.requestAnimationFrame(animate)
    }
    else if(cursor.x>=90 && cursor.x<=210 && cursor.y>=300 && cursor.y<=420 && arrowsPos.redX>210){
        arrowsPos.redX -= 5;
        draw()
        raf = window.requestAnimationFrame(animate)
    }
    else if(cursor.x>=90 && cursor.x<=210 && cursor.y>=440 && cursor.y<=560 && arrowsPos.greenX>210){
        arrowsPos.greenX -= 5;
        draw()
        raf = window.requestAnimationFrame(animate)
    }
    else{
        draw()
    }
}

function draw(){
    clear()
    ctx.lineWidth=2

    ctx.fillStyle = '#FFFF00'
    if(arrowsPos.yellowX == 210) ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(150, 80, 60, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();

    ctx.fillStyle = "#0000FF";
    if(arrowsPos.blueX == 210) ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(150, 220, 60, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();

    ctx.fillStyle = "#FF0000";
    if(arrowsPos.redX == 210) ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(150, 360, 60, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();

    ctx.fillStyle = "#00FF00";
    if(arrowsPos.greenX == 210) ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(150, 500, 60, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();

    arrow.draw(arrowsPos.yellowX, arrowsPos.yellowY)
    arrow.draw(arrowsPos.blueX, arrowsPos.blueY)
    arrow.draw(arrowsPos.redX, arrowsPos.redY)
    arrow.draw(arrowsPos.greenX, arrowsPos.greenY)
}


function reset(){
    arrowsPos = {
        yellowX: 1000,
        blueX: 1000,
        redX: 1000,
        greenX: 1000,
        yellowY: 80,
        blueY: 220,
        redY: 360,
        greenY: 500,
    }
    draw()
    window.cancelAnimationFrame(raf);
}

var button = document.getElementById('reset')
button.addEventListener('click', reset)

draw()