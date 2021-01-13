class Bob{
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:1,
            density:0.8
        }
        this.body=Bodies.circle(x,y,30,option);
        this.radius=30;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill(176,174,172);
        ellipse(this.body.position.x,this.body.position.y,70,70);
    }
}