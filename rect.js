class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
        image(this.image, 1020, 490, 150,150);
    }
  };