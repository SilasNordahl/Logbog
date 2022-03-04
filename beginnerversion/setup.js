 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/My.mp3");
      music.loop = true;
      music.volume = 1.;
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover




// bird variables
const birdImage = new Image(90, 90);
      birdImage.src = "../assets/images/bird.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.mp3");
const birdFlapForce = -15;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;


//baggrund
const baggrundimage = new Image;
baggrundimage.src = "../assets/images/baggrund.png";


// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/coin.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
const fireballImage = new Image(350, 350);
      fireballImage.src = "../assets/images/fireball.png";
const fireballXSpeed = -5.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// sværd variables
const sværdImage = new Image(120, 120);
      sværdImage.src = "../assets/images/sværd.png";
const sværdXSpeed = -10;
const sværdHitboxRadius = 60;
const sværdSpawnInterval = 4000;
let sværdTimeSinceLastSpawn = sværdSpawnInterval;
let sværds = [];

// coin variables
const coinSound = new Audio("../assets/sounds/burp-random.mp3");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// Minus variables
const minussound = new Audio ("../assets/sounds/minus.mp3");
minussound.volume = 1.;
const minusImage = new Image(90, 120);
      minusImage.src = "../assets/images/minus.png";
const minusHitboxRadius = 60;
const minusXSpeed = -5;
let minusSpawnInterval = 100;
const minusValue = -3;
let minusXPosition = canvas.width;
let minusYPosition = randomBetween(0, canvas.height);
let minusTimeSinceLastSpawn = coinSpawnInterval;
let minus = [];


// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";