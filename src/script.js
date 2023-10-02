//  Variables
let bg = document.querySelector('.bg');
let field = document.querySelector('.field');
let rightBorder = document.querySelector('.right-border');
let leftBorder = document.querySelector('.left-border');
let topBorder = document.querySelector('.top-border');
let bottomBorder = document.querySelector('.bottom-border');
let step = 1;

window.onload = function(){

    insertBorder();
    createPlayer();
    
}

    setTimeout(() => {
        
        let player = getPlayer();
        let playerX = getPlayerX(player);
        let playerY = getPlayerY(player);

        setInterval(() => {

            playerX += step;
            playerY += step;

            //player.style.left = playerX + 'px';
            //player.style.top = playerY + 'px';
            
        }, 100);
        
    }, 1000);



//  Functions
function insertBorder(){

    for (let index = 1; index <= 10; index++) {

        let img = document.createElement('img');

        img.setAttribute('src','assets/img/bush.jpg');
        img.setAttribute('width','32px');
        img.setAttribute('height','32px');

        topBorder.append(img);
    }

    for (let index = 1; index <= 4; index++) {

        let img = document.createElement('img');

        img.setAttribute('src','assets/img/bush.jpg');
        img.setAttribute('width','32px');
        img.setAttribute('height','32px');

        leftBorder.append(img);
        
    }

    for (let index = 1; index <= 4; index++) {

        let img = document.createElement('img');

        img.setAttribute('src','assets/img/bush.jpg');
        img.setAttribute('width','32px');
        img.setAttribute('height','32px');

        rightBorder.append(img);
        
    }

    for (let index = 1; index <=10; index++) {

        let img = document.createElement('img');

        img.setAttribute('src','assets/img/bush.jpg');
        img.setAttribute('width','32px');
        img.setAttribute('height','32px');

        bottomBorder.append(img);
    }

}

function createPlayer(){

    let player = document.createElement('div');
    let divs = document.createElement('div');

    divs.classList.add('player-divs', 'd-flex');
    player.classList.add('player');

    for (let index = 1; index <= 5; index++) {

        let div = document.createElement('div');
        div.classList.add('player-div');

        divs.append(div)

        player.append(divs);
        
    }

    field.append(player);

}

function stopGame(playerX, playerY){

}

function getRightBorder(){
    let border = rightBorder.getBoundingClientRect();

    return border;
}

function getPlayer(){
    let player = document.querySelector('.player-divs');

    return player;
}

function getPlayerX(player){
    let playerPosition = player.getBoundingClientRect();
    let playerX = playerPosition.left + window.scrollX;

    return playerX;
}

function getPlayerY(player){
    let playerPosition = player.getBoundingClientRect();
    let playerY = playerPosition.top + window.scrollY;

    return playerY;
}

