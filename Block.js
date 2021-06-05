class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibility= 255
      this.blockImage=loadImage("block.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    score(){
      if(this.visibility<0 && this.visibility>-1005){
        score++
      }
    }
  
    display(){
      if(this.body.speed<6){

        var pos= this.body.position;
        imageMode(CENTER);
        image(this.blockImage, pos.x,pos.y,this.width, this.height);
      }
     else{
      
       World.remove(world,this.body)
       push()
       this.visibility= this.visibility-5
       tint(255, this.visibility)
       image(this.blockImage, pos.x,pos.y,this.width,this.height);
       pop()
     }
    }
}