class Snow{
    constructor(x,y,width){
      var options = { 
        density: 1, 
        friction: 0.5
      }
      //this.image = loadAnimation("snow4.webp","snow5.webp");
      this.body = Bodies.circle(x, y, width,options);
      this.width = width;
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position; 
      push(); 
      translate(pos.x, pos.y); 
      fill("white"); 
      ellipseMode(RADIUS); 
      ellipse(0, 0, this.width); 
      pop();
      //var position = this.body.position;
      //var angle = this.body.angle;
      //imageMode(CENTER);
      //image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}