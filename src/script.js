let player = document.querySelector('.player');
let pass = 5;

/*

this.addEventListener('keydown', (event) => {

    if(event.key == 'ArrowUp'){
        let playerY = getPlayerY(player);

        playerY -= pass;

        player.style.top = playerY;
    }

    if(event.key == 'ArrowDown'){
        let playerY = getPlayerY(player);

        playerY += pass;

        player.style.top = playerY;
    }

    if(event.key == 'ArrowLeft'){
        let playerX = getPlayerX(player);

        playerX -= pass;

        player.style.left = playerX;
    }

    if(event.key == 'ArrowRight'){
        let playerX = getPlayerX(player);

        playerX += pass;

        player.style.left = playerX;
    }

});

*/

setTimeout(() => {

    setInterval(() => {

        movePlayer(player);
        
    }, 100);
    
}, 3000);


function movePlayer(player){

    let playerX = getPlayerX(player);
    playerX += pass;
    player.style.left = playerX;

}

//  Recupera a posição do jogador no eixo X
function getPlayerX(player){
    let playerPosition = player.getBoundingClientRect();
    let playerX = playerPosition.left + window.scrollX;

    return playerX;
}

//  Recupera a posição do jogador no eixo Y
function getPlayerY(player){
    let playerPosition = player.getBoundingClientRect();
    let playerY = playerPosition.top + window.scrollY;

    return playerY;
}
