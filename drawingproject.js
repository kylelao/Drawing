var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "grey";
canvas.fillRect(0, 500, 1350, 70);

canvas.fillStyle = "#727272";
canvas.fillRect(0, 0, 20, 490);
canvas.fillStyle = "#727272";
canvas.fillRect(0, 0, 90, 20);
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(120, 60);
canvas.lineTo(60, 60);
canvas.lineTo(90, 20);
canvas.fill();


canvas.fillStyle = "#727272";
canvas.fillRect(300, 0, 20, 490);
canvas.fillStyle = "#727272";
canvas.fillRect(300, 0, 90, 20);
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(355, 60);
canvas.lineTo(420, 60);
canvas.lineTo(390, 20);
canvas.fill();


canvas.fillStyle = "#727272";
canvas.fillRect(600, 0, 20, 490);
canvas.fillStyle = "#727272";
canvas.fillRect(600, 0, 90, 20);
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(655, 60);
canvas.lineTo(720, 60);
canvas.lineTo(690, 20);
canvas.fill();


canvas.fillStyle = "#727272";
canvas.fillRect(900, 0, 20, 490);
canvas.fillStyle = "#727272";
canvas.fillRect(900, 0, 90, 20);
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(955, 60);
canvas.lineTo(1020, 60);
canvas.lineTo(990, 20);
canvas.fill();


canvas.fillStyle = "#727272";
canvas.fillRect(1200, 0, 20, 490);
canvas.fillStyle = "#727272";
canvas.fillRect(1200, 0, 90, 20);
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.moveTo(1255, 60);
canvas.lineTo(1320, 60);
canvas.lineTo(1290, 20);
canvas.fill();




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


canvas.fillStyle = "black";
 canvas.beginPath();
 canvas.moveTo(595,342.5);
 canvas.lineTo(500,340);
 canvas.lineTo(500,260);
 canvas.fill();


 canvas.fillStyle = "black";
 canvas.fillRect(410, 260, 85, 80);

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

canvas.fillStyle = "yellow";
canvas.fillRect(0, 530, 50, 10);


canvas.fillStyle = "yellow";
canvas.fillRect(100, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(200, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(300, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(400, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(500, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(600, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(700, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(800, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(900, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(1000, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(1100, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(1200, 530, 50, 10);

canvas.fillStyle = "yellow";
canvas.fillRect(1300, 530, 50, 10);
