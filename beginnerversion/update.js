// execute the update function every frame
function update() {
    
    fillCanvas("rgb(179, 217, 255)");

    drawImage(
    baggrundimage,
    canvas.width/2, 
    canvas.height/2,
    canvas.width, 
    canvas.height,


    ); 
    // for every cloud
    for(let cloud of clouds) {
        // draw the cloud
        drawImage(
            cloudImage,
            cloud.xPosition,
            cloud.yPosition,
            cloudImage.width,
            cloudImage.height
        );
        // update the x position of the cloud
        cloud.xPosition += cloudXSpeed;
        // remove cloud if it moves beyond the destruction point
        if(cloud.xPosition < destructionXPosition) {
            clouds = clouds.remove(cloud);
        }

    }
    // spawn a new cloud when the it is time
    cloudTimeSinceLastSpawn += timeSinceLastFrame;
    if(cloudTimeSinceLastSpawn>cloudSpawnInterval) {
        clouds.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height/2), 
        });
        cloudTimeSinceLastSpawn = 0;
    }    

     //draw Minus
     drawImage(
        minusImage,
        minusXPosition,
        minusYPosition,
        minusImage.width,
        minusImage.height
    );
    minusXPosition += coinXSpeed;

        // keep Minus to the right in menu

if (gameState == "menu") {
    minusXPosition = spawnXPosition;
}

// respawn Minus when it falls off screen
if(minusXPosition < -100 && gameState == "action") {
    minusXPosition = spawnXPosition;
    minusYPosition = randomBetween(0, canvas.height);

}

// check if the Minus and the bird collide
if(theseCirclesCollide(
birdXPosition,
birdYPosition,
birdHitboxRadius,
minusXPosition,
minusYPosition,
minusHitboxRadius
) && gameState == "action")

{ // if they do, decrease the score and respawn minus
    minussound.play();
    scoreValue += minusValue;
    minusXPosition = spawnXPosition;
    minusYPosition = randomBetween(0, canvas.height);
}


    // draw the bird image
    drawImage(birdImage,
        birdXPosition,
        birdYPosition,
        birdImage.width,
        birdImage.height
    );

    // draw the bird hitbox if debugmode is on
    if(debugModeIsOn) {
        drawCircle(
            birdXPosition, 
            birdYPosition, 
            birdHitboxRadius, 
            hitboxColor
        );
    }

    // update the bird movement
    birdYSpeed += birdYAccelleration;
    birdYPosition += birdYSpeed;

    if (gameState == "action") {
        // end the game if the bird touches the canvas edge
        if(canvas.height < birdYPosition || birdYPosition < 0) {
            gameOverSound.play();
            birdCanFlap = false;
            gameState = "gameover";
        }
    }

    // for each coin
    for(let coin of coins) {
        // draw the coin
        drawImage(coinImage,
            coin.xPosition,
            coin.yPosition,
            coinImage.width,
            coinImage.height
        );

        if(debugModeIsOn) {
            drawCircle(
                coin.xPosition, 
                coin.yPosition, 
                coinHitboxRadius, 
                hitboxColor
            );
        }

        // move the coin
        coin.xPosition += coinXSpeed;


        if(gameState == "action") {
            // check if the coins collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                coin.xPosition,
                coin.yPosition,
                coinHitboxRadius
            )) 
            { // if they do, increase the score
                coinSound.play();
                scoreValue += coinValue;
                coins = coins.remove(coin);
            }
        }

         // remove coin if it goes off the screen
         if(coin.xPosition < destructionXPosition) {
            coins = coins.remove(coin);
        }
    }

    // spawn new coins
    if(gameState == "action" &&
    coinTimeSinceLastSpawn>coinSpawnInterval) {
        coins.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        coinTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        coinTimeSinceLastSpawn += timeSinceLastFrame;
    }
    
        
        



    // for each fireball
    for(let fireball of fireballs) {
        // draw the fireball
        drawImage(fireballImage,
            fireball.xPosition,
            fireball.yPosition,
            fireballImage.width,
            fireballImage.height
        );

        if(debugModeIsOn) { // draw the hotbox
            drawCircle(
                fireball.xPosition, 
                fireball.yPosition, 
                fireballHitboxRadius, 
                hitboxColor
            );
        }

        // move the fireball
        fireball.xPosition += fireballXSpeed;

        // remove fireball if it goes off the screen
        if(fireball.xPosition < destructionXPosition) {
            fireballs = fireballs.remove(fireball);
        }

        if(gameState == "action") {
            // check if the fireballs collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                fireball.xPosition,
                fireball.yPosition,
                fireballHitboxRadius
            )) 
            { // if they do, end the game
                birdCanFlap = false;
                gameOverSound.play();
                gameState = "gameover";
            }
        }
    }

    // spawn new sværd
    if(gameState == "action" &&
    sværdTimeSinceLastSpawn>sværdSpawnInterval) {
        sværds.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        sværdTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        sværdTimeSinceLastSpawn += timeSinceLastFrame;
    }


 // for each sværd
 for(let sværd of sværds){ 
    // draw the fireball
    drawImage(sværdImage,
        sværd.xPosition,
        sværd.yPosition,
        sværdImage.width,
        sværdImage.height
    );

    if(debugModeIsOn) { // draw the hotbox
        drawCircle(
            sværd.xPosition, 
            sværd.yPosition, 
            sværdHitboxRadius, 
            hitboxColor
        );
    }

    // move the fireball
    sværd.xPosition += sværdXSpeed;

    // remove fireball if it goes off the screen
    if(sværd.xPosition < destructionXPosition) {
        sværds = sværds.remove(sværd);
    }

    if(gameState == "action") {
        // check if the fireball collides with the bird
        if(theseCirclesCollide(
            birdXPosition,
            birdYPosition,
            birdHitboxRadius,
            sværd.xPosition,
            sværd.yPosition,
            sværdHitboxRadius
        )) 
        { // if they do, end the game
            birdCanFlap = false;
            gameOverSound.play();
            gameState = "gameover";
        }
    }
}

// spawn new fireballs
if(gameState == "action" &&
fireballTimeSinceLastSpawn>fireballSpawnInterval) {
    fireballs.push({
        xPosition: spawnXPosition,
        yPosition: randomBetween(0, canvas.height)
    });
    fireballTimeSinceLastSpawn = 0;
}

if(gameState == "action") {
    fireballTimeSinceLastSpawn += timeSinceLastFrame;
}




    //draw the scoreboard
    drawImage(
        scoreImage,
        scoreImageXPosition,
        scoreImageYPosition,
        scoreImage.width,
        scoreImage.height
    );
    drawText(
        "x"+ scoreValue,
        scoreTextXPosition,
        scoreTextYPosition,
        scoreTextSize,
        scoreTextColor
    );

    // draw the menu text
    if(gameState == "menu") {
        drawText (
            menuFirstText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(gameState == "action" && birdYAccelleration == 0) {
        drawText (
            menuSecondText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    // draw the game over text
    if(gameState == "gameover") {
        drawText (
            gameOverText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(debugModeIsOn) {
        drawText(
            "timeSinceLastFrame: " + timeSinceLastFrame,
            canvas.width/2,
            20,
            12,
            "black"
        );
    }

    // update timeSinceLastFrame and draw next frame
    timeOfCurrentFrame = new Date().getTime();
    timeSinceLastFrame = timeOfCurrentFrame - timeOfLastFrame;
    timeOfLastFrame = timeOfCurrentFrame;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

