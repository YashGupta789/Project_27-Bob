class Roof{
    constructor(){
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(500,200,400,30,option);
        this.width=400;
        this.height=30;
        World.add(world,this.body);
        
    }
    display() {
        rectMode(CENTER);
        fill(46,217,80)
        rect(440,200,380,30);
    }
}