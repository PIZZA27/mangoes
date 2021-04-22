class launcher{
constructor(body,anchor){
var options={
bodyA:body,
pointB:anchor,
stiffness=0.004,
length=1
}
this.bodyA=body
this.pointB=anchor
this.launcher1=Constraint.create(options)
World.add(world,this.launcher1)


}
fly(){
     this.launcher1.bodyA = null;
 }
 attach(body){
     this.launcher1.bodyA=body

  }
display(){
if(this.launcher1.bodyA){
     var pointA=this.bodyA.position
     var pointB=this.pointB
     strokeWeight(2)
     line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}
}