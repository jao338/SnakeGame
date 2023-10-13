let player = document.querySelector('.player');
let border = document.querySelector('.borda');
let borderX = getBorderX(border);
let step = 15;
let distX = 0;

setTimeout(() => {

    setInterval(() => {

        movePlayer(player, border);
        
    }, 100);
    
}, 3000);

function movePlayer(player){

    let a = getPlayerX(player);

    if(verifyGame(a, borderX)){

        let playerX = getPlayerX(player);
        playerX += step;
        distX += step;

        console.log(borderX);
        //console.log(distX);
        
        player.style.left = playerX;

    }else{
        alert('Algo deu errado');
    }
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

function getBorderX(border){

    return (border.clientWidth + 4) / 2;
}

function verifyGame(a, b){
    
    if(a != b){
        return true;
    }else{
        return false;
    }

}
