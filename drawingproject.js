var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "grey";
canvas.fillRect(0, 500, 1300, 65);

canvas.fillStyle = "red";
canvas.fillRect(200, 350, 200, 80);

canvas.fillStyle = "red";
canvas.fillRect(400, 250, 100, 180);

canvas.fillStyle = "red";
canvas.fillRect(500, 340, 225, 90);

//triangle
 canvas.beginPath();
 canvas.moveTo(600,340);
 canvas.lineTo(500,395);
 canvas.lineTo(500,250);
 canvas.fill();


canvas.beginPath();
canvas.arc(325, 450, 50, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "black";
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(625, 450, 50, 0, 2*Math.PI);
canvas.closePath();
canvas.fillStyle = "black";
canvas.fill();
canvas.stroke();
