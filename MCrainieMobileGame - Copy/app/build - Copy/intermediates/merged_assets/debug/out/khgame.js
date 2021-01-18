 var canvas;
 var canvasContext;
 var canvasX;
 var canvasY;
 var mouseIsDown = 0;


 var menuBackground;
 var speechBubble;
 var gameOverScreen = false;
 var displayBubble = false;

 var startTimeMS;
 var menuMusicPlaying = false;

 var khMusic = new Audio('menuMusic.mp3');
 var goodClick = new Audio ('GoodClick2.wav');
 var badClick = new Audio ('BadClick.wav');
 var reallyGoodClick = new Audio('ReallyGoodClick.wav');
 var finalFantasy = new Audio ('ffMusic.mp3');
 var beganGame = false;




 //window.onload =
 function load() {
 canvas = document.getElementById('gameCanvas');
 canvasContext = canvas.getContext('2d');
 init();
 //document.getElementById("meme").play();


 window.onload = function()
 {

 }






 canvasX = canvas.width/2;
 canvasY = canvas.height-30;

 if(!gameOverScreen)
 {
 gameLoop();
 }


 }

 function aSprite(x, y, imageSRC, velx, vely) {
 this.zindex = 0;
 this.x = x;
 this.y = y;
 this.vx = velx;
 this.vy = vely;
 this.sImage = new Image();
 this.sImage.src = imageSRC;
 }

 aSprite.prototype.renderF = function(width, height)
 {
 canvasContext.drawImage(this.sImage,this.x, this.y, width, height );
 }
 aSprite.prototype.render = function()
 {
 canvasContext.drawImage(this.sImage,this.x, this.y);
 }
 aSprite.prototype.update = function(deltaTime)
 {
 this.x += deltaTime * this.vx;
 this.y += deltaTime * this.vy;
 }

 function init() {

 if (canvas.getContext) {
 //Set Event Listeners for window, mouse and touch

 window.addEventListener('resize', resizeCanvas, false);
 window.addEventListener('orientationchange', resizeCanvas, false);




 resizeCanvas();


 speechBubble = new aSprite(window.innerWidth/2 - 165, window.innerHeight/2, "khspeechbubble.png", 0, 0);
 menuBackground = new aSprite(0,0,"images/airship2.jpg", 0, 0);


 }
 }

function Tester()
{
    console.log("button working");
    document.getElementById("speechy").style.display="block";
    document.getElementById("check").style.display="block";
    document.getElementById("playGameButton").style.display = "none";
    document.getElementById("exitButton").style.display = "none";
    document.getElementById("tutorialButton").style.display = "none";
    document.getElementById("yesButton").style.display =  "block";
    document.getElementById("noButton").style.display = "block";
    goodClick.volume = 0.1;
    goodClick.play();

   if(!menuMusicPlaying)
   {
        menuMusicPlaying = true;
        khMusic.volume = 0.1;
        khMusic.play();
        console.log("Music");
   }


}

function Tester2()
{
    badClick.volume = 0.1;
    badClick.play();
    console.log("Death");
    document.getElementById("speechy").style.display="none";
    document.getElementById("check").style.display="none";
    document.getElementById("playGameButton").style.display = "block";
    document.getElementById("exitButton").style.display = "block";
    document.getElementById("tutorialButton").style.display = "block";
    document.getElementById("yesButton").style.display =  "none";
    document.getElementById("noButton").style.display = "none";


}

function goomba()
{
console.log("GOOM");
}

function goomba2()
{
menuMusicPlaying = false;
khMusic.pause();
khMusic.currentTime = 0;
finalFantasy.volume = 0.1;
finalFantasy.play();
document.getElementById("speechy").style.display="none";
document.getElementById("check").style.display="none";
document.getElementById("yesButton").style.display =  "none";
document.getElementById("noButton").style.display = "none";
reallyGoodClick.volume = 0.1;
reallyGoodClick.play();
beganGame = true;
//document.getElementById("body").style.backgroundImage = "url('images/AirShip2.png')";
console.log("GOOM33");
}
 function bigText(x)
  {
    // console.log("OVER");
     //x.style.color = "#ffd700"
  }




 function resizeCanvas() {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 }

function gameLoop(){
console.log("gameLoop");
var elapsed = (Date.now() - startTimeMS)/1000;

 update(elapsed);
 render(elapsed);
 startTimeMS = Date.now();
 requestAnimationFrame(gameLoop);
 //if(displayBubble == true)
// {
   // speechBubble.renderF(400, 162);
// }

 }
 function render(delta) {
if(beganGame)
{
    menuBackground.renderF(canvas.width,canvas.height);
}

 }

 function update(delta) {

 }

 function collisionDetection() {

 }

