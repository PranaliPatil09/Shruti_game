class monster{

constructor(x,y){

var options={
 restitution:0.5,
 friction:1.0,
 density:1.0,
 isStatic:true
}

this.body=Bodies.rectangle(x,y,50,50,options)
this.width=50;
this.height=50;

Matter.Body.setVelocity(this.body,{x:-10,y:0})

World.add(world,this.body);


}
display(){
 var pos=this.body.position;
 push();
 translate(pos.x,pos.y);
 fill("black");
 rectMode(CENTER);
 rect(0,0,this.width,this.height);
 pop();
}
}