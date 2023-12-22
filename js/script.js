const canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d'),
    isDrawing = false,
    brushWidth = 1

window.addEventListener('load',() =>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

function startDraw(){
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth
}

function stopDraw(){
    isDrawing = false;
}

const drawing = e =>{
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
}

canvas.addEventListener('mousemove',drawing);
canvas.addEventListener('mousedown',startDraw);
canvas.addEventListener('mouseup',stopDraw);
