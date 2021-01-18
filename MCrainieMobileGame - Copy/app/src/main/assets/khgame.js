 var canvas = document.getElementById('gameCanvas');
 var canvasContext = canvas.getContext('2d');

 var canvasX;
 var canvasY;
 var mouseIsDown = 0;

 var menuBackground;
 var rikuIcon;
 var speechBubble;
 var gameOverScreen = false;
 var displayBubble = false;
 var rikuSprite;
 var flipme = false;
 var enemyMove = true;
 var enemy1;
 var enemy2;
 var fireball1;
 var gamePaused = false;


 var startTimeMS;
 var menuMusicPlaying = false;
 var enemyFrameX = 0;

 var khMusic = new Audio('menuMusic.mp3');
 var goodClick = new Audio ('GoodClick2.wav');
 var badClick = new Audio ('BadClick.wav');
 var reallyGoodClick = new Audio('ReallyGoodClick.wav');
 var finalFantasy = new Audio ('ffMusic.mp3');
 var swordSwing = new Audio ('SwordSwing.wav');
 var swordHit = new Audio ('swordHit.wav');
 var fireball = new Audio ('fireball.wav');
 var fireballHit = new Audio('fireballHit.wav');
 var enemyHitSound = new Audio('enemyHit.wav');
 var powerUpSound = new Audio('powerUp.wav');
 var healthSound = new Audio('healthPotion.wav');
 var manaSound = new Audio('manaPotion.wav');
 var reflectSound = new Audio('reflectOrb.wav');
 var orbSound = new Audio('orbHit.wav');
 var beganGame = false;
 var keys = [];
 var speedModifier = 1;
 var showControlImage = false;
 var tutorialTimer = 2000;
 //var resetAttack = false;

 var meow = new Image();
 var heal = new Image();
 var hit = new Image();
 var starPowerUpImg = new Image();
 var loseHealth = new Image();
 var healText = new Image();
 var baseEnemy = new Image();
 var poweredUpIMG = new Image()
 var controlsImage;
 var originalBG;
 var friction = 0.8;
 heal.src = "heal.png";
 meow.src = "test.png";
 hit.src = "HitText.png";
 healText.src ="healTextImage2.png";
 baseEnemy.src = "enemyWalk.png";
 loseHealth.src = "loseHealth.png";
 var rikuIcon2 = new Image();
 rikuIcon2.src = "rikuIcon.png";
 starPowerUpImg.src = "star.png";
 poweredUpIMG.src = "poweredUpText.png";

 var startTimeMS = 0;
 var playerFrame = 0;
 var magicFrame = 0;
 var playerFrameX = 0;
 var playerFrameY = 0;
 var magicFrameX = 0;
 var playerSpriteWidth = 95;
 var playerSpriteHeight = 121;
 var playerSpriteTimer = 0.05;
 var playerSpriteTimerMax = 0.017;
 var healSpriteHeight = 128;
 var frameMax = 6;
 var startTimeMS = 0;
 var startTimeMS2 = 0;
 var enemyStartTime = 0;
 var animationLimit = 8;
 var tester69 = false;
 var enemySpawn = false;



 var mostRecentKey = 1;
 var frameTimer = 8;
 var healCD = 180;
 var manaCD = 360;
 var fireballCD = 80;
 var collidingwithBoxLeft = false;
 var collidingwithBoxRight = true;
 var collidingwithBoxTop = false;
 var collidingwithBoxBot = false;
 var scaleModifier;
 var rikuIconX;
 var rikuIconY;
 var magicFrameMax = 2;
 var magicFrameTimer = 8;
 var tester42 = 0;
 var enemy1;
 var activeWave;
 var activeSpellValue = 1;
 var waveTimer = 240;
 var currentWave = 1;
 var enemiesKilled = 0;
 var currentWaveName = "ONE";
 var waveOneSpawned = true;
 var waveTwoSpawned = false;
 var waveThreeSpawned = false;
 var waveFourSpawned = false;
 var waveFiveSpawned = false;
 var waveSixSpawned = false;
 var waveSevenSpawned = false;
 var waveEightSpawned = false;
 var waveNineSpawned = false;
 var waveTenSpawned = false;




 var boxes = [];
 var enemy = [];
 var fireballs = [];
 var wizards = [];
 var orbs = [];
 var powerUps = [];
 var Gargoyles = [];
 var imgCrate = new Image();

 var player = {
     x: 100,
     y: 100,
     speed: 5,
     width: 91,
     height: 121,
     src: 'idleSheet.png',
     velX: 1,
     magic: 100,
     maxMagic: 100,
     health: 100,
     maxHealth:100,
     velY: 1,
     attackDamage: 1,
     poweredUp: false,
     poweredUpTimer: 0,
     };




 //window.onload =
 function load() {

	 init();

	 canvasX = canvas.width/2;
	 canvasY = canvas.height-30;

	 if(!gameOverScreen)
	 {
	 gameLoop();
	 animationFrame();
	 animationFrameMagic();


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
 resizeCanvas();
 if (canvas.getContext) {

 imgCrate.src = 'RTS_Crate_0.png';
 window.addEventListener('orientationchange', resizeCanvas, false);
 speechBubble = new aSprite(window.innerWidth/2 - 165, window.innerHeight/2, "khspeechbubble.png", 0, 0);
 rikuIcon = new aSprite(canvas.width/60, canvas.height - 100, "rikuIcon.png", 0, 0)
 menuBackground = new aSprite(0,0,"images/ffBG.png", 0, 0);
 controlsImage = new aSprite(0, 0, "Controls.png", 0, 0);
 originalBG = new aSprite(0, 0, 'images/khbackground2.jpg', 0, 0);
 iconsImage = new aSprite(0, 0, "iconsImage.png", 0, 0);
 inGameImage = new aSprite(0, 0, "inGameScreen.png", 0, 0);
 rikuSprite = new aSprite(window.innerWidth - 1000, window.innerHeight - 250, "riku3.png", 1, 0);
 }
 }

function PressedPlayGame()
{
//    console.log("button working");
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

   }


}

function DontPlayGameButton()
{
    badClick.volume = 0.1;
    badClick.play();
    document.getElementById("speechy").style.display="none";
    document.getElementById("check").style.display="none";
    document.getElementById("playGameButton").style.display = "block";
    document.getElementById("exitButton").style.display = "block";
    document.getElementById("tutorialButton").style.display = "block";
    document.getElementById("yesButton").style.display =  "none";
    document.getElementById("noButton").style.display = "none";


}

function TutButton()
{
showControlImage = true;
document.getElementById("playGameButton").style.display = "none";
document.getElementById("exitButton").style.display = "none";
document.getElementById("tutorialButton").style.display = "none";
if(!menuMusicPlaying)
   {
        menuMusicPlaying = true;
        khMusic.volume = 0.1;
        khMusic.play();
   }
goodClick.play();
tutorialTimer = 2000;
}

function YesButton()
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
}

 function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
 	player.x = canvas.width/2;
	player.y = canvas.height/2
	rikuIconX = canvas.width/60;
	rikuIconY = canvas.height - 100;


	scaleModifier = ((screen.width - canvas.width) / canvas.width);
	if(scaleModifier < 0.35){

					player.width = (1-scaleModifier) * 91;
					player.height = (1-scaleModifier) * 121;

	 } else {
		scaleModifier = 0.35;
		}

 }
class Gargoyle
{
    constructor(x, y, width, height, imageSource, dx, dy, angle, colDir, colDir2, alpha, beta, charlie, health, speed, alive, startTime, frame, frameX, frameTimer, frameMax, resetAttack)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageSource = new Image();
        this.imageSource.src = imageSource;
        this.dx = dx;
        this.dy = dy;
        this.angle = angle;
        this.colDir = colDir;
        this.colDir2 = colDir2;
        this.alpha = alpha;
        this.beta = beta;
        this.charlie = charlie;
        this.health = health;
        this.speed = speed;
        this.alive = alive;
        this.startTime = startTime;
        this.frame = frame;
        this.frameX = frameX;
        this.frameTimer = frameTimer;
        this.frameMax = frameMax;
    }

    drawGargoyle()
    {
        if(this.alive == true){
         canvasContext.rect(this.x, this.y, this.width, this.height);
        if(this.charlie <= 100)
        {
            canvasContext.drawImage(this.imageSource, this.frameX * 65, playerFrameY * this.height, this.width - 20, this.height, this.x, this.y, this.width, this.height);
        }

        if(this.charlie > 100)
        {
            canvasContext.drawImage(this.imageSource, this.frameX * this.width, playerFrameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        }
    }

    gargoyleMoveToPlayer()
    {
        if(this.alive == true)
           {
                 if(player.x > this.x)
                 {
                    this.imageSource.src = "gargoyleFlyFlip.png";
                 }

                 if(player.x < this.x)
                 {
                    this.imageSource.src = "gargoyleFly.png";
                 }
                 this.dx = (player.x + (player.width/4)) - (this.x + (this.width/4));
                 this.dy = (player.y + (player.height/4)) - (this.y + (this.height/4));
                 if(player.y > this.y)
                {
                     this.angle = Math.atan2(this.dy - 80 , this.dx);
                }

                if(player.y < this.y)
                {
                    this.angle = Math.atan2(this.dy + 80 , this.dx);
                }



                 }
                 this.x += this.speed * Math.cos(this.angle);
                 this.y += this.speed * Math.sin(this.angle);
    }

    gargoyleCollisionCheck()
    {
        if(this.alive == true)
         {
            this.colDir = colCheck(player, this);
            for(var i = 0; i < fireballs.length; i++)
            {
                this.colDir2 = colCheck(fireballs[i], this);
            }
         }

            if (this.alive == true){
            this.alpha = (player.x + (player.width/2)) - (this.x + (this.width/2));
            this.beta = (player.y + (player.height/2)) - (this.y + (this.height/2));
            this.charlie = Math.sqrt(this.alpha*this.alpha + this.beta* this.beta);
            if(this.charlie <= 99)
            {
                this.resetAttack = false;
                this.frameMax = 3;
                if(player.x < this.x)
                {
                    this.imageSource.src = "gargoyleAttack.png";
                }

                if(player.x > this.x)
                {
                    this.imageSource.src = "gargoyleAttackFlip.png";
                }
                this.speed = 0.01;
            }

            if(this.charlie > 99)
                {
                    if(this.resetEnemyAttack == true)
                    {
                        frameX = 0;
                        frame = 0;
                    }

                    this.frameMax = 2;
                    this.speed = 1;
                }

             if(this.colDir === "l" && meow.getAttribute('src') === 'leftSwing.png' && playerFrame == 2)
                    {
                        this.health -= player.attackDamage;
                        canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight + 40, this.x, this.y, this.width, this.height);
                        swordHit.play();
                    }

                     if(this.colDir === "b" && meow.getAttribute('src') === 'downSwing.png' && playerFrame == 2)
                        {
                            this.health -= player.attackDamage;
                            canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight + 40, this.x, this.y, this.width, this.height);
                            swordHit.play();
                        }

                    if(this.colDir === "r" && meow.getAttribute('src') === 'rightSwing.png' && playerFrame == 2)
                        {
                           this.health -= player.attackDamage;
                            canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight + 40, this.x, this.y, this.width, this.height);
                            swordHit.play();
                        }

                     if(this.colDir === "t" && meow.getAttribute('src') === 'yes.png' && playerFrame == 2)
                     {
                       this.health -= player.attackDamage;
                        console.log("UPHIT");
                        canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight +40, this.x, this.y, this.width, this.height);
                        swordHit.play();
                     }

                     if(this.imageSource.getAttribute('src') === 'gargoyleAttack.png' && this.frameX == 2 || this.imageSource.getAttribute('src') === 'gargoyleAttackFlip.png' && this.frameX == 2)
                     {
                        player.health -= 0.4;
                        canvasContext.drawImage(loseHealth, 0, playerFrameY * 269, 269, playerSpriteHeight + 269, player.x + 5, player.y - 20, 50, 65 + 30);
                     }

                     if(this.health <= 0)
                     {
                        this.speed = 0;
                        this.randomNumber2 = Math.floor(Math.random() * 12);
                        switch(this.randomNumber2)
                        {
                            case 0: createStar(80, 75, "star.png", true);                                   //(powerWidth, powerHeight, powerUpImage, isActive)
                            break;
                            case 1: createStar(120, 100, "bluePotion2.png", true);
                            console.log("blue");
                            break;
                            case 2: createStar(90, 105, "redPotion.png", true);
                            break;
                            case 3:
                            break;
                            case 4:
                            break;
                            case 5:
                            break;
                            case 6:
                            break;
                            case 7:
                            break;
                            case 8:
                            break;
                            case 9:
                            break;
                            case 10:
                            break;
                            case 11:
                            break;
                            case 12:
                            break;
                        }
                        enemiesKilled += 1;
                        this.alive = false;
                     }

    }
   }

   gargoyleAnimate()
   {
            this.startTime = this.startTime +1;
            if (this.frame == 0)
            {
                this.frameX = 1;
            }

            if (this.startTime >= this.frameTimer)
            {
                this.startTime = 0;
                this.frameX++;
                this.frame++;

                if(this.frame > this.frameMax)
                {
                    this.frame = 0;
                    this.FrameX = 1;
                }
            }
   }
}
class Enemy
{
 constructor(x, y, width, height, xVel, yVel, imageSource, walk, walkFlip, attack, attackFlip, dx, dy, angle, colDir, colDir2, name, alpha, beta, charlie, health, speed, maxSpeed, arrayPosition, alive, startTime, frame, frameX, frameTimer, frameMax, resetEnemyAttack, randomNumber, randomNumber2, powerUpCheck)
 {
    this.x = x;
    this.y = y;
    this.imageSource = new Image();
    this.imageSource.src = imageSource;
    this.walk = new Image();
    this.walk.src = walk;
    this.walkFlip = new Image();
    this.walkFlip.src = walkFlip;
    this.attack = new Image();
    this.attack.src = attack;
    this.attackFlip = new Image();
    this.attackFlip.src = attackFlip;
    this.dx = dx;
    this.dy = dy;
    this.angle = angle;
    this.width = width;
    this.height = height;
    this.xVel = xVel;
    this.yVel = yVel;
    this.colDir = colDir;
    this.colDir2 = colDir2;
    this.name = name;
    this.alpha = alpha;
    this.beta = beta;
    this.charlie = charlie;
    this.health = health;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.arrayPosition = arrayPosition;
    this.alive = alive;
    this.startTime = startTime;
    this.frame = frame;
    this.frameX = frameX;
    this.frameTimer = frameTimer;
    this.frameMax = frameMax;
    this.resetEnemyAttack = resetEnemyAttack;
    this.randomNumber = Math.floor(Math.random() * 2);
    this.randomNumber2 = Math.floor(Math.random() * 12);
    this.powerUpCheck = powerUpCheck;

 }

 drawEnemy()
 {
    if(this.alive == true)
   {
    canvasContext.rect(this.x, this.y, this.width + 15, this.height +15);
    canvasContext.drawImage(this.imageSource, this.frameX * 50, playerFrameY * 65, 50, 65, this.x, this.y, this.width, this.height);
   }


 }

 moveTowardsPlayer()
 {
    if(this.alive == true)
   {
         if(player.x > this.x)
         {
            this.imageSource.src = this.walkFlip.src;
         }

         if(player.x < this.x)
         {
            this.imageSource.src = this.walk.src;
         }
         this.dx = (player.x + (player.width/4)) - (this.x + (this.width/4));
         this.dy = (player.y + (player.height/4)) - this.y + (this.height/4);
         if(player.x < this.x)
        {
             this.angle = Math.atan2(this.dy - 10 , this.dx +40);
        }

            if(player.x > this.x)
            {
                this.angle = Math.atan2(this.dy - 10 , this.dx -40);
            }

         }
         //this.angle = Math.atan2(this.dy - 15 , this.dx +60);
         this.x += this.speed * Math.cos(this.angle);
         this.y += this.speed * Math.sin(this.angle);
    }


 collisionCheckWithPlayer()
 {
 if(this.alive == true)
 {
    this.colDir = colCheck(player, this);
    for(var i = 0; i < fireballs.length; i++)
    {
        this.colDir2 = colCheck(fireballs[i], this);
    }
 }

    if (this.alive == true){
    this.alpha = (player.x + (player.width/2)) - (this.x + (this.width/2));
    this.beta = (player.y + (player.height/2)) - (this.y + (this.height/2));
    this.charlie = Math.sqrt(this.alpha*this.alpha + this.beta* this.beta);
   // console.log("You are this far away from__" + this.name + this.charlie);
    if(this.charlie <= 100 && player.x > this.x)
    {
        this.resetEnemyAttack = false;
        this.frameMax = 6;
        this.imageSource.src = this.attack.src;
        this.speed = 0.01;

    }

     if(this.charlie <= 100 && player.x < this.x)
        {
            this.resetEnemyAttack = false;
            this.frameMax = 6;
            this.imageSource.src = this.attackFlip.src;
            this.speed = 0.01;

        }

    if(this.charlie > 72)
    {
        if(this.resetEnemyAttack == true)
        {
            frameX = 0;
            frame = 0;
        }

        this.frameMax = 7;
        this.speed = this.maxSpeed;
    }
    if(this.colDir === "l" && meow.getAttribute('src') === 'leftSwing.png' && playerFrame == 2)
        {
            this.health -= player.attackDamage;
            canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight + 40, this.x, this.y, this.width, this.height);
            swordHit.play();
        }

         if(this.colDir === "b" && meow.getAttribute('src') === 'downSwing.png' && playerFrame == 2)
            {
                this.health -= player.attackDamage;
                canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight + 40, this.x, this.y, this.width, this.height);
                swordHit.play();
            }

        if(this.colDir === "r" && meow.getAttribute('src') === 'rightSwing.png' && playerFrame == 2)
            {
               this.health -= player.attackDamage;
                canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight + 40, this.x, this.y, this.width, this.height);
                swordHit.play();
            }

         if(this.colDir === "t" && meow.getAttribute('src') === 'yes.png' && playerFrame == 2)
         {
           this.health -= player.attackDamage;
            console.log("UPHIT");
            canvasContext.drawImage(hit, 0, playerFrameY * this.width, 148, playerSpriteHeight +40, this.x, this.y, this.width, this.height);
            swordHit.play();
         }



         if(this.health <= 0)
         {
           // console.log(this.name + " Has been fucking murdered");
            this.speed = 0;
            switch(this.randomNumber2)
            {
                case 0: createStar(80, 75, "star.png", true);                                   //(powerWidth, powerHeight, powerUpImage, isActive)
                break;
                case 1: createStar(120, 100, "bluePotion2.png", true);
                console.log("blue");
                break;
                case 2: createStar(90, 105, "redPotion.png", true);
                break;
                case 3:
                break;
                case 4:
                break;
                case 5:
                break;
                case 6:
                break;
                case 7:
                break;
                case 8:
                break;
                case 9:
                break;
                case 10:
                break;
                case 11:
                break;
                case 12:
                break;
            }
            enemiesKilled += 1;
            this.alive = false;


         }

         if(this.imageSource.getAttribute('src') === this.attack.src && this.frameX == 4|| this.imageSource.getAttribute('src') === this.attackFlip.src && this.frameX == 4)
         {
            console.log("Kicked Player");
            player.health -= 0.3;
            canvasContext.drawImage(loseHealth, 0, playerFrameY * 269, 269, playerSpriteHeight + 269, player.x + 5, player.y - 20, this.width, this.height + 30);
            enemyHitSound.play();
         }
         }

 }

 animateEnemy()
 {
  this.startTime = this.startTime +1;
            if (this.frame == 0)
            {
                this.frameX = 1;
            }

            //update frame when timer is less than 0
            if (this.startTime >= this.frameTimer)
            {
                this.startTime = 0;
                this.frameX++;
                this.frame++;

                if(this.frame > this.frameMax)
                {
                    this.frame = 0;
                    this.FrameX = 1;
                }
            }

 }




 }

 class starPowerUp
 {
    constructor(x, y, width, height, powerUpImage, colDir, activePowerUp)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.powerUpImage = new Image();
        this.powerUpImage.src = powerUpImage;
        this.colDir = colDir;
        this.activePowerUp = activePowerUp;

    }

    drawPowerUp()
    {
        if(this.activePowerUp == true);
        {
        canvasContext.rect(this.x, this.y, this.width, this.height);
        canvasContext.drawImage(this.powerUpImage, 0, playerFrameY * 75, this.width, playerSpriteHeight +40, this.x, this.y, this.width -30, this.height);
        }
    }

    powerUpCollisionCheck()
    {
        if(this.activePowerUp == true)
        {
            this.colDir = colCheck(player, this)

            if(this.colDir === "t" || this.colDir === "b" || this.colDir === "r" || this.colDir === "l")
            {
                if(this.powerUpImage.getAttribute('src') === "star.png")
                {
                this.activePowerUp = false;
                player.poweredUp = true;
                player.poweredUpTimer = 300;
                powerUpSound.play();
                console.log("NARNIA");
                }

                if(this.powerUpImage.getAttribute('src') === "bluePotion2.png")
                {
                    this.activePowerUp = false;
                    manaSound.play();
                    player.magic += 30;
                }

                if(this.powerUpImage.getAttribute('src') === "redPotion.png")
                {
                    this.activePowerUp = false;
                    healthSound.play();
                    player.health += 30;
                }
            }
        }
    }
 }

 class Wizard
 {
    constructor(x, y, width, height, playerDirection, wizardImage, startTime, frame, frameX, frameTimer, frameMax, wizardActive, spellTimer)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.playerDirection = playerDirection;
        this.wizardImage = new Image();
        this.wizardImage.src = wizardImage;
        this.startTime = startTime;
        this.frame = frame;
        this.frameX = frameX;
        this.frameTimer = frameTimer;
        this.frameMax = frameMax;
        this.wizardActive = wizardActive;
        this.spellTimer = spellTimer;
    }

    drawWizard()
    {
        if(this.wizardActive == true)
        {
            canvasContext.rect(this.x, this.y, this.width, this.height);
            //canvasContext.drawImage(baseEnemy, this.x, this.y, this.width, this.height);
            canvasContext.drawImage(this.wizardImage, this.frameX * this.width, playerFrameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
            if(this.frameX == 8 && this.spellTimer <= 0)
            {
               createOrb(this.x, this.y);
               this.spellTimer = 180;
            }
        }


    }

    animateWizard()
       {
        if(this.wizardActive == true)
        {

            this.startTime = this.startTime +1;
                if (this.frame == 0)
                {
                    this.frameX = 1;
                }

                //update frame when timer is less than 0
                if (this.startTime >= this.frameTimer)
                {
                    this.startTime = 0;
                    this.frameX++;
                    this.frame++;

                    if(this.frame > this.frameMax)
                    {
                        this.frame = 0;
                        this.FrameX = 1;
                    }
                }
        }

       }

       spawnFireBall()
       {
            this.spellTimer -= 1;


       }

       orbCollisionCheck()
       {
            if(this.wizardActive == true)
                {
                     for(var i = 0; i < orbs.length; i++)
                 {
                     this.colDir = colCheck(orbs[i], this);

                     if(this.colDir === "l")
                  {
                        console.log("YAPPP");
                        if(orbs[i].orbActive == true && orbs[i].reflected == true)
                        {
                        orbSound.play();
                        this.wizardActive = false;
                        this.x += 4000;
                        orbs[i].orbActive = false;
                        enemiesKilled += 1;
                        }
                  }

                  if(this.colDir === "b")
                      {
                      console.log("YAPPP");
                      if(orbs[i].orbActive == true && orbs[i].reflected == true)
                       {
                       this.wizardActive = false;
                       this.x += 4000;
                       orbSound.play();
                       orbs[i].orbActive = false;
                       enemiesKilled += 1;
                        }
                      }

                 if(this.colDir === "r")
                      {
                        console.log("YAPPP");
                        if(orbs[i].orbActive == true && orbs[i].reflected == true)
                       {
                       this.wizardActive = false;
                       this.x += 4000;
                       orbSound.play();
                       orbs[i].orbActive = false;
                       enemiesKilled += 1;
                        }
                      }

                  if(this.colDir === "t")
                   {
                        console.log("YAPPP");
                        if(orbs[i].orbActive == true && orbs[i].reflected == true)
                       {
                       this.wizardActive = false;
                       this.x += 4000;
                       orbSound.play();
                       orbs[i].orbActive = false;
                       enemiesKilled += 1;
                        }
                   }
               }

               }
       }
 }

 class WizardOrb
 {
    constructor(x, y, width, height, orbImage, dx, dy, angle, colDir, orbActive, playerXTarget, playerYTarget, reflected, reflectedX, reflectedY)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.orbImage = new Image();
        this.orbImage.src = orbImage;
        this.dx = dx;
        this.dy = dy;
        this.angle = angle;
        this.colDir = colDir;
        this.orbActive = orbActive;
        this.playerXTarget = playerXTarget;
        this.playerYTarget = playerYTarget;
        this.reflected = reflected;
        this.reflectedX = reflectedX;
        this.reflectedY = reflectedY;

    }

    drawOrb()
    {

        if(this.orbActive == true)
           {

            canvasContext.rect(this.x, this.y, this.width -30, this.height -30);
            //canvasContext.drawImage(baseEnemy, this.x, this.y, this.width, this.height);
            canvasContext.drawImage(this.orbImage, 0, playerFrameY * 50, this.width, this.height, this.x, this.y, this.width -30, this.height -30);
           }
    }

    moveToPlayer()
    {
        if (this.orbActive && this.reflected == false)
        {
              this.dx = (player.x + (player.width/4)) - (this.x + (this.width/4));
              this.dy = (player.y + (player.height/4)) - this.y + (this.height/4);
              this.angle = Math.atan2(this.dy -20, this.dx);
              this.x += 5 * Math.cos(this.angle);
              this.y += 5 * Math.sin(this.angle);

        }

        if (this.orbActive && this.reflected == true)
        {
              this.dx = (this.reflectedX + (61.8/4)) - (this.x + (this.width/8));
              this.dy = (this.reflectedY + (57/4)) - (this.y + (this.height/8));
              this.angle = Math.atan2(this.dy - 40, this.dx);
              this.x += 7 * Math.cos(this.angle);
              this.y += 7 * Math.sin(this.angle);
        }


    }

    orbScreenCheck()
       {
            if(this.orbActive)
            {

                if(this.x < 30 || this.x > canvas.width - 30 || this.y < 30 || this.y > canvas.height - 30)
                {
                    this.orbActive = false;
                    console.log("off screen");
                }
            }
       }

    orbPlayerCollision()
    {
        if (this.orbActive)
        {
            this.colDir = colCheck(player, this)
            if(this.colDir === "l" && meow.getAttribute('src') === 'leftSwing.png' && playerFrame == 1 || this.colDir === "l" && meow.getAttribute('src') === 'leftSwing.png' && playerFrame == 2 || this.colDir === "l" && meow.getAttribute('src') === 'leftSwing.png' && playerFrame == 3)
              {
                reflectSound.play();
                this.reflected = true;
              }

              else if(this.colDir === "l" && this.reflected == false)
             {
                  player.health -= 2;
                  orbSound.play();
                  this.orbActive = false;
             }


              if(this.colDir === "b" && meow.getAttribute('src') === 'downSwing.png' && playerFrame == 1 || this.colDir === "b" && meow.getAttribute('src') === 'downSwing.png' && playerFrame == 2 || this.colDir === "b" && meow.getAttribute('src') === 'rightSwing.png' && playerFrame == 3)
              {
                    reflectSound.play();
                    this.reflected = true;
              }

              else if(this.colDir === "b" && this.reflected == false)
              {
                  player.health -= 2;
                  orbSound.play();
                  this.orbActive = false;
              }


             if(this.colDir === "r" && meow.getAttribute('src') === 'rightSwing.png' && playerFrame == 1 || this.colDir === "r" && meow.getAttribute('src') === 'rightSwing.png' && playerFrame == 2 || this.colDir === "r" && meow.getAttribute('src') === 'rightSwing.png' && playerFrame == 3)
             {
                        reflectSound.play();
                        this.reflected = true;
             }

              else if(this.colDir === "r" && this.reflected == false)
              {
                      player.health -= 2;
                      orbSound.play();
                      this.orbActive = false;
              }



              if(this.colDir === "t" && meow.getAttribute('src') === 'yes.png' && playerFrame == 1 || this.colDir === "t" && meow.getAttribute('src') === 'yes.png' && playerFrame == 2 || this.colDir === "t" && meow.getAttribute('src') === 'yes.png' && playerFrame == 3)
               {
                    reflectSound.play();
                    this.reflected = true;
               }

               else if(this.colDir === "t" && this.reflected == false)
               {
                    player.health -= 2;
                    orbSound.play();
                    this.orbActive = false;

               }




        }
    }


 }

 class Fireball
 {
   constructor(x, y, width, height, xVel, yVel, playerDirection, speed, fireballImage, startTime, frame, frameX, frameTimer, frameMax, fireballActive, colDir)
   {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xVel = xVel;
        this.yVel = yVel;
        this.playerDirection = playerDirection;
        this.speed = speed;
        this.fireballImage = new Image();
        this.fireballImage.src = fireballImage;
        this.startTime = startTime;
        this.frameX = frameX;
        this.frame = frame;
        this.frameMax = frameMax;
        this.frameTimer = frameTimer;
        this.frameMax = frameMax;
        this.fireballActive = fireballActive;

   }

   drawFireball()
   {
            if(this.fireballActive == true)
           {
            canvasContext.rect(this.x, this.y, this.width, this.height);
            //canvasContext.drawImage(baseEnemy, this.x, this.y, this.width, this.height);
            canvasContext.drawImage(this.fireballImage, this.frameX * 96, playerFrameY * 96, 98.86, 96, this.x, this.y, this.width, this.height);
           }
   }

   animateFireball()
   {
    if(this.fireballActive == true)
    {
        console.log("KIWI FRUIT");
        this.startTime = this.startTime +1;
            if (this.frame == 0)
            {
                this.frameX = 1;
            }

            //update frame when timer is less than 0
            if (this.startTime >= this.frameTimer)
            {
                this.startTime = 0;
                this.frameX++;
                this.frame++;

                if(this.frame > this.frameMax)
                {
                    this.frame = 0;
                    this.FrameX = 1;
                }
            }
    }

   }

   moveFireball()
   {
    if(this.fireballActive == true)
    {
       switch(this.playerDirection)
       {

            case 0:
            this.fireballImage.src = "fireballsDown.png";
            this.y += 6;
            break;
            case 1:
            this.fireballImage.src = "fireballsUp.png";
            this.y -= 6;
            break;
            case 2:
            this.fireballImage.src = "fireballsRight.png";
            this.x += 6;
            break;
            case 3:
            this.fireballImage.src = "fireballsLeft.png";
            this.x -= 6;
            break;
       }
    }
   }

   collisionCheckWithEnemy()
   {
    if(this.fireballActive == true)
    {
         for(var i = 0; i < enemy.length; i++)
     {
         this.colDir = colCheck(enemy[i], this);



         if(this.colDir === "l")
      {
            console.log("YAPPP");
            if(enemy[i].alive == true)
            {this.fireballActive = false;
            enemy[i].health -= 8;
            fireballHit.play();
            canvasContext.drawImage(hit, 0, playerFrameY * enemy[i].width, 148, playerSpriteHeight +40, enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
            }
      }

      if(this.colDir === "b")
          {
          console.log("YAPPP");
          if(enemy[i].alive == true)
           { this.fireballActive = false;
            enemy[i].health -= 8;
             fireballHit.play();
             canvasContext.drawImage(hit, 0, playerFrameY * enemy[i].width, 148, playerSpriteHeight +40, enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
            }
          }

     if(this.colDir === "r")
          {
            console.log("YAPPP");
            if(enemy[i].alive == true)
           { this.fireballActive = false;
            enemy[i].health -= 8;
             fireballHit.play();
             canvasContext.drawImage(hit, 0, playerFrameY * enemy[i].width, 148, playerSpriteHeight +40, enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
            }
          }

      if(this.colDir === "t" )
       {
            console.log("YAPPP");
            if(enemy[i].alive == true)
           { this.fireballActive = false;
            enemy[i].health -= 8;
             fireballHit.play();
             canvasContext.drawImage(hit, 0, playerFrameY * enemy[i].width, 148, playerSpriteHeight +40, enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
            }
       }


   }

   }
   }

   collisionCheckWithGargoyle()
   {
    if(this.fireballActive == true)
    {
     for(var i = 0; i < Gargoyles.length; i++)
     {
    this.colDir2 = colCheck(Gargoyles[i], this)

    if(this.colDir2 === "l")
                 {
                       console.log("YAPPP");
                       if(Gargoyles[i].alive == true)
                       {this.fireballActive = false;
                       Gargoyles[i].health -= 4;
                       fireballHit.play();
                       canvasContext.drawImage(hit, 0, playerFrameY * Gargoyles[i].width, Gargoyles[i].width, Gargoyles[i].height, Gargoyles[i].x, Gargoyles[i].y, Gargoyles[i].width, Gargoyles[i].height);
                       }
                 }

                 if(this.colDir2 === "b")
                     {
                     console.log("YAPPP");
                     if(Gargoyles[i].alive == true)
                      { this.fireballActive = false;
                       Gargoyles[i].health -= 4;
                        fireballHit.play();
                        canvasContext.drawImage(hit, 0, playerFrameY * Gargoyles[i].width, Gargoyles[i].width, Gargoyles[i].height, Gargoyles[i].x, Gargoyles[i].y, Gargoyles[i].width, Gargoyles[i].height);
                       }
                     }

                if(this.colDir2 === "r")
                     {
                       console.log("YAPPP");
                       if(Gargoyles[i].alive == true)
                      { this.fireballActive = false;
                       Gargoyles[i].health -= 4;
                        fireballHit.play();
                        canvasContext.drawImage(hit, 0, playerFrameY * Gargoyles[i].width, Gargoyles[i].width, Gargoyles[i].height, Gargoyles[i].x, Gargoyles[i].y, Gargoyles[i].width, Gargoyles[i].height);
                       }
                     }

                 if(this.colDir2 === "t" )
                  {
                       console.log("YAPPP");
                       if(Gargoyles[i].alive == true)
                      { this.fireballActive = false;
                       Gargoyles[i].health -= 4;
                        fireballHit.play();
                        canvasContext.drawImage(hit, 0, playerFrameY * Gargoyles[i].width, Gargoyles[i].width, Gargoyles[i].height, Gargoyles[i].x, Gargoyles[i].y, Gargoyles[i].width, Gargoyles[i].height);
                       }
                  }
                  }
                  }
                  }



   onScreenCheck()
   {
        if(this.fireballActive)
        {

            if(this.x <  0|| this.x > canvas.width || this.y < 0 || this.y > canvas.height)
            {
                this.fireballActive = false;
                console.log("off screen");
            }
        }
   }
   }





function gameLoop(){
if(showControlImage == true)
{
    console.log(tutorialTimer);
    tutorialTimer --;
    console.log("WORKER");
    if(tutorialTimer > 1600)
   {
     controlsImage.renderF(canvas.width,canvas.height);
   }

   if(tutorialTimer < 1600 && tutorialTimer > 1200)
   {
    inGameImage.renderF(canvas.width, canvas.height);
   }

   if(tutorialTimer < 1200 && tutorialTimer > 0)
   {
    iconsImage.renderF(canvas.width, canvas.height);
   }

   if(tutorialTimer <= 0)
   {
    document.getElementById("playGameButton").style.display = "block";
    document.getElementById("exitButton").style.display = "block";
    document.getElementById("tutorialButton").style.display = "block";
    originalBG.renderF(canvas.width, canvas.height);
   }
}
if(gamePaused == false){

var elapsed = (Date.now() - startTimeMS)/1000;
if(player.health <= 0)
{
    RestartGame();
}

 update(elapsed);
 render(elapsed);

//console.log(fireballs[0].frameX)
//console.log(fireballs[0].frame)


    if(player.poweredUpTimer > 0)
    {
        player.poweredUpTimer --;
    }

    if(player.poweredUpTimer > 0)
    {
        canvasContext.drawImage(poweredUpIMG, 0, playerFrameY * 44, 198, 100, player.x - 10, player.y - 30, 160, 44);
        player.attackDamage = 2;
        speedModifier = 2;
    }


    if(player.poweredUpTimer <= 0)
    {
        player.attackDamage = 1;
        speedModifier = 1;
    }

if(beganGame)
{for (var i = 0; i < enemy.length; i++ )
                    {
                        enemy[i].drawEnemy();
                        enemy[i].moveTowardsPlayer();
                        enemy[i].collisionCheckWithPlayer();
                        enemy[i].animateEnemy();

                    }

}
if(beganGame){
for (var i = 0; i < orbs.length; i++)
{
    orbs[i].drawOrb();
    orbs[i].moveToPlayer();
    orbs[i].orbPlayerCollision();
    orbs[i].orbScreenCheck();
}
}

if(fireballs.length != 0 && beganGame == true)
{
    for(var i = 0; i < fireballs.length; i++)
    {
        fireballs[i].drawFireball();
        fireballs[i].animateFireball();
        fireballs[i].moveFireball();
        fireballs[i].collisionCheckWithEnemy();
        fireballs[i].onScreenCheck();
        fireballs[i].collisionCheckWithGargoyle();
    }
}

if(Gargoyles.length != 0 & beganGame == true)
{
    for(var i = 0; i < Gargoyles.length; i++)
    {
        Gargoyles[i].drawGargoyle();
        Gargoyles[i].gargoyleMoveToPlayer();
        Gargoyles[i].gargoyleAnimate();
        Gargoyles[i].gargoyleCollisionCheck();
    }
}

if(powerUps.length != 0 && beganGame == true)
{
    for(var i = 0; i < powerUps.length; i++)
    {
        if(powerUps[i].activePowerUp == true)
        {
            powerUps[i].drawPowerUp();
            powerUps[i].powerUpCollisionCheck();
        }
    }
}

if(wizards.length != 0  && beganGame == true)
{
    for(var i = 0; i < wizards.length; i++)
    {
        if(wizards[i].wizardActive)
        {
            wizards[i].drawWizard();
            wizards[i].animateWizard();
            wizards[i].spawnFireBall();
            wizards[i].orbCollisionCheck();
        }
    }
}

requestAnimationFrame(gameLoop);

}
 }
 function render() {
if(beganGame)
{

    menuBackground.renderF(canvas.width,canvas.height);
    rikuIcon.renderF((1-scaleModifier) * 100, (1-scaleModifier) * 100);
    playerMovement();
    SpawnWaves();

if(player.health >= player.maxHealth)
{
    player.health = player.maxHealth;
}

if(player.health < 0)
{
    player.health = 0;
}

if(player.magic >= player.maxMagic)
{
    player.magic = player.maxMagic
}

if(player.magic < 0)
{
    player.magic = 0;
}

if(healCD <= 0)
{
   healCD = 0;
}

if(healCD >= 180)
{
   healCD = 180;
}

if(fireballCD <= 0)
{
    fireballCD = 0;
}

if(fireballCD >= 80)
{
    fireballCD = 80;
}



finalFantasy.onended = finalFantasy.play();
healCD += 1;
fireballCD += 1;
if(player.magic != player.maxMagic)
{
    manaCD += 1;
}
if(manaCD >= 360)
{
manaCD = 0;
player.magic += 5;
}



var healthy = drawHealthBar(canvas, canvas.width/15, canvas.height - 70, (1-scaleModifier) * 150, (1-scaleModifier) * 20, player.health, player.maxHealth, 'green', 'red');
drawHealthBar(canvas, canvas.width/15, canvas.height -50, (1-scaleModifier) * 150, (1-scaleModifier) * 20, player.magic, player.maxMagic, 'blue', '#660066');
//var fontRatio = (1 - scaleModifier) * 16;
canvasContext.font = "18px Georgia";
canvasContext.fillStyle = 'white';
canvasContext.textShadow = "20px 20px #000000";
canvasContext.fillText("Current Wave: ", canvas.width/16, canvas.height - 100);
canvasContext.font = "60px Georgia";
canvasContext.fillStyle = 'gold';
canvasContext.textShadow = "20px 20px #000000";
if(waveTimer != 0) { canvasContext.fillText("WAVE " + currentWaveName, canvas.width/2.5, (canvas.height - canvas.height) + 100); }
if(currentWave == 11)
{
    canvasContext.font = "60px Georgia";
    canvasContext.fillStyle = 'gold';
    canvasContext.textShadow = "20px 20px #000000";
    canvasContext.fillText("YOU WIN! PRESS R TO PLAY AGAIN! ", canvas.width/4, (canvas.height - canvas.height) + 100);
}
}

 }

 function update() {

 }

 function SpawnWaves()
 {

    switch(enemiesKilled)
    {
        case 0:
        if(waveOneSpawned)
        {
            waveTimer = 240;
            enemy1 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy.push(enemy1);
            //enemy1 = new Enemy(800, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 50, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            //enemy2 = new Enemy(400, 300, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "steve", 0, 0, 0, 50, 1, 1, 1, true, 0, 0, 0, 12, 7, false, null, null, false);
            //enemy3 = new Enemy(200, 800, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 50, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            //enemy4 = new Enemy(300, 600, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "steve", 0, 0, 0, 50, 1, 1, 1, true, 0, 0, 0, 12, 7, false, null, null, false);//x, y, width, height, xVel, yVel, imageSource, walk, walkFlip, attack, attackFlip, dx, dy, angle, colDir, colDir2, name, alpha, beta, charlie, health, speed, maxSpeed, arrayPosition, alive, startTime, frame, frameX, frameTimer, frameMax, resetEnemyAttack, randomNumber
            //wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
            //wizards.push(wizard1);
            //gargoyle1 = new Gargoyle(600, 100, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
            //Gargoyles.push(gargoyle1);
            waveOneSpawned = false;
        }
        break;
        case 1:
        if(!waveTwoSpawned)
        {
            enemy.length = 0;
                Gargoyles.length = 0;
                wizards.length = 0;
                orbs.length = 0;
               // powerUps.length = 0;
                fireballs.length = 0;
            currentWaveName = "TWO";
            waveTimer = 240;
            enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy.push(enemy1);
            enemy.push(enemy2);
            currentWave = 2;
            waveTwoSpawned = true;
        }
        break;
        case 3:
        if(!waveThreeSpawned)
        {
        enemy.length = 0;
            Gargoyles.length = 0;
            wizards.length = 0;
            orbs.length = 0;
            //powerUps.length = 0;
            fireballs.length = 0;
            currentWaveName = "THREE";
            waveTimer = 240;
            enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy3 = new Enemy(canvas.width, 300, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy.push(enemy1);
            enemy.push(enemy2);
            enemy.push(enemy3);
            currentWave = 3;
            waveThreeSpawned = true;
        }
        break;
        case 6:
        if(!waveFourSpawned)
        {
        enemy.length = 0;
            Gargoyles.length = 0;
            wizards.length = 0;
            orbs.length = 0;
            //powerUps.length = 0;
            fireballs.length = 0;
            currentWaveName = "FOUR";
            waveTimer = 240;
            enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy3 = new Enemy(canvas.width, 300, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy.push(enemy1);
            enemy.push(enemy2);
            enemy.push(enemy3);
            wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
            wizards.push(wizard1);
            currentWave = 4;
            waveFourSpawned = true;
        }
        break;
        case 10:
        if(!waveFiveSpawned)
        {
        enemy.length = 0;
            Gargoyles.length = 0;
            wizards.length = 0;
            orbs.length = 0;
            //powerUps.length = 0;
            fireballs.length = 0;
            currentWaveName = "FIVE";
            waveTimer = 240;
            enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy3 = new Enemy(canvas.width, 400, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
            enemy.push(enemy1);
            enemy.push(enemy2);
            enemy.push(enemy3);
            wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
            wizards.push(wizard1);
            wizard2 = new Wizard(280, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
            wizards.push(wizard2);
            currentWave = 5;
            waveFiveSpawned = true;
        }
        break;
        case 15:
        if(!waveSixSpawned)
        {
        enemy.length = 0;
            Gargoyles.length = 0;
            wizards.length = 0;
            orbs.length = 0;
            //powerUps.length = 0;
            fireballs.length = 0;
        currentWaveName = "SIX";
        waveTimer = 240;
        enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
        enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
        enemy3 = new Enemy(canvas.width, 400, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
        enemy.push(enemy1);
        enemy.push(enemy2);
        enemy.push(enemy3);
        wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
        wizards.push(wizard1);
        wizard2 = new Wizard(280, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
        wizards.push(wizard2);
        wizard3 = new Wizard(320, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
        wizards.push(wizard3);
        currentWave = 6;
        waveSixSpawned = true;
        }
        break;
        case 21:
        if(!waveSevenSpawned)
        {
        enemy.length = 0;
            Gargoyles.length = 0;
            wizards.length = 0;
            orbs.length = 0;
            powerUps.length = 0;
            fireballs.length = 0;
        currentWaveName = "SEVEN";
        waveTimer = 240;
        enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
        enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
        enemy3 = new Enemy(canvas.width, 400, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
        enemy.push(enemy1);
        enemy.push(enemy2);
        enemy.push(enemy3);
        wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
        wizards.push(wizard1);
        wizard2 = new Wizard(280, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
        wizards.push(wizard2);
        wizard3 = new Wizard(320, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
        wizards.push(wizard3);
        gargoyle1 = new Gargoyle(600, -50, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
        Gargoyles.push(gargoyle1);
        currentWave = 7;
        waveSevenSpawned = true;
       }
       break;
       case 28:
       if(!waveEightSpawned)
       {
       enemy.length = 0;
           Gargoyles.length = 0;
           wizards.length = 0;
           orbs.length = 0;
           //powerUps.length = 0;
           fireballs.length = 0;
       currentWaveName = "EIGHT";
       waveTimer = 240;
       enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
       enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
       enemy3 = new Enemy(canvas.width, 400, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
       enemy.push(enemy1);
       enemy.push(enemy2);
       enemy.push(enemy3);
       wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
       wizards.push(wizard1);
       wizard2 = new Wizard(280, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
       wizards.push(wizard2);
       wizard3 = new Wizard(320, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
       wizards.push(wizard3);
       gargoyle1 = new Gargoyle(600, -50, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
       Gargoyles.push(gargoyle1);
       gargoyle2 = new Gargoyle(600, canvas.height + 60, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
       Gargoyles.push(gargoyle2);
       currentWave = 8;
       waveEightSpawned = true;
      }
      break;
      case 36:
     if(!waveNineSpawned)
     {
     enemy.length = 0;
         Gargoyles.length = 0;
         wizards.length = 0;
         orbs.length = 0;
         //powerUps.length = 0;
         fireballs.length = 0;
     currentWaveName = "NINE";
     waveTimer = 240;
     enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy3 = new Enemy(canvas.width, 400, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy4 = new Enemy(0, 900, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy.push(enemy1);
     enemy.push(enemy2);
     enemy.push(enemy3);
     enemy.push(enemy4);
     wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
     wizards.push(wizard1);
     wizard2 = new Wizard(280, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
     wizards.push(wizard2);
     wizard3 = new Wizard(320, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
     wizards.push(wizard3);
     gargoyle1 = new Gargoyle(600, -50, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
     Gargoyles.push(gargoyle1);
     gargoyle2 = new Gargoyle(600, canvas.height + 60, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
     Gargoyles.push(gargoyle2);
     currentWave = 9;
     waveNineSpawned = true;
    }
    break;
    case 45:
     if(!waveTenSpawned)
     {
     enemy.length = 0;
         Gargoyles.length = 0;
         wizards.length = 0;
         orbs.length = 0;
         //powerUps.length = 0;
         fireballs.length = 0;
     currentWaveName = "TEN";
     waveTimer = 240;
     enemy1 = new Enemy(0, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy2 = new Enemy(canvas.width, 500, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy3 = new Enemy(canvas.width, 400, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy4 = new Enemy(0, 900, 50, 65, 1, 1, "enemyWalk.png", "enemyWalk.png", "enemyRunRight.png", "enemyBetterAttack.png", "enemyAttackFlip.png", 0, 0, 0, null, null, "john", 0, 0, 0, 40, 2, 2, 0, true, 0, 0, 0, 12, 7, false, null, null, false);
     enemy.push(enemy1);
     enemy.push(enemy2);
     enemy.push(enemy3);
     enemy.push(enemy4);
     wizard1 = new Wizard(200, 200, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
     wizards.push(wizard1);
     wizard2 = new Wizard(280, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
     wizards.push(wizard2);
     wizard3 = new Wizard(320, 400, 61.8, 57, 0, "wizardIdle2.png", 0, 0, 0, 24, 6, true, 180);
     wizards.push(wizard3);
     gargoyle1 = new Gargoyle(600, -50, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
     Gargoyles.push(gargoyle1);
     gargoyle2 = new Gargoyle(600, canvas.height + 60, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
     Gargoyles.push(gargoyle2);
     gargoyle3 = new Gargoyle(1000, canvas.height + 60, 80.25, 75, "gargoyleFly.png", 0, 0, 0, null, null, 0, 0, 0, 50, 1, true, 0, 0, 0, 12, 2, false);
     Gargoyles.push(gargoyle3);
     currentWave = 10;
     waveTenSpawned = true;
     }
     break;
     case 55:
     currentWave = 11;
    }

    }




 function createOrb(startPosX, startPosY)
 {
    orb1 = new WizardOrb(startPosX, startPosY, 69, 72, "wizardOrb.png", 0, 0, 0, null, true, player.x, player.y, false, false, startPosX, startPosY) //x, y, width, height, orbImage, dx, dy, angle, colDir, orbActive, reflected, reflectedX, reflectedY
    orbs.push(orb1);
 }

 function createStar(powerWidth, powerHeight, powerUpImage, isActive)
 {
    var randomX = Math.floor(Math.random() * (canvas.width - 50));
    var randomY = Math.floor(Math.random() * (canvas.height - 50));
    powerUp1 = new starPowerUp(randomX, randomY, powerWidth, powerHeight, powerUpImage, null, true) //(x, y, width, height, powerUpImage, colDir, activePowerUp)
    powerUps.push(powerUp1);
 }

 function RestartGame()
 {
    enemy.length = 0;
        Gargoyles.length = 0;
        wizards.length = 0;
        orbs.length = 0;
        powerUps.length = 0;
        fireballs.length = 0;
        currentWaveName = "ONE";
        currentWave = 1;
        enemiesKilled = 0;
        player.magic = player.maxMagic;
        player.health = player.maxHealth;
        player.x = canvas.width/2;
        player.y = canvas.height/2;
        waveOneSpawned = true;
        waveTwoSpawned = false;
        waveThreeSpawned = false;
        waveFourSpawned = false;
        waveFiveSpawned = false;
        waveSixSpawned = false;
        waveSevenSpawned = false;
        waveEightSpawned = false;
        waveNineSpawned = false;
        waveTenSpawned = false;
        mostRecentKey = 1;
        for(var i = 0; i < enemy.length; i++)
        {
            enemy[i].alive = false;

        }

        for(var i = 0; i < Gargoyles.length; i++)
        {
            Gargoyles[i].alive = false;
        }

        for(var i = 0; i < Gargoyles.length; i++)
        {
            wizards[i].wizardActive = false;
        }

        for(var i = 0; i < Gargoyles.length; i++)
        {
           orbs[i].orbActive = false;
        }

        for(var i = 0; i < Gargoyles.length; i++)
        {
           powerUps[i].activePowerUp = false;
        }

        for(var i = 0; i < Gargoyles.length; i++)
        {
           fireballs[i].fireballActive = false;
        }
 }

 function playerMovement()
 {
    var moveDirection;

    if(keys[49]) moveDirection = "heal";
    else if (keys[50]) moveDirection = "fire";
    else if(keys[87]) moveDirection = "upAttack";
    else if(keys[83]) moveDirection = "downAttack";
    else if(keys[65]) moveDirection = "leftAttack";
    else if(keys[68]) moveDirection = "rightAttack";
    else if(keys[39] && keys[40]) moveDirection = "rightDownDiag";
    else if (keys[40] && keys[37]) moveDirection = "leftDownDiag";
    else if (keys[38] && keys[39]) moveDirection = "rightUpDiag";
    else if (keys[38] && keys[37]) moveDirection = "leftUpDiag";
    else if(keys[40]) moveDirection = "down";
    else if (keys[39]) moveDirection = "right";
    else if (keys[38]) moveDirection = "up";
    else if (keys[37]) moveDirection = "left";
    else if (keys[82] && currentWave == 11) moveDirection = "restart";
    else{
                meow.src = 'idleSheet.png'
                canvasContext.drawImage(meow, 288/4 * mostRecentKey, 0, 72, 133, player.x, player.y, player.width - 20, player.height -20);
    }

    switch (moveDirection){
    case "down":

                frameTimer = 8;
               frameMax = 6;
                player.speed = 5;
                player.velX = 1;
                player.velY = 1;
                var moveSpeed = player.speed * player.velY;

                if(player.y < canvas.height - canvas.height/10)
                {
                    console.log(canvas.height);
                    player.y += moveSpeed * speedModifier;
                }
//                console.log("PIZZS");
                mostRecentKey = 0;
                meow.src = 'rikuRunsDown.png'
//                console.log("moving sprite");
                canvasContext.drawImage(meow, playerFrameX * 70, playerFrameY * playerSpriteHeight, playerSpriteWidth - 35, playerSpriteHeight, player.x, player.y, player.width - 22, player.height - 22);
                animationFrame();
                break;

    case "right":


                frameTimer = 8;
                frameMax = 6;
                player.speed = 5;
                player.velX = 1;
                player.velY = 1;
                var moveSpeed = player.speed * player.velX;
                if(player.x < canvas.width - canvas.width/20)
                {
                    player.x += moveSpeed * speedModifier;
                }
                meow.src = 'rikuRunRightSheet.png';
                canvasContext.drawImage(meow, playerFrameX * 92, playerFrameY * playerSpriteHeight, playerSpriteWidth, playerSpriteHeight, player.x, player.y, player.width - 10, player.height -10);
                mostRecentKey = 2;
                animationFrame();
                break;

    case "rightDownDiag":
                            frameTimer = 8;
                            frameMax = 6;
                            player.speed = 3.5
                            player.velX = 1;
                            player.velY = 1;
                            var moveSpeed = player.speed * player.velX;
                            if(player.x < canvas.width - canvas.width/20)
                              {
                                 player.x += moveSpeed * speedModifier;
                              }
                            if(player.y < canvas.height - canvas.height/10)
                              {
                                 player.y += moveSpeed * speedModifier;
                              }
                            meow.src = 'rikuDownRightDiag.png';
                            canvasContext.drawImage(meow, playerFrameX * 73, playerFrameY * playerSpriteHeight, playerSpriteWidth - 35, playerSpriteHeight, player.x, player.y, player.width - 22, player.height - 22);
                            animationFrame();
                            break;

    case "up":
                     frameTimer = 8;
                     frameMax = 6;
                     player.speed = 5;
                     player.velY = 1;
                     player.velX = 1;
                     var moveSpeed = player.speed * player.velY;
                     if(player.y > 0)
                     {
                        player.y-= moveSpeed * speedModifier;
                     }
                     meow.src = 'rikuRunForward.png';
                     canvasContext.drawImage(meow, playerFrameX * 91, playerFrameY * playerSpriteHeight, playerSpriteWidth, playerSpriteHeight, player.x, player.y, player.width - 20, player.height - 20);
                     mostRecentKey = 1;
                     animationFrame();

                     break;
    case "left":
                    frameTimer = 8;
                    frameMax = 6;
                    player.speed = 5;
                    player.velY = 1;
                    player.velX = 1;
                    var moveSpeed = player.speed * player.velX;
                    if(player.x > 0)
                     {
                        player.x -= moveSpeed * speedModifier;
                     }
                    mostRecentKey = 3;
                    meow.src = 'rikuLeftRunSheet.png';
                    canvasContext.drawImage(meow, playerFrameX * 103, playerFrameY * playerSpriteHeight, playerSpriteWidth, playerSpriteHeight, player.x, player.y, player.width - 10, player.height -10);
                    animationFrame();
                    break;

    case "leftDownDiag":
                           frameTimer = 8;
                           frameMax = 6;
                           player.speed = 3.5;
                           player.velX = 1;
                           player.velY = 1;
                           var moveSpeed = player.speed * player.velX;
                           if(player.x > 0)
                             {
                                player.x -= moveSpeed * speedModifier;
                             }
                           if(player.y < canvas.height - canvas.height/10)
                             {
                                               player.y += moveSpeed * speedModifier;
                             }
                           meow.src = 'rikuDownLeftDiag.png';
                           canvasContext.drawImage(meow, playerFrameX * 73, playerFrameY * playerSpriteHeight, playerSpriteWidth - 35, playerSpriteHeight, player.x, player.y, player.width - 22, player.height - 22);
                           animationFrame();
                           break;

    case "rightUpDiag":
                           frameTimer = 8;
                           frameMax = 6;
                           player.speed = 3.5;
                           player.velX = 1;
                           player.velY = 1;
                           var moveSpeed = player.speed * player.velX;
                           if(player.x < canvas.width - canvas.width/20)
                              {
                                 player.x += moveSpeed * speedModifier;
                              }
                           if(player.y > 0)
                              {
                                 player.y-= moveSpeed * speedModifier;
                              }
                           meow.src = 'rikuTopRightDiag.png';
                           canvasContext.drawImage(meow, playerFrameX * 73, playerFrameY * playerSpriteHeight, playerSpriteWidth - 35, playerSpriteHeight, player.x, player.y, player.width - 22, player.height - 22);
                           animationFrame();
                           break;

    case "leftUpDiag":
                           frameTimer = 8;
                           frameMax = 6;
                           player.speed = 3.5;
                           player.velX = 1;
                           player.velY = 1;
                           var moveSpeed = player.speed * player.velX;
                           if(player.x > 0)
                             {
                                player.x -= moveSpeed * speedModifier;
                             }
                           if(player.y > 0)
                             {
                                player.y-= moveSpeed * speedModifier;
                             }
                           meow.src = 'rikuUpLeftDiag.png';
                           canvasContext.drawImage(meow, playerFrameX * 73, playerFrameY * playerSpriteHeight, playerSpriteWidth - 35, playerSpriteHeight, player.x, player.y, player.width - 22, player.height - 22);
                           animationFrame();
                           break;

    case "leftAttack":
                           frameTimer = 8;
                           frameMax = 2;
                           meow.src = 'leftSwing.png';
                           canvasContext.drawImage(meow, playerFrameX * 91, playerFrameY * playerSpriteHeight +15, playerSpriteWidth - 5, playerSpriteHeight +20, player.x, player.y, player.width +5, player.height +5);
                           animationFrame();
                           if(playerFrame == 2)
                              {
                               swordSwing.play();
                              }
                           break;

    case "rightAttack":
                           frameTimer = 8;
                           frameMax = 2;
                           meow.src = "rightSwing.png";
                           canvasContext.drawImage(meow, playerFrameX * 92, playerFrameY * playerSpriteHeight +15, playerSpriteWidth - 5, playerSpriteHeight +20, player.x, player.y, player.width + 5, player.height + 5);
                           animationFrame();
                           if(playerFrame == 2)
                              {
                               swordSwing.play();
                              }
                           break;

    case "downAttack":
                            frameTimer = 8;
                           frameMax = 2;
                           meow.src = "downSwing.png";
                           canvasContext.drawImage(meow, playerFrameX * 92, playerFrameY * playerSpriteHeight -5, playerSpriteWidth, playerSpriteHeight + 40, player.x, player.y, player.width + 5, player.height + 5);
                           animationFrame();
                           if(playerFrame == 2)
                              {
                               swordSwing.play();
                              }
                           break;

    case "upAttack":
                            frameTimer = 8;
                           frameMax = 2;
                           meow.src = "yes.png";
                           canvasContext.drawImage(meow, playerFrameX * 100, playerFrameY * playerSpriteHeight -5, playerSpriteWidth, playerSpriteHeight + 40, player.x, player.y, player.width, player.height);
                           animationFrame();
                           if(playerFrame == 2)
                           {
                            swordSwing.play();
                           }
                           break;

    case "heal":
                           frameTimer = 10;
                           frameMax = 2;
                           magicFrameMax = 2;
                           magicFrameTimer = 10;
                           if(activeSpellValue == 1 && healCD >= 180 && player.health < player.maxHealth && player.magic >= 25)
                           {
                                canvasContext.drawImage(healText, 0, playerFrameY * playerSpriteWidth, playerSpriteWidth, playerSpriteHeight, player.x + 3, player.y - 25, player.width, player.height);
                                meow.src = 'rikuHealNew.png'
                                canvasContext.drawImage(meow, playerFrameX  * 100, playerFrameY * playerSpriteHeight +5, playerSpriteWidth + 5, playerSpriteHeight + 40, player.x, player.y, player.width, player.height);
                                canvasContext.drawImage(heal, magicFrameX * 100, playerFrameY * healSpriteHeight + 5, playerSpriteWidth + 5, playerSpriteHeight, player.x, player.y, player.width, player.height);
                                healPlayer();
                                animationFrame();
                                animationFrameMagic();
                           }



                           else
                           {
                             meow.src = 'idleSheet.png'
                             canvasContext.drawImage(meow, 288/4 * mostRecentKey, 0, 72, 133, player.x, player.y, player.width - 20, player.height -20);
                           }

    break;

    case "fire":
                if(fireballCD >= 80 && player.magic > 10)
                   {
                    fireballCD = 0;
                    fireball1 = new Fireball(player.x, player.y, 98.86, 96, 0, 0, mostRecentKey, 5, "fireballsLeft.png", 0, 0, 0, 10, 12, true, null)
                    fireballs.push(fireball1);
                    fireball.play();
                    player.magic -= 10;
                   }

                   else
                   {
                        meow.src = 'idleSheet.png'
                        canvasContext.drawImage(meow, 288/4 * mostRecentKey, 0, 72, 133, player.x, player.y, player.width - 20, player.height -20);
                   }

                       break;



    case "restart":
    {
        RestartGame();
    }
    break;
    }


       switch (currentWave)
        {
            case 1: activeWave = " ONE";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 2: activeWave =  " TWO";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 3: activeWave = " THREE";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 4: activeWave = " FOUR";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 5: activeWave = " FIVE";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 6: activeWave = " SIX";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 7: activeWave = " SEVEN";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 8: activeWave = " EIGHT";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 9: activeWave = " NINE";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
            case 10: activeWave = " TEN";
            canvasContext.font = "18px Georgia";
            canvasContext.fillStyle = 'gold';
            canvasContext.fillText(activeWave, canvas.width/16, canvas.height - 80);
            break;
        }

        if(waveTimer > 0)
        {
            waveTimer --;
        }

        if(waveTimer <= 0)
        {
            waveTimer = 0;
        }
 }

 function healPlayer()
 {

    if(magicFrame == 2)
    {
       playerFrame = 0;
       magicFrame = 0;
       player.health += 25;
       player.magic -= 25;
       healCD = 0;

    }

 }

 function colCheck(shapeA, shapeB) {
 		// get the vectors to check against
 		var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
 			vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
 			// add the half widths and half heights of the objects
 			hWidths = (shapeA.width / 2) + (shapeB.width / 2),
 			hHeights = (shapeA.height / 2) + (shapeB.height / 2),
 			colDir = null;

 		// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
 		if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
 			// figures out on which side we are colliding (top, bottom, left, or right)
 			var oX = hWidths - Math.abs(vX),
 				oY = hHeights - Math.abs(vY);
 			if (oX >= oY) {
 				if (vY > 0) {
 					colDir = "t";
 					shapeA.y += oY;

 				} else {
 					colDir = "b";
 					shapeA.y -= oY;
 				}
 			} else {
 				if (vX > 0) {
 					colDir = "l";
 					shapeA.x += oX;
 				} else {
 					colDir = "r";
 					shapeA.x -= oX;
 				}
 			}
 		}
 		return colDir;
 	}
function drawHealthBar(canvas, x, y, width, height, health, maxHealth, colour, backColour)
 {
    if(health >= maxHealth)
    {
        health = maxHealth;
    }
    if(health <= 0)
    {
        health = 0;
    }
    canvasContext.fillStyle = backColour;
    canvasContext.fillRect(x, y, width, height);
    var colourNumber = Math.round((1 -(health/maxHealth))*0xff)*0x10000 + Math.round((health/maxHealth)*0xff)*0x100;
    var colourString = colourNumber.toString(16);
    canvasContext.fillStyle = colour;
        canvasContext.fillRect(x+1, y+1, (health/maxHealth) * (width -2), (height -2));



 }

 function animationFrame() {

        startTimeMS = startTimeMS + 1;

        if (playerFrame == 0)
        {
            playerFrameX = 1;
        }

        //update frame when timer is less than 0
        if (startTimeMS >= frameTimer)
        {
            startTimeMS = 0;
            playerFrameX++;
            playerFrame++;

            if(playerFrame > frameMax)
            {
                playerFrame = 0;
                playerFrameX = 1;
            }
        }
        document.body.addEventListener("keydown", function (e) {
         		keys[e.keyCode] = true;
         		//isKeyPressed = true;

         	});

         	document.body.addEventListener("keyup", function (e) {
         		keys[e.keyCode] = false;
         		//isKeyPressed = false;
         	});
        }

        function animationFrameMagic() {

               // startTimeMS = startTimeMS + 1;
                startTimeMS2 = startTimeMS2 +1;
                if (magicFrame == 0)
                {
                    magicFrameX = 1;
                }

                //update frame when timer is less than 0
                if (startTimeMS2 >= magicFrameTimer)
                {
                    startTimeMS2 = 0;
                    magicFrameX++;
                    magicFrame++;

                    if(magicFrame > magicFrameMax)
                    {
                        magicFrame = 0;
                        magicFrameX = 1;
                    }
                }
                document.body.addEventListener("keydown", function (e) {
                 		keys[e.keyCode] = true;
                 		//isKeyPressed = true;

                 	});

                 	document.body.addEventListener("keyup", function (e) {
                 		keys[e.keyCode] = false;
                 		//isKeyPressed = false;
                 	});
                }






