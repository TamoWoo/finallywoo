class PaperClass{
constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.image = loadImage("paper.png");
    this.r = r;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x, this.y, (this.r - 20)/2, options);
    World.add(world, this.body);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(255,0  ,255);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
}
};
