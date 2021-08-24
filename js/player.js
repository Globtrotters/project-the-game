const playerImg = document.createElement('img');
playerImg.src = 'images/ironman-fly--removebg-preview.png';//ADD IMAGE

class Player {
    constructor(canvasContext, positionX, positionY){
this.ctx = canvasContext
this.image = playerImg,
this.x = positionX,
this.y = positionY,
this.width = 80,
this.height = 120
    }

    draw() {
        this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }
};

