class Monster{
    constructor(x, y, width, height, angle) {
     var options = {
           'isStatic': true
           
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       this.image=loadImage("images/Monster-01.png");
        World.add(world, this.body);
     
     }
     display(){
       var angle = this.body.angle;
     push();
        translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       rectMode(CENTER);
       rect(0, 0, this.width, this.height);
       imageMode(CENTER);
    image(this.image, 0,0,450, 350);
     pop();
     }
}