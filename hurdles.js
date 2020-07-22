class Hurdles{
    constructor(){
        this.sprites = [];
        this.sprite = 0;
        this.x = 1000;
        this.y = 400;

     
        for (var i = 0; i<6; i++){

            for (var k = 0; k<4; k++){

                var sprite = createSprite(displayWidth - this.x, displayHeight - this.y,20,20);
                this.sprites.push(sprite);
                this.y = this.y + 150;
            }
            this.y = 400;
            this.x = this.x - 400;
        }
    }


    display(){
         
       



        }

    check(){
        if (this.sprite.isTouching(pl1)){




        }


        
    }



}