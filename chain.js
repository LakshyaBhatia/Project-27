class CHAIN{
    constructor(body1,body2, offsetX,offsetY) {

      this.offsetX=offsetX
      this.offsetY=offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
      }
      display(){
        var pointA = this.chain.body1.position;
        var pointB = this.chain.body2.position;

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
}