class Stone  {
 constructor(x,y,r){
     var options={
         isStatic=false,
         restitution=0,
         friction=1,
         density=1.2
     }
     this.x=x
     this.y=y
     this.r=r
     this.stoneimg=loadImage("stone.png")
     this.body = Bodies.circle(x,y,r,options);
      
      World.add(world, this.body);
 }
display(){
var pos=this.body.position
push ();
translate (pos.x,pos.y)
fill (255,0,255)
imageMode (CENTER)
ellipseMode (RADIUS)
image(this.stoneimg,0,0,this.r*2,this.r*2,)
pop ();

}

}















