class Ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.widh = width; 
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    rect(pos.x, pos.y,width,height - 655);
    }
  };