class LAUNCHER{
     constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
      }
        
      
        this.pointB = pointB
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
}
attach(){

  this.stone.bodyA = body
}
fly(){
  this.stone.bodyA = null;
}

display(){
push();
strokWeight(48,22,8);
pop();

}
}
