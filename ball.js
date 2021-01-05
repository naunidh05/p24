//ellipse(pos.x,pos.y,this.r,this.r);


class Ball{
    constructor(x,y,r) {

var opt={
    isStatic:true
}
   this.body=Bodies.circle(x,y,r,opt);
   this.r=r;
   //this.height=height;
   World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    
    fill("green");
  // rect(pos.x,pos.y,this.width,this.height)
  ellipse(pos.x,pos.y,this.r,this.r);

}
}
