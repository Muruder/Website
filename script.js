var text= document.getElementById("text");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mousePos = {x:0, y:0};
var timer = 0;

var enemies = [];
for (var i=0; i<10; i++) {
  enemies.push({x:Math.random()*100, y:Math.random()*100});
}


// var button = {x:20, y:30, w:80, h:40}; see line 26
ctx.font = "30px Arial";
ctx.textAlign = "right";

window.setInterval(function(){  
  for (var i=0; i<10; i++) {
  enemies[i].x += 1;
}
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(mousePos.x-10,mousePos.y-10,20,20);
  // ctx.fillRect(button.x,button.y, button.w, button.h);
  ctx.fillText(Math.round(timer), canvas.width - 10, 30 );
  timer += 1/60;

  
  ctx.fillStyle = "green";
  for (var i=0; i<enemies.length; i++) {
    ctx.fillRect(enemies[i].x,enemies[i].y,20,20);
  }
}, 1000/60);
  

canvas.addEventListener('mousemove', function(evt) {
  var rect = canvas.getBoundingClientRect(); 
  mousePos = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}, false)

/* //Im not using a button, this is a button
canvas.addEventListener('click', function() {
  if (mousePos.x >= button.x && mousePos.x <= button.x + button.w) {
    if (mousePos.y >= button.y && mousePos.y <= button.y + button.h ) {
      console.log("Button CLicked");
    }
  }
} );
*/

