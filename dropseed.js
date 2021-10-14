class DropSeed{
    constructor(x,y){
        this.xposition = x;
        this.yposition = y;
        this.dropseed
}
drop(){
    this.dropseed.visible = false;
this.dropseed.velocityY = 2;
}
display(){
 dropseed=createSprite(this.xposition,this.yposition,20,20);
 dropseed.addImage("seed",seed_image);
 dropseed.scale = 0.1;
 dropseed.visible = false;

}

}