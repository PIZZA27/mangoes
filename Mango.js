class Mango{
    constructor(){
        var options={
            isStatic=true,
            restitution=0,
            friction=1
        }
     this.loadImage("sprites/mango.png")
   
     this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        image(this.mango,)
    }
}